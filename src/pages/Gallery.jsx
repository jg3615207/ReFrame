import React, { useState } from 'react';
import { Search } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import CategoryTabs from '../components/CategoryTabs';
import templates from '../data/templates'; // Placeholder data

const Gallery = ({ onNavigate }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTemplates = activeCategory === "All"
        ? templates
        : templates.filter(t => t.category.includes(activeCategory));

    return (
        <div className="flex flex-col flex-1 px-4 md:px-10 lg:px-40 py-8 max-w-[1600px] mx-auto w-full">
            {/* Hero Section */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between mb-8">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        Capture Every Moment
                    </h1>
                    <p className="text-[#637588] dark:text-[#c99294] text-lg font-normal leading-normal">
                        Turn memories into masterpieces with our festive video templates. From weddings to corporate events, find the perfect frame.
                    </p>
                </div>
                <div className="w-full md:w-auto md:min-w-[400px]">
                    <label className="flex flex-col h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-[#dce0e5] dark:border-white/10 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                            <div className="text-[#637588] dark:text-[#c99294] flex bg-white dark:bg-input-dark items-center justify-center pl-4 rounded-l-xl">
                                <Search size={24} />
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 bg-white dark:bg-input-dark placeholder:text-[#637588] dark:placeholder:text-[#c99294] px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
                                placeholder="Find festive frames..."
                            />
                        </div>
                    </label>
                </div>
            </div>

            <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {filteredTemplates.map((template) => (
                    <VideoCard
                        key={template.id}
                        {...template}
                        onPreview={() => onNavigate('studio', template)}
                    />
                ))}
            </div>

            <div className="flex justify-center mb-8">
                <button className="bg-white dark:bg-card-dark text-[#111418] dark:text-white border border-[#dce0e5] dark:border-white/10 px-8 py-3 rounded-full font-medium hover:bg-[#f0f2f4] dark:hover:bg-white/10 transition-colors">
                    Load More Templates
                </button>
            </div>
        </div>
    );
};

export default Gallery;
