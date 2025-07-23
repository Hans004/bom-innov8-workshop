import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-400 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-400/20"></div>

            <AnimatedBackground />

            <div className="relative container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
                        Workshop Voting & Feedback
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in delay-500">
                    {/* left Side - Top 3 Action Items Voting */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-3xl font-bold mb-8 text-green-300">
                            Top 3 Action Items - Voting
                        </h3>

                        <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mb-6">
                            <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center">
                                <img
                                    src="/voting-qr.jpeg"
                                    alt="Top 3 Action Items Voting QR Code"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-slate-300 mb-4">
                                Or visit directly:
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                                <a
                                    href="https://forms.office.com/r/kznwFXwR1u"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-300 font-mono hover:text-green-200 transition-colors"
                                >
                                    forms.office.com/r/kznwFXwR1u
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-sm">
                            <h4 className="font-bold text-lg mb-2 text-green-300">Vote on Action Items</h4>
                            <p className="text-slate-300 text-sm">Help prioritize the top 3 action items for bridging academia-industry skill gaps</p>
                        </div>
                    </div>
                    {/* right Side - Workshop Feedback */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-3xl font-bold mb-8 text-sky-300">
                            Workshop Feedback
                        </h3>

                        <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mb-6">
                            <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center">
                                <img
                                    src="/feedback-qr.jpeg"
                                    alt="Workshop Feedback QR Code"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-slate-300 mb-4">
                                Or visit directly:
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                                <a
                                    href="https://forms.office.com/r/gAsunSuhHf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-300 font-mono hover:text-sky-200 transition-colors"
                                >
                                    forms.office.com/r/gAsunSuhHf
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-sm">
                            <h4 className="font-bold text-lg mb-2 text-sky-300">Share Your Experience</h4>
                            <p className="text-slate-300 text-sm">Rate the workshop quality, content relevance, and share suggestions for improvement</p>
                        </div>
                    </div>


                </div>

                {/* Bottom Section - Additional Info */}
                <div className="mt-16 text-center animate-fade-in delay-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="font-bold text-lg mb-2 text-blue-300">Workshop Experience</h4>
                            <p className="text-slate-300 text-sm">Rate the overall quality and organization</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="font-bold text-lg mb-2 text-sky-300">Content Relevance</h4>
                            <p className="text-slate-300 text-sm">How relevant was the content to your needs</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h4 className="font-bold text-lg mb-2 text-green-300">Future Suggestions</h4>
                            <p className="text-slate-300 text-sm">Ideas for improving future workshops</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;