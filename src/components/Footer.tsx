
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-foreground/70 mb-4">
              Transforming healthcare practices with innovative digital solutions.
            </p>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-sm text-foreground/60">Toggle theme</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Why Us", "CRM", "Testimonials", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Website Development",
                "Branding",
                "Social Media",
                "CRM Integration",
                "SEO Optimization",
                "Content Creation"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "HIPAA Compliance"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Carevolution. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
