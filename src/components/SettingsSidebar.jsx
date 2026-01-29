import React from 'react';
import { Type, Palette, Calendar, RefreshCw } from 'lucide-react';

const SettingsSidebar = () => {
    return (
        <aside className="w-80 flex flex-col border-l border-white/10 bg-surface-darker shrink-0 overflow-y-auto z-10 h-full hide-scrollbar">
            <div className="p-6 border-b border-white/10">
                <h3 className="text-white font-bold text-lg">Customize Template</h3>
                <p className="text-white/50 text-xs mt-1">Edit the details for your video.</p>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-8">
                {/* Section 1 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Type size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Intro Text</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-white/70">Main Title</label>
                            <input
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-white/20"
                                placeholder="e.g. Happy Birthday"
                                type="text"
                                defaultValue="Class of 2026"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-white/70">Subtitle</label>
                            <input
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-white/20"
                                placeholder="e.g. Sarah's 21st"
                                type="text"
                                defaultValue="High School Graduation"
                            />
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-white/5"></div>

                {/* Section 2 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Palette size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Appearance</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-white/70">Theme Color</label>
                            <div className="flex gap-2">
                                <div className="size-8 rounded-full bg-primary border-2 border-white cursor-pointer shadow-lg"></div>
                                <div className="size-8 rounded-full bg-blue-500 border border-transparent hover:border-white/50 cursor-pointer"></div>
                                <div className="size-8 rounded-full bg-emerald-500 border border-transparent hover:border-white/50 cursor-pointer"></div>
                                <div className="size-8 rounded-full bg-purple-500 border border-transparent hover:border-white/50 cursor-pointer"></div>
                                <button className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white/50 hover:text-white transition-colors">
                                    <span className="text-lg">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-white/70">Font Style</label>
                            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                                <option>Modern Sans (Default)</option>
                                <option>Elegant Serif</option>
                                <option>Handwritten</option>
                                <option>Bold Impact</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-white/5"></div>

                {/* Section 3 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Calendar size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">Date & Time</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-white/70">Event Date</label>
                        <div className="relative">
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                type="text"
                                defaultValue="May 24, 2026"
                            />
                            <Calendar size={18} className="absolute left-3 top-2.5 text-white/40" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-white/5 mt-auto">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/10 transition-all group">
                    <RefreshCw size={18} className="group-hover:rotate-180 transition-transform" />
                    Regenerate Preview
                </button>
            </div>
        </aside>
    );
};

export default SettingsSidebar;
