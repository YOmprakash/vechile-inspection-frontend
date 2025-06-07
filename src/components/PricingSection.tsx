'use client';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const PricingSection = () => {
    const { theme } = useTheme();
    const plans = [
        { name: "Basic Inspection", price: "149", description: "Perfect for individual car owners", features: ["Comprehensive vehicle inspection", "Digital report with photos", "Basic vehicle history check", "Email support", "2-day turnaround"], buttonText: "Choose Basic", popular: false },
        { name: "Premium Inspection", price: "249", description: "Best for dealerships and fleet owners", features: ["Everything in Basic", "Detailed mechanical analysis", "Priority scheduling", "24/7 phone support", "Same-day turnaround", "Extended warranty check", "Market value assessment"], buttonText: "Choose Premium", popular: true }
    ];

    return (
        <section id="pricing" className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gc-snow'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gc-dark-blue'}`}>Simple, Transparent Pricing</h2>
                    <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>Choose the inspection package that fits your needs</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border-2 ${theme === 'dark' ? (plan.popular ? 'bg-gray-900 border-gc-sky-blue' : 'bg-gray-900 border-gray-700') : (plan.popular ? 'bg-white border-gc-sky-blue' : 'bg-white border-gc-light-gray-1')}`}>
                            {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-gradient-to-r from-gc-sky-blue to-gc-turquoise text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span></div>}
                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gc-dark-blue'}`}>{plan.name}</h3>
                                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>{plan.description}</p>
                                <div className="flex items-center justify-center">
                                    <span className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gc-dark-blue'}`}>${plan.price}</span>
                                    <span className={`ml-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>per inspection</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-3">
                                        <Check className={`w-5 h-5 ${theme === 'dark' ? 'text-green-400' : 'text-gc-green'}`} />
                                        <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href='/inspection-form'>
                                <Button className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-gc-sky-blue to-gc-turquoise hover:opacity-90 text-white shadow-lg' : (theme === 'dark' ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gc-mist-gray text-gc-dark-blue hover:bg-gc-light-gray-1')}`}>
                                    {plan.buttonText}
                                </Button>
                            </Link>

                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gc-medium-gray'}`}>
                        Need a custom solution? <a href="#contact" className={`font-medium hover:underline ${theme === 'dark' ? 'text-sky-400' : 'text-gc-sky-blue'}`}>Contact our sales team</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default PricingSection;