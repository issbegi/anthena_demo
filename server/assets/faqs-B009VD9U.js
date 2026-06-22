import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { t as PageHero } from "./PageHero-CQfQZD71.js";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
//#region src/routes/faqs.tsx?tsr-split=component
var faqs = [
	{
		cat: "Admissions",
		q: "What is your admissions process?",
		a: "Submit our enquiry form, attend a campus tour, complete an age-appropriate friendly assessment, and receive your offer within five working days."
	},
	{
		cat: "Admissions",
		q: "Can I visit before applying?",
		a: "Absolutely. We run open mornings every Friday at 10am and welcome individual tours by appointment."
	},
	{
		cat: "Fees",
		q: "What are the school fees?",
		a: "Termly fees range from KES 78,000 (PP1) to KES 145,000 (Grade 9). A detailed schedule with sibling discounts is available from the admissions office."
	},
	{
		cat: "Fees",
		q: "Do you offer scholarships or bursaries?",
		a: "Yes. We award up to 12 partial scholarships each year based on academic merit, talent and demonstrated financial need. Applications open every September."
	},
	{
		cat: "Academics",
		q: "What curriculum do you follow?",
		a: "We follow Kenya's Competency-Based Curriculum (CBC), enriched with literacy, numeracy, Kiswahili, ICT, French and global citizenship streams."
	},
	{
		cat: "Academics",
		q: "What are your class sizes?",
		a: "We cap classes at 18 learners in Early Years and 22 in Upper Primary and Junior Secondary, with at least one teaching assistant per Lower Primary class."
	},
	{
		cat: "Academics",
		q: "What is your approach to homework?",
		a: "Light, purposeful and family-friendly. Maximum 30 minutes per night in Lower Primary and 60 minutes in Junior Secondary — including reading."
	},
	{
		cat: "Life",
		q: "Do you provide transport?",
		a: "Yes. Our GPS-tracked, seat-belted school buses serve routes across Nairobi including Ridgeways, Runda, Kileleshwa, Lavington and Kasarani."
	},
	{
		cat: "Life",
		q: "What about lunch and dietary needs?",
		a: "Hot, nutritious lunches are prepared on-site. We comfortably cater to vegetarian, halal and most common allergy requirements."
	},
	{
		cat: "Life",
		q: "How do you handle pastoral care and discipline?",
		a: "Every class begins the day with a values circle. We have full-time counsellors on staff and a firm, restorative approach to discipline that prioritises growth and accountability."
	}
];
var categories = [
	"All",
	"Admissions",
	"Fees",
	"Academics",
	"Life"
];
function highlight(text, term) {
	if (!term.trim()) return text;
	const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark class=\"bg-yellow-200 rounded-sm px-px\">$1</mark>");
}
function FAQs() {
	const [open, setOpen] = useState(null);
	const [cat, setCat] = useState("All");
	const [q, setQ] = useState("");
	const handleCatChange = (c) => {
		setCat(c);
		setOpen(null);
	};
	const handleSearch = (e) => {
		setQ(e.target.value);
		setOpen(null);
	};
	const filtered = useMemo(() => {
		return faqs.map((f, idx) => ({
			...f,
			idx
		})).filter((f) => cat === "All" ? true : f.cat === cat).filter((f) => q.trim() ? (f.q + " " + f.a).toLowerCase().includes(q.toLowerCase()) : true);
	}, [cat, q]);
	return /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "FAQs",
		title: "Questions we",
		highlight: "get asked most.",
		description: "Search by keyword or filter by topic. Still can't find your answer? Drop us a line."
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-4xl px-5 sm:px-8 py-16",
		children: [
			/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row gap-3 sm:items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx(Search, {
						size: 16,
						className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
					}), /* @__PURE__ */ jsx("input", {
						value: q,
						onChange: handleSearch,
						placeholder: "Search FAQs…",
						className: "w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex gap-2 overflow-x-auto",
					children: categories.map((c) => /* @__PURE__ */ jsx("button", {
						onClick: () => handleCatChange(c),
						className: `shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${cat === c ? "gradient-brand text-primary-foreground" : "bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground"}`,
						children: c
					}, c))
				})]
			}) }),
			/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "mt-8 space-y-3",
				children: [filtered.length === 0 && /* @__PURE__ */ jsx("p", {
					className: "text-center text-sm text-muted-foreground py-12",
					children: "No FAQs match your search."
				}), filtered.map((f) => {
					const isOpen = open === f.idx;
					return /* @__PURE__ */ jsxs("article", {
						className: `rounded-2xl border bg-card transition-all ${isOpen ? "border-primary shadow-sm" : "border-border"}`,
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => setOpen(isOpen ? null : f.idx),
							className: "w-full flex items-center justify-between gap-4 p-5 text-left",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] uppercase tracking-wider rounded-full bg-primary-soft text-primary px-2 py-1 font-semibold",
									children: f.cat
								}), /* @__PURE__ */ jsx("span", {
									className: "font-display text-lg",
									dangerouslySetInnerHTML: { __html: highlight(f.q, q) }
								})]
							}), /* @__PURE__ */ jsx(ChevronDown, {
								size: 20,
								className: `shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: `grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
							children: /* @__PURE__ */ jsx("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ jsx("p", {
									className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
									dangerouslySetInnerHTML: { __html: highlight(f.a, q) }
								})
							})
						})]
					}, f.idx);
				})]
			}) }),
			/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "mt-16 rounded-3xl gradient-brand text-primary-foreground p-8 sm:p-12 text-center ring-glow",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Still have questions?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 opacity-90",
						children: "Our admissions team responds within one working day."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:opacity-90 transition",
						children: ["Contact us ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
					})
				]
			}) })
		]
	})] });
}
//#endregion
export { FAQs as component };
