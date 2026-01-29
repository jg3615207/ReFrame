import os
import subprocess
import json
import logging
from typing import Optional, Dict, Any, Tuple
from pathlib import Path

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FFCompositor:
    """
    A production-ready video compositing engine designed for ReFrame.
    Leverages FFmpeg and NVIDIA NVENC for high-performance video overlaying.
    """

    def __init__(self, ffmpeg_path: str = "ffmpeg", ffprobe_path: str = "ffprobe"):
        """
        Initialize the VideoCompositor.

        Args:
            ffmpeg_path (str): Path to the ffmpeg executable. Defaults to 'ffmpeg' (system PATH).
            ffprobe_path (str): Path to the ffprobe executable. Defaults to 'ffprobe' (system PATH).
        """
        self.ffmpeg_path = ffmpeg_path
        self.ffprobe_path = ffprobe_path
        self._check_dependencies()

    def _check_dependencies(self):
        """Verify that FFmpeg and FFprobe are accessible."""
        try:
            subprocess.run([self.ffmpeg_path, "-version"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            subprocess.run([self.ffprobe_path, "-version"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except (subprocess.CalledProcessError, FileNotFoundError):
            raise RuntimeError(f"FFmpeg or FFprobe not found. Please ensure they are installed and in your PATH.")

    def get_video_info(self, file_path: str) -> Dict[str, Any]:
        """
        Retrieve video metadata using ffprobe.

        Args:
            file_path (str): Path to the video file.

        Returns:
            Dict[str, Any]: Dictionary containing video stream information (width, height, duration).
        """
        cmd = [
            self.ffprobe_path,
            "-v", "error",
            "-select_streams", "v:0",
            "-show_entries", "stream=width,height,duration,r_frame_rate",
            "-of", "json",
            file_path
        ]
        
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            data = json.loads(result.stdout)
            if not data.get("streams"):
                raise ValueError(f"No video stream found in {file_path}")
            return data["streams"][0]
        except subprocess.CalledProcessError as e:
            logger.error(f"FFprobe failed for {file_path}: {e.stderr}")
            raise

    def overlay_videos(
        self,
        main_video_path: str,
        overlay_paths: list[str],
        output_path: str,
        use_nvenc: bool = True,
        preset: str = "p4",
        crf: Optional[int] = None
    ) -> str:
        """
        Composites multiple transparent overlay loops on top of a main video.
        
        Logic:
        1. Loops all overlays indefinitely.
        2. Scales main_video to fill the first overlay's dimensions.
        3. Stacks overlays sequentially.
        4. Trims output to main_video duration.

        Args:
            main_video_path (str): Path to main content.
            overlay_paths (list[str]): List of paths to overlay files (bottom to top).
            output_path (str): Path to save output.
            use_nvenc (bool): Use Hardware Acceleration.
        """
        if not os.path.exists(main_video_path):
            raise FileNotFoundError(f"Main video not found: {main_video_path}")
        if not overlay_paths:
            raise ValueError("At least one overlay path is required")
        
        for p in overlay_paths:
            if not os.path.exists(p):
                raise FileNotFoundError(f"Overlay video not found: {p}")

        # Get Dimensions from FIRST overlay
        try:
            first_overlay = overlay_paths[0]
            overlay_info = self.get_video_info(first_overlay)
            ov_w = int(overlay_info.get("width", 1920))
            ov_h = int(overlay_info.get("height", 1080))
        except Exception as e:
            logger.error(f"Failed to get overlay info: {e}")
            raise

        # Build Command
        cmd = [self.ffmpeg_path, "-y"]

        # Input 0: Main Video
        cmd.extend(["-i", main_video_path])

        # Inputs 1..N: Overlays
        for ov_path in overlay_paths:
            # -stream_loop -1 must be applied to each overlay input
            # Removed -c:v png to allow auto-detection (ProRes, VP9, etc.)
            cmd.extend(["-stream_loop", "-1", "-i", ov_path])

        # Construct Filter Complex
        # [0:v] scale/crop -> [base]
        filter_chain = [
            f"[0:v]scale={ov_w}:{ov_h}:force_original_aspect_ratio=increase,"
            f"crop={ov_w}:{ov_h},setsar=1[v_base]"
        ]
        
        last_stream = "[v_base]"
        
        # Apply Overlays sequentially
        for i in range(len(overlay_paths)):
            # Input index for this overlay is i + 1 (since 0 is main)
            input_idx = i + 1
            next_stream = f"[v_out_{i}]" if i < len(overlay_paths) - 1 else "[outv]"
            
            # overlay filter
            filter_chain.append(
                f"{last_stream}[{input_idx}:v]overlay=shortest=1:format=auto{next_stream}"
            )
            last_stream = next_stream

        cmd.extend(["-filter_complex", ";".join(filter_chain)])
        cmd.extend(["-map", "[outv]"])
        cmd.extend(["-map", "0:a?"]) # Audio from main

        # Encoding Options
        if use_nvenc:
            logger.info("Using NVENC H.264 Encoder")
            cmd.extend([
                "-c:v", "h264_nvenc",
                "-preset", preset,
                "-rc", "vbr",
                "-cq", "19",
                "-b:v", "0",
                "-pix_fmt", "yuv420p"
            ])
        else:
            logger.info("Using CPU libx264 Encoder")
            cmd.extend([
                "-c:v", "libx264",
                "-preset", "medium",
                "-crf", "23",
                "-pix_fmt", "yuv420p"
            ])

        cmd.extend(["-c:a", "aac", "-b:a", "192k"])
        cmd.append(output_path)

        logger.info(f"Executing command: {' '.join(cmd)}")
        try:
            subprocess.run(cmd, check=True)
            return output_path
        except subprocess.CalledProcessError as e:
            logger.error(f"FFmpeg encoding failed: {e}")
            raise

if __name__ == "__main__":
    # Example Usage
    compositor = FFCompositor()
    
    # Create dummy files for testing if needed, or point to real paths
    main = "input_main.mp4"
    overlay = "input_overlay.mov"
    out = "output_comp.mp4"
    
    print(f"FFCompositor initialized. Usage example:\n"
          f"compositor.overlay_videos('{main}', '{overlay}', '{out}')")
