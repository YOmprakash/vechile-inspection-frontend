import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "What are the requirements to become an inspector?",
            answer: "You need a valid driver's license, basic mechanical knowledge, and must pass our training program. Previous automotive experience is preferred but not required."
        },
        {
            question: "How long does the onboarding process take?",
            answer: "The entire onboarding process typically takes 3-5 business days from application submission to starting your first inspection."
        },
        {
            question: "Is this a full-time job opportunity?",
            answer: "You can choose! We offer both part-time and full-time opportunities. Many inspectors start part-time and transition to full-time based on their preferences."
        },
        {
            question: "Do I need my own tools and equipment?",
            answer: "No, we provide all necessary digital tools and equipment. You just need a smartphone and reliable transportation."
        },
        {
            question: "How much can I earn as an inspector?",
            answer: "Earnings vary based on location and number of inspections completed. Our inspectors typically earn $25-45 per inspection, with experienced inspectors completing 8-12 inspections per day."
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-24 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-xl text-muted-foreground">
                        Get answers to common questions about becoming an inspector
                    </p>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50/70 rounded-lg border-0 px-6 transition-all hover:bg-slate-100">
                            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 data-[state=open]:text-orange-500">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base leading-relaxed pb-6 text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;