import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Fill Out Basic Details",
            description: "Provide your personal information and background details in our simple form."
        },
        {
            number: "02",
            title: "Upload Documents",
            description: "Submit required certifications, ID, and relevant experience documents."
        },
        {
            number: "03",
            title: "Complete Training",
            description: "Finish our comprehensive training program and start inspecting vehicles."
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-24 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get started in just three simple steps
                    </p>
                </div>
                <div className="relative grid lg:grid-cols-3 gap-8">
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 border-b-2 border-dashed border-gray-300"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10">
                            <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-orange-400 bg-white rounded-xl">
                                <CardHeader className="text-center pb-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                                        {step.number}
                                    </div>
                                    <CardTitle className="text-xl text-gc-dark-blue">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="text-base leading-relaxed">
                                        {step.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;