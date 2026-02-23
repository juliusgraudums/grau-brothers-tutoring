import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, ArrowRight, GraduationCap, Waves, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import sailingAction from "@/assets/sailing-action.jpeg";
import Seo from "@/components/Seo";

const Tjanster = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Tjänster | Grau Brothers"
        description="Utforska alla tjänster från Grau Brothers: läxhjälp, coaching och övriga tjänster."
      />
      <Navbar />

      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sailingAction} alt="Våra tjänster" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Anchor className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground/90 text-sm font-medium">Grau Brothers</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
              Våra <span className="text-gradient">tjänster</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Välj tjänsten som passar dig bäst. Vi erbjuder läxhjälp, seglingscoaching och övrig hjälp vid behov.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col">
              <GraduationCap className="w-9 h-9 text-secondary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Läxhjälp</h2>
              <p className="text-muted-foreground mb-6 flex-1">Personlig läxhjälp med fokus på tydlighet, struktur och resultat i skolan.</p>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                <Link to="/tjanster/laxhjalp">
                  Läs mer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col">
              <Waves className="w-9 h-9 text-secondary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Coaching</h2>
              <p className="text-muted-foreground mb-6 flex-1">Individuell seglingscoaching i ILCA och optimist, anpassat till din nivå.</p>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                <Link to="/tjanster/coaching">
                  Läs mer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col">
              <Wrench className="w-9 h-9 text-secondary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Övriga tjänster</h2>
              <p className="text-muted-foreground mb-6 flex-1">Behöver du hjälp med något annat? Hör av dig så hittar vi en lösning.</p>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                <Link to="/tjanster/ovrigt">
                  Läs mer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tjanster;
