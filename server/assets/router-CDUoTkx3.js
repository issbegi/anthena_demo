import { t as school_default } from "./school-BcbEFUwx.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, Menu, Phone, Twitter, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-DMuHiwPX.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/assets/logo.webp
var logo_default = "/assets/logo-6z0ijPmD.webp";
//#endregion
//#region src/components/SiteNav.tsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/programmes",
		label: "Programmes"
	},
	{
		to: "/resources",
		label: "Resources"
	},
	{
		to: "/faqs",
		label: "FAQs"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function SiteNav() {
	const [open, setOpen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			setProgress(max > 0 ? h.scrollTop / max * 100 : 0);
			setScrolled(h.scrollTop > 12);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `sticky top-0 z-50 backdrop-blur-xl transition-all ${scrolled ? "bg-background/85 border-b border-border/60 shadow-sm" : "bg-background/60"}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 h-18 py-3 flex items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ jsx("img", {
							src: logo_default,
							alt: "Anthena School logo",
							className: "h-19 w-19 rounded-full"
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-lg font-semibold truncate",
								children: "Anthena School"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Excel with Character"
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "hidden md:flex items-center gap-1",
						children: [links.map((l) => /* @__PURE__ */ jsxs(Link, {
							to: l.to,
							activeOptions: { exact: l.to === "/" },
							className: "relative px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors",
							activeProps: { className: "relative px-4 py-2 text-sm font-semibold text-primary" },
							children: [l.label, /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full gradient-brand opacity-0 transition-opacity data-[status=active]:opacity-100" })]
						}, l.to)), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "ml-3 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-semibold ring-soft hover:opacity-95 transition",
							children: "Book a Tour"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary",
						children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "h-[3px] w-full bg-transparent",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full gradient-brand transition-[width] duration-150",
					style: { width: `${progress}%` }
				})
			}),
			open && /* @__PURE__ */ jsx("div", {
				className: "md:hidden border-t border-border/60 bg-background animate-fade-in",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-5 py-4 flex flex-col gap-1",
					children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						activeOptions: { exact: l.to === "/" },
						className: "px-3 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary-soft/60",
						activeProps: { className: "px-3 py-3 rounded-lg text-sm font-semibold text-primary bg-primary-soft border-l-4 border-primary" },
						children: l.label
					}, l.to)), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-2 text-center rounded-full gradient-brand text-primary-foreground px-5 py-3 text-sm font-semibold",
						children: "Book a Tour"
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/assets/footer-logo.webp
var footer_logo_default = "/assets/footer-logo-B9s-Xhj8.webp";
//#endregion
//#region src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 bg-ink text-primary-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("img", {
								src: footer_logo_default,
								alt: "",
								className: "h-19 w-19 rounded-full"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-lg",
								children: "Anthena School"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] uppercase tracking-[0.18em] opacity-70",
								children: "Excel with Character"
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm opacity-75 leading-relaxed",
							children: "Nurturing curious minds and compassionate hearts since 2008. A place where every learner discovers their best self."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 flex gap-3",
							children: [
								Facebook,
								Instagram,
								Twitter
							].map((Icon, i) => /* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": "social",
								className: "h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition",
								children: /* @__PURE__ */ jsx(Icon, { size: 16 })
							}, i))
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold uppercase tracking-wider opacity-90",
					children: "Explore"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-accent",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-accent",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/programmes",
							className: "hover:text-accent",
							children: "Programmes"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/resources",
							className: "hover:text-accent",
							children: "Resources"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-accent",
							children: "Contact Us"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold uppercase tracking-wider opacity-90",
					children: "Programmes"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Early Years (PP1 – PP2)" }),
						/* @__PURE__ */ jsx("li", { children: "Lower Primary" }),
						/* @__PURE__ */ jsx("li", { children: "Upper Primary" }),
						/* @__PURE__ */ jsx("li", { children: "Junior Secondary" })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-sm font-semibold uppercase tracking-wider opacity-90",
					children: "Visit Us"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-3 text-sm opacity-80",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, {
								size: 16,
								className: "shrink-0 mt-0.5 text-accent"
							}), " Sabaki Estate, off Mombasa Road"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Phone, {
								size: 16,
								className: "shrink-0 mt-0.5 text-accent"
							}), "+254 724 085 534"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Mail, {
								size: 16,
								className: "shrink-0 mt-0.5 text-accent"
							}), " anthenaschool@gmail.com"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Anthena School. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Excel with Character." })]
			})
		})]
	});
}
//#endregion
//#region src/components/ScrollToTop.tsx
function ScrollToTop() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("button", {
		"aria-label": "Scroll to top",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: `fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center rounded-full gradient-brand text-primary-foreground shadow-lg ring-soft transition-all duration-300 hover:scale-110 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
		children: /* @__PURE__ */ jsx(ArrowUp, { size: 20 })
	});
}
//#endregion
//#region src/components/PageTransition.tsx
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ jsx("div", {
		className: "page-fade",
		children
	}, pathname);
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-semibold",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full gradient-brand text-primary-foreground px-5 py-2.5 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-full border px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Anthena School — Excel with Character" },
			{
				name: "description",
				content: "Anthena School is a vibrant Kenyan primary and junior secondary school nurturing curious minds and compassionate hearts."
			},
			{
				name: "author",
				content: "Anthena School"
			},
			{
				property: "og:title",
				content: "Anthena School — Excel with Character"
			},
			{
				property: "og:description",
				content: "Anthena School is a vibrant Kenyan primary and junior secondary school nurturing curious minds and compassionate hearts."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Anthena School — Excel with Character"
			},
			{
				name: "twitter:description",
				content: "Anthena School is a vibrant Kenyan primary and junior secondary school nurturing curious minds and compassionate hearts."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07b158c1-2e2a-428b-88dd-205b390407f3/id-preview-ed8d6ea9--1b434794-09e3-4da8-8b82-b6b83d0519dc.lovable.app-1781807919396.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07b158c1-2e2a-428b-88dd-205b390407f3/id-preview-ed8d6ea9--1b434794-09e3-4da8-8b82-b6b83d0519dc.lovable.app-1781807919396.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(SiteNav, {}),
			/* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsx(Outlet, {}) }),
			/* @__PURE__ */ jsx(SiteFooter, {}),
			/* @__PURE__ */ jsx(ScrollToTop, {})
		]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.8",
			changefreq: "monthly"
		},
		{
			path: "/programmes",
			priority: "0.9",
			changefreq: "monthly"
		},
		{
			path: "/resources",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/faqs",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/contact",
			priority: "0.8",
			changefreq: "monthly"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/resources.tsx
var $$splitComponentImporter$5 = () => import("./resources-BXeCe0WD.js");
var Route$5 = createFileRoute("/resources")({
	head: () => ({ meta: [
		{ title: "Resources — Anthena School" },
		{
			name: "description",
			content: "School calendar, term dates and parent resources for Anthena School families."
		},
		{
			property: "og:title",
			content: "Resources — Anthena School"
		},
		{
			property: "og:description",
			content: "Calendar and downloads."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/programmes.tsx
var $$splitComponentImporter$4 = () => import("./programmes-SEFFnHC4.js");
var Route$4 = createFileRoute("/programmes")({
	head: () => ({ meta: [
		{ title: "Programmes — Anthena School" },
		{
			name: "description",
			content: "Our CBC-aligned academic stages, modern facilities and co-curricular clubs at Anthena School."
		},
		{
			property: "og:title",
			content: "Programmes at Anthena School"
		},
		{
			property: "og:description",
			content: "Stages, facilities and clubs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/faqs.tsx
var $$splitComponentImporter$3 = () => import("./faqs-B009VD9U.js");
var Route$3 = createFileRoute("/faqs")({
	head: () => ({ meta: [
		{ title: "FAQs — Anthena School" },
		{
			name: "description",
			content: "Frequently asked questions about admissions, fees, curriculum, transport and life at Anthena School."
		},
		{
			property: "og:title",
			content: "FAQs — Anthena School"
		},
		{
			property: "og:description",
			content: "Answers to the questions Parents ask us most."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-zblJnQ9N.js");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Anthena School" },
		{
			name: "description",
			content: "Visit, call or email Anthena School in Garden Estate, Nairobi. Satellite map and quick contact form."
		},
		{
			property: "og:title",
			content: "Contact Anthena School"
		},
		{
			property: "og:description",
			content: "Visit, call or email Anthena School."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CgHAtAAr.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Anthena School" },
		{
			name: "description",
			content: "Our story, mission, vision and the values that shape Anthena School learners."
		},
		{
			property: "og:title",
			content: "About Anthena School"
		},
		{
			property: "og:description",
			content: "A community helping every child excel — with character."
		},
		{
			property: "og:image",
			content: school_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-GRdZOSiA.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Anthena School — Excel with Character" },
		{
			name: "description",
			content: "A vibrant Kenyan primary and junior secondary school where every learner discovers their best self."
		},
		{
			property: "og:title",
			content: "Anthena School — Excel with Character"
		},
		{
			property: "og:description",
			content: "Where curiosity meets character. CBC-aligned learning, modern facilities, inspiring teachers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var ResourcesRoute = Route$5.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$7
});
var ProgrammesRoute = Route$4.update({
	id: "/programmes",
	path: "/programmes",
	getParentRoute: () => Route$7
});
var FaqsRoute = Route$3.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	FaqsRoute,
	ProgrammesRoute,
	ResourcesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
