import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Link to="/" className="font-display text-2xl font-bold text-primary-foreground">
                Grau<span className="text-secondary">Brothers</span>
              </Link>
              <p className="text-primary-foreground/60 text-sm mt-2">
                ILCA Segling · Vägen mot OS
              </p>
            </div>

            <div className="flex gap-8">
              <Link 
                to="/" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Segling
              </Link>
              <Link 
                to="/laxhjalp" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Läxhjälp
              </Link>
              <a 
                href="https://instagram.com/jullegrau" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Instagram
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
