import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gc-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Inspect<span className="text-gc-turquoise">Swift</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Professional vehicle inspections made simple. Trust our certified inspectors for comprehensive, reliable vehicle assessments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gc-turquoise transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gc-turquoise transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gc-turquoise transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gc-turquoise transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Vehicle Inspections</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Fleet Management</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Pre-Purchase Inspections</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Insurance Inspections</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Damage Assessments</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Partners</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Press Kit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">hello@inspectswift.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">1-800-INSPECT</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gc-turquoise" />
                <span className="text-blue-200">San Francisco, CA</span>
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