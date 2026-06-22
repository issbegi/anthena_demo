import { t as school_default } from "./school-BcbEFUwx.js";
import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { t as PageHero } from "./PageHero-CQfQZD71.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Eye, Heart, Quote, Target } from "lucide-react";
//#region src/assets/headteacher.webp
var headteacher_default = "/assets/headteacher-BQGhLkxT.webp";
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "About us",
			title: "A community that helps every child excel —",
			highlight: "with character.",
			description: "Founded in 2008 by a group of Kenyan educators and parents, Anthena School set out to build a place where rigorous learning and warm human formation go hand in hand."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "scale",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative aspect-[16/7] overflow-hidden rounded-3xl ring-glow",
					children: /* @__PURE__ */ jsx("img", {
						src: school_default,
						alt: "Anthena campus",
						className: "h-full w-full object-cover"
					})
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24 grid lg:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ jsxs(ScrollReveal, {
				variant: "left",
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
					children: "Our story"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl text-balance",
					children: "From a single classroom in Garden Estate to a school loved by Nairobi families."
				})]
			}), /* @__PURE__ */ jsxs(ScrollReveal, {
				variant: "right",
				delay: 2,
				className: "lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("p", { children: "What began in 2008 with twelve children in a converted garden cottage has grown into a thriving three-acre campus serving over 480 learners from playgroup through junior secondary." }),
					/* @__PURE__ */ jsx("p", { children: "We have stayed small enough to know every child by name, yet rich enough to offer modern science and ICT labs, a 5,000-title library, an art studio, music rooms and full sports facilities." }),
					/* @__PURE__ */ jsx("p", { children: "Eighteen years on, Anthena alumni are studying at Alliance, Brookhouse, Strathmore, Starehe and top universities across Kenya, the UK and the US — and they tell us our values stayed with them long after the textbooks were closed." })
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-cream/50 py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-3 gap-6",
				children: [
					{
						icon: Target,
						t: "Our Mission",
						d: "To raise confident, curious and compassionate learners who lead with integrity wherever they go."
					},
					{
						icon: Eye,
						t: "Our Vision",
						d: "To be Kenya's most loved school — known for academic excellence and genuine character formation."
					},
					{
						icon: Heart,
						t: "Our Promise",
						d: "Every child known. Every child stretched. Every child celebrated. Every single day."
					}
				].map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
					delay: i + 1,
					children: /* @__PURE__ */ jsxs("article", {
						className: "h-full rounded-2xl bg-card border border-border p-8 hover:-translate-y-1 hover:border-primary transition-all",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "h-12 w-12 grid place-items-center rounded-xl gradient-brand text-primary-foreground",
								children: /* @__PURE__ */ jsx(Icon, { size: 22 })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-2xl",
								children: t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-muted-foreground",
								children: d
							})
						]
					})
				}, t))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24",
			children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsx("h2", {
				className: "font-display text-4xl sm:text-5xl",
				children: "The values we live by."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [
					{
						t: "Curiosity",
						d: "We ask big questions and chase good answers."
					},
					{
						t: "Integrity",
						d: "We do the right thing — even when nobody is watching."
					},
					{
						t: "Excellence",
						d: "We give our best, and then a little more."
					},
					{
						t: "Compassion",
						d: "We treat every person with kindness and respect."
					},
					{
						t: "Discipline",
						d: "We build habits that build futures."
					},
					{
						t: "Service",
						d: "We use our gifts to lift others up."
					}
				].map((v, i) => /* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: i % 3 + 1,
					children: /* @__PURE__ */ jsxs("div", {
						className: "h-full p-7 rounded-2xl bg-cream/60 border border-border hover:border-primary transition",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-accent font-display text-3xl",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-2 font-display text-xl",
								children: v.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: v.d
							})
						]
					})
				}, v.t))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink text-primary-foreground py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ jsxs(ScrollReveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: " Administration"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl max-w-3xl",
					children: "A note from our Principal."
				})] }), /* @__PURE__ */ jsxs(ScrollReveal, {
					variant: "up",
					delay: 2,
					className: "mt-10 grid lg:grid-cols-3 gap-10 items-start",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-1 rounded-3xl overflow-hidden ring-glow aspect-square",
						children: /* @__PURE__ */ jsx("img", {
							src: headteacher_default,
							alt: "Head of School",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("figure", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ jsx(Quote, {
								className: "text-accent",
								size: 32
							}),
							/* @__PURE__ */ jsx("blockquote", {
								className: "mt-4 font-display text-2xl sm:text-3xl leading-snug",
								children: "We believe every child arrives with a unique spark. Our job is not to mould them into someone else, but to help them discover who they were made to be — and equip them to serve the world well."
							}),
							/* @__PURE__ */ jsx("figcaption", {
								className: "mt-6 text-sm",
								children: /* @__PURE__ */ jsx("div", {
									className: "font-semibold",
									children: "Mr. Lawrence Gakonya"
								})
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center",
			children: /* @__PURE__ */ jsxs(ScrollReveal, { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl sm:text-5xl",
					children: "Come see us in person."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground",
					children: "The best way to know a school is to walk its corridors."
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3.5 text-sm font-semibold ring-soft hover:opacity-95 transition",
					children: ["Book a Campus Tour ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
				})
			] })
		})
	] });
}
//#endregion
export { About as component };
