import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { t as PageHero } from "./PageHero-CQfQZD71.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Contact us",
			title: "We'd love to",
			highlight: "hear from you.",
			description: "Drop us a line, give us a ring, or come for tea — our gates are always open."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
			children: [
				{
					icon: MapPin,
					t: "Visit",
					d: "Garden Estate Road\nNairobi, Kenya"
				},
				{
					icon: Phone,
					t: "Call",
					d: "+254 712 345 678\n+254 733 222 111"
				},
				{
					icon: Mail,
					t: "Email",
					d: "hello@anthenaschool.ac.ke\nadmissions@anthenaschool.ac.ke"
				},
				{
					icon: Clock,
					t: "Hours",
					d: "Mon – Fri · 7:30am – 5pm\nSat · 9am – 12pm"
				}
			].map(({ icon: Icon, ...c }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
				delay: i + 1,
				children: /* @__PURE__ */ jsxs("article", {
					className: "h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-12 w-12 grid place-items-center rounded-xl gradient-brand text-primary-foreground",
							children: /* @__PURE__ */ jsx(Icon, { size: 22 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-display text-xl",
							children: c.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground whitespace-pre-line",
							children: c.d
						})
					]
				})
			}, c.t))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-5 gap-8",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				variant: "left",
				className: "lg:col-span-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl bg-ink text-primary-foreground p-8 h-full",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl",
							children: "Send us a message"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 opacity-80 text-sm",
							children: "We typically reply within one working day."
						}),
						/* @__PURE__ */ jsxs("form", {
							className: "mt-6 space-y-4",
							onSubmit: (e) => {
								e.preventDefault();
								alert("Thanks! Our team will reach out shortly.");
							},
							children: [
								[
									{
										l: "Your name",
										t: "text",
										p: "Jane Doe"
									},
									{
										l: "Email",
										t: "email",
										p: "you@example.com"
									},
									{
										l: "Phone",
										t: "tel",
										p: "+254 7XX XXX XXX"
									}
								].map((f) => /* @__PURE__ */ jsxs("label", {
									className: "block",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] uppercase tracking-wider opacity-80",
										children: f.l
									}), /* @__PURE__ */ jsx("input", {
										required: true,
										type: f.t,
										placeholder: f.p,
										className: "mt-1 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
									})]
								}, f.l)),
								/* @__PURE__ */ jsxs("label", {
									className: "block",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] uppercase tracking-wider opacity-80",
										children: "Message"
									}), /* @__PURE__ */ jsx("textarea", {
										rows: 4,
										required: true,
										placeholder: "How can we help?",
										className: "mt-1 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
									})]
								}),
								/* @__PURE__ */ jsxs("button", {
									className: "w-full inline-flex items-center justify-center gap-2 rounded-full gradient-warm text-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition",
									children: ["Send message ", /* @__PURE__ */ jsx(Send, { size: 16 })]
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "right",
				delay: 2,
				className: "lg:col-span-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl overflow-hidden ring-glow h-full min-h-[500px] relative",
					children: [/* @__PURE__ */ jsx("iframe", {
						title: "Anthena School satellite map",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.583570287907!2d36.95815467472462!3d-1.4254821985610853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f74d1e849b2a3%3A0xad958b4ffa4f96b1!2sAnthena%20School!5e1!3m2!1sen!2ske!4v1781820745891!5m2!1sen!2ske",
						className: "w-full h-full border-0 min-h-[500px]",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						allowFullScreen: true
					}), /* @__PURE__ */ jsxs("a", {
						href: "https://maps.app.goo.gl/bHasLJyr3dfoj1dH7",
						target: "_blank",
						rel: "noreferrer",
						className: "absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-xs font-semibold shadow-md hover:bg-primary hover:text-primary-foreground transition",
						children: ["Open in Google Maps ", /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
					})]
				})
			})]
		})
	] });
}
//#endregion
export { Contact as component };
