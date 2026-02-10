import { Target, Ship, Trophy } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Vår dröm
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Allt vi gör driver oss mot ett gemensamt mål.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold">OS i ILCA Segling</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Vi elitsatsar mot <span className="text-gradient">Olympiska Spelen</span>
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
                Grau Brothers handlar om mer än läxhjälp. Vårt stora mål är att representera Sverige 
                i ILCA-segling på OS. Läxhjälpen är ett sätt för oss att finansiera vår satsning 
                samtidigt som vi delar med oss av vår kunskap och disciplin.
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Samma fokus, envishet och systematik som krävs för att nå världstoppen i segling 
                är det som gör oss till effektiva studiecoacher.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6">
                <Ship className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-display text-xl font-semibold text-primary-foreground mb-2">ILCA Segling</h4>
                <p className="text-primary-foreground/70">
                  Vi tävlar och tränar dagligen med siktet inställt på att kvalificera oss 
                  till de Olympiska Spelen.
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6">
                <Trophy className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-display text-xl font-semibold text-primary-foreground mb-2">Disciplin & driv</h4>
                <p className="text-primary-foreground/70">
                  Elitidrottens mentalitet genomsyrar allt vi gör – även vår läxhjälp. 
                  Vi vet vad som krävs för att prestera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
