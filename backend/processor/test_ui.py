import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext
import threading
import sys
from video_compositor import FFCompositor

class CompositorTesterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("ReFrame Video Compositor Tester")
        self.root.geometry("600x550")
        self.root.configure(bg="#221011")

        self.compositor = FFCompositor()
        
        # Styles
        self.label_style = {"bg": "#221011", "fg": "white", "font": ("Segoe UI", 10)}
        self.btn_style = {"bg": "#ec131e", "fg": "white", "font": ("Segoe UI", 10, "bold"), "bd": 0, "padx": 20, "pady": 5}
        self.entry_style = {"bg": "#2f1b1c", "fg": "white", "insertbackground": "white", "bd": 1, "relief": "flat"}

        # Variables
        self.main_video_path = tk.StringVar()
        self.overlay_path = tk.StringVar()
        self.output_path = tk.StringVar(value="output_test.mp4")

        # Main Video Selection
        tk.Label(root, text="Main Video:", **self.label_style).pack(anchor="w", padx=20, pady=(20, 5))
        self.create_file_input(self.main_video_path, mode="single")

        # Overlay Video Selection
        tk.Label(root, text="Overlay Loops (Select Multiple):", **self.label_style).pack(anchor="w", padx=20, pady=(15, 5))
        self.create_file_input(self.overlay_path, mode="multi")
        
        # Output Selection
        tk.Label(root, text="Output File:", **self.label_style).pack(anchor="w", padx=20, pady=(15, 5))
        self.create_file_input(self.output_path, mode="save")

        # Options
        self.use_nvenc = tk.BooleanVar(value=True)
        tk.Checkbutton(root, text="Use NVENC (Hardware Acceleration)", variable=self.use_nvenc, 
                       bg="#221011", fg="white", selectcolor="#2f1b1c", activebackground="#221011", activeforeground="white").pack(anchor="w", padx=20, pady=15)

        # Process Button
        tk.Button(root, text="RUN COMPOSITOR", command=self.run_process, **self.btn_style).pack(pady=10)

        # Logs
        tk.Label(root, text="Logs:", **self.label_style).pack(anchor="w", padx=20, pady=(10, 5))
        self.log_area = scrolledtext.ScrolledText(root, height=10, bg="#120809", fg="#00ff00", font=("Consolas", 9))
        self.log_area.pack(fill="both", expand=True, padx=20, pady=(0, 20))

    def create_file_input(self, text_var, mode="single"):
        frame = tk.Frame(self.root, bg="#221011")
        frame.pack(fill="x", padx=20)
        
        entry = tk.Entry(frame, textvariable=text_var, **self.entry_style)
        entry.pack(side="left", fill="x", expand=True, ipady=5)
        
        if mode == "save":
            btn_cmd = lambda: self.browse_save(text_var)
        elif mode == "multi":
            btn_cmd = lambda: self.browse_file(text_var, multiple=True)
        else: # "single"
            btn_cmd = lambda: self.browse_file(text_var, multiple=False)
            
        tk.Button(frame, text="Browse", command=btn_cmd, bg="#444", fg="white", bd=0).pack(side="right", padx=(5, 0))

    def browse_file(self, text_var, multiple=False):
        if multiple:
            filenames = filedialog.askopenfilenames(parent=self.root, filetypes=[("Video files", "*.mp4 *.mov *.webm *.avi")])
            if filenames:
                text_var.set(" | ".join(filenames))
        else:
            filename = filedialog.askopenfilename(parent=self.root, filetypes=[("Video files", "*.mp4 *.mov *.webm *.avi")])
            if filename:
                text_var.set(filename)

    def browse_save(self, text_var):
        filename = filedialog.asksaveasfilename(parent=self.root, defaultextension=".mp4", filetypes=[("MP4 files", "*.mp4")])
        if filename:
            text_var.set(filename)

    def log(self, message):
        self.log_area.insert(tk.END, message + "\n")
        self.log_area.see(tk.END)

    def run_process(self):
        main = self.main_video_path.get()
        overlays_str = self.overlay_path.get()
        out = self.output_path.get()
        nvenc = self.use_nvenc.get()

        if not main or not overlays_str or not out:
            messagebox.showerror("Error", "Please select all files.")
            return

        overlays = [p.strip() for p in overlays_str.split("|")]

        self.log(f"Starting process...\nMain: {main}\nOverlays: {len(overlays)} files\nNVENC: {nvenc}")
        
        # Run in thread to not freeze UI
        threading.Thread(target=self._execute_backend, args=(main, overlays, out, nvenc), daemon=True).start()

    def _execute_backend(self, main, overlays, out, nvenc):
        try:
            result_path = self.compositor.overlay_videos(
                main_video_path=main,
                overlay_paths=overlays,
                output_path=out,
                use_nvenc=nvenc
            )
            self.root.after(0, lambda: self.log(f"SUCCESS! Saved to: {result_path}"))
            self.root.after(0, lambda: messagebox.showinfo("Success", "Video processed successfully!"))
        except Exception as e:
            self.root.after(0, lambda: self.log(f"ERROR: {str(e)}"))
            self.root.after(0, lambda: messagebox.showerror("Processing Failed", str(e)))

if __name__ == "__main__":
    try:
        root = tk.Tk()
        app = CompositorTesterApp(root)
        root.mainloop()
    except Exception as e:
        print(f"Failed to start GUI: {e}")
