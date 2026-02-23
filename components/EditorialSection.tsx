import type { ReactNode } from "react";

export type EditorialSectionProps = {
  /** Section title (e.g. "What We Do"). Rendered as serif headline. */
  title: string;
  /** Short declarative statements. No bullets, no icons. */
  statements?: string[];
  /** Optional custom content instead of (or in addition to) statements. */
  children?: ReactNode;
  /** Optional id for anchor links. */
  id?: string;
};

/**
 * Editorial content block. Typography-driven, large spacing, no icons or cards.
 * Use for short declarative copy — no marketing fluff.
 */
export function EditorialSection({
  title,
  statements = [],
  children,
  id,
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className="w-full"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-editorial px-6 py-section sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2
            id={id ? `${id}-heading` : undefined}
            className="font-serif text-headline-lg font-medium text-foreground"
          >
            {title}
          </h2>
          {statements.length > 0 && (
            <ul className="mt-12 list-none space-y-8 pl-0 [&>li]:pl-0">
              {statements.map((statement, i) => (
                <li key={i} className="font-sans text-body-lg text-foreground">
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
