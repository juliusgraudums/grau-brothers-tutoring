import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import sailingAction from "@/assets/sailing-action.jpeg";

const SailingHero = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={sailingAction} alt="ILCA segling" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Anchor className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              ILCA Segling · Ingarö
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Vi lever för
            <span className="block text-gradient mt-2 pb-2">seglingen</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Två bröder från Ingarö med en gemensam dröm – att tävla på den internationella scenen i ILCA-segling.
          </p>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-primary-foreground/80 font-semibold uppercase tracking-wide text-sm mb-4">
              Våra tjänster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
            >
              Vår resa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground text-lg px-8 py-6 rounded-full hover:bg-primary-foreground/20"
              asChild
            >
              <Link to="/laxhjalp">
                Läxhjälp
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground text-lg px-8 py-6 rounded-full hover:bg-primary-foreground/20"
              asChild
            >
              <Link to="/tjanster">
                Coaching
              </Link>
            </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="text-4xl font-display font-bold text-secondary">ILCA</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Seglingsklass</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary-foreground">Ingarö</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Hemmabas</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary-foreground">2</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Bröder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SailingHero;
