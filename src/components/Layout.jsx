import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
