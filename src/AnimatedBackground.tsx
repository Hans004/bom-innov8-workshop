import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                    }}
                />
            ))}

            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>

            {/* Moving lines */}
            <div className="absolute inset-0">
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse left-1/4"></div>
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse right-1/3" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse top-1/3"></div>
            </div>
        </div>
    );
};

export default AnimatedBackground;