import React from 'react';
import { CloudUpload, Plus, Video } from 'lucide-react';

const assets = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8xFr38zj51YR3WmozWTdnZcoooRikldL1VFjn4cGcVITeE3TxDp8qBzETPbkqo-DJekS2Sm9EP-rm9s7TzqRXa0FWVSeiBxoLxYrOewvpxhhbT4-V61-wNaWAQR0NLiGZxQvCFxa6kzHjTUJ-K-6505uiSBIYM88GEYzxpAzFzN1WIE4bQ_doJpTiohYRfmmTk0CRwH-SekzLLsK4zw9VeNiTuxcYyVch-N2MwvM5weDoNPl4KgEEouZaoSgJPLxKiKML1V8KUX-E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDNSFnWlX3TOEdXRqBbTKh-UxqESMRaYKobMcVemZtjaUnqeGUc8_iQoaV2QoINzy8sgXYyfiigV6_8PSVRjLsvtFzc-9MwO43kUZcHIXGygjs7PBma4uGqEeKs97RnMN_v2m_J8iu_tKbFjEjlr6MlvzCrJUWTa6CxhHuBjpUa2JGGK23IKAp8qYG2lSgKYKFLW21HcO6rqcTo_Lgu4l486tU7kQytK9WTnhrahKUYPhC4d39z7cQMGOsNTEX8Y3ebqM_Vw-MVegL9",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9bjicBsApiP0Ib3vHCCNpVIX759v5LFLs4Gzs-0wxHQGXHUPtkcpvHzUw4ppxGkdiUpa52f8GjiPleV2Q5vqXnlAAYw7Cw8bdjPvefALCIU7iu02J5glzIqnAg_rXA7DkmGtZ70aNVTPcScvLDGKfZUaCHnRQLWs_vUWeXTWehBq_lFU3mxIMCJEH7LH90Ek9hYBUADNMdJO8U5rhGi8fULF-Lqu18A5VJET6jvQt9-gRVmbUqi6AepHHcp7BMXgnx2dsdc-7nVGe",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2bT6iqcgzdfNnM8OOJ15_h47Ysi8IdXONPpXTF8np1mHczPBQ_CsUJi-zihFp0Hl5kPJPPfJihJTpzawFv1OlQScHNDtG0Qg0DH4cs7OyveQGpNSz2bcGhxnogbtBs6XWWe50LSX6FitEX8j2r14LKYoigN4rUSsDo8O-NCMgTVy2rc-HIPK95eO5CsAY0BgZI7A9l6BwokUhCXUCV-thmNpZGke5AiUHnJeiG-5Q4GU3s7smMqc2RV8mGPPR6AnMN5da-QSY5ksW",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAin6PalhDMaRNiXl39lexsq9PXl5XVQzgpkxjbQHBFc-T7ZwKDmfZq6wZ3pKYk-Q_E6Mrm6ZZZggtq9uRfk1ay2pJiGsNaR9EfJmbKxqmLUwkIHuXXaB4euTituu2IWvnd5Hmtw-B4DEnkZuh-PN6RQKFDKSglddJcMMq4t4yRNc3RxPuBdMUMz613nahaxZx60U6QbTuPJqUaQiqkZIPpRxXWfhfcjTsYp6-Qk6vVUEvLofRH_e1HVI68NAPgmuZVlFt3-zTNxZJ6",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDD3PD42p6nlSTAqflpMw4ym9aOG2UFfnwr2japFaz8QMITWYNeCUn8PMTDvlIEc5mWZk7FwdSw6fgoRiQepaHbAWlAxaNVavFsTZ-R47ZDLqratWWlknZfYjelWFs3jQvNmx0hXiiSp5a8zhByHL_WR4LyWEgkp07rvlteDV7DQHQ9e-FrPAqiJV8ebBpqnn5qwq0pDbo5ei9qZ9BOFuZky6xYsEmidayAUsCZs6RpmZAV5YiJNQxkru6VhfvLA4rD-ru7XJbco5ht"
];

const AssetSidebar = () => {
    return (
        <aside className="w-80 flex flex-col border-r border-white/10 bg-surface-darker shrink-0 z-10 h-full">
            {/* Tabs */}
            <div className="flex border-b border-white/10 px-2 shrink-0">
                <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-primary text-white py-4 px-2 hover:bg-white/5 transition-colors">
                    <p className="text-sm font-bold tracking-[0.015em]">Uploads</p>
                </button>
                <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/50 py-4 px-2 hover:text-white hover:bg-white/5 transition-colors">
                    <p className="text-sm font-bold tracking-[0.015em]">Stock</p>
                </button>
                <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent text-white/50 py-4 px-2 hover:text-white hover:bg-white/5 transition-colors">
                    <p className="text-sm font-bold tracking-[0.015em]">Music</p>
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 hide-scrollbar">
                {/* Upload Zone */}
                <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-white/10 bg-white/5 px-4 py-8 hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="size-12 rounded-full bg-surface-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CloudUpload className="text-primary text-2xl" />
                    </div>
                    <div className="text-center">
                        <p className="text-white text-sm font-bold">Click to upload</p>
                        <p className="text-white/40 text-xs mt-1">or drag and drop files</p>
                    </div>
                </div>

                {/* Asset Grid */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white/60">Your Media</h3>
                        <button className="text-primary text-xs font-bold hover:underline">Select All</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {assets.map((src, index) => (
                            <div key={index} className="aspect-square rounded-lg bg-cover bg-center relative group cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all" style={{ backgroundImage: `url("${src}")` }}>
                                {index === 1 || index === 5 ? (
                                    <div className="absolute top-1 right-1 bg-black/60 rounded px-1.5 py-0.5 text-[10px] text-white font-medium flex items-center gap-1">
                                        <Video size={10} /> {index === 1 ? '0:12' : '0:08'}
                                    </div>
                                ) : null}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Plus className="text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AssetSidebar;
