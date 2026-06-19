import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-brand text-primary-foreground">
      {/* decorative layers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, var(--accent), transparent 50%), radial-gradient(circle at 90% 90%, rgba(255,255,255,0.15), transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance leading-[1.05]">
          {title}{" "}
          {highlight && (
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--accent), #fff)" }}
            >
              {highlight}
            </span>
          )}
        </h1>
        {description && (
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      {/* curved bottom */}
      <svg
        className="block w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,40 C360,100 1080,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
