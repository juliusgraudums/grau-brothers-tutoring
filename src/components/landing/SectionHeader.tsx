interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  const headingClass = light ? "text-primary-foreground" : "text-foreground";
  const subtitleClass = light ? "text-primary-foreground/75" : "text-muted-foreground";
  const eyebrowClass = light ? "text-secondary" : "text-secondary";

  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wide mb-3 ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${headingClass}`}>{title}</h2>
      {subtitle && <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
