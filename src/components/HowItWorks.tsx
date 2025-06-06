'use client';
import { useTheme } from './ThemeProvider';
import { Calendar, UserCheck, FileText } from 'lucide-react';

const HowItWorks = () => {
    const { theme } = useTheme();
    const steps = [
        { icon: Calendar, title: "Book Order", description: "Schedule your inspection in just a few clicks. Choose your preferred time and location.", color: "bg-gradient-to-br from-gc-sky-blue to-blue-500", shadow: "shadow-blue-500/30" },
        { icon: UserCheck, title: "Get Inspector Assigned", description: "We assign a certified inspector to your vehicle based on location and expertise.", color: "bg-gradient-to-br from-gc-green to-teal-500", shadow: "shadow-teal-500/30" },
        { icon: FileText, title: "Get Digital Report", description: "Receive a comprehensive digital report with photos and detailed findings.", color: "bg-gradient-to-br from-gc-sunset-orange to-orange-500", shadow: "shadow-orange-500/30" }
    ];

    return (
        <section id="how-it-works" className={`py-24 relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-slate-50'}`}>
            <div aria-hidden="true" className="absolute inset-0 z-0">
                {theme === 'dark' ? (
                    <>
                        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute top-24 -right-24 w-72 h-72 bg-green-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 -left-32 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    </>
                )}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gc-dark-blue'}`}>How It Works</h2>
                    <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>Get your vehicle inspected in three simple steps</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className={`hidden md:block absolute top-12 left-0 w-full h-0.5 z-0 opacity-70 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-200 via-teal-200 to-orange-200'}`}></div>
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10">
                            <div className={`p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${theme === 'dark' ? 'bg-gray-900/60 backdrop-blur-lg border border-gray-700/80 shadow-2xl' : 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl'}`}>
                                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg ${step.shadow}`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-center">
                                    <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gc-dark-blue'}`}>{step.title}</h3>
                                    <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>{step.description}</p>
                                </div>
                                <div className={`absolute -top-4 -right-4 ${step.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${step.shadow}`}>
                                    {index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;