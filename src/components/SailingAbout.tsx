import { Ship, Trophy, Compass } from "lucide-react";
import brothers from "@/assets/brothers.jpeg";
import sailingAction from "@/assets/sailing-action.jpeg";

const SailingAbout = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Om Grau Brothers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Två bröder från Motala som delar en passion för segling och tävling på elitnivå.
            </p>
          </div>

          {/* Photo section */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img src={brothers} alt="Grau Brothers" className="w-full h-80 object-cover object-top" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img src={sailingAction} alt="Segling i tuffa förhållanden" className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Ship className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                ILCA Segling
              </h3>
              <p className="text-muted-foreground">
                Vi tävlar i ILCA-klassen – en av de mest prestigefyllda 
                seglingsklasserna i världen.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Elitsatsning
              </h3>
              <p className="text-muted-foreground">
                Daglig träning, tävlingsresor och ständig utveckling. Vi ger allt 
                för att nå toppen.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Motala-andan
              </h3>
              <p className="text-muted-foreground">
                Uppväxta vid Vättern med vinden i ryggen. Seglingen har alltid 
                varit en del av vilka vi är.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SailingAbout;
