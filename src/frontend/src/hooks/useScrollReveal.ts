import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const elements = Array.from(node.querySelectorAll<Element>(".reveal"));

    const revealAll = () => {
      for (const el of elements) {
        el.classList.add("visible");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    // Fallback: ensure all reveal elements become visible after 1.5s
    // in case IntersectionObserver doesn't fire (e.g. already in viewport on mount)
    const fallback = setTimeout(revealAll, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return ref as React.RefObject<HTMLDivElement>;
}
