import { Target, Ship, Trophy } from "lucide-react";
import sailingRace from "@/assets/sailing-race.jpeg";

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Vår resa
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Driven av passion, disciplin och en dröm om att nå toppen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold">ILCA Segling</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Med drömmen om att <span className="text-gradient">tävla i världstoppen</span>
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Grau Brothers är två bröder från Ingarö som elitsatsar i ILCA-segling. Efter fyra år 
                på seglargymnasiet i Motala tränar vi dagligen och tävlar internationellt med siktet 
                inställt på att nå så långt som möjligt. OS är den stora drömmen – och vi jobbar 
                hårt varje dag för att komma närmare.
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Vid sidan av seglingen erbjuder vi läxhjälp – samma fokus och disciplin 
                som driver oss på vattnet hjälper oss att coacha elever mot toppresultat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img src={sailingRace} alt="ILCA segling i tävling" className="w-full h-64 object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6">
                  <Ship className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">ILCA Segling</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    En av världens mest prestigefyllda seglingsklasser.
                  </p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6">
                  <Trophy className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">Disciplin & driv</h4>
                  <p className="text-primary-foreground/70 text-sm">
                    Elitidrottens mentalitet i allt vi gör.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
