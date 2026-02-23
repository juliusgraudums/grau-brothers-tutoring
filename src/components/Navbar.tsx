import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
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

  const navTextClass = cn(
    "font-medium transition-colors hover:text-secondary",
    isScrolled ? "text-foreground" : "text-primary-foreground"
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Grau Brothers logo" className={cn("transition-all duration-300", isScrolled ? "h-10" : "h-14")} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHome && (
              <>
                <button onClick={() => scrollTo("mission")} className={navTextClass}>
                  Vår resa
                </button>
                <button onClick={() => scrollTo("about")} className={navTextClass}>
                  Om oss
                </button>
              </>
            )}

            {!isHome && (
              <Link to="/" className={navTextClass}>
                Hem
              </Link>
            )}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <Link to="/tjanster" className={cn(navTextClass, "inline-flex items-center gap-1")}>
                Tjänster
                <ChevronDown className="w-4 h-4" />
              </Link>

              {isServicesMenuOpen && (
                <div className="absolute top-full pt-3 left-0 min-w-52">
                  <div className="bg-background border border-border rounded-xl shadow-medium p-2">
                    <Link to="/tjanster/laxhjalp" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsServicesMenuOpen(false)}>
                      Läxhjälp
                    </Link>
                    <Link to="/tjanster/coaching" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsServicesMenuOpen(false)}>
                      Coaching
                    </Link>
                    <Link to="/tjanster/ovrigt" className="block px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsServicesMenuOpen(false)}>
                      Övriga tjänster
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full" asChild>
              <Link to="/kontakt">Kontakt</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("md:hidden p-2", isScrolled ? "text-foreground" : "text-primary-foreground")}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4">
              {isHome ? (
                <>
                  <button onClick={() => scrollTo("mission")} className={cn("font-medium text-left transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-primary-foreground")}>
                    Vår resa
                  </button>
                  <button onClick={() => scrollTo("about")} className={cn("font-medium text-left transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-primary-foreground")}>
                    Om oss
                  </button>
                </>
              ) : (
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={cn("font-medium text-left transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-primary-foreground")}>
                  Hem
                </Link>
              )}

              <Link to="/tjanster" onClick={() => setIsMobileMenuOpen(false)} className={cn("font-medium text-left transition-colors hover:text-secondary", isScrolled ? "text-foreground" : "text-primary-foreground")}>
                Tjänster
              </Link>
              <div className="pl-4 flex flex-col gap-3">
                <Link to="/tjanster/laxhjalp" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-secondary transition-colors">
                  Läxhjälp
                </Link>
                <Link to="/tjanster/coaching" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-secondary transition-colors">
                  Coaching
                </Link>
                <Link to="/tjanster/ovrigt" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-secondary transition-colors">
                  Övriga tjänster
                </Link>
              </div>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-full" asChild>
                <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
