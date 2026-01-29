import React from 'react';
import { Camera, Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e8eb] dark:border-b-white/10 bg-background-light dark:bg-background-dark px-6 py-4 lg:px-10">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                <div className="size-8 text-primary flex items-center justify-center">
                    <Camera className="w-8 h-8" />
                </div>
                <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">ReFrame</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                    <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Home</a>
                    <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">My Projects</a>
                    <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Pricing</a>
                </div>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-white/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOjaLvgpC-QgbzYhGgTysj5CK2u7_6P14EpgD6N_dp-ImCI6GY1Qf_r8Wr6BK5Tgk1iEWoMdJyopzqSj2ukYyVa3LBqsaXJZPb_mns4zlpneCtFffCTXfoeiaTPB5HVfKPoYxstiCHPYV13e1dwengEwZO8TiO1q4JCFuxiIWUxdy29K4QT3TAw1g0ixHco9j2rjZMoR6do722rqaQX3sy8tB00YEg0KLm40PAZfL6ev87K7K-5D_8wE8QEnkA3nbewrFydDhAEFYA")' }}></div>
            </div>
        </header>
    );
};

export default Header;
