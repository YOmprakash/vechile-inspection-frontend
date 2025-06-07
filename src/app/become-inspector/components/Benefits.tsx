import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, DollarSign, Smartphone, GraduationCap } from "lucide-react";

const benefitIconColors = [
    "text-yellow-500 bg-yellow-50",
    "text-orange-500 bg-orange-50",
    "text-cyan-500 bg-cyan-50",
    "text-green-500 bg-green-50",
];

const benefitTextColors = [
    "text-yellow-500 ",
    "text-orange-500 ",
    "text-cyan-500",
    "text-green-500 ",
];

const Benefits = () => {
    const benefits = [
        {
            icon: Clock,
            title: "Flexible Work Hours",
            description: "Choose when you work. Part-time or full-time, it's up to you."
        },
        {
            icon: DollarSign,
            title: "Good Payouts",
            description: "Earn competitive rates for each inspection completed."
        },
        {
            icon: Smartphone,
            title: "Digital Tools Provided",
            description: "Get access to our state-of-the-art inspection app and tools."
        },
        {
            icon: GraduationCap,
            title: "Quick Training Program",
            description: "Complete our comprehensive training in just 2-3 days."
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-24 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">Why Become an Inspector?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of inspectors who have transformed their careers with our platform
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white group">
                            <CardHeader className="text-center pb-2">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${benefitIconColors[index]}`}>
                                    <benefit.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className={`text-lg ${benefitTextColors[index]}`}>{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardDescription className="text-base leading-relaxed">
                                    {benefit.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;