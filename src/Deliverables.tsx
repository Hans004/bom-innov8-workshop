import React from 'react';

const Deliverables = () => {
    const deliverables = [
        "Identify key pain points in current skills landscape",
        "Define top 3 action items for the next 3 months",
        "Establish KPIs to monitor progress and success"
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-ping delay-1000 opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                            Expected Deliverables
                        </h2>
                        <p className="text-xl text-slate-600">
                            Concrete outcomes from our collaborative breakout sessions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {deliverables.map((deliverable, index) => (
                            <div key={index} className="group">
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:scale-105">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                        <span className="font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">{deliverable}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;