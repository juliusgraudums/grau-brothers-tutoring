import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img src={logo} alt="Grau Brothers logo" className="h-12" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link 
                to="/" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Segling
              </Link>
              <Link 
                to="/tjanster" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Tjänster
              </Link>
              <Link 
                to="/laxhjalp" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Läxhjälp
              </Link>
              <a 
                href="https://instagram.com/jullegrau" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                @jullegrau
              </a>
              <a 
                href="https://instagram.com/marregrau" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                @marregrau
              </a>
              <a 
                href="https://tiktok.com/@grau.brothers" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                TikTok
              </a>
            </div>

            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>© {new Date().getFullYear()} Grau Brothers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
