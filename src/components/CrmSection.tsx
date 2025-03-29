
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CrmSection() {
  const ref = useScrollReveal();

  const steps = [
    {
      number: "01",
      title: "Patient Inquiry Automation",
      description: "Automatically capture and route patient inquiries to the right staff member.",
    },
    {
      number: "02",
      title: "Appointment Scheduling",
      description: "Integrate with calendars for seamless booking and reminders.",
    },
    {
      number: "03",
      title: "Treatment Tracking",
      description: "Keep detailed records of patient treatments and progress.",
    },
    {
      number: "04",
      title: "Follow-up Management",
      description: "Automated post-appointment communication and satisfaction surveys.",
    },
  ];

  return (
    <section id="crm" className="section-padding bg-gradient-to-b from-background to-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-6 reveal">
            <img 
              src="/lovable-uploads/45757040-0b7c-4213-bfb6-76bf99df3bdc.png" 
              alt="Carecierge Logo" 
              className="h-16 md:h-20" 
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">CRM Integration</h2>
          <p className="text-foreground/70 reveal animate-delay-100">
            Streamline your practice operations with our powerful CRM solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="reveal">
            <div className="bg-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Benefits of Integration</h3>
              <ul className="space-y-4">
                {[
                  "Reduce administrative workload by up to 40%",
                  "Improve patient communication and satisfaction",
                  "Generate detailed analytics on practice performance",
                  "Secure storage of patient information",
                  "Seamless integration with existing practice software"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="relative">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className={`relative pl-12 pb-8 last:pb-0 reveal`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-primary/30"></div>
                  )}
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
