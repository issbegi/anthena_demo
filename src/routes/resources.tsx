import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, BookOpen, Bus, Shirt, Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";
import { Calendar } from "@/components/ui/calendar";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Anthena School" },
      { name: "description", content: "School calendar, term dates and parent resources for Anthena School families." },
      { property: "og:title", content: "Resources — Anthena School" },
      { property: "og:description", content: "Calendar and downloads." },
    ],
  }),
  component: Resources,
});

type Event = { date: Date; title: string; term: string; type: "holiday" };

const events: Event[] = [
  { date: new Date(2026, 0, 1),  title: "New Year's Day",   term: "Holiday", type: "holiday" },
  { date: new Date(2026, 2, 20), title: "Idd-ul-Fitr",      term: "Holiday", type: "holiday" },
  { date: new Date(2026, 3, 3),  title: "Good Friday",      term: "Holiday", type: "holiday" },
  { date: new Date(2026, 3, 6),  title: "Easter Monday",    term: "Holiday", type: "holiday" },
  { date: new Date(2026, 4, 1),  title: "Labour Day",       term: "Holiday", type: "holiday" },
  { date: new Date(2026, 4, 27), title: "Idd-ul-Azha",      term: "Holiday", type: "holiday" },
  { date: new Date(2026, 5, 1),  title: "Madaraka Day",     term: "Holiday", type: "holiday" },
  { date: new Date(2026, 9, 10), title: "Mazingira Day",    term: "Holiday", type: "holiday" },
  { date: new Date(2026, 9, 20), title: "Mashujaa Day",     term: "Holiday", type: "holiday" },
  { date: new Date(2026, 11, 12), title: "Jamhuri Day",     term: "Holiday", type: "holiday" },
  { date: new Date(2026, 11, 25), title: "Christmas Day",   term: "Holiday", type: "holiday" },
  { date: new Date(2026, 11, 26), title: "Boxing Day",      term: "Holiday", type: "holiday" },
];

const downloads = [
  { icon: FileText,     t: "Prospectus 2026",       d: "Full programme guide, fees and admissions info." },
  { icon: CalendarIcon, t: "Academic Calendar 2026", d: "Term dates, events and holidays." },
  { icon: BookOpen,     t: "Curriculum Booklet",     d: "Subjects offered at each grade level." },
  { icon: Shirt,        t: "Uniform Policy",         d: "Approved uniform and PE kit list." },
  { icon: Bus,          t: "Transport Routes",       d: "Bus routes across Nairobi neighbourhoods." },
  { icon: FileText,     t: "Enrolment Forms",        d: "Pre-fill before your admissions interview." },
];

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth()    === b.getMonth()    &&
  a.getDate()     === b.getDate();

const today = new Date();

function Resources() {
  const [selected, setSelected] = useState<Date | undefined>(today);
  const [month, setMonth]       = useState<Date>(today);

  const modifiers = useMemo(
    () => ({
      holiday: events.map((e) => e.date),
    }),
    []
  );

  const selectedEvents = selected ? events.filter((e) => sameDay(e.date, selected)) : [];
  const upcoming = events
    .filter((e) => e.date.getMonth() === month.getMonth() && e.date.getFullYear() === month.getFullYear())
    .sort((a, b) => +a.date - +b.date);

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Everything our parents"
        highlight="need to know."
        description="Browse our interactive school calendar and grab the documents you need — all in one place."
      />

      {/* CALENDAR */}
      <section id="calendar" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 scroll-mt-24">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Interactive calendar</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Academic year 2026.</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Click any highlighted date to see what's happening that day.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition">
              <Download size={16} /> Download PDF
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-8 items-start">
          <ScrollReveal variant="left" className="lg:col-span-3">
            <div className="rounded-3xl bg-card border border-border p-4 sm:p-6 ring-soft">
              <Calendar
                mode="single"
                selected={selected}
                onSelect={setSelected}
                month={month}
                onMonthChange={setMonth}
                today={today}
                showOutsideDays
                className="pointer-events-auto w-full [--cell-size:2.6rem] sm:[--cell-size:3rem]"
                modifiers={modifiers}
                modifiersClassNames={{
                  holiday: "relative font-semibold !text-accent-foreground after:absolute after:inset-1 after:rounded-md after:-z-10 after:bg-accent/40",
                }}
              />
              <div className="mt-5 flex flex-wrap gap-4 text-xs">
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-accent/60" /> Public holiday
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={2} className="lg:col-span-2">
            <div className="rounded-3xl gradient-brand text-primary-foreground p-7 ring-glow">
              <div className="text-xs uppercase tracking-wider opacity-80">
                {selected ? selected.toLocaleDateString("en-GB", { weekday: "long" }) : "Pick a date"}
              </div>
              <div className="mt-1 font-display text-3xl">
                {selected
                  ? selected.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                  : "—"}
              </div>
              <div className="mt-6 space-y-3">
                {selectedEvents.length === 0 && (
                  <p className="text-sm opacity-85">No public holiday today. Regular school day.</p>
                )}
                {selectedEvents.map((e) => (
                  <div key={e.title} className="rounded-xl bg-white/10 backdrop-blur p-4">
                    <div className="text-[10px] uppercase tracking-wider opacity-80">Kenya Public Holiday</div>
                    <div className="mt-1 font-semibold">{e.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-card border border-border p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                {month.toLocaleDateString("en-GB", { month: "long", year: "numeric" })} public holidays
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {upcoming.length === 0 && (
                  <li className="text-muted-foreground">No public holidays this month.</li>
                )}
                {upcoming.map((e) => (
                  <li key={e.title + e.date.toISOString()} className="flex gap-3">
                    <button
                      onClick={() => setSelected(e.date)}
                      className="shrink-0 w-12 text-primary font-semibold hover:underline text-left"
                    >
                      {e.date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}
                    </button>
                    <span className="text-foreground/80">{e.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="bg-cream/50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Downloads</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Quick downloads.</h2>
          </ScrollReveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {downloads.map(({ icon: Icon, ...d }, i) => (
              <ScrollReveal key={d.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-base">{d.t}</div>
                    <div className="text-xs text-muted-foreground">{d.d}</div>
                  </div>
                  <Download size={18} className="text-muted-foreground group-hover:text-primary transition" />
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-14 rounded-3xl bg-card border border-border p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div>
                <h3 className="font-display text-2xl">Got a question we haven't answered?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Browse our FAQs — searchable and organised by topic.</p>
              </div>
              <Link
                to="/faqs"
                className="shrink-0 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Visit FAQs <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}