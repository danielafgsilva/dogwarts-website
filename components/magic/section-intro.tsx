import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { responsive } from "@/lib/responsive-utils";

interface SectionIntroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "center" | "left";
  /** Heading level for correct document outline. */
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

/**
 * Consistent section header (eyebrow badge + serif title + lead) shared across
 * pages — the cohesive "UI" thread. Title uses the Playfair serif for the
 * storybook/magical character.
 */
export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  id,
  className = "",
}: SectionIntroProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <Reveal
      className={`flex flex-col gap-4 ${alignment} ${
        align === "center" ? responsive.maxWidth["3xl"] : ""
      } ${className}`}
    >
      {eyebrow && (
        <Badge
          variant="secondary"
          className="bg-primary/15 text-foreground border-primary/30 font-mono text-xs uppercase tracking-[0.18em]"
        >
          {eyebrow}
        </Badge>
      )}
      {title && (
        <Heading
          id={id}
          className={`${responsive.heading1} font-serif text-balance`}
        >
          {title}
        </Heading>
      )}
      {description && (
        <p
          className={`${responsive.bodyLarge} text-muted-foreground text-pretty ${
            align === "center" ? responsive.maxWidth["2xl"] : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
