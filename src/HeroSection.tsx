import React from 'react';
import { Clock, Users, Calendar, MapPin } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-400 to-slate-900 text-white min-h-screen flex items-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-400/20"></div>

            <AnimatedBackground />

            <div className="relative container mx-auto px-4 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Logo Section */}
                    <div className="mb-8 animate-fade-in">
                        <img
                            src="/img.png"
                            alt="Bank of Mauritius Innov8 Logo"
                            className="mx-auto h-40 md:h-60 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-xl"
                        />
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 animate-fade-in">
                        <Calendar className="w-5 h-5 text-blue-300" />
                        <span className="text-blue-100">Bank Of Mauritius Innov8 Workshop 2025</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-sky-200 bg-clip-text text-transparent animate-fade-in-up">
                        Bridging the Future
                    </h1>
                    <br/>

                    <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed animate-fade-in-up delay-300">
                        University-Industry Collaboration Workshop on Talent Gaps in the field of FinTech
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                            <Clock className="w-6 h-6 text-blue-300" />
                            <div className="text-left">
                                <div className="font-semibold">Duration</div>
                                <div className="text-slate-300">3 Hours</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                            <Users className="w-6 h-6 text-sky-300" />
                            <div className="text-left">
                                <div className="font-semibold">Participants</div>
                                <div className="text-slate-300">Universities & Industry Stakeholders</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                            <MapPin className="w-6 h-6 text-green-300" />
                            <div className="text-left">
                                <div className="font-semibold">Format</div>
                                <div className="text-slate-300">Interactive Workshop</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </section>
    );
};

export default HeroSection;