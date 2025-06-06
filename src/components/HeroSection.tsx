import { Button } from '@/components/ui/button';
import { Car, CheckCircle, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gc-white via-gc-frost-blue to-gc-ice-blue min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gc-dark-blue leading-tight">
                Book Your Vehicle Inspection{' '}
                <span className="text-gc-sky-blue">in Minutes</span>
              </h1>
              <p className="text-xl text-gc-medium-gray leading-relaxed max-w-xl">
                Professional vehicle inspections made simple. Get certified inspectors, digital reports, and transparent pricing - all in one platform.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gc-green w-5 h-5" />
                <span className="text-gc-medium-gray font-medium">Certified Inspectors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-gc-sky-blue w-5 h-5" />
                <span className="text-gc-medium-gray font-medium">Quick Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="text-gc-sunset-orange w-5 h-5" />
                <span className="text-gc-medium-gray font-medium">All Vehicle Types</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gc-sky-blue to-gc-turquoise hover:from-gc-blue hover:to-gc-green text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Create Order
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img 
                src='/assets/Car-Inspection-Services.jpg'
                alt="Professional Vehicle Inspection"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
