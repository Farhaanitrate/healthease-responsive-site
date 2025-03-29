
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to develop a healthcare practice website?",
    answer: "Our typical timeline for a complete healthcare website is 4-6 weeks. This includes strategy development, design, content creation, development, and testing. For practices that need a faster solution, we offer expedited options that can launch in as little as 2-3 weeks."
  },
  {
    question: "Is your CRM system HIPAA compliant?",
    answer: "Yes, our CRM solutions are built with HIPAA compliance as a core requirement. We implement all necessary security measures including encryption, access controls, audit logs, and secure data storage to ensure patient information is protected in accordance with healthcare regulations."
  },
  {
    question: "What sets you apart from other web development agencies?",
    answer: "Unlike general web developers, we specialize exclusively in healthcare practices. Our team includes professionals with healthcare industry experience who understand the unique challenges and requirements of medical businesses, from regulatory compliance to patient communication needs."
  },
  {
    question: "Can you help with content creation for my website?",
    answer: "Absolutely! We offer comprehensive content creation services tailored to healthcare, including professional medical writing, SEO optimization, and healthcare marketing expertise. Our content team works with you to ensure accurate, engaging, and compliant content."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide continued support through various maintenance packages. These include regular updates, security monitoring, performance optimization, content updates, and technical support. We recommend our maintenance plans to ensure your practice's digital presence remains secure and up-to-date."
  }
];

export default function FaqSection() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Frequently Asked Questions</h2>
          <p className="text-foreground/70 reveal animate-delay-100">
            Find answers to common questions about our healthcare practice solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal animate-delay-200">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
