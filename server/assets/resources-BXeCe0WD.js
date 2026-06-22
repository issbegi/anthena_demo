import { t as ScrollReveal } from "./ScrollReveal-5yzPaVBA.js";
import { t as PageHero } from "./PageHero-CQfQZD71.js";
import * as React from "react";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Bus, Calendar, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, Download, FileText, Shirt } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/calendar.tsx
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ jsx(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ jsx("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ jsx(ChevronLeftIcon, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ jsx(ChevronRightIcon, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ jsx(ChevronDownIcon, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ jsx("td", {
					...props,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ jsx(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
//#endregion
//#region src/routes/resources.tsx?tsr-split=component
var events = [
	{
		date: new Date(2026, 0, 1),
		title: "New Year's Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 2, 20),
		title: "Idd-ul-Fitr",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 3, 3),
		title: "Good Friday",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 3, 6),
		title: "Easter Monday",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 4, 1),
		title: "Labour Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 4, 27),
		title: "Idd-ul-Azha",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 5, 1),
		title: "Madaraka Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 9, 10),
		title: "Mazingira Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 9, 20),
		title: "Mashujaa Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 11, 12),
		title: "Jamhuri Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 11, 25),
		title: "Christmas Day",
		term: "Holiday",
		type: "holiday"
	},
	{
		date: new Date(2026, 11, 26),
		title: "Boxing Day",
		term: "Holiday",
		type: "holiday"
	}
];
var downloads = [
	{
		icon: FileText,
		t: "Prospectus 2026",
		d: "Full programme guide, fees and admissions info."
	},
	{
		icon: Calendar,
		t: "Academic Calendar 2026",
		d: "Term dates, events and holidays."
	},
	{
		icon: BookOpen,
		t: "Curriculum Booklet",
		d: "Subjects offered at each grade level."
	},
	{
		icon: Shirt,
		t: "Uniform Policy",
		d: "Approved uniform and PE kit list."
	},
	{
		icon: Bus,
		t: "Transport Routes",
		d: "Bus routes across Nairobi neighbourhoods."
	},
	{
		icon: FileText,
		t: "Enrolment Forms",
		d: "Pre-fill before your admissions interview."
	}
];
var sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
var today = /* @__PURE__ */ new Date();
function Resources() {
	const [selected, setSelected] = useState(today);
	const [month, setMonth] = useState(today);
	const modifiers = useMemo(() => ({ holiday: events.map((e) => e.date) }), []);
	const selectedEvents = selected ? events.filter((e) => sameDay(e.date, selected)) : [];
	const upcoming = events.filter((e) => e.date.getMonth() === month.getMonth() && e.date.getFullYear() === month.getFullYear()).sort((a, b) => +a.date - +b.date);
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Resources",
			title: "Everything our parents",
			highlight: "need to know.",
			description: "Browse our interactive school calendar and grab the documents you need — all in one place."
		}),
		/* @__PURE__ */ jsxs("section", {
			id: "calendar",
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-20 scroll-mt-24",
			children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-6 flex-wrap",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
						children: "Interactive calendar"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: "Academic year 2026."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground max-w-xl",
						children: "Click any highlighted date to see what's happening that day."
					})
				] }), /* @__PURE__ */ jsxs("button", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition",
					children: [/* @__PURE__ */ jsx(Download, { size: 16 }), " Download PDF"]
				})]
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 grid lg:grid-cols-5 gap-8 items-start",
				children: [/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "left",
					className: "lg:col-span-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl bg-card border border-border p-4 sm:p-6 ring-soft",
						children: [/* @__PURE__ */ jsx(Calendar$1, {
							mode: "single",
							selected,
							onSelect: setSelected,
							month,
							onMonthChange: setMonth,
							today,
							showOutsideDays: true,
							className: "pointer-events-auto w-full [--cell-size:2.6rem] sm:[--cell-size:3rem]",
							modifiers,
							modifiersClassNames: { holiday: "relative font-semibold !text-accent-foreground after:absolute after:inset-1 after:rounded-md after:-z-10 after:bg-accent/40" }
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-5 flex flex-wrap gap-4 text-xs",
							children: /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded bg-accent/60" }), " Public holiday"]
							})
						})]
					})
				}), /* @__PURE__ */ jsxs(ScrollReveal, {
					variant: "right",
					delay: 2,
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl gradient-brand text-primary-foreground p-7 ring-glow",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider opacity-80",
								children: selected ? selected.toLocaleDateString("en-GB", { weekday: "long" }) : "Pick a date"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-1 font-display text-3xl",
								children: selected ? selected.toLocaleDateString("en-GB", {
									day: "numeric",
									month: "long",
									year: "numeric"
								}) : "—"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 space-y-3",
								children: [selectedEvents.length === 0 && /* @__PURE__ */ jsx("p", {
									className: "text-sm opacity-85",
									children: "No public holiday today. Regular school day."
								}), selectedEvents.map((e) => /* @__PURE__ */ jsxs("div", {
									className: "rounded-xl bg-white/10 backdrop-blur p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-[10px] uppercase tracking-wider opacity-80",
										children: "Kenya Public Holiday"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 font-semibold",
										children: e.title
									})]
								}, e.title))]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-5 rounded-3xl bg-card border border-border p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
							children: [month.toLocaleDateString("en-GB", {
								month: "long",
								year: "numeric"
							}), " public holidays"]
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: [upcoming.length === 0 && /* @__PURE__ */ jsx("li", {
								className: "text-muted-foreground",
								children: "No public holidays this month."
							}), upcoming.map((e) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => setSelected(e.date),
									className: "shrink-0 w-12 text-primary font-semibold hover:underline text-left",
									children: e.date.toLocaleDateString("en-GB", {
										day: "2-digit",
										month: "short"
									})
								}), /* @__PURE__ */ jsx("span", {
									className: "text-foreground/80",
									children: e.title
								})]
							}, e.title + e.date.toISOString()))]
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-cream/50 py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ jsxs(ScrollReveal, { children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold",
						children: "Downloads"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: "Quick downloads."
					})] }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
						children: downloads.map(({ icon: Icon, ...d }, i) => /* @__PURE__ */ jsx(ScrollReveal, {
							delay: i % 3 + 1,
							children: /* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary group-hover:gradient-brand group-hover:text-primary-foreground transition",
										children: /* @__PURE__ */ jsx(Icon, { size: 20 })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ jsx("div", {
											className: "font-display text-base",
											children: d.t
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xs text-muted-foreground",
											children: d.d
										})]
									}),
									/* @__PURE__ */ jsx(Download, {
										size: 18,
										className: "text-muted-foreground group-hover:text-primary transition"
									})
								]
							})
						}, d.t))
					}),
					/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "mt-14 rounded-3xl bg-card border border-border p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl",
							children: "Got a question we haven't answered?"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Browse our FAQs — searchable and organised by topic."
						})] }), /* @__PURE__ */ jsxs(Link, {
							to: "/faqs",
							className: "shrink-0 inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-95 transition",
							children: ["Visit FAQs ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
						})]
					}) })
				]
			})
		})
	] });
}
//#endregion
export { Resources as component };
