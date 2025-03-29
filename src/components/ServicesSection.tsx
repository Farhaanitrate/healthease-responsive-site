
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, PaintBucket, Instagram, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Website Development",
    description: "Custom-built websites optimized for healthcare practices with patient-focused user experience.",
    icon: Globe,
  },
  {
    title: "Branding",
    description: "Strategic brand development that communicates your expertise and builds patient trust.",
    icon: PaintBucket,
  },
  {
    title: "Social Media",
    description: "Content creation and management strategies for healthcare provider engagement.",
    icon: Instagram,
  },
  {
    title: "CRM Integration",
    description: "Streamlined patient management systems with automated processes and integrations.",
    icon: Database,
  },
];

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-secondary/40" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Services</h2>
          <p className="text-foreground/70 reveal">
            Comprehensive solutions designed specifically for healthcare practitioners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className={`reveal`} style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
