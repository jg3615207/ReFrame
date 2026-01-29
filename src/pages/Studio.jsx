import React from 'react';
import { Camera, Share, Undo, Redo, ChevronLeft } from 'lucide-react';
import AssetSidebar from '../components/AssetSidebar';
import Canvas from '../components/Canvas';
import SettingsSidebar from '../components/SettingsSidebar';

const Studio = ({ template, onBack }) => {
    return (
        <div className="flex flex-col h-screen bg-background-dark text-white font-display overflow-hidden">
            {/* Studio Header - Overrides default Header for more maximizing space */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-surface-darker px-6 py-3 shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="text-white/60 hover:text-white transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="size-8 text-primary flex items-center justify-center">
                        <Camera className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">LifeLens</h2>
                        <p className="text-white/60 text-xs font-medium">{template.title}</p>
                    </div>
                </div>

                {/* Center Actions */}
                <div className="hidden md:flex gap-6 text-sm font-medium text-white/60">
                    <button className="hover:text-white transition-colors flex items-center gap-2">
                        <Undo size={18} /> Undo
                    </button>
                    <button className="hover:text-white transition-colors flex items-center gap-2">
                        <Redo size={18} /> Redo
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-colors">
                        <Share size={18} className="mr-2" /> Share
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-9 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                        Export Video
                    </button>
                    <div className="w-[1px] h-8 bg-white/10 mx-1"></div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-white/10 cursor-pointer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCp_5HPxwuUCW8xyID3EZfVALH8amDLxsx0XpRAStuNJaGtttVGFj57i0VOHfm3Ak3QF8UnqlY11FierZUp65IxsPBHpmHg1y3zNCudvMOmh3BlZrOG0ml7x7DDg-C-Tm6lhu_T-0gD_4I-mYm1fhJd4xhZNc0d8k9GupmpsEyKENGDMiDVQKoprrwNIcdVxNol9qyTUJHxHHlsG_sboVio2EifD0zWy-FWNssk5TEf9q9-Nu9hyoIZiBaB4BoHbxRlSrpQmyjUKVP")' }}></div>
                </div>
            </header>

            {/* Main Workspace */}
            <div className="flex flex-1 overflow-hidden relative">
                <AssetSidebar />
                <Canvas template={template} />
                <SettingsSidebar />
            </div>
        </div>
    );
};

export default Studio;
