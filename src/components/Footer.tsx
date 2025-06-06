'use client';
import { useTheme } from "./ThemeProvider";
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const { theme } = useTheme();

    // Define colors based on theme for better readability
    const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gc-dark-blue';
    const primaryTextColor = theme === 'dark' ? 'text-gray-200' : 'text-white';
    const secondaryTextColor = theme === 'dark' ? 'text-gray-400' : 'text-blue-200';
    const accentColor = 'text-gc-turquoise'; // This color works well on both themes

    return (
        <footer className={`${bgColor} ${primaryTextColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className={`text-2xl font-bold mb-4`}>Zenith<span className={accentColor}> Check</span></div>
                        <p className={`${secondaryTextColor} mb-6 leading-relaxed`}>
                            Professional vehicle inspections made simple. Trust our certified inspectors for comprehensive, reliable vehicle assessments.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Vehicle Inspections</li>
                            <li className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Inspection Report</li>
                            <li className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Inspector Onboarding</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Home</a></li>
                            <li><a href="#" className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>How it Works</a></li>
                            <li><a href="#" className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className={`w-5 h-5 ${accentColor}`} />
                                <span className={secondaryTextColor}>zenithcheck.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className={`w-5 h-5 ${accentColor}`} />
                                <span className={secondaryTextColor}>1800000000</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className={`w-5 h-5 ${accentColor}`} />
                                <span className={secondaryTextColor}>Andhra Pradesh, India</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className={`${secondaryTextColor} text-sm mb-4 md:mb-0`}>© 2024 Zenith Check. All rights reserved.</div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Privacy Policy</a>
                            <a href="#" className={`${secondaryTextColor} hover:${primaryTextColor} transition-colors`}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;