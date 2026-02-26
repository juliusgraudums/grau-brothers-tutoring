import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Julius Graudums · A i samtliga ämnen på gymnasiet
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Lås upp din
            <span className="block text-gradient mt-2">fulla potential</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Jag är Julius Graudums – en av bröderna bakom Grau Brothers. Vid sidan av 
            min elitsatsning i segling hjälper jag dig nå toppen i skolan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow text-lg px-8 py-6 rounded-full font-semibold"
            >
              Boka läxhjälp
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6 rounded-full"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Läs mer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="text-4xl font-display font-bold text-secondary">A</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Våra betyg</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary-foreground">100%</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Nöjda elever</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary-foreground">∞</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Tålamod</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
