'use client'
import { useTheme } from './ThemeProvider';
import { Shield, Clock, Award, Globe, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const { theme } = useTheme();
    const benefits = [
        { icon: Shield, title: "Trusted & Secure", description: "Bank-level security with encrypted data and secure payments.", gradient: "from-blue-500 to-cyan-400", shadow: "shadow-cyan-500/30" },
        { icon: Clock, title: "Fast Turnaround", description: "Get your inspection scheduled within 2 hours.", gradient: "from-fuchsia-500 to-pink-500", shadow: "shadow-fuchsia-500/30" },
        { icon: Award, title: "Certified Inspectors", description: "All inspectors are certified and background checked.", gradient: "from-teal-500 to-green-400", shadow: "shadow-teal-500/30" },
        { icon: Globe, title: "Nationwide Coverage", description: "Available in all major cities across the country.", gradient: "from-violet-500 to-purple-500", shadow: "shadow-violet-500/30" },
        { icon: Users, title: "10K+ Happy Customers", description: "Join our growing community of satisfied customers.", gradient: "from-orange-500 to-amber-400", shadow: "shadow-orange-500/30" },
        { icon: Zap, title: "Digital Reports", description: "Instant digital reports with photos and detailed analysis.", gradient: "from-sky-400 to-cyan-300", shadow: "shadow-sky-500/30" }
    ];

    return (
        <section id="why-choose-us" className={`py-24 relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-slate-100'}`}>
            <div aria-hidden="true" className="absolute inset-0 z-0">
                {theme === 'dark' ? (
                     <>
                        <div className="absolute top-10 -left-24 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute bottom-10 -right-24 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                     </>
                ) : (
                    <div style={{ backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>
                )}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        Why Choose <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Zenith Check?</span>
                    </h2>
                    <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Experience the future of vehicle inspections with our cutting-edge platform.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="w-full h-full">
                            <div className={`p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${theme === 'dark' ? 'bg-gray-900/60 backdrop-blur-lg border border-gray-700/80 shadow-2xl' : 'bg-white border border-gray-200/80 shadow-lg hover:shadow-2xl'}`}>
                                <div className={`bg-gradient-to-br ${benefit.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${benefit.shadow}`}>
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{benefit.title}</h3>
                                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WhyChooseUs;