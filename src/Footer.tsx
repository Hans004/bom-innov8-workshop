import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-pink-500 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative">
                <p className="text-slate-400 mb-4">
                    Bank of Mauritius Innovation Hub Workshop 2025
                </p>
                <p className="text-slate-500 text-sm">
                    “Bridging talent gaps in Fintech”
                </p>
            </div>
        </footer>
    );
};

export default Footer;