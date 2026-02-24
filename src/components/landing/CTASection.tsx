import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
}

const CTASection = ({ title, text, ctaLabel, href }: CTASectionProps) => {
  return (
    <section className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h2>
          <p className="text-primary-foreground/75 text-lg mb-8">{text}</p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8" asChild>
            <Link to={href}>
              {ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
