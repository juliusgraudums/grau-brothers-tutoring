import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Anchor, Users, Clock, MapPin, ArrowRight, Trophy, Star } from "lucide-react";
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
              <span className="text-primary-foreground/90 text-sm font-medium">Seglingscoaching
              </span>
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
                  för seglare som vill utvecklas. Oavsett om du precis har börjat eller siktar på 
                  mästerskap – vi möter dig där du befinner dig.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Vi fokuserar på teknik, taktik och att du ska trivas på vattnet. Vår coaching passar 
                  alla nivåer – det viktigaste är att du har kul och känner att du utvecklas i din 
                  egen takt.
                </p>
                <Button size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold"
                asChild>

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

      {/* Optimist Coaching */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-secondary" />
                    Våra meriter
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Julius</h5>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• 9:a på Senior VM ILCA 6 2025</li>
                        <li>• Senior SM guld ILCA 6 2025</li>
                        <li>• JSM guld ILCA 6 2024</li>
                        <li>• Vinnare av svenska GP-serien 2024 ILCA</li>
                        <li>• Vinnare av GP 4 och 5 29er 2023</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Marius</h5>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Vinnare JSM ILCA 6 2025</li>
                        <li>• GP-serien ILCA 2025 – 2:a</li>
                        <li>• VM-laget i optimist 2021</li>
                        <li>• Enda svensk kvalificerad till U-VM 2025</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
                  <Trophy className="w-4 h-4 text-secondary" />
                  <span className="text-secondary text-sm font-semibold">OPTIMISTJOLLE COACHING</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Coaching i <span className="text-gradient">optimistjolle</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Vi har båda seglat optimist och vet vad som krävs för att utvecklas i klassen. 
                  Med erfarenhet från VM-lag och nationella mästerskap hjälper vi unga seglare att 
                  bygga en stark grund – i teknik, taktik och seglingsglädje.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Vår coaching passar alla – oavsett om du siktar på tävlingar eller bara vill bli 
                  tryggare och ha roligare på vattnet. Vi möter dig där du är och anpassar efter 
                  just dina mål och din nivå, utan press.
                </p>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold"
                  asChild>

                  <a href="mailto:graubrothers@gmail.com">
                    Kontakta oss
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
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
            asChild>

            <a href="mailto:graubrothers@gmail.com">
              Skicka mail
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Tjanster;