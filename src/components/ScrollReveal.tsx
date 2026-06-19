import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Variant = "up" | "left" | "right" | "scale";

export function ScrollReveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass = variant === "left" ? "reveal reveal-left" : variant === "right" ? "reveal reveal-right" : variant === "scale" ? "reveal reveal-scale" : "reveal";
  const delayClass = delay ? `reveal-d${delay}` : "";

  return (
    <Tag ref={ref as never} className={`${variantClass} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
