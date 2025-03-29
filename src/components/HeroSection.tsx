
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/20 z-0"></div>
      <div className="container mx-auto px-4 pt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
