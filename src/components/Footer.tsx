import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div>
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Grau<span className="text-secondary">Brothers</span>
              </span>
              <p className="text-primary-foreground/60 text-sm mt-2">
                Professionell läxhjälp
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8">
              <a 
                href="#about" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Om oss
              </a>
              <a 
                href="#booking" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Boka tid
              </a>
              <a 
                href="#contact" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Kontakt
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Skapat med</span>
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
