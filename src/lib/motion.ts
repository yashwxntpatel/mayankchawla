import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll choreography for a page scope.
 * [data-reveal]       text / block rises in
 * [data-reveal-img]   image unmasks with a slow scale settle
 * [data-parallax]     gentle vertical drift (value = strength in %)
 * [data-stagger]      children enter in sequence
 */
export function useScrollMotion(scope: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((n) => {
        gsap.fromTo(
          n,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.3, ease: "expo.out",
            scrollTrigger: { trigger: n, start: "top 88%", once: true },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal-img]").forEach((n) => {
        const img = n.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: n, start: "top 85%", once: true } });
        tl.fromTo(n, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "expo.inOut" });
        if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 2, ease: "expo.out" }, 0);
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((n) => {
        const amt = Number(n.dataset["parallax"] || 8);
        gsap.fromTo(n, { yPercent: -amt / 2 }, {
          yPercent: amt / 2, ease: "none",
          scrollTrigger: { trigger: n.parentElement ?? n, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((n) => {
        gsap.fromTo(n.children, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.2, ease: "expo.out", stagger: 0.1,
          scrollTrigger: { trigger: n, start: "top 85%", once: true },
        });
      });
    }, el);

    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { clearTimeout(t); ctx.revert(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
