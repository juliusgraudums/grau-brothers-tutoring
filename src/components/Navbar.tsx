import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-navy.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Grau Brothers logo" 
              className={cn(
                "transition-all duration-300 rounded-xl",
                isScrolled ? "h-10 brightness-0 invert-0" : "h-14 brightness-0 invert"
              )}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHome && (
              <>
                <button
                  onClick={() => scrollTo("mission")}
                  className={cn(
                    "font-medium transition-colors hover:text-secondary",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  Vår resa
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className={cn(
                    "font-medium transition-colors hover:text-secondary",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  Om oss
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className={cn(
                    "font-medium transition-colors hover:text-secondary",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  Kontakt
                </button>
              </>
            )}
            {!isHome && (
              <Link
                to="/"
                className={cn(
                  "font-medium transition-colors hover:text-secondary",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                Hem
              </Link>
            )}
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full"
              asChild
            >
              <Link to="/laxhjalp">Läxhjälp</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4">
              {isHome ? (
                <>
                  <button
                    onClick={() => scrollTo("mission")}
                    className={cn(
                      "font-medium text-left transition-colors hover:text-secondary",
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    )}
                  >
                    Vår resa
                  </button>
                  <button
                    onClick={() => scrollTo("about")}
                    className={cn(
                      "font-medium text-left transition-colors hover:text-secondary",
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    )}
                  >
                    Om oss
                  </button>
                  <button
                    onClick={() => scrollTo("contact")}
                    className={cn(
                      "font-medium text-left transition-colors hover:text-secondary",
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    )}
                  >
                    Kontakt
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-medium text-left transition-colors hover:text-secondary",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  Hem
                </Link>
              )}
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-full"
                asChild
              >
                <Link to="/laxhjalp" onClick={() => setIsMobileMenuOpen(false)}>Läxhjälp</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
