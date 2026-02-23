import { Anchor, BookOpen, Sparkles, Wrench, Compass, GraduationCap, Trophy } from "lucide-react";
import SectionHeader from "@/components/landing/SectionHeader";
import ServiceCard from "@/components/landing/ServiceCard";
import CTASection from "@/components/landing/CTASection";
import sailingRace from "@/assets/sailing-race.jpeg";

const steps = [
  {
    title: "Berätta vad du vill uppnå",
    text: "Vi börjar med ett kort samtal om mål, nivå och vilken typ av stöd du behöver.",
    icon: Compass,
  },
  {
    title: "Vi lägger upp en plan",
    text: "Du får ett enkelt upplägg med tydligt fokus så att varje pass ger resultat.",
    icon: GraduationCap,
  },
  {
    title: "Följ progressionen",
    text: "Vi följer upp löpande och justerar upplägget när dina behov förändras.",
    icon: Trophy,
  },
];

const services = [
  {
    title: "Läxhjälp",
    description: "Stöd i skolarbetet med fokus på struktur, förståelse och bättre studieteknik.",
    bullets: ["Anpassat efter ämne och nivå", "Tydliga delmål inför prov", "Lugn och pedagogisk genomgång"],
    ctaLabel: "Läs om läxhjälp",
    href: "/tjanster/laxhjalp",
    icon: BookOpen,
  },
  {
    title: "Coaching",
    description: "Praktisk seglingscoaching i ILCA och Optimist med elitfokus och träningsglädje.",
    bullets: ["Teknik och taktik på vattnet", "Individuella utvecklingsmål", "Erfarenhet från internationell satsning"],
    ctaLabel: "Läs om coaching",
    href: "/tjanster/coaching",
    icon: Anchor,
  },
  {
    title: "Övriga tjänster",
    description: "Behöver du hjälp med något annat? Vi erbjuder flexibla lösningar utifrån behov.",
    bullets: ["Praktisk hjälp i vardagen", "Snabb återkoppling", "Lösningar som fungerar i praktiken"],
    ctaLabel: "Se övriga tjänster",
    href: "/tjanster/ovrigt",
    icon: Wrench,
  },
];

const reasons = [
  "Två bröder med samma driv: tydliga mål, bra förberedelser och fullt fokus i varje uppdrag.",
  "Vi kombinerar elitidrottens disciplin med ett personligt och lyhört bemötande.",
  "Du får raka besked, praktiska råd och stöd som går att använda direkt.",
  "Vi bygger långsiktigt förtroende – många återkommer när nya behov dyker upp.",
];

const LandingSections = () => {
  return (
    <>
      <section id="mission" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Så funkar det"
              title="Tre steg från mål till resultat"
              subtitle="En enkel process som gör det lätt att komma igång och fortsätta utvecklas."
            />
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {steps.map(({ title, text, icon: Icon }) => (
                <article key={title} className="bg-card rounded-2xl p-7 shadow-soft border border-border">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Tjänster"
              title="Välj det stöd som passar dig"
              subtitle="Vi erbjuder tre tydliga vägar beroende på vad du vill ha hjälp med."
            />
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                eyebrow="Varför oss"
                title="Vad som skiljer Grau Brothers"
                subtitle="Vår resa i seglingen påverkar hur vi arbetar: strukturerat, fokuserat och med hög närvaro."
                centered={false}
              />
              <ul className="space-y-4 mt-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-muted-foreground">
                    <Sparkles className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img src={sailingRace} alt="Julius och Marius Graudums i tävling" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border shadow-soft p-10 text-center">
            <p className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-5">
              “Vi bygger allt på samma princip som i seglingen: tydlig plan, hårt arbete och kontinuitet.”
            </p>
            <p className="text-muted-foreground">— Julius & Marius Graudums</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Redo att ta nästa steg?"
        text="Berätta vad du vill ha hjälp med så återkommer vi med ett upplägg som passar dig."
        ctaLabel="Kontakta oss"
        href="/kontakt"
      />
    </>
  );
};

export default LandingSections;
