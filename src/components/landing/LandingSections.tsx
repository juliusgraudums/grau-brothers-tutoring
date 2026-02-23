import { Anchor, BookOpen, Sparkles, Wrench, Sailboat, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/landing/SectionHeader";
import ServiceCard from "@/components/landing/ServiceCard";
import CTASection from "@/components/landing/CTASection";
import sailingRace from "@/assets/sailing-race.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const sponsorshipPoints = [
  "Vi tränar och tävlar målmedvetet med en långsiktig satsning inom ILCA.",
  "Stöd från partners hjälper oss att lägga mer tid på träning, resor och utveckling.",
  "Vi vill bygga samarbeten som känns äkta och hållbara för båda parter.",
];

const LandingSections = () => {
  return (
    <>
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide mb-8 text-secondary text-center">Tjänster</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
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

      <section id="mission" className="py-20 bg-background">
        <div id="sailing-satsning" className="container mx-auto px-6 scroll-mt-24">
          <div className="max-w-5xl mx-auto bg-background rounded-3xl border border-border shadow-soft p-10 md:p-12">
            <SectionHeader
              eyebrow="Seglingssatsning"
              title="Vår väg mot nästa nivå i ILCA"
              subtitle="Seglingen är en lika viktig del av Grau Brothers som våra tjänster. Vi driver satsningen ödmjukt och målmedvetet, och söker partners som vill följa resan."
              centered={false}
            />
            <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
              <ul className="space-y-4">
                {sponsorshipPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted-foreground">
                    <Sailboat className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-muted/40 rounded-2xl p-6 border border-border">
                <p className="text-foreground font-medium mb-4">Vill du veta mer om samarbete eller sponsring?</p>
                <p className="text-muted-foreground text-sm mb-5">
                  Hör gärna av dig så berättar vi mer om vår plan framåt och hur ett samarbete kan se ut.
                </p>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full" asChild>
                  <Link to="/kontakt">
                    Kontakta oss om sponsring
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
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
