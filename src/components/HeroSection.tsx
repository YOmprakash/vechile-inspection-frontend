'use client';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Car, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`pt-24 pb-16 min-h-screen flex items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black' : 'bg-gradient-to-br from-gc-white via-gc-frost-blue to-gc-ice-blue'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gc-dark-blue'}`}>
                Book Your Vehicle Inspection{' '}
                <span className="text-gc-sunset-orange">in Minutes</span>
              </h1>
              <p className={`text-xl leading-relaxed max-w-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gc-medium-gray'}`}>
                Professional vehicle inspections made simple. Get certified inspectors, digital reports, and transparent pricing - all in one platform.
              </p>
            </div>
            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-gc-green w-5 h-5" />
                <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gc-medium-gray'}`}>Certified Inspectors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-gc-sky-blue w-5 h-5" />
                <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gc-medium-gray'}`}>Quick Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="text-gc-sunset-orange w-5 h-5" />
                <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gc-medium-gray'}`}>All Vehicle Types</span>
              </div>
            </div>
            <div className="pt-4">
              <Link href="/inspection-form" >
                <Button size="lg" className="bg-gradient-to-r from-gc-red-primary to-gc-sunset-orange text-white px-8 py-4 text-lg font-semibold rounded-md shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Create Inspection
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <Image
              width={600}
              height={400}
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