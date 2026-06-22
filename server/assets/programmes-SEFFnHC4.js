import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { t as PageHero } from "./PageHero-CQfQZD71.js";
import { n as culture_boy_default, r as hero_2_default, t as football_default } from "./football-CfmYSdNN.js";
import { useCallback, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Baby, BookOpen, Brain, Bus, Calculator, ChevronLeft, ChevronRight, Code, Download, Drama, Dumbbell, FlaskConical, Globe, HeartHandshake, Leaf, Library, Maximize2, Megaphone, Minimize2, Music, Palette, Puzzle, Shield, Trophy, Users, X } from "lucide-react";
//#region src/assets/tae-kwondo.webp
var tae_kwondo_default = "/assets/tae-kwondo-PZEdsYmQ.webp";
//#endregion
//#region src/routes/programmes.tsx?tsr-split=component
var ANIM_STYLE = `
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
function Lightbox({ images }) {
	const [open, setOpen] = useState(null);
	const [isFullscreen, setIsFs] = useState(false);
	const [animClass, setAnimClass] = useState("lb-img-in");
	useEffect(() => {
		if (document.getElementById("lb-styles")) return;
		const el = document.createElement("style");
		el.id = "lb-styles";
		el.textContent = ANIM_STYLE;
		document.head.appendChild(el);
	}, []);
	useEffect(() => {
		if (open === null) return;
		const saved = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = saved;
		};
	}, [open]);
	useEffect(() => {
		const handler = () => setIsFs(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", handler);
		return () => document.removeEventListener("fullscreenchange", handler);
	}, []);
	const openAt = useCallback((i, anim = "lb-img-in") => {
		setAnimClass(anim);
		setOpen(i);
	}, []);
	const close = useCallback(() => {
		setOpen(null);
		if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
		setIsFs(false);
	}, []);
	const navigate = useCallback((dir) => {
		setOpen((cur) => {
			if (cur === null) return null;
			const next = dir === "next" ? (cur + 1) % images.length : (cur - 1 + images.length) % images.length;
			setAnimClass(dir === "next" ? "lb-next" : "lb-prev");
			return next;
		});
	}, [images.length]);
	const toggleFs = useCallback(() => {
		if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
		else document.exitFullscreen().catch(() => {});
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
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowLeft") navigate("prev");
			if (e.key === "ArrowRight") navigate("next");
			if (e.key === "f") toggleFs();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		close,
		navigate,
		toggleFs
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4",
		children: images.map((img, i) => /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => openAt(i),
			className: "group relative overflow-hidden rounded-2xl aspect-[4/3] border border-border shadow-sm\n              hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary\n              transition-all duration-300 text-left",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: img.src,
					alt: img.alt,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent\n              opacity-90 group-hover:opacity-100 transition-opacity duration-300" }),
				img.caption && /* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-0 bottom-0 p-3",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow-sm",
						children: img.caption
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-2 right-2 h-7 w-7 grid place-items-center rounded-full\n              bg-white/15 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity",
					children: /* @__PURE__ */ jsx(Maximize2, { size: 14 })
				})
			]
		}, i))
	}), open !== null && /* @__PURE__ */ jsxs("div", {
		className: "lb-backdrop fixed inset-0 z-[200] bg-black/92 backdrop-blur-md",
		style: {
			display: "flex",
			flexDirection: "column"
		},
		onClick: close,
		role: "dialog",
		"aria-modal": true,
		"aria-label": "Image viewer",
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "12px 16px",
					flexShrink: 0,
					background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)"
				},
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ jsxs("span", {
					style: {
						color: "rgba(255,255,255,0.45)",
						fontSize: 12,
						fontVariantNumeric: "tabular-nums"
					},
					children: [
						open + 1,
						" / ",
						images.length
					]
				}), /* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: 6
					},
					children: [
						/* @__PURE__ */ jsx("button", {
							className: "lb-btn",
							onClick: download,
							title: "Download",
							children: /* @__PURE__ */ jsx(Download, {})
						}),
						/* @__PURE__ */ jsx("button", {
							className: "lb-btn",
							onClick: toggleFs,
							title: isFullscreen ? "Exit fullscreen" : "Fullscreen",
							children: isFullscreen ? /* @__PURE__ */ jsx(Minimize2, {}) : /* @__PURE__ */ jsx(Maximize2, {})
						}),
						/* @__PURE__ */ jsx("button", {
							className: "lb-btn",
							onClick: close,
							title: "Close (Esc)",
							children: /* @__PURE__ */ jsx(X, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					flex: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 12,
					padding: "0 12px",
					minHeight: 0,
					overflow: "hidden"
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsx("button", {
						className: "lb-btn",
						onClick: () => navigate("prev"),
						"aria-label": "Previous image",
						style: { flexShrink: 0 },
						children: /* @__PURE__ */ jsx(ChevronLeft, {})
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							flex: 1,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							minWidth: 0,
							maxHeight: "100%"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: images[open].src,
							alt: images[open].alt,
							className: animClass,
							style: {
								maxWidth: "100%",
								maxHeight: "100%",
								objectFit: "contain",
								borderRadius: 14,
								boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
								display: "block"
							}
						}, `${open}-${animClass}`)
					}),
					/* @__PURE__ */ jsx("button", {
						className: "lb-btn",
						onClick: () => navigate("next"),
						"aria-label": "Next image",
						style: { flexShrink: 0 },
						children: /* @__PURE__ */ jsx(ChevronRight, {})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					flexShrink: 0,
					padding: "12px 16px 20px",
					background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 10
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					images[open].caption && /* @__PURE__ */ jsx("p", {
						style: {
							color: "rgba(255,255,255,0.65)",
							fontSize: 13,
							margin: 0,
							textAlign: "center"
						},
						children: images[open].caption
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							display: "flex",
							gap: 8,
							alignItems: "center"
						},
						children: images.map((img, i) => /* @__PURE__ */ jsx("button", {
							onClick: () => openAt(i, i > open ? "lb-next" : "lb-prev"),
							"aria-label": `Go to image ${i + 1}`,
							style: {
								padding: 0,
								border: "none",
								cursor: "pointer",
								borderRadius: 8,
								overflow: "hidden",
								width: i === open ? 56 : 44,
								height: i === open ? 40 : 32,
								opacity: i === open ? 1 : .45,
								outline: i === open ? "2px solid white" : "none",
								outlineOffset: 2,
								transition: "all 200ms ease",
								flexShrink: 0
							},
							children: /* @__PURE__ */ jsx("img", {
								src: img.src,
								alt: img.alt,
								style: {
									width: "100%",
									height: "100%",
									objectFit: "cover",
									display: "block"
								}
							})
						}, i))
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							color: "rgba(255,255,255,0.2)",
							fontSize: 10,
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							margin: 0,
							userSelect: "none"
						},
						children: "← → navigate · F fullscreen · Esc close"
					})
				]
			})
		]
	})] });
}
function Programmes() {
	const stages = [
		{
			icon: Baby,
			t: "Early Years",
			grade: "PP1 – PP2 · Ages 4–5",
			d: "Play-based learning that builds language, numeracy and social confidence. Daily story-time, sand & water, music and movement."
		},
		{
			icon: BookOpen,
			t: "Lower Primary",
			grade: "Grade 1 – 3 · Ages 6–8",
			d: "Strong foundations in literacy and numeracy with rich storytelling, phonics, environmental activities and inquiry."
		},
		{
			icon: Calculator,
			t: "Upper Primary",
			grade: "Grade 4 – 6 · Ages 9–11",
			d: "Subject specialists in maths, science and languages, research projects, public speaking and confident self-expression."
		},
		{
			icon: Globe,
			t: "Junior Secondary",
			grade: "Grade 7 – 9 · Ages 12–14",
			d: "Pathway-ready learners — STEM, languages, performing arts, agriculture and pre-tech in depth, with strong mentorship."
		}
	];
	const facilities = [
		{
			icon: Library,
			t: "Classrooms",
			d: "Dedicated rooms for Nursery, Junior School and Junior High, designed around CBC learning principles."
		},
		{
			icon: Code,
			t: "ICT & Digital Learning",
			d: "Computer and technology tools with digital literacy integrated across subjects from the earliest grades."
		},
		{
			icon: BookOpen,
			t: "Library & Study Support",
			d: "Reading and learning resources for independent study and research, accessible to all learners."
		},
		{
			icon: Dumbbell,
			t: "Sports Field",
			d: "Open grass field with space for football, athletics and inter-house competitions."
		},
		{
			icon: Drama,
			t: "Arts & Performance Space",
			d: "Dedicated areas for drama, music performances, cultural days and school-wide events."
		},
		{
			icon: Palette,
			t: "Creative Spaces",
			d: "Art and craft activity areas with display space for student exhibitions and project showcases."
		},
		{
			icon: Bus,
			t: "School Transport",
			d: "Reliable bus service covering Athi River and surrounding areas, keeping learners safe on every journey."
		},
		{
			icon: Leaf,
			t: "Outdoor & Play Areas",
			d: "Playground and open recreational spaces where learners unwind, play and connect between lessons."
		}
	];
	const clubs = [
		{
			icon: Trophy,
			t: "Football",
			d: "Training sessions and inter-school fixtures for all levels.",
			cat: "Sports"
		},
		{
			icon: Dumbbell,
			t: "Athletics",
			d: "Track and field disciplines with regular inter-house meets.",
			cat: "Sports"
		},
		{
			icon: Shield,
			t: "Physical Fitness & PE",
			d: "Structured fitness activities complementing the PE curriculum.",
			cat: "Sports"
		},
		{
			icon: Brain,
			t: "Chess Club",
			d: "Strategic thinking, tournaments and competitive play.",
			cat: "Academic"
		},
		{
			icon: FlaskConical,
			t: "Science & STEM",
			d: "Hands-on experiments and applied problem-solving.",
			cat: "Academic"
		},
		{
			icon: Code,
			t: "ICT & Coding",
			d: "Scratch, Python and web development for curious minds.",
			cat: "Academic"
		},
		{
			icon: Puzzle,
			t: "Problem-Solving",
			d: "Academic enrichment challenges and lateral-thinking games.",
			cat: "Academic"
		},
		{
			icon: Palette,
			t: "Art & Craft",
			d: "Drawing, painting and student exhibitions.",
			cat: "Creative Arts"
		},
		{
			icon: Drama,
			t: "Drama Club",
			d: "Termly productions, improv and cultural day performances.",
			cat: "Performing Arts"
		},
		{
			icon: Users,
			t: "Dance Activities",
			d: "Contemporary, traditional African and cultural routines.",
			cat: "Performing Arts"
		},
		{
			icon: BookOpen,
			t: "Poetry & Spoken Word",
			d: "Performance poetry and spoken word for events.",
			cat: "Performing Arts"
		},
		{
			icon: Music,
			t: "School Choir",
			d: "Group singing, performances at ceremonies and music events.",
			cat: "Music"
		},
		{
			icon: Leaf,
			t: "Eco Club",
			d: "Tree planting, clean-ups and climate awareness projects.",
			cat: "Environment"
		},
		{
			icon: HeartHandshake,
			t: "Community Service",
			d: "School and neighbourhood outreach and service projects.",
			cat: "Environment"
		},
		{
			icon: Megaphone,
			t: "Debate & Public Speaking",
			d: "Structured debate practice and event-based competitions.",
			cat: "Leadership"
		},
		{
			icon: Globe,
			t: "Student Leadership",
			d: "Prefects, class monitors and learner governance.",
			cat: "Leadership"
		}
	];
	const gallery = [
		{
			src: tae_kwondo_default,
			alt: "Taekwondo practice",
			caption: "Taekwondo training"
		},
		{
			src: football_default,
			alt: "Football session",
			caption: "Football on the field"
		},
		{
			src: hero_2_default,
			alt: "Science Lab",
			caption: "Science Lab"
		},
		{
			src: culture_boy_default,
			alt: "Cultural day",
			caption: "Cultural day celebrations"
		}
	];
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Programmes",
			title: "A curriculum that grows",
			highlight: "with your child.",
			description: "Aligned to Kenya's Competency-Based Curriculum and enriched with global best practice in STEM, arts, languages and character education."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 pb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
			children: stages.map(({ icon: Icon, ...s }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
				delay: i + 1,
				children: /* @__PURE__ */ jsxs("article", {
					className: "h-full rounded-2xl bg-card border border-border p-7 hover:border-primary hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary",
							children: /* @__PURE__ */ jsx(Icon, { size: 22 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-display text-xl",
							children: s.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-primary uppercase tracking-wider mt-1",
							children: s.grade
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: s.d
						})
					]
				})
			}, s.t))
		}),
		/* @__PURE__ */ jsx("section", {
			id: "facilities",
			className: "bg-cream/50 py-24 scroll-mt-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-12 gap-10 items-end",
					children: [/* @__PURE__ */ jsxs(ScrollReveal, {
						variant: "left",
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
							children: "Facilities"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl text-balance",
							children: "Spaces built for every kind of learner."
						})]
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "right",
						delay: 2,
						as: "p",
						className: "lg:col-span-5 text-muted-foreground",
						children: "From well-resourced classrooms and a growing library to a sports field, creative spaces and reliable transport — every facility supports a well-rounded school day."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: facilities.map(({ icon: Icon, ...f }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: i % 4 + 1,
						children: /* @__PURE__ */ jsxs("div", {
							className: "h-full rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-10 w-10 grid place-items-center rounded-lg gradient-brand text-primary-foreground",
									children: /* @__PURE__ */ jsx(Icon, { size: 18 })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 font-display text-base",
									children: f.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: f.d
								})
							]
						})
					}, f.t))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			id: "clubs",
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-24 scroll-mt-24",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-12 gap-10 items-end",
					children: [/* @__PURE__ */ jsxs(ScrollReveal, {
						variant: "left",
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
							children: "Clubs & co-curricular"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl text-balance",
							children: "Something for every curious, creative, competitive learner."
						})]
					}), /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "right",
						delay: 2,
						as: "p",
						className: "lg:col-span-5 text-muted-foreground",
						children: "Every learner picks at least two clubs each term. Clubs meet regularly and culminate in showcases, inter-school competitions and community service."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
					children: clubs.map(({ icon: Icon, ...c }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
						delay: i % 4 + 1,
						children: /* @__PURE__ */ jsxs("article", {
							className: "group h-full rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-10 w-10 grid place-items-center rounded-lg bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition",
									children: /* @__PURE__ */ jsx(Icon, { size: 18 })
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60",
									children: c.cat
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-1 font-display text-base",
									children: c.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: c.d
								})
							]
						})
					}, c.t))
				}),
				/* @__PURE__ */ jsxs(ScrollReveal, {
					variant: "scale",
					className: "mt-16",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6",
						children: "Life at Anthena"
					}), /* @__PURE__ */ jsx(Lightbox, { images: gallery })]
				})
			]
		})
	] });
}
//#endregion
export { Programmes as component };
