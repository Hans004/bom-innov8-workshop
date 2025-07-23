import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const FocusAreas = () => {
    const keyAreas = [
        {
            title: "Technical Skills Gap",
            description: "Addressing specific technical competencies missing in the current workforce",
            icon: <Target className="w-8 h-8" />
        },
        {
            title: "Critical Soft Skills",
            description: "Developing essential interpersonal and leadership capabilities",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Recruitment Challenges",
            description: "Overcoming barriers in finding and hiring qualified talent",
            icon: <TrendingUp className="w-8 h-8" />
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 animate-bounce delay-1000" style={{ animationDuration: '5s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                        Workshop Focus Areas
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Addressing critical gaps between academic preparation and industry requirements
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {keyAreas.map((area, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    {area.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-800">{area.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusAreas;