import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/PageHero.tsx
function PageHero({ eyebrow, title, highlight, description, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden gradient-brand text-primary-foreground",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: { backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, var(--accent), transparent 50%), radial-gradient(circle at 90% 90%, rgba(255,255,255,0.15), transparent 40%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-[0.12] mix-blend-overlay",
				style: {
					backgroundImage: "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
					maskImage: "radial-gradient(ellipse at top, black, transparent 70%)"
				}
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float",
				style: { animationDelay: "1.5s" }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold",
						children: eyebrow
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-4 font-display text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance leading-[1.05]",
						children: [
							title,
							" ",
							highlight && /* @__PURE__ */ jsx("span", {
								className: "bg-clip-text text-transparent",
								style: { backgroundImage: "linear-gradient(135deg, var(--accent), #fff)" },
								children: highlight
							})
						]
					}),
					description && /* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl",
						children: description
					}),
					children && /* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children
					})
				]
			}),
			/* @__PURE__ */ jsx("svg", {
				className: "block w-full text-background",
				viewBox: "0 0 1440 80",
				preserveAspectRatio: "none",
				"aria-hidden": true,
				children: /* @__PURE__ */ jsx("path", {
					d: "M0,40 C360,100 1080,0 1440,40 L1440,80 L0,80 Z",
					fill: "currentColor"
				})
			})
		]
	});
}
//#endregion
export { PageHero as t };
