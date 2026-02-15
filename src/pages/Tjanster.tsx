import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, Users, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sailingAction from "@/assets/sailing-action.jpeg";

const Tjanster = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sailingAction} alt="ILCA segling" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Anchor className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground/90 text-sm font-medium">Övriga tjänster</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Våra <span className="text-gradient">tjänster</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Förutom läxhjälp erbjuder vi ILCA coaching – samma passion och kunskap vi använder i vår egen elitsatsning.
            </p>
          </div>
        </div>
      </section>

      {/* ILCA Coaching */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
                  <Anchor className="w-4 h-4 text-secondary" />
                  <span className="text-secondary text-sm font-semibold">ILCA COACHING</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Personlig coaching i <span className="text-gradient">ILCA-segling</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Med flera års erfarenhet av ILCA-segling på elitnivå erbjuder vi individuell coaching 
                  för seglare som vill utvecklas. Oavsett om du precis har börjat eller vill ta steget 
                  till nästa nivå kan vi hjälpa dig.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Vi fokuserar på teknik, taktik, fysisk förberedelse och den mentala styrkan som krävs 
                  för att prestera i tävlingar.
                </p>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold"
                  asChild
                >
                  <a href="mailto:graubrothers@gmail.com">
                    Kontakta oss
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-medium">
                  <img src={sailingAction} alt="ILCA coaching" className="w-full h-64 object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                    <Users className="w-7 h-7 text-secondary mb-3" />
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">Individuellt</h4>
                    <p className="text-muted-foreground text-sm">Anpassat efter din nivå och dina mål.</p>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                    <Clock className="w-7 h-7 text-secondary mb-3" />
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">Flexibelt</h4>
                    <p className="text-muted-foreground text-sm">Vi anpassar tid och plats efter dig.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Intresserad?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
            Hör av dig så berättar vi mer om hur vi kan hjälpa dig att utvecklas som seglare.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold shadow-glow"
            asChild
          >
            <a href="mailto:graubrothers@gmail.com">
              Skicka mail
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tjanster;
