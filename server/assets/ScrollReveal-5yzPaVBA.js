import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/ScrollReveal.tsx
function ScrollReveal({ children, as: Tag = "div", variant = "up", delay = 0, className = "" }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		className: `${variant === "left" ? "reveal reveal-left" : variant === "right" ? "reveal reveal-right" : variant === "scale" ? "reveal reveal-scale" : "reveal"} ${delay ? `reveal-d${delay}` : ""} ${className}`,
		children
	});
}
//#endregion
export { ScrollReveal as t };
