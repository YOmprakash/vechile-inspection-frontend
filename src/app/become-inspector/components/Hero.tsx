import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-400 to-cyan-400 px-6 py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <Badge className="w-fit">
                            Join Our Growing Network
                        </Badge>
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                Become a Certified
                                <span className="text-green-800 block">Vehicle Inspector</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Join our network of skilled inspectors and make vehicle inspections easier and smarter.
                                Start earning with flexible hours and professional support.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90">
                                Start Onboarding
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary/90 to-secondary/10 rounded-3xl p-8 lg:p-12">
                            <div className="bg-white rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-8 w-8 text-primary" />
                                    <div>
                                        <h3 className="font-semibold">Inspector Dashboard</h3>
                                        <p className="text-sm text-muted-foreground">Manage inspections easily</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                       <span className="text-sm">Today&rsquo;s Inspections</span>

                                        <Badge variant="secondary" className="bg-green-100 text-green-800">8 completed</Badge>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-sm">Weekly Earnings</span>
                                        <span className="font-semibold text-primary">$1,240</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;