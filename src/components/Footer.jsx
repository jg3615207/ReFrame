import React from 'react';
import { Camera } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-solid border-[#e6e8eb] dark:border-white/10 bg-white dark:bg-background-dark py-8 px-10">
            <div className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="size-6 text-primary flex items-center justify-center">
                        <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-[#111418] dark:text-white font-bold text-lg">ReFrame</span>
                </div>
                <div className="flex gap-8 flex-wrap justify-center">
                    <a className="text-[#637588] dark:text-[#c99294] text-sm hover:text-primary transition-colors cursor-pointer">Support</a>
                    <a className="text-[#637588] dark:text-[#c99294] text-sm hover:text-primary transition-colors cursor-pointer">Terms of Service</a>
                    <a className="text-[#637588] dark:text-[#c99294] text-sm hover:text-primary transition-colors cursor-pointer">Privacy Policy</a>
                    <a className="text-[#637588] dark:text-[#c99294] text-sm hover:text-primary transition-colors cursor-pointer">Socials</a>
                </div>
                <p className="text-[#637588] dark:text-[#c99294] text-sm">© 2024 ReFrame Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
