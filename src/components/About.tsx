import { Quote, GraduationCap, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Om Grau Brothers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vi är två bröder med en passion för utbildning och att hjälpa andra att lyckas.
            </p>
          </div>

          {/* Testimonial card */}
          <div className="relative bg-card rounded-3xl shadow-medium p-8 md:p-12 mb-16 border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/30" />
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 pl-8">
                "Julius Graudums har inte bara A i alla sina kurser han visar dessutom upp genuin 
                förståelse för både matematik och fysik. Han har under kursernas gång ofta förklarat 
                och hjälpt sina kompisar med stort tålamod. Julius har dessutom en inställning till 
                skolan och studier som gör honom till en <span className="text-gradient font-semibold">perfekt studiecoach</span>."
              </blockquote>
              <footer className="pl-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Gymnasielärare</p>
                  <p className="text-muted-foreground text-sm">Officiellt utlåtande</p>
                </div>
              </footer>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Dokumenterad framgång
              </h3>
              <p className="text-muted-foreground">
                Vi har själva A i samtliga ämnen på gymnasiet, med djup förståelse 
                för matematik, fysik och naturvetenskap.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Personlig approach
              </h3>
              <p className="text-muted-foreground">
                Varje elev är unik. Vi anpassar undervisningen efter dina behov och 
                din inlärningsstil.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Stort tålamod
              </h3>
              <p className="text-muted-foreground">
                Vi tar oss tid att förklara tills du verkligen förstår. Inga dumma 
                frågor – bara lärande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
