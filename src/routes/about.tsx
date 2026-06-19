import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Quote, ArrowRight } from "lucide-react";
import campus from "@/assets/school.webp";
import learning from "@/assets/headteacher.webp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Anthena School" },
      { name: "description", content: "Our story, mission, vision and the values that shape Anthena School learners." },
      { property: "og:title", content: "About Anthena School" },
      { property: "og:description", content: "A community helping every child excel — with character." },
      { property: "og:image", content: campus },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="A community that helps every child excel —"
        highlight="with character."
        description="Founded in 2008 by a group of Kenyan educators and parents, Anthena School set out to build a place where rigorous learning and warm human formation go hand in hand."
      />


      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal variant="scale">
          <div className="relative aspect-[16/7] overflow-hidden rounded-3xl ring-glow">
            <img src={campus} alt="Anthena campus" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 grid lg:grid-cols-12 gap-10">
        <ScrollReveal variant="left" className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our story</p>
          <h2 className="mt-3 font-display text-4xl text-balance">From a single classroom in Garden Estate to a school loved by Nairobi families.</h2>
        </ScrollReveal>
        <ScrollReveal variant="right" delay={2} className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
          <p>What began in 2008 with twelve children in a converted garden cottage has grown into a thriving three-acre campus serving over 480 learners from playgroup through junior secondary.</p>
          <p>We have stayed small enough to know every child by name, yet rich enough to offer modern science and ICT labs, a 5,000-title library, an art studio, music rooms and full sports facilities.</p>
          <p>Eighteen years on, Anthena alumni are studying at Alliance, Brookhouse, Strathmore, Starehe and top universities across Kenya, the UK and the US — and they tell us our values stayed with them long after the textbooks were closed.</p>
        </ScrollReveal>
      </section>

      {/* MVP */}
      <section className="bg-cream/50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Our Mission", d: "To raise confident, curious and compassionate learners who lead with integrity wherever they go." },
            { icon: Eye, t: "Our Vision", d: "To be Kenya's most loved school — known for academic excellence and genuine character formation." },
            { icon: Heart, t: "Our Promise", d: "Every child known. Every child stretched. Every child celebrated. Every single day." },
          ].map(({ icon: Icon, t, d }, i) => (
            <ScrollReveal key={t} delay={((i + 1)) as 1 | 2 | 3}>
              <article className="h-full rounded-2xl bg-card border border-border p-8 hover:-translate-y-1 hover:border-primary transition-all">
                <div className="h-12 w-12 grid place-items-center rounded-xl gradient-brand text-primary-foreground"><Icon size={22} /></div>
                <h3 className="mt-5 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl">The values we live by.</h2>
        </ScrollReveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Curiosity", d: "We ask big questions and chase good answers." },
            { t: "Integrity", d: "We do the right thing — even when nobody is watching." },
            { t: "Excellence", d: "We give our best, and then a little more." },
            { t: "Compassion", d: "We treat every person with kindness and respect." },
            { t: "Discipline", d: "We build habits that build futures." },
            { t: "Service", d: "We use our gifts to lift others up." },
          ].map((v, i) => (
            <ScrollReveal key={v.t} variant="up" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="h-full p-7 rounded-2xl bg-cream/60 border border-border hover:border-primary transition">
                <div className="text-accent font-display text-3xl">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-xl">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-ink text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold"> Administration</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">A note from our Principal.</h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={2} className="mt-10 grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 rounded-3xl overflow-hidden ring-glow aspect-square">
              <img src={learning} alt="Head of School" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <figure className="lg:col-span-2">
              <Quote className="text-accent" size={32} />
              <blockquote className="mt-4 font-display text-2xl sm:text-3xl leading-snug">
                We believe every child arrives with a unique spark. Our job is not to mould them into someone else, but to help them discover who they were made to be — and equip them to serve the world well.
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">Mr. Lawrence Gakonya</div>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl">Come see us in person.</h2>
          <p className="mt-3 text-muted-foreground">The best way to know a school is to walk its corridors.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3.5 text-sm font-semibold ring-soft hover:opacity-95 transition">
            Book a Campus Tour <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
