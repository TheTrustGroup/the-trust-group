import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2";

export interface TTGSectionHeadingProps {
  /** Small uppercase label above the title (e.g. "Selected work"). */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Id placed on the heading so the parent section can use aria-labelledby. */
  id?: string;
  as?: HeadingLevel;
  /** Right-aligned slot on desktop, typically a secondary link. */
  aside?: ReactNode;
  className?: string;
}

/**
 * Heading block for TTG page sections: eyebrow rule, Cormorant title, Jost
 * description. Server component; no motion.
 */
export function TTGSectionHeading({
  eyebrow,
  title,
  description,
  id,
  as = "h2",
  aside,
  className = "",
}: TTGSectionHeadingProps) {
  const Heading = as;
  const titleSize =
    as === "h1"
      ? "text-[clamp(40px,5.5vw,72px)]"
      : "text-[clamp(32px,4vw,52px)]";

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-14 md:mb-20 ${className}`}
    >
      <div className="max-w-[720px]">
        {eyebrow &&
          !(
            typeof title === "string" &&
            eyebrow.toLowerCase() === title.toLowerCase()
          ) && (
            <p
              className="text-[10px] uppercase tracking-[0.18em] mb-6 flex items-center gap-4"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              <span>{eyebrow}</span>
              <span
                className="flex-1 h-px max-w-[120px]"
                style={{ background: "var(--ttg-border)" }}
                aria-hidden
              />
            </p>
          )}
        <Heading
          id={id}
          className={`ttg-serif ${titleSize} leading-[1.02] tracking-[-0.02em]`}
          style={{ color: "var(--ttg-navy)" }}
        >
          {title}
        </Heading>
        {description && (
          <p
            className="mt-6 max-w-[560px] text-[15px] leading-[1.75]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            {description}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0 md:pb-2">{aside}</div>}
    </div>
  );
}
