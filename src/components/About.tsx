import { GraduationCap, Users, Heart, ListChecks, Route, Compass, CalendarClock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">För vem passar det?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              För elever och familjer som vill ha tydligare struktur, bättre studiero och tryggare stöd i skolan.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 mb-16 border border-border">
            <ul className="space-y-4 text-foreground text-lg">
              <li>• Högstadie- och gymnasieelever</li>
              <li>• Elever som vill höja sina betyg</li>
              <li>• Elever som saknar struktur eller motivation</li>
              <li>• Elever som vill känna sig tryggare inför prov</li>
            </ul>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Så går det till</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <ListChecks className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">1. Kort kartläggning</h3>
              <p className="text-muted-foreground">Vi börjar med mål, nuläge och vilka utmaningar som gör skolarbetet svårt just nu.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Route className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">2. Personlig plan</h3>
              <p className="text-muted-foreground">Du får en tydlig plan med kontinuerliga träffar, studieteknik och stöd i de ämnen du behöver.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">3. Uppföljning</h3>
              <p className="text-muted-foreground">Vi följer upp, justerar upplägget och ser till att utvecklingen håller över tid.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Om mig</h3>
              <p className="text-muted-foreground mb-4">
                Jag heter Julius Graudums och fick A i alla ämnen på gymnasiet, med fördjupning i matematik och fysik.
              </p>
              <p className="text-muted-foreground mb-4">
                Min elitsatsning i segling har lärt mig disciplin, målmedvetenhet och struktur – sådant som också gör stor
                skillnad i studierna.
              </p>
              <p className="text-muted-foreground">
                Mitt fokus är att hjälpa andra lyckas utifrån sina förutsättningar, inte att jämföra prestationer.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <CalendarClock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Upplägg & flexibilitet</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-secondary mt-0.5" />
                  Sessioner är 60 minuter.
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-secondary mt-0.5" />
                  Träffar kan ske hemma hos elev i Motala (vardagar) eller på Ingarö (helger), samt online.
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-secondary mt-0.5" />
                  Upplägget anpassas efter elevens behov och skolmål.
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-secondary mt-0.5" />
                  Det kan vara löpande varje vecka eller intensivt inför prov.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
