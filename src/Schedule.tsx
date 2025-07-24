import React from 'react';
import { Users, MessageSquare, TrendingUp, BarChart3, Coffee, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Schedule = () => {
    const scheduleItems = [
        {
            time: "13h00 – 13h15",
            title: "Registration & Networking",
            description: "Welcome reception and participant registration",
            icon: <Users className="w-6 h-6" />,
            color: "bg-gradient-to-r from-blue-500 to-purple-600"
        },
        {
            time: "13h15 – 13h30",
            title: "Opening Remarks & Keynote Address",
            description: "Workshop introduction and objectives",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "bg-gradient-to-r from-purple-600 to-pink-600"
        },
        {
            time: "13h30 – 13h45",
            title: "Survey Insights Presentation",
            description: "Key findings on technical skills, soft skills, recruitment challenges, and productivity impact",
            icon: <BarChart3 className="w-6 h-6" />,
            color: "bg-gradient-to-r from-red-500 to-orange-500"
        },
        {
            time: "13h45 – 14h00",
            title: "Coffee Break",
            description: "Networking and refreshments",
            icon: <Coffee className="w-6 h-6" />,
            color: "bg-gradient-to-r from-orange-500 to-yellow-500"
        },
        {
            time: "14h00 – 14h45",
            title: "Breakout Sessions",
            description: "3 groups of stakeholders and university representatives working on solutions",
            icon: <Target className="w-6 h-6" />,
            color: "bg-gradient-to-r from-yellow-500 to-green-500"
        },
        {
            time: "14h45 – 15h30",
            title: "Group Presentations",
            description: "Each group presents top 3 action items and related KPIs",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "bg-gradient-to-r from-green-500 to-teal-500"
        },
        {
            time: "15h30 – 15h45",
            title: "Priority Voting",
            description: "Online voting to select top 3 priority actions",
            icon: <CheckCircle className="w-6 h-6" />,
            color: "bg-gradient-to-r from-teal-500 to-cyan-500"
        },
        {
            time: "15h45 – 16h00",
            title: "Concluding Remarks",
            description: "Summary and way forward",
            icon: <ArrowRight className="w-6 h-6" />,
            color: "bg-gradient-to-r from-cyan-500 to-blue-500"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-blue-300 to-purple-300 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-gradient-to-b from-purple-300 to-pink-300 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                        Workshop Schedule
                    </h2>
                    <p className="text-xl text-slate-600">
                        A carefully structured 3-hour intensive workshop
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className="group relative mb-8 last:mb-0">
                            <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:scale-102">
                                <div className="flex items-center gap-4 lg:w-64 flex-shrink-0">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl text-white ${item.color} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div className="font-bold text-slate-800 text-lg">{item.time}</div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
