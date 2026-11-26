import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <span className="nb-chip px-3 py-1 font-mono text-xs font-bold uppercase">
          {label}
        </span>
        <h2 className="mt-5 font-display text-3xl uppercase sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
