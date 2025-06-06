import { Shield, Clock, Award, Globe, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Bank-level security with encrypted data and secure payments",
      gradient: "from-gc-turquoise to-gc-sky-blue"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your inspection scheduled within 2 hours",
      gradient: "from-gc-sky-blue to-gc-green"
    },
    {
      icon: Award,
      title: "Certified Inspectors",
      description: "All inspectors are certified and background checked",
      gradient: "from-gc-green to-gc-mint"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Available in all major cities across the country",
      gradient: "from-gc-mint to-gc-turquoise"
    },
    {
      icon: Users,
      title: "10K+ Happy Customers",
      description: "Join our growing community of satisfied customers",
      gradient: "from-gc-sunset-orange to-gc-coral-orange"
    },
    {
      icon: Zap,
      title: "Digital Reports",
      description: "Instant digital reports with photos and detailed analysis",
      gradient: "from-gc-golden-yellow to-gc-sunset-orange"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-br from-gc-frosted-white via-gc-snow to-gc-alabaster relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gc-turquoise/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gc-sky-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gc-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gc-midnight-blue">
            Why Choose <span className="bg-gradient-to-r from-gc-turquoise to-gc-sky-blue bg-clip-text text-transparent">InspectSwift?</span>
          </h2>
          <p className="text-xl text-gc-slate-gray max-w-2xl mx-auto">
            Experience the future of vehicle inspections with our cutting-edge platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-gc-light-blue-gray/30 shadow-lg hover:shadow-xl">
                <div className={`bg-gradient-to-br ${benefit.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gc-midnight-blue">
                  {benefit.title}
                </h3>
                <p className="text-gc-slate-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-sm font-medium text-gc-slate-gray">Trusted by leading companies:</div>
            <div className="flex space-x-8">
              <span className="text-lg font-bold text-gc-midnight-blue">AutoDealer+</span>
              <span className="text-lg font-bold text-gc-midnight-blue">FleetPro</span>
              <span className="text-lg font-bold text-gc-midnight-blue">CarConnect</span>
              <span className="text-lg font-bold text-gc-midnight-blue">VehicleHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;