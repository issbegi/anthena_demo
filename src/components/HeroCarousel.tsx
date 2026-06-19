import { useEffect, useState } from "react";

export type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
};

export function HeroCarousel({ slides, interval = 5500 }: { slides: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className="relative h-[calc(100svh-4.75rem)] min-h-[560px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-center">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute max-w-2xl text-primary-foreground transition-all duration-1000 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
          >
            <span className="inline-flex items-center rounded-full bg-accent/90 text-accent-foreground px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
              {s.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
              {s.title} <span className="text-accent italic">{s.highlight}.</span>
            </h1>
            <p className="mt-5 text-lg opacity-90 max-w-xl leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-6 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}