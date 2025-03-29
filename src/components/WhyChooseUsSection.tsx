
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Star, Users, Clock, Shield } from "lucide-react";

const reasons = [
  {
    title: "Healthcare Expertise",
    description: "We understand the unique needs and compliance requirements of healthcare websites.",
    icon: Star,
  },
  {
    title: "Patient-Centered Design",
    description: "Our solutions focus on improving the patient experience and engagement.",
    icon: Users,
  },
  {
    title: "Rapid Implementation",
    description: "Quick turnaround times to get your practice online and generating leads faster.",
    icon: Clock,
  },
  {
    title: "HIPAA Compliant Solutions",
    description: "We ensure all digital assets meet healthcare privacy and security standards.",
    icon: Shield,
  },
];

export default function WhyChooseUsSection() {
  const ref = useScrollReveal();

  return (
    <section id="why-us" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((item, index) => (
                <div key={item.title} className={`reveal`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-card/70 p-6 rounded-xl border border-border/40 h-full hover:shadow-md transition-all duration-300">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Why Choose Us?</h2>
            <p className="text-foreground/70 reveal animate-delay-100">
              We bring specialized knowledge and capabilities that set your practice apart.
            </p>
            
            <ul className="space-y-4 reveal animate-delay-200">
              {[
                "Deep understanding of healthcare business models",
                "Conversion-focused website design and development",
                "Compliant with healthcare regulations",
                "Ongoing support and platform maintenance"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
