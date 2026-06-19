import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programmes", label: "Programmes" },
  { to: "/resources", label: "Resources" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setProgress(p);
      setScrolled(h.scrollTop > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all ${scrolled ? "bg-background/85 border-b border-border/60 shadow-sm" : "bg-background/60"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-18 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="Anthena School logo" className="h-19 w-19 rounded-full" />
          <div className="min-w-0 leading-tight">
            <div className="font-display text-lg font-semibold truncate">Anthena School</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Excel with Character</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
              activeProps={{ className: "relative px-4 py-2 text-sm font-semibold text-primary" }}
            >
              {l.label}
              <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full gradient-brand opacity-0 transition-opacity data-[status=active]:opacity-100" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-semibold ring-soft hover:opacity-95 transition"
          >
            Book a Tour
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[3px] w-full bg-transparent">
        <div className="h-full gradient-brand transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary-soft/60"
                activeProps={{ className: "px-3 py-3 rounded-lg text-sm font-semibold text-primary bg-primary-soft border-l-4 border-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full gradient-brand text-primary-foreground px-5 py-3 text-sm font-semibold">
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}