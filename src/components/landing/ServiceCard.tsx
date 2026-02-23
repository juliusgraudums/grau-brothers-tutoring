import { type LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, bullets, ctaLabel, href, icon: Icon }: ServiceCardProps) => {
  return (
    <article className="bg-card rounded-2xl p-8 shadow-soft border border-border h-full flex flex-col">
      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-5">{description}</p>
      <ul className="space-y-2 mb-6 text-muted-foreground text-sm flex-1">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-fit">
        <Link to={href}>
          {ctaLabel}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </article>
  );
};

export default ServiceCard;
