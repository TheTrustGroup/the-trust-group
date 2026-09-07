import type { ReactNode } from "react";

export type EditorialSectionProps = {
  /** Section title (e.g. "What We Do"). Rendered as serif headline. */
  title: string;
  /** Small uppercase label above the title. Omit when it would repeat the title. */
  eyebrow?: string;
  /** Short declarative statements. No bullets, no icons. */
  statements?: string[];
  /** Optional custom content instead of (or in addition to) statements. */
  children?: ReactNode;
  /** Optional id for anchor links. */
  id?: string;
};

/**
 * Editorial content block. Typography-driven, large spacing, no icons or cards.
 * Use for short declarative copy — no marketing fluff. TTG design tokens.
 */
export function EditorialSection({
  title,
  eyebrow,
  statements = [],
  children,
  id,
}: EditorialSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg-white)" }}
      aria-labelledby={headingId}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          {eyebrow && eyebrow.toLowerCase() !== title.toLowerCase() && (
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
          <h2
            id={headingId}
            className="ttg-serif text-[clamp(32px,4vw,52px)] leading-[1.02] tracking-[-0.02em]"
            style={{ color: "var(--ttg-navy)" }}
          >
            {title}
          </h2>
        </div>

        <div className="lg:col-span-8 lg:pt-3">
          {statements.length > 0 && (
            <ul className="list-none m-0 p-0 border-t border-[var(--ttg-border)]">
              {statements.map((statement) => (
                <li
                  key={statement}
                  className="ttg-serif border-b border-[var(--ttg-border)] py-7 text-[clamp(20px,1.8vw,26px)] leading-[1.35]"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {statement}
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
