import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';
import { ArrowLeft, TrendingUp, Users, Target, Brain, Shield, Code, BookOpen, Briefcase } from 'lucide-react';

type AnimatedChartContainerProps = {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    icon: React.ElementType;
    delay?: number;
};

// Animated Background Component (same as main app)
const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        </div>
    );
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current; // ⬅️ ✅ Capture the current DOM element

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return [ref, isVisible] as const;
};


// Animated Chart Container
const AnimatedChartContainer = ({
                                    children,
                                    title,
                                    subtitle,
                                    icon: Icon,
                                    delay = 0,
                                }: AnimatedChartContainerProps) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`bg-white rounded-2xl p-8 shadow-xl border border-slate-200 transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
                    {subtitle && <p className="text-slate-600">{subtitle}</p>}
                </div>
            </div>
            {children}
        </div>
    );
};

// Navigation Bar
const NavigationBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Workshop</span>
                </Link>
                <div className="text-center">
                    <h1 className="text-xl font-bold text-slate-800">Survey Insights Dashboard</h1>
                    <p className="text-sm text-slate-600">Workshop on Talent Gap Analysis 2025</p>
                </div>
                <div className="w-32"></div>
            </div>
        </nav>
    );
};

// Survey Insights Dashboard Component
const SurveyInsightsDashboard = () => {
    // Process the survey data for visualizations
    const processDomainsData = () => {
        const domains = {
            'Artificial Intelligence (AL)': 25,
            'Blockchain and Distributed Ledger Technology (DLT)': 16,
            'Cybersecurity': 20,
            'Data Science': 13,
            'Machine Learning (ML)': 11,
            'Mobile and digital payment': 16,
            'Cloud computing': 10,
            'Regulatory and Compliance Knowledge': 15,
            'Use of API (Application Programming Interface)': 10,
            'Open Banking': 9,
            'Robotics and Process Automation': 9,
            'Virtual Assets': 12,
            'Smart Contracts': 10
        };

        return Object.entries(domains)
            .map(([name, count]) => ({ name: name.replace(' (AL)', '').replace(' (DLT)', '').replace(' (ML)', ''), count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);
    };

    const processSoftSkillsData = () => {
        return [
            { name: 'Critical thinking', count: 21, percentage: 31.8 },
            { name: 'Problem-solving', count: 15, percentage: 22.7 },
            { name: 'Project management', count: 15, percentage: 22.7 },
            { name: 'Communication skills', count: 10, percentage: 15.2 },
            { name: 'Work ethic', count: 3, percentage: 4.5 },
            { name: 'Interpersonal skills', count: 2, percentage: 3 }
        ];
    };

    const processTechnicalSkillsData = () => {
        return [
            { name: 'Understanding of Legislative and Regulatory', count: 19 },
            { name: 'Blockchain development', count: 16 },
            { name: 'Cybersecurity framework', count: 17 },
            { name: 'Data Analysis and Visualisation', count: 17 },
            { name: 'Machine Learning (ML)', count: 14 },
            { name: 'Cloud platform', count: 10 },
            { name: 'Python programming', count: 6 },
            { name: 'R Programming', count: 5},
            { name: 'UI/UX design', count: 7 }
        ];
    };

    const processGraduatePreparednessData = () => {
        return [
            { name: 'Well prepared', count: 7, percentage: 58 },
            { name: 'Minimally prepared', count: 4, percentage: 42 }
        ];
    };

    const processCollaborationInitiatives = () => {
        return [
            { name: 'Co-designed curricula', count: 27 },
            { name: 'Industry internship programs', count: 29 },
            { name: 'Real-world project-based learning', count: 23 },
            { name: 'Promoting online learning platforms', count: 12 },
            { name: 'Guest lectures from industry', count: 22 },
            { name: 'Short-term certification programs', count: 20 },
            { name: 'Establishing formal partnerships', count: 12 },
            { name: 'Providing Mentorship', count: 14 },
            { name: 'Upskilling courses', count: 22 },
            { name: 'Joint Workshops & Hackathons', count: 23 },
            { name: 'Collaborative Research', count: 29 }
        ];
    };

    const processInstitutionTypeData = () => {
        return [
            { name: 'Banks', count: 25, percentage: 62.5 },
            { name: 'Universities', count: 12, percentage: 30 },
            { name: 'Regulatory Bodies', count: 2, percentage: 5 },
            { name: 'Insurance', count: 1, percentage: 2.5 }
        ];
    };

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#84CC16'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          
          .chart-bar {
            transition: all 0.3s ease;
          }
          
          .chart-bar:hover {
            opacity: 0.8;
            transform: scale(1.02);
          }
        `}</style>

            <NavigationBar/>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24 pb-16">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <AnimatedBackground />

                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                            <TrendingUp className="w-5 h-5 text-blue-300" />
                            <span className="text-blue-100">Survey Results Analysis</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                            Key Insights
                        </h1>

                        <p className="text-xl text-slate-300 mb-8">
                            Comprehensive analysis of talent gaps and collaboration opportunities in FinTech sector
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-blue-300 mb-2">40+</div>
                                <div className="text-slate-300">Survey Responses</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-purple-300 mb-2">13</div>
                                <div className="text-slate-300">Key Domains Analyzed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-green-300 mb-2">25+</div>
                                <div className="text-slate-300">Financial Institutions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 space-y-16">

                {/* Graduate Preparedness */}
                <AnimatedChartContainer
                    title="Graduate Preparedness for FinTech Careers"
                    subtitle="To what extent are graduates equipped with required skills?"
                    icon={BookOpen}
                    delay={800}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={processGraduatePreparednessData()}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="count"
                                    label={({ name, percentage }) => `${percentage}%`}
                                >
                                    <Cell fill="#10B981" />
                                    <Cell fill="#EF4444" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span className="font-medium text-slate-700">Well prepared</span>
                                <span className="text-slate-500">(58%)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                <span className="font-medium text-slate-700">Minimally prepared</span>
                                <span className="text-slate-500">(42%)</span>
                            </div>
                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-yellow-800 text-sm">
                                    <strong>Key Insight:</strong> While most universities report graduates as well-prepared,
                                    there's still a significant gap that needs addressing through enhanced collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedChartContainer>

                {/* Domains Requiring Attention */}
                <AnimatedChartContainer
                    title="Industry perspective on domains requiring greatest attention"
                    subtitle="Which domains require the greatest attention within institutions?"
                    icon={Target}
                    delay={200}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={processDomainsData()} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                angle={-45}
                                textAnchor="end"
                                height={100}
                                interval={0}
                            />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Bar
                                dataKey="count"
                                fill="url(#gradient1)"
                                className="chart-bar"
                                radius={[4, 4, 0, 0]}
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </AnimatedChartContainer>

                {/* Survey Participants */}
                <AnimatedChartContainer
                    title="Survey Participants Distribution"
                    subtitle="Breakdown of respondents by institution type"
                    icon={Users}
                    delay={0}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={processInstitutionTypeData()}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="count"
                                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                                >
                                    {processInstitutionTypeData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="space-y-4">
                            {processInstitutionTypeData().map((item, index) => (
                                <div key={item.name} className="flex items-center gap-3">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: colors[index % colors.length] }}
                                    ></div>
                                    <span className="font-medium text-slate-700">{item.name}</span>
                                    <span className="text-slate-500">({item.count} responses)</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedChartContainer>

                {/* Technical Skills Gap */}
                <AnimatedChartContainer
                    title="Industry perspective on technical competencies in short supply among job applicants"
                    subtitle="Which specific technical skills are currently lacking?"
                    icon={Code}
                    delay={600}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={processTechnicalSkillsData()}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                angle={-45}
                                textAnchor="end"
                                height={120}
                                interval={0}
                            />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Bar
                                dataKey="count"
                                fill="url(#gradient3)"
                                className="chart-bar"
                                radius={[4, 4, 0, 0]}
                            />
                            <defs>
                                <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#F59E0B" />
                                    <stop offset="100%" stopColor="#EF4444" />
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </AnimatedChartContainer>

                {/* Soft Skills Gap */}
                <AnimatedChartContainer
                    title="Industry perspective on interpersonal/professional attributes missing within FinTech sector"
                    subtitle="Which soft skills are often missing in new hires?"
                    icon={Brain}
                    delay={400}
                >
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart
                            data={processSoftSkillsData()}
                            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} stroke="#64748b" height={100} />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <Bar
                                dataKey="count"
                                fill="url(#gradient2)"
                                className="chart-bar"
                                radius={[4, 4, 0, 0]}
                            />
                            <defs>
                                <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10B981" />
                                    <stop offset="100%" stopColor="#06B6D4" />
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </AnimatedChartContainer>

                {/* Collaboration Initiatives */}
                <AnimatedChartContainer
                    title="Most Effective Industry-Academia Collaboration Initiatives"
                    subtitle="Which initiatives could enhance collaboration between industry and academic institutions?"
                    icon={Briefcase}
                    delay={1000}
                >
                    <ResponsiveContainer width="100%" height={450}>
                        <BarChart data={processCollaborationInitiatives()} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                stroke="#64748b"
                                angle={-45}
                                textAnchor="end"
                                height={120}
                                interval={0}
                            />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Bar
                                dataKey="count"
                                fill="url(#gradient4)"
                                className="chart-bar"
                                radius={[4, 4, 0, 0]}
                            />
                            <defs>
                                <linearGradient id="gradient4" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </AnimatedChartContainer>

                {/* Key Insights Summary */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white rounded-3xl p-12 relative overflow-hidden">
                    <AnimatedBackground />
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-8 text-center">Key Takeaways</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Shield className="w-12 h-12 text-blue-300 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Top Priority Domains</h3>
                                <p className="text-slate-300">AI, Cybersecurity, and Blockchain are the most critical areas requiring immediate attention.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Brain className="w-12 h-12 text-purple-300 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Critical Soft Skills</h3>
                                <p className="text-slate-300">Critical thinking and problem-solving skills are the most lacking among new hires.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Briefcase className="w-12 h-12 text-green-300 mb-4" />
                                <h3 className="text-xl font-bold mb-3">Collaboration Focus</h3>
                                <p className="text-slate-300">Co-designed curricula and industry internships are the most desired collaboration initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyInsightsDashboard;