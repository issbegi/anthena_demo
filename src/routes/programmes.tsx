import { createFileRoute } from "@tanstack/react-router";
import {
  Baby, BookOpen, Calculator, Globe, FlaskConical, Music, Palette,
  Code, Trophy, Library, Dumbbell, Bus, Shield, Drama, Puzzle,
  Leaf, Users, Megaphone, Brain, HeartHandshake, X, ChevronLeft, ChevronRight,
  Maximize2, Minimize2, Download,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";
import { useState, useCallback, useEffect } from "react";
import tae from "@/assets/tae-kwondo.webp";
import sports from "@/assets/football.webp";
import lab from "@/assets/hero-2.webp";
import culture from "@/assets/culture-boy.webp";


export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title: "Programmes — Anthena School" },
      { name: "description", content: "Our CBC-aligned academic stages, modern facilities and co-curricular clubs at Anthena School." },
      { property: "og:title", content: "Programmes at Anthena School" },
      { property: "og:description", content: "Stages, facilities and clubs." },
    ],
  }),
  component: Programmes,
});

// ─── Lightbox ────────────────────────────────────────────────────────────────
interface LightboxImage { src: string; alt: string; caption?: string }

const ANIM_STYLE = `
  @keyframes lb-backdrop-in { from { opacity:0 } to { opacity:1 } }
  @keyframes lb-img-in      { from { opacity:0; transform:scale(0.9) } to { opacity:1; transform:scale(1) } }
  @keyframes lb-slide-next  { from { opacity:0; transform:translateX(32px) scale(0.96) } to { opacity:1; transform:translateX(0) scale(1) } }
  @keyframes lb-slide-prev  { from { opacity:0; transform:translateX(-32px) scale(0.96) } to { opacity:1; transform:translateX(0) scale(1) } }
  .lb-backdrop  { animation: lb-backdrop-in 200ms ease both }
  .lb-img-in    { animation: lb-img-in      260ms cubic-bezier(0.34,1.2,0.64,1) both }
  .lb-next      { animation: lb-slide-next  220ms cubic-bezier(0.34,1.2,0.64,1) both }
  .lb-prev      { animation: lb-slide-prev  220ms cubic-bezier(0.34,1.2,0.64,1) both }
  .lb-btn {
    display:grid; place-items:center;
    width:40px; height:40px; border-radius:10px;
    background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12);
    color:rgba(255,255,255,0.75); cursor:pointer; transition:all 140ms ease;
    flex-shrink:0;
  }
  .lb-btn:hover { background:rgba(255,255,255,0.18); color:#fff; transform:scale(1.06); }
  .lb-btn:active { transform:scale(0.94); }
  .lb-btn svg { width:18px; height:18px; }
`;

function Lightbox({ images }: { images: LightboxImage[] }) {
  const [open, setOpen]           = useState<number | null>(null);
  const [isFullscreen, setIsFs]   = useState(false);
  const [animClass, setAnimClass] = useState("lb-img-in");

  // Inject styles once
  useEffect(() => {
    if (document.getElementById("lb-styles")) return;
    const el = document.createElement("style");
    el.id = "lb-styles";
    el.textContent = ANIM_STYLE;
    document.head.appendChild(el);
  }, []);

  // Scroll lock
  useEffect(() => {
    if (open === null) return;
    const saved = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = saved; };
  }, [open]);

  // Sync fullscreen state if user presses browser Esc
  useEffect(() => {
    const handler = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const openAt = useCallback((i: number, anim = "lb-img-in") => {
    setAnimClass(anim);
    setOpen(i);
  }, []);

  const close = useCallback(() => {
    setOpen(null);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setIsFs(false);
  }, []);

  const navigate = useCallback((dir: "prev" | "next") => {
    setOpen(cur => {
      if (cur === null) return null;
      const next = dir === "next"
        ? (cur + 1) % images.length
        : (cur - 1 + images.length) % images.length;
      setAnimClass(dir === "next" ? "lb-next" : "lb-prev");
      return next;
    });
  }, [images.length]);

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const download = useCallback(() => {
    if (open === null) return;
    const { src, alt } = images[open];
    const a = document.createElement("a");
    a.href = src;
    a.download = alt.replace(/\s+/g, "-").toLowerCase() + ".jpg";
    a.click();
  }, [open, images]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "f")          toggleFs();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, navigate, toggleFs]);

  return (
    <>
      {/* ── Thumbnail grid — now clickable, with always-visible captions ── */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-border shadow-sm
              hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
              transition-all duration-300 text-left"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient for legibility, slightly stronger on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
              opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow-sm">
                  {img.caption}
                </span>
              </div>
            )}

            {/* Expand hint */}
            <div className="absolute top-2 right-2 h-7 w-7 grid place-items-center rounded-full
              bg-white/15 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={14} />
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox overlay ── */}
      {open !== null && (
        <div
          className="lb-backdrop fixed inset-0 z-[200] bg-black/92 backdrop-blur-md"
          style={{ display: "flex", flexDirection: "column" }}
          onClick={close}
          role="dialog"
          aria-modal
          aria-label="Image viewer"
        >
          {/* TOP BAR — always visible, fixed height */}
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 16px", flexShrink: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
            }}
            onClick={e => e.stopPropagation()}
          >
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontVariantNumeric: "tabular-nums" }}>
              {open + 1} / {images.length}
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="lb-btn" onClick={download} title="Download">
                <Download />
              </button>
              <button className="lb-btn" onClick={toggleFs} title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
                {isFullscreen ? <Minimize2 /> : <Maximize2 />}
              </button>
              <button className="lb-btn" onClick={close} title="Close (Esc)">
                <X />
              </button>
            </div>
          </div>

          {/* MIDDLE — image + side arrows, takes remaining space */}
          <div
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              gap: 12, padding: "0 12px", minHeight: 0, overflow: "hidden" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Prev arrow */}
            <button className="lb-btn" onClick={() => navigate("prev")} aria-label="Previous image" style={{ flexShrink: 0 }}>
              <ChevronLeft />
            </button>

            {/* Image — constrained so it never overflows into toolbar/thumbnails */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center",
              minWidth: 0, maxHeight: "100%" }}>
              <img
                key={`${open}-${animClass}`}
                src={images[open].src}
                alt={images[open].alt}
                className={animClass}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: 14,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
                  display: "block",
                }}
              />
            </div>

            {/* Next arrow */}
            <button className="lb-btn" onClick={() => navigate("next")} aria-label="Next image" style={{ flexShrink: 0 }}>
              <ChevronRight />
            </button>
          </div>

          {/* BOTTOM BAR — caption + thumbnails */}
          <div
            style={{
              flexShrink: 0, padding: "12px 16px 20px",
              background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
            }}
            onClick={e => e.stopPropagation()}
          >
            {images[open].caption && (
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: 0, textAlign: "center" }}>
                {images[open].caption}
              </p>
            )}

            {/* Thumbnail strip */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openAt(i, i > open ? "lb-next" : "lb-prev")}
                  aria-label={`Go to image ${i + 1}`}
                  style={{
                    padding: 0, border: "none", cursor: "pointer", borderRadius: 8, overflow: "hidden",
                    width: i === open ? 56 : 44, height: i === open ? 40 : 32,
                    opacity: i === open ? 1 : 0.45,
                    outline: i === open ? "2px solid white" : "none",
                    outlineOffset: 2,
                    transition: "all 200ms ease", flexShrink: 0,
                  }}
                >
                  <img src={img.src} alt={img.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </button>
              ))}
            </div>

            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: "0.12em",
              textTransform: "uppercase", margin: 0, userSelect: "none" }}>
              ← → navigate · F fullscreen · Esc close
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function Programmes() {
  const stages = [
    { icon: Baby, t: "Early Years", grade: "PP1 – PP2 · Ages 4–5", d: "Play-based learning that builds language, numeracy and social confidence. Daily story-time, sand & water, music and movement." },
    { icon: BookOpen, t: "Lower Primary", grade: "Grade 1 – 3 · Ages 6–8", d: "Strong foundations in literacy and numeracy with rich storytelling, phonics, environmental activities and inquiry." },
    { icon: Calculator, t: "Upper Primary", grade: "Grade 4 – 6 · Ages 9–11", d: "Subject specialists in maths, science and languages, research projects, public speaking and confident self-expression." },
    { icon: Globe, t: "Junior Secondary", grade: "Grade 7 – 9 · Ages 12–14", d: "Pathway-ready learners — STEM, languages, performing arts, agriculture and pre-tech in depth, with strong mentorship." },
  ];

  const facilities = [
    { icon: Library, t: "Classrooms", d: "Dedicated rooms for Nursery, Junior School and Junior High, designed around CBC learning principles." },
    { icon: Code, t: "ICT & Digital Learning", d: "Computer and technology tools with digital literacy integrated across subjects from the earliest grades." },
    { icon: BookOpen, t: "Library & Study Support", d: "Reading and learning resources for independent study and research, accessible to all learners." },
    { icon: Dumbbell, t: "Sports Field", d: "Open grass field with space for football, athletics and inter-house competitions." },
    { icon: Drama, t: "Arts & Performance Space", d: "Dedicated areas for drama, music performances, cultural days and school-wide events." },
    { icon: Palette, t: "Creative Spaces", d: "Art and craft activity areas with display space for student exhibitions and project showcases." },
    { icon: Bus, t: "School Transport", d: "Reliable bus service covering Athi River and surrounding areas, keeping learners safe on every journey." },
    { icon: Leaf, t: "Outdoor & Play Areas", d: "Playground and open recreational spaces where learners unwind, play and connect between lessons." },
  ];

  const clubs = [
    // Sports
    { icon: Trophy, t: "Football", d: "Training sessions and inter-school fixtures for all levels.", cat: "Sports" },
    { icon: Dumbbell, t: "Athletics", d: "Track and field disciplines with regular inter-house meets.", cat: "Sports" },
    { icon: Shield, t: "Physical Fitness & PE", d: "Structured fitness activities complementing the PE curriculum.", cat: "Sports" },
    // Academic
    { icon: Brain, t: "Chess Club", d: "Strategic thinking, tournaments and competitive play.", cat: "Academic" },
    { icon: FlaskConical, t: "Science & STEM", d: "Hands-on experiments and applied problem-solving.", cat: "Academic" },
    { icon: Code, t: "ICT & Coding", d: "Scratch, Python and web development for curious minds.", cat: "Academic" },
    { icon: Puzzle, t: "Problem-Solving", d: "Academic enrichment challenges and lateral-thinking games.", cat: "Academic" },
    // Creative Arts
    { icon: Palette, t: "Art & Craft", d: "Drawing, painting and student exhibitions.", cat: "Creative Arts" },
    // Performing Arts
    { icon: Drama, t: "Drama Club", d: "Termly productions, improv and cultural day performances.", cat: "Performing Arts" },
    { icon: Users, t: "Dance Activities", d: "Contemporary, traditional African and cultural routines.", cat: "Performing Arts" },
    { icon: BookOpen, t: "Poetry & Spoken Word", d: "Performance poetry and spoken word for events.", cat: "Performing Arts" },
    // Music
    { icon: Music, t: "School Choir", d: "Group singing, performances at ceremonies and music events.", cat: "Music" },
    // Environment & Community
    { icon: Leaf, t: "Eco Club", d: "Tree planting, clean-ups and climate awareness projects.", cat: "Environment" },
    { icon: HeartHandshake, t: "Community Service", d: "School and neighbourhood outreach and service projects.", cat: "Environment" },
    // Leadership
    { icon: Megaphone, t: "Debate & Public Speaking", d: "Structured debate practice and event-based competitions.", cat: "Leadership" },
    { icon: Globe, t: "Student Leadership", d: "Prefects, class monitors and learner governance.", cat: "Leadership" },
  ];

  // Four gallery images — using the four imported assets
  const gallery: LightboxImage[] = [
    { src: tae, alt: "Taekwondo practice", caption: "Taekwondo training" },
    { src: sports, alt: "Football session", caption: "Football on the field" },
    { src: lab, alt: "Science Lab", caption: "Science Lab" },
    { src: culture, alt: "Cultural day", caption: "Cultural day celebrations" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Programmes"
        title="A curriculum that grows"
        highlight="with your child."
        description="Aligned to Kenya's Competency-Based Curriculum and enriched with global best practice in STEM, arts, languages and character education."
      />

      {/* STAGES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map(({ icon: Icon, ...s }, i) => (
          <ScrollReveal key={s.t} delay={((i + 1)) as 1 | 2 | 3 | 4}>
            <article className="h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary"><Icon size={22} /></div>
              <h3 className="mt-5 font-display text-xl">{s.t}</h3>
              <p className="text-xs text-primary uppercase tracking-wider mt-1">{s.grade}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </article>
          </ScrollReveal>
        ))}
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="bg-cream/50 py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <ScrollReveal variant="left" className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Facilities</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Spaces built for every kind of learner.</h2>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={2} as="p" className="lg:col-span-5 text-muted-foreground">
              From well-resourced classrooms and a growing library to a sports field, creative spaces and reliable transport — every facility supports a well-rounded school day.
            </ScrollReveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map(({ icon: Icon, ...f }, i) => (
              <ScrollReveal key={f.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all">
                  <div className="h-10 w-10 grid place-items-center rounded-lg gradient-brand text-primary-foreground"><Icon size={18} /></div>
                  <h3 className="mt-4 font-display text-base">{f.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section id="clubs" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <ScrollReveal variant="left" className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Clubs & co-curricular</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Something for every curious, creative, competitive learner.</h2>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={2} as="p" className="lg:col-span-5 text-muted-foreground">
            Every learner picks at least two clubs each term. Clubs meet regularly and culminate in showcases, inter-school competitions and community service.
          </ScrollReveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clubs.map(({ icon: Icon, ...c }, i) => (
            <ScrollReveal key={c.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <article className="group h-full rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition">
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">{c.cat}</p>
                <h3 className="mt-1 font-display text-base">{c.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Image lightbox gallery */}
        <ScrollReveal variant="scale" className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">Life at Anthena</p>
          <Lightbox images={gallery} />
        </ScrollReveal>
      </section>
    </main>
  );
}