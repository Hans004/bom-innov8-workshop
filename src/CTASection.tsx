import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-400 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-400/20"></div>

            <AnimatedBackground />

            <div className="relative container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
                    Workshop Complete!
                </h2>
                <p className="text-xl mb-8 text-slate-300 max-w-3xl mx-auto animate-fade-in delay-300">
                    Thank you for your participation. Your feedback is crucial for improving future collaborations.
                </p>

                <div className="animate-fade-in delay-500">
                    <h3 className="text-2xl font-bold mb-8 text-blue-300">
                        Please scan the QR code to share your feedback
                    </h3>

                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* Sample QR Code */}
                        <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                            <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center">
                                {/* Sample QR Code Pattern */}
                                <svg width="240" height="240" viewBox="0 0 240 240" className="border-2 border-gray-200 rounded">
                                    {/* QR Code pattern simulation */}
                                    <rect width="240" height="240" fill="white"/>

                                    {/* Corner squares */}
                                    <rect x="0" y="0" width="70" height="70" fill="black"/>
                                    <rect x="10" y="10" width="50" height="50" fill="white"/>
                                    <rect x="20" y="20" width="30" height="30" fill="black"/>

                                    <rect x="170" y="0" width="70" height="70" fill="black"/>
                                    <rect x="180" y="10" width="50" height="50" fill="white"/>
                                    <rect x="190" y="20" width="30" height="30" fill="black"/>

                                    <rect x="0" y="170" width="70" height="70" fill="black"/>
                                    <rect x="10" y="180" width="50" height="50" fill="white"/>
                                    <rect x="20" y="190" width="30" height="30" fill="black"/>

                                    {/* Random pattern to simulate QR data */}
                                    {[...Array(20)].map((_, i) => (
                                        <g key={i}>
                                            <rect x={80 + (i % 8) * 10} y={20 + Math.floor(i / 8) * 10} width="8" height="8" fill={Math.random() > 0.5 ? "black" : "white"}/>
                                            <rect x={20 + (i % 8) * 10} y={80 + Math.floor(i / 8) * 10} width="8" height="8" fill={Math.random() > 0.5 ? "black" : "white"}/>
                                            <rect x={100 + (i % 10) * 10} y={100 + Math.floor(i / 10) * 10} width="8" height="8" fill={Math.random() > 0.5 ? "black" : "white"}/>
                                        </g>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-slate-300 mb-4">
                                Or visit directly:
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                                <span className="text-blue-300 font-mono">forms.office.com/workshop-feedback</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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