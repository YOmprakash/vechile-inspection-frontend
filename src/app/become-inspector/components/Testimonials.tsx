import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            city: "Austin, TX",
            quote: "The flexible schedule allows me to balance work with family time perfectly.",
            avatar: "SJ",
            avatarColor: "bg-yellow-500 text-white",
            rating: 5
        },
        {
            name: "Mike Chen",
            city: "San Francisco, CA",
            quote: "Great pay and the digital tools make inspections so much easier than before.",
            avatar: "MC",
            avatarColor: "bg-orange-500 text-white",
            rating: 5
        },
        {
            name: "Jennifer Davis",
            city: "Miami, FL",
            quote: "Training was thorough and the support team is always there when I need help.",
            avatar: "JD",
            avatarColor: "bg-cyan-500 text-white",
            rating: 5
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-24 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">Hear from Our Inspectors</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real stories from real people making a difference
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-lg text-gc-black italic mb-6 leading-relaxed border-l-4 border-cyan-400 pl-4">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarFallback className={testimonial.avatarColor}>
                                            {testimonial.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gc-black">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;