import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Sparkles,
  Heart,
  GraduationCap,
  Star,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-1.webp";
import sportsImg from "@/assets/hero-2.webp";
import scienceImg from "@/assets/hero-3.webp";
import studentsImg from "@/assets/hero-1.webp";
import campusImg from "@/assets/school.webp";
import drums from "@/assets/drums.webp";
import keepups from "@/assets/keep-ups.webp";
import galDrama from "@/assets/board-ball.webp";
import dramaboy from "@/assets/culture-boy.webp";
import galFootball from "@/assets/football.webp";
import galGrad from "@/assets/hero-2.webp";
import galArt from "@/assets/culture-girl.webp";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthena School — Excel with Character" },
      {
        name: "description",
        content:
          "A vibrant Kenyan primary and junior secondary school where every learner discovers their best self.",
      },
      { property: "og:title", content: "Anthena School — Excel with Character" },
      {
        property: "og:description",
        content:
          "Where curiosity meets character. CBC-aligned learning, modern facilities, inspiring teachers.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const slides = [
    {
      img: heroImg,
      eyebrow: "Admissions open · 2026",
      title: "Where curiosity meets",
      highlight: "character",
      body: "From playgroup to junior secondary, we raise confident, kind and curious learners through a CBC-aligned curriculum and teachers who truly care.",
    },
    {
      img: scienceImg,
      eyebrow: "Hands-on learning",
      title: "Discover. Question.",
      highlight: "create",
      body: "STEM labs, robotics studios and inquiry-led classrooms — children at Anthena learn by doing, every single day.",
    },
    {
      img: sportsImg,
      eyebrow: "Beyond the classroom",
      title: "Strong bodies, strong",
      highlight: "minds",
      body: "Daily sports, music, drama and over twenty co-curricular clubs — because character is built outside the textbook too.",
    },
  ];

  return (
    <main>
      <HeroCarousel slides={slides} />

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-cream/60 py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl text-foreground/60">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              {[
                "Curiosity",
                "Integrity",
                "Excellence",
                "Compassion",
                "Discipline",
                "Creativity",
                "Service",
              ].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w} <Star size={14} className="text-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: "18+", l: "Years teaching excellence" },
            { v: "1:14", l: "Teacher to learner ratio" },
            { v: "98%", l: "Parent satisfaction" },
            { v: "20+", l: "Co-curricular clubs" },
          ].map((s, i) => (
            <ScrollReveal key={s.l} delay={(i + 1) as 1 | 2 | 3 | 4} variant="up">
              <div className="rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all">
                <div className="font-display text-5xl text-gradient">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <ScrollReveal variant="left" className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Why Anthena
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">
              A school designed around how children actually learn.
            </h2>
          </ScrollReveal>
          <ScrollReveal
            variant="right"
            delay={2}
            as="p"
            className="lg:col-span-5 text-muted-foreground"
          >
            Small classes. Inquiry-led lessons. Outdoor time every day. Our approach blends Kenya's
            CBC framework with global best practice — so children leave us as confident
            communicators, problem-solvers and good people.
          </ScrollReveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              t: "CBC-aligned curriculum",
              d: "Mapped to KICD outcomes with enriched literacy, numeracy and Kiswahili.",
            },
            {
              icon: GraduationCap,
              t: "Exceptional teachers",
              d: "TSC-registered educators trained in inquiry, differentiation and SEL.",
            },
            {
              icon: Users,
              t: "Small class sizes",
              d: "A maximum of 18 learners per class so every voice is heard.",
            },
            {
              icon: Trophy,
              t: "Sports & arts",
              d: "From football to chess, drama to coding — over 20 co-curricular clubs.",
            },
            {
              icon: Heart,
              t: "Pastoral care",
              d: "Daily values circle, counsellors on staff and a real anti-bullying culture.",
            },
            {
              icon: Sparkles,
              t: "Modern facilities",
              d: "STEM lab, library, art studio, multi-purpose hall and green play spaces.",
            },
          ].map(({ icon: Icon, t, d }, i) => (
            <ScrollReveal key={t} variant="up" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="group h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition-all">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-gradient-to-b from-cream/40 to-background py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Life at Anthena
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              A school day full of discovery.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              {
                img: drums,
                t: "Music & rhythm",
                d: "From percussion to melody, every child finds their voice through live performance and ensemble play.",
              },
              {
                img: dramaboy,
                t: "Drama & expression",
                d: "Confidence, creativity and empathy — built one stage at a time through storytelling and performance.",
              },
              {
                img: keepups,
                t: "Sports & fitness",
                d: "From football to athletics, we build discipline, teamwork and resilience through daily movement and play.",
              },
            ].map((c, i) => (
              <ScrollReveal key={c.t} variant="scale" delay={(i + 1) as 1 | 2 | 3}>
                <article className="group relative rounded-3xl overflow-hidden ring-soft aspect-[4/5]">
                  <img
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                    <h3 className="font-display text-2xl">{c.t}</h3>
                    <p className="text-sm opacity-90 mt-1">{c.d}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">
            Moments from our school year.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            From classroom adventures to sports days, drama nights and graduations.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={2} className="mt-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              { src: galFootball, caption: "Inter-house football final", orientation: "landscape" },
              { src: keepups, caption: "Reading hour in the library", orientation: "portrait" },
              { src: dramaboy, caption: "Robotics & coding club", orientation: "portrait" },
              { src: galGrad, caption: "Class of 2025 graduation", orientation: "landscape" },
              {
                src: studentsImg,
                caption: "Discovery in the science lab",
                orientation: "landscape",
              },
              { src: galArt, caption: "Studio time in the art block", orientation: "portrait" },
              { src: galDrama, caption: "End-of-term drama festival", orientation: "portrait" },
              {
                src: scienceImg,
                caption: "Discovery in the science lab",
                orientation: "landscape",
              },
            ].map((item) => (
              <figure
                key={item.caption}
                className="break-inside-avoid overflow-hidden rounded-2xl group relative"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
              </figure>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CAMPUS CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal variant="left">
            <div className="relative rounded-3xl overflow-hidden ring-glow">
              <img
                src={campusImg}
                alt="Anthena School campus"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={2}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Our campus
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">
              A green, safe and inspiring place to grow.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Set on three acres of leafy gardens in Garden Estate, our purpose-built campus has
              airy classrooms, a 5,000-title library, STEM and ICT labs, an art studio and generous
              outdoor play spaces. CCTV-secured, fenced and full of life.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "24/7 secure campus",
                "Nutritious hot lunches",
                "Free WiFi & ICT lab",
                "School bus across Nairobi",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-primary transition"
            >
              Book a Campus Tour <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Parent voices
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Loved by families across Kenya.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Our daughter wakes up excited for school. The teachers know her, see her, and stretch her every day.",
                n: "Wanjiku M.",
                r: "Parent, Grade 4",
              },
              {
                q: "Anthena balances strong academics with real character formation. We see it in how our son speaks and behaves.",
                n: "David & Faith K.",
                r: "Parents, Grade 6",
              },
              {
                q: "Small classes, modern facilities and warm community. Honestly the best decision we made.",
                n: "Aisha O.",
                r: "Parent, PP2",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.n} delay={(i + 1) as 1 | 2 | 3} variant="up">
                <figure className="h-full rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur">
                  <Quote className="text-accent" />
                  <blockquote className="mt-4 text-sm leading-relaxed opacity-95">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <div className="font-semibold">{t.n}</div>
                    <div className="opacity-70 text-xs">{t.r}</div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <ScrollReveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 sm:p-16 text-primary-foreground">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl text-balance">
                  Join the Anthena family.
                </h2>
                <p className="mt-4 opacity-90 max-w-lg">
                  Limited places for the 2026 academic year. Book a tour, meet our teachers and feel
                  the Anthena difference for yourself.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold hover:bg-accent transition"
                >
                  Book a Tour <ArrowRight size={16} />
                </Link>
                <Link
                  to="/programmes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
