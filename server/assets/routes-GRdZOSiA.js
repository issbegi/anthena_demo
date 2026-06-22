import { t as school_default } from "./school-BcbEFUwx.js";
import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { n as culture_boy_default, r as hero_2_default, t as football_default } from "./football-CfmYSdNN.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, GraduationCap, Heart, Quote, Sparkles, Star, Trophy, Users } from "lucide-react";
//#region src/assets/hero-1.webp
var hero_1_default = "/assets/hero-1-BXLoxHSK.webp";
//#endregion
//#region src/assets/hero-3.webp
var hero_3_default = "/assets/hero-3-Dcf7I9l4.webp";
//#endregion
//#region src/assets/drums.webp
var drums_default = "/assets/drums-rnEbhKOc.webp";
//#endregion
//#region src/assets/keep-ups.webp
var keep_ups_default = "/assets/keep-ups-DyPuEFp4.webp";
//#endregion
//#region src/assets/board-ball.webp
var board_ball_default = "/assets/board-ball-KnCINeMP.webp";
//#endregion
//#region src/assets/culture-girl.webp
var culture_girl_default = "/assets/culture-girl-Cp3mAfC8.webp";
//#endregion
//#region src/components/HeroCarousel.tsx
function HeroCarousel({ slides, interval = 5500 }) {
	const [i, setI] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setI((v) => (v + 1) % slides.length), interval);
		return () => clearInterval(id);
	}, [slides.length, interval]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative h-[calc(100svh-4.75rem)] min-h-[560px] w-full overflow-hidden",
		children: [
			slides.map((s, idx) => /* @__PURE__ */ jsxs("div", {
				className: `absolute inset-0 transition-opacity duration-[1400ms] ease-out ${idx === i ? "opacity-100" : "opacity-0"}`,
				"aria-hidden": idx !== i,
				children: [
					/* @__PURE__ */ jsx("img", {
						src: s.img,
						alt: "",
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" })
				]
			}, idx)),
			/* @__PURE__ */ jsx("div", {
				className: "relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-center",
				children: slides.map((s, idx) => /* @__PURE__ */ jsxs("div", {
					className: `absolute max-w-2xl text-primary-foreground transition-all duration-1000 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-flex items-center rounded-full bg-accent/90 text-accent-foreground px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]",
							children: s.eyebrow
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance",
							children: [
								s.title,
								" ",
								/* @__PURE__ */ jsxs("span", {
									className: "text-accent italic",
									children: [s.highlight, "."]
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-lg opacity-90 max-w-xl leading-relaxed",
							children: s.body
						})
					]
				}, idx))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10",
				children: slides.map((_, idx) => /* @__PURE__ */ jsx("button", {
					"aria-label": `Slide ${idx + 1}`,
					onClick: () => setI(idx),
					className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-6 bg-white/40 hover:bg-white/70"}`
				}, idx))
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(HeroCarousel, { slides: [
			{
				img: hero_1_default,
				eyebrow: "Admissions open · 2026",
				title: "Where curiosity meets",
				highlight: "character",
				body: "From playgroup to junior secondary, we raise confident, kind and curious learners through a CBC-aligned curriculum and teachers who truly care."
			},
			{
				img: hero_3_default,
				eyebrow: "Hands-on learning",
				title: "Discover. Question.",
				highlight: "create",
				body: "STEM labs, robotics studios and inquiry-led classrooms — children at Anthena learn by doing, every single day."
			},
			{
				img: hero_2_default,
				eyebrow: "Beyond the classroom",
				title: "Strong bodies, strong",
				highlight: "minds",
				body: "Daily sports, music, drama and over twenty co-curricular clubs — because character is built outside the textbook too."
			}
		] }),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border/60 bg-cream/60 py-6 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl text-foreground/60",
				children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ jsx("div", {
					className: "flex gap-12 shrink-0",
					children: [
						"Curiosity",
						"Integrity",
						"Excellence",
						"Compassion",
						"Discipline",
						"Creativity",
						"Service"
					].map((w) => /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-12",
						children: [
							w,
							" ",
							/* @__PURE__ */ jsx(Star, {
								size: 14,
								className: "text-accent"
							})
						]
					}, w))
				}, k))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						v: "18+",
						l: "Years teaching excellence"
					},
					{
						v: "1:14",
						l: "Teacher to learner ratio"
					},
					{
						v: "98%",
						l: "Parent satisfaction"
					},
					{
						v: "20+",
						l: "Co-curricular clubs"
					}
				].map((s, i) => /* @__PURE__ */ jsx(ScrollReveal, {
					delay: i + 1,
					variant: "up",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-5xl text-gradient",
							children: s.v
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.l
						})]
					})
				}, s.l))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-12 gap-10 items-end",
				children: [/* @__PURE__ */ jsxs(ScrollReveal, {
					variant: "left",
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
						children: "Why Anthena"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl text-balance",
						children: "A school designed around how children actually learn."
					})]
				}), /* @__PURE__ */ jsx(ScrollReveal, {
					variant: "right",
					delay: 2,
					as: "p",
					className: "lg:col-span-5 text-muted-foreground",
					children: "Small classes. Inquiry-led lessons. Outdoor time every day. Our approach blends Kenya's CBC framework with global best practice — so children leave us as confident communicators, problem-solvers and good people."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [
					{
						icon: BookOpen,
						t: "CBC-aligned curriculum",
						d: "Mapped to KICD outcomes with enriched literacy, numeracy and Kiswahili."
					},
					{
						icon: GraduationCap,
						t: "Exceptional teachers",
						d: "TSC-registered educators trained in inquiry, differentiation and SEL."
					},
					{
						icon: Users,
						t: "Small class sizes",
						d: "A maximum of 18 learners per class so every voice is heard."
					},
					{
						icon: Trophy,
						t: "Sports & arts",
						d: "From football to chess, drama to coding — over 20 co-curricular clubs."
					},
					{
						icon: Heart,
						t: "Pastoral care",
						d: "Daily values circle, counsellors on staff and a real anti-bullying culture."
					},
					{
						icon: Sparkles,
						t: "Modern facilities",
						d: "STEM lab, library, art studio, multi-purpose hall and green play spaces."
					}
				].map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: i % 3 + 1,
					children: /* @__PURE__ */ jsxs("article", {
						className: "group h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition-all",
								children: /* @__PURE__ */ jsx(Icon, { size: 22 })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-xl",
								children: t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: d
							})
						]
					})
				}, t))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-gradient-to-b from-cream/40 to-background py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ jsxs(ScrollReveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
					children: "Life at Anthena"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: "A school day full of discovery."
				})] }), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid lg:grid-cols-3 gap-6",
					children: [
						{
							img: drums_default,
							t: "Music & rhythm",
							d: "From percussion to melody, every child finds their voice through live performance and ensemble play."
						},
						{
							img: culture_boy_default,
							t: "Drama & expression",
							d: "Confidence, creativity and empathy — built one stage at a time through storytelling and performance."
						},
						{
							img: keep_ups_default,
							t: "Sports & fitness",
							d: "From football to athletics, we build discipline, teamwork and resilience through daily movement and play."
						}
					].map((c, i) => /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "scale",
						delay: i + 1,
						children: /* @__PURE__ */ jsxs("article", {
							className: "group relative rounded-3xl overflow-hidden ring-soft aspect-[4/5]",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: c.img,
									alt: c.t,
									loading: "lazy",
									className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-0 left-0 right-0 p-7 text-primary-foreground",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-display text-2xl",
										children: c.t
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm opacity-90 mt-1",
										children: c.d
									})]
								})
							]
						})
					}, c.t))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24",
			children: [/* @__PURE__ */ jsxs(ScrollReveal, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
					children: "Gallery"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl text-balance",
					children: "Moments from our school year."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground max-w-2xl",
					children: "From classroom adventures to sports days, drama nights and graduations."
				})
			] }), /* @__PURE__ */ jsx(ScrollReveal, {
				delay: 2,
				className: "mt-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
					children: [
						{
							src: football_default,
							caption: "Inter-house football final",
							orientation: "landscape"
						},
						{
							src: keep_ups_default,
							caption: "Reading hour in the library",
							orientation: "portrait"
						},
						{
							src: culture_boy_default,
							caption: "Robotics & coding club",
							orientation: "portrait"
						},
						{
							src: hero_2_default,
							caption: "Class of 2025 graduation",
							orientation: "landscape"
						},
						{
							src: hero_1_default,
							caption: "Discovery in the science lab",
							orientation: "landscape"
						},
						{
							src: culture_girl_default,
							caption: "Studio time in the art block",
							orientation: "portrait"
						},
						{
							src: board_ball_default,
							caption: "End-of-term drama festival",
							orientation: "portrait"
						},
						{
							src: hero_3_default,
							caption: "Discovery in the science lab",
							orientation: "landscape"
						}
					].map((item) => /* @__PURE__ */ jsx("figure", {
						className: "break-inside-avoid overflow-hidden rounded-2xl group relative",
						children: /* @__PURE__ */ jsx("img", {
							src: item.src,
							alt: item.caption,
							loading: "lazy",
							className: `w-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`
						})
					}, item.caption))
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-10 items-center",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "left",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative rounded-3xl overflow-hidden ring-glow",
						children: /* @__PURE__ */ jsx("img", {
							src: school_default,
							alt: "Anthena School campus",
							loading: "lazy",
							className: "w-full h-full object-cover"
						})
					})
				}), /* @__PURE__ */ jsxs(ScrollReveal, {
					variant: "right",
					delay: 2,
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
							children: "Our campus"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl text-balance",
							children: "A green, safe and inspiring place to grow."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "Set on three acres of leafy gardens in Garden Estate, our purpose-built campus has airy classrooms, a 5,000-title library, STEM and ICT labs, an art studio and generous outdoor play spaces. CCTV-secured, fenced and full of life."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 grid sm:grid-cols-2 gap-3",
							children: [
								"24/7 secure campus",
								"Nutritious hot lunches",
								"Free WiFi & ICT lab",
								"School bus across Nairobi"
							].map((f) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-3 text-sm",
								children: [
									/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
									" ",
									f
								]
							}, f))
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-primary transition",
							children: ["Book a Campus Tour ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink text-primary-foreground py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ jsxs(ScrollReveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: "Parent voices"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: "Loved by families across Kenya."
				})] }), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid md:grid-cols-3 gap-6",
					children: [
						{
							q: "Our daughter wakes up excited for school. The teachers know her, see her, and stretch her every day.",
							n: "Wanjiku M.",
							r: "Parent, Grade 4"
						},
						{
							q: "Anthena balances strong academics with real character formation. We see it in how our son speaks and behaves.",
							n: "David & Faith K.",
							r: "Parents, Grade 6"
						},
						{
							q: "Small classes, modern facilities and warm community. Honestly the best decision we made.",
							n: "Aisha O.",
							r: "Parent, PP2"
						}
					].map((t, i) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: i + 1,
						variant: "up",
						children: /* @__PURE__ */ jsxs("figure", {
							className: "h-full rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur",
							children: [
								/* @__PURE__ */ jsx(Quote, { className: "text-accent" }),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-4 text-sm leading-relaxed opacity-95",
									children: [
										"\"",
										t.q,
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "mt-5 text-sm",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-semibold",
										children: t.n
									}), /* @__PURE__ */ jsx("div", {
										className: "opacity-70 text-xs",
										children: t.r
									})]
								})
							]
						})
					}, t.n))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24",
			children: /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "scale",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden rounded-3xl gradient-brand p-10 sm:p-16 text-primary-foreground",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }), /* @__PURE__ */ jsxs("div", {
						className: "relative grid lg:grid-cols-2 gap-8 items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl sm:text-5xl text-balance",
							children: "Join the Anthena family."
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 opacity-90 max-w-lg",
							children: "Limited places for the 2026 academic year. Book a tour, meet our teachers and feel the Anthena difference for yourself."
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3 lg:justify-end",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-semibold hover:bg-accent transition",
								children: ["Book a Tour ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/programmes",
								className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition",
								children: "Explore Programmes"
							})]
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
