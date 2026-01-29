import React from 'react';
import { PlayCircle, Play, Volume2, Settings, Minimize, MessageCircle } from 'lucide-react';

const Canvas = ({ template }) => {
    return (
        <main className="flex-1 flex flex-col relative bg-background-dark overflow-hidden h-full">
            {/* Canvas Area */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2f1b1c] to-[#120809]">
                <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/10 group">
                    {/* Main Video Content */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{ backgroundImage: `url("${template.image}")` }}
                    ></div>

                    {/* Overlay Elements (The Template) - Specific to this template example */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-end items-start bg-gradient-to-t from-black/80 via-transparent to-transparent">
                        <div className="border-l-4 border-primary pl-6 mb-4">
                            <h1 className="text-6xl font-black text-white uppercase tracking-tighter drop-shadow-lg font-display">Class of <span className="text-primary">2026</span></h1>
                            <p className="text-2xl font-medium text-white/90 mt-2">High School Graduation</p>
                        </div>
                    </div>

                    {/* Frame Overlay Indicator */}
                    <div className="absolute inset-4 border border-dashed border-white/30 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-end p-2">
                        <span className="text-[10px] font-mono text-white/50 bg-black/50 px-1 rounded">SAFE ZONE</span>
                    </div>

                    {/* Centered Play Button (Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                        <button className="bg-primary/90 text-white rounded-full p-4 hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                            <Play size={36} fill="currentColor" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Timeline/Controls Footer */}
            <div className="h-24 bg-surface-darker border-t border-white/10 flex items-center px-6 gap-6 shrink-0">
                <button className="text-white hover:text-primary transition-colors">
                    <PlayCircle size={32} fill="currentColor" />
                </button>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-mono text-white/50">
                        <span>00:14:02</span>
                        <span>01:30:00</span>
                    </div>
                    {/* Custom Range Slider styled as timeline */}
                    <div className="relative w-full h-8 flex items-center group cursor-pointer">
                        {/* Track */}
                        <div className="absolute w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[35%]"></div>
                        </div>
                        {/* Scrubber Handle */}
                        <div className="absolute left-[35%] w-4 h-4 bg-white rounded-full shadow border-2 border-primary transform -translate-x-1/2 hover:scale-125 transition-transform"></div>
                        {/* Markers */}
                        <div className="absolute top-5 left-[20%] w-0.5 h-2 bg-white/20"></div>
                        <div className="absolute top-5 left-[50%] w-0.5 h-2 bg-white/20"></div>
                        <div className="absolute top-5 left-[80%] w-0.5 h-2 bg-white/20"></div>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                    <button className="hover:text-white"><Volume2 size={24} /></button>
                    <button className="hover:text-white"><Settings size={24} /></button>
                    <button className="hover:text-white"><Minimize size={24} /></button>
                </div>
            </div>

            {/* Support FAB */}
            <button className="absolute bottom-32 right-8 bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/30 hover:scale-110 transition-transform z-30">
                <MessageCircle size={24} />
            </button>
        </main>
    );
};

export default Canvas;
