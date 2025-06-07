import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
    return (
        <section className="px-6 py-16 lg:py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Join our growing network of certified vehicle inspectors and start earning with flexible hours and professional support.
                    </p>
                    <Button size="lg" variant="secondary" className="text-lg px-12 py-6 rounded-2xl bg-white text-orange-500 hover:bg-white/90 transform hover:scale-105 transition-transform">
                        Start Your Onboarding Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;