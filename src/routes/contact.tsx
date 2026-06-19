import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Anthena School" },
      {
        name: "description",
        content:
          "Visit, call or email Anthena School in Garden Estate, Nairobi. Satellite map and quick contact form.",
      },
      { property: "og:title", content: "Contact Anthena School" },
      { property: "og:description", content: "Visit, call or email Anthena School." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, t: "Visit", d: "Garden Estate Road\nNairobi, Kenya" },
    { icon: Phone, t: "Call", d: "+254 712 345 678\n+254 733 222 111" },
    { icon: Mail, t: "Email", d: "hello@anthenaschool.ac.ke\nadmissions@anthenaschool.ac.ke" },
    { icon: Clock, t: "Hours", d: "Mon – Fri · 7:30am – 5pm\nSat · 9am – 12pm" },
  ];
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="We'd love to"
        highlight="hear from you."
        description="Drop us a line, give us a ring, or come for tea — our gates are always open."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, ...c }, i) => (
          <ScrollReveal key={c.t} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <article className="h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 grid place-items-center rounded-xl gradient-brand text-primary-foreground">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{c.d}</p>
            </article>
          </ScrollReveal>
        ))}
      </section>

      {/* FORM + MAP */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-5 gap-8">
        <ScrollReveal variant="left" className="lg:col-span-2">
          <div className="rounded-3xl bg-ink text-primary-foreground p-8 h-full">
            <h2 className="font-display text-3xl">Send us a message</h2>
            <p className="mt-2 opacity-80 text-sm">We typically reply within one working day.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Our team will reach out shortly.");
              }}
            >
              {[
                { l: "Your name", t: "text", p: "Jane Doe" },
                { l: "Email", t: "email", p: "you@example.com" },
                { l: "Phone", t: "tel", p: "+254 7XX XXX XXX" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="text-[11px] uppercase tracking-wider opacity-80">{f.l}</span>
                  <input
                    required
                    type={f.t}
                    placeholder={f.p}
                    className="mt-1 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-[11px] uppercase tracking-wider opacity-80">Message</span>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
                />
              </label>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-warm text-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition">
                Send message <Send size={16} />
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={2} className="lg:col-span-3">
          <div className="rounded-3xl overflow-hidden ring-glow h-full min-h-[500px] relative">
            <iframe
              title="Anthena School satellite map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.583570287907!2d36.95815467472462!3d-1.4254821985610853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f74d1e849b2a3%3A0xad958b4ffa4f96b1!2sAnthena%20School!5e1!3m2!1sen!2ske!4v1781820745891!5m2!1sen!2ske"
              className="w-full h-full border-0 min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://maps.app.goo.gl/bHasLJyr3dfoj1dH7"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-xs font-semibold shadow-md hover:bg-primary hover:text-primary-foreground transition"
            >
              Open in Google Maps <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
