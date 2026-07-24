import React, { useEffect, useRef } from "react";

/**
 * Adds the `is-in` class to an element the first time it scrolls into view.
 * Falls back to immediately-visible for reduced motion or missing IO support.
 * The hidden/animated state lives in globals.css behind `html.js`, so content
 * is always visible without JS or for crawlers.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Stagger children marked `.reveal-item` instead of animating this node itself. */
  group?: boolean;
};

export function Reveal({ group, className = "", children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const base = group ? "reveal-group" : "reveal";

  return (
    <div ref={ref} className={`${base} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export default Reveal;
