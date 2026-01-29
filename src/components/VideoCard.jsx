import React from 'react';
import { PlayCircle, Star, Monitor, Clock } from 'lucide-react';

const VideoCard = ({ title, category, duration, image, isPro, onPreview }) => {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer" onClick={onPreview}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm dark:shadow-none border border-transparent dark:border-white/5">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-primary/90 text-white px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                        <PlayCircle size={18} /> Preview
                    </div>
                </div>

                {isPro && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <Star size={14} fill="currentColor" /> Pro (AE)
                    </div>
                )}

                {!isPro && (
                    <div className="absolute top-2 right-2 bg-green-500/90 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        Free
                    </div>
                )}

                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock size={12} /> {duration}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-start">
                    <p className="text-[#111418] dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">{title}</p>
                    <Monitor size={18} className="text-[#637588] dark:text-[#c99294]" />
                </div>
                <p className="text-[#637588] dark:text-[#c99294] text-sm font-normal leading-normal mt-0.5">{category}</p>
            </div>
        </div>
    );
};

export default VideoCard;
