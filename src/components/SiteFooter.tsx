import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/footer-logo.webp";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-19 w-19 rounded-full" />
            <div>
              <div className="font-display text-lg">Anthena School</div>
              <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">Excel with Character</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-75 leading-relaxed">
            Nurturing curious minds and compassionate hearts since 2008. A place where every learner discovers their best self.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/programmes" className="hover:text-accent">Programmes</Link></li>
            <li><Link to="/resources" className="hover:text-accent">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-90">Programmes</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>Early Years (PP1 – PP2)</li>
            <li>Lower Primary</li>
            <li>Upper Primary</li>
            <li>Junior Secondary</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-90">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5 text-accent" /> Sabaki Estate, off Mombasa Road</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5 text-accent" />+254 724 085 534</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5 text-accent" /> anthenaschool@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Anthena School. All rights reserved.</p>
          <p>Excel with Character.</p>
        </div>
      </div>
    </footer>
  );
}
