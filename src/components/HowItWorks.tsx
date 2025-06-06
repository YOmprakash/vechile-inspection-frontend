
'use client';
import { Calendar, UserCheck, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Order",
      description: "Schedule your inspection in just a few clicks. Choose your preferred time and location.",
      color: "bg-gc-sky-blue"
    },
    {
      icon: UserCheck,
      title: "Get Inspector Assigned",
      description: "We assign a certified inspector to your vehicle based on location and expertise.",
      color: "bg-gc-green"
    },
    {
      icon: FileText,
      title: "Get Digital Report",
      description: "Receive a comprehensive digital report with photos and detailed findings.",
      color: "bg-gc-sunset-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gc-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gc-dark-blue mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gc-medium-gray max-w-2xl mx-auto">
            Get your vehicle inspected in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gc-sky-blue via-gc-green to-gc-sunset-orange transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gc-light-gray-1">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gc-dark-blue mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gc-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-gc-dark-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
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