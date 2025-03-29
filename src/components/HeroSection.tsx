
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsFading(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? (isFading ? 'opacity-0' : 'opacity-30') : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/30 z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary text-sm font-medium mb-2 animate-fade-in">
              Healthcare Practice Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Transform Your <span className="text-primary">Healthcare</span> Practice
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl animate-fade-in animate-delay-200">
              Elevate your private practice with professional website development, 
              strategic branding, and healthcare-focused business solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animate-delay-300">
              <Button size="lg" asChild>
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] animate-fade-in animate-delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Healthcare Specialists</h3>
                  <p className="text-white/90 mb-6">
                    We understand the unique needs of healthcare professionals and build solutions 
                    that help you focus on what matters most - your patients.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-white/80"></div>
                    <div className="h-2 w-2 rounded-full bg-white/60"></div>
                    <div className="h-2 w-2 rounded-full bg-white/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
