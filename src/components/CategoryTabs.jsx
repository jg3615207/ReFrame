import React from 'react';

const categories = ["All", "Wedding", "CNY", "Travel", "Graduation", "Birthday", "Baby Shower", "Corporate"];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
    return (
        <div className="mb-8 overflow-x-auto hide-scrollbar">
            <div className="flex gap-3 pb-2 min-w-max">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`group flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-transform active:scale-95 ${activeCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-white dark:bg-card-dark border border-[#dce0e5] dark:border-white/10 text-[#111418] dark:text-white hover:bg-[#f0f2f4] dark:hover:bg-white/10'
                            }`}
                    >
                        <span className="text-sm font-medium leading-normal">{category}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;
