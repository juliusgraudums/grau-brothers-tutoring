import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className={cn(
              "font-display text-2xl font-bold transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            Grau<span className="text-secondary">Brothers</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              onClick={() => scrollTo("booking")}
              className={cn(
                "font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Boka tid
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
            <Button
              onClick={() => scrollTo("booking")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full"
            >
              Boka nu
            </Button>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4">
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
                onClick={() => scrollTo("booking")}
                className={cn(
                  "font-medium text-left transition-colors hover:text-secondary",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                Boka tid
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
              <Button
                onClick={() => scrollTo("booking")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-full"
              >
                Boka nu
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
