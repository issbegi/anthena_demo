import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Anthena School" },
      { name: "description", content: "Frequently asked questions about admissions, fees, curriculum, transport and life at Anthena School." },
      { property: "og:title", content: "FAQs — Anthena School" },
      { property: "og:description", content: "Answers to the questions Parents ask us most." },
    ],
  }),
  component: FAQs,
});

const faqs = [
  { cat: "Admissions", q: "What is your admissions process?", a: "Submit our enquiry form, attend a campus tour, complete an age-appropriate friendly assessment, and receive your offer within five working days." },
  { cat: "Admissions", q: "Can I visit before applying?", a: "Absolutely. We run open mornings every Friday at 10am and welcome individual tours by appointment." },
  { cat: "Fees", q: "What are the school fees?", a: "Termly fees range from KES 78,000 (PP1) to KES 145,000 (Grade 9). A detailed schedule with sibling discounts is available from the admissions office." },
  { cat: "Fees", q: "Do you offer scholarships or bursaries?", a: "Yes. We award up to 12 partial scholarships each year based on academic merit, talent and demonstrated financial need. Applications open every September." },
  { cat: "Academics", q: "What curriculum do you follow?", a: "We follow Kenya's Competency-Based Curriculum (CBC), enriched with literacy, numeracy, Kiswahili, ICT, French and global citizenship streams." },
  { cat: "Academics", q: "What are your class sizes?", a: "We cap classes at 18 learners in Early Years and 22 in Upper Primary and Junior Secondary, with at least one teaching assistant per Lower Primary class." },
  { cat: "Academics", q: "What is your approach to homework?", a: "Light, purposeful and family-friendly. Maximum 30 minutes per night in Lower Primary and 60 minutes in Junior Secondary — including reading." },
  { cat: "Life", q: "Do you provide transport?", a: "Yes. Our GPS-tracked, seat-belted school buses serve routes across Nairobi including Ridgeways, Runda, Kileleshwa, Lavington and Kasarani." },
  { cat: "Life", q: "What about lunch and dietary needs?", a: "Hot, nutritious lunches are prepared on-site. We comfortably cater to vegetarian, halal and most common allergy requirements." },
  { cat: "Life", q: "How do you handle pastoral care and discipline?", a: "Every class begins the day with a values circle. We have full-time counsellors on staff and a firm, restorative approach to discipline that prioritises growth and accountability." },
];

const categories = ["All", "Admissions", "Fees", "Academics", "Life"] as const;

function highlight(text: string, term: string): string {
  if (!term.trim()) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark class=\"bg-yellow-200 rounded-sm px-px\">$1</mark>");
}

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");

  const handleCatChange = (c: (typeof categories)[number]) => {
    setCat(c);
    setOpen(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    setOpen(null);
  };

  const filtered = useMemo(() => {
    return faqs
      .map((f, idx) => ({ ...f, idx }))
      .filter((f) => (cat === "All" ? true : f.cat === cat))
      .filter((f) =>
        q.trim()
          ? (f.q + " " + f.a).toLowerCase().includes(q.toLowerCase())
          : true
      );
  }, [cat, q]);

  return (
    <main>
      <PageHero
        eyebrow="FAQs"
        title="Questions we"
        highlight="get asked most."
        description="Search by keyword or filter by topic. Still can't find your answer? Drop us a line."
      />

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            {/* Search input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={handleSearch}
                placeholder="Search FAQs…"
                className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCatChange(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    cat === c
                      ? "gradient-brand text-primary-foreground"
                      : "bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Single ScrollReveal wraps the whole list so individual items
            are never unmounted/remounted by the intersection observer */}
        <ScrollReveal>
          <div className="mt-8 space-y-3">
            {filtered.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-12">
                No FAQs match your search.
              </p>
            )}

            {filtered.map((f) => {
              const isOpen = open === f.idx;
              return (
                <article
                  key={f.idx}
                  className={`rounded-2xl border bg-card transition-all ${
                    isOpen ? "border-primary shadow-sm" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : f.idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-wider rounded-full bg-primary-soft text-primary px-2 py-1 font-semibold">
                        {f.cat}
                      </span>
                      <span
                        className="font-display text-lg"
                        dangerouslySetInnerHTML={{ __html: highlight(f.q, q) }}
                      />
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: highlight(f.a, q) }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 rounded-3xl gradient-brand text-primary-foreground p-8 sm:p-12 text-center ring-glow">
            <h2 className="font-display text-3xl sm:text-4xl">Still have questions?</h2>
            <p className="mt-3 opacity-90">Our admissions team responds within one working day.</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}