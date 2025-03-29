
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "Carevolution transformed my pediatric practice with a beautiful website and streamlined patient management. The CRM integration has saved my staff hours each week on administrative tasks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Orthopedic Surgeon",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    content: "As a specialist practice, we needed a website that clearly communicated our expertise. Carevolution delivered a professional site that has increased our patient inquiries by 40%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "The team at Carevolution understands healthcare. They created a brand identity that perfectly captures our practice philosophy and has helped us stand out in a competitive market.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Robert Williams",
    role: "Family Physician",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "I was impressed by how quickly Carevolution got my practice online. Their process was efficient, and they delivered exactly what they promised, on time and on budget.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">What Our Clients Say</h2>
          <p className="text-foreground/70 reveal animate-delay-100">
            Hear from healthcare professionals who have transformed their practices with our solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal animate-delay-200">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border/10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-20 w-20 rounded-full object-cover border-4 border-primary/10"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        <p className="text-lg mb-4 italic text-foreground/80">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-foreground/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
