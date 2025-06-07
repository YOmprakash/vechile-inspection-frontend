'use client'

import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import HowItWorks from "./components/HowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white text-gray-900">
                {/* Floating Badge */}
                <div className="fixed top-20 right-4 z-50">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 animate-pulse">
                        🔥 Now Hiring
                    </Badge>
                </div>

                <Hero />
                <Benefits />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <CallToAction />

                {/* Sticky Mobile CTA */}
                <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
                    <Button className="w-full py-4 text-lg rounded-2xl shadow-lg bg-primary hover:bg-primary/90">
                        Start Onboarding
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Index;