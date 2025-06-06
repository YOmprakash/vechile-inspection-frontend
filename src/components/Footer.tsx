import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gc-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Zenith<span className="text-gc-turquoise"> Check</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Professional vehicle inspections made simple. Trust our certified inspectors for comprehensive, reliable vehicle assessments.
            </p>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-blue-200 hover:text-white transition-colors duration-200">Vehicle Inspections</li>
              <li className="text-blue-200 hover:text-white transition-colors duration-200">Inspection Report</li>
              <li className="text-blue-200 hover:text-white transition-colors duration-200">Inspector Onboarding</li>
              <li className="text-blue-200 hover:text-white transition-colors duration-200">Customer Order Tracking</li>
              <li className="text-blue-200 hover:text-white transition-colors duration-200">Secure Online Payments</li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">How it Works</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Why WhyChooseUs</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Become Inspector</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">zenithcheck.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">1800000000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 InspectSwift. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;