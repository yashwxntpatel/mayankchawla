import { useEffect, useRef } from "react";
import { ensureGsap, prefersReduced } from "@/lib/motion";

/** Dark editorial page opener. Image sits right, text sits left, never over the model. */
export function PageHero({ eyebrow, title, lede, image }: { eyebrow: string; title: string; lede?: string; image: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-h]", { y: 60, opacity: 0, duration: 1.4, ease: "expo.out", stagger: 0.12, delay: 0.15 });
      gsap.fromTo("[data-hi]", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.6, ease: "expo.inOut" });
      gsap.fromTo("[data-hi] img", { scale: 1.2 }, { scale: 1, duration: 2.2, ease: "expo.out" });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="bg-ink text-ink-foreground">
      <div className="container-lux grid items-end gap-10 pb-16 pt-36 md:grid-cols-12 md:pb-24 md:pt-44">
        <div className="md:col-span-7">
          <p data-h className="eyebrow text-gold">{eyebrow}</p>
          <h1 data-h className="display-xl mt-6">{title}</h1>
          {lede && <p data-h className="lede mt-8 max-w-lg text-ink-muted">{lede}</p>}
        </div>
        <div data-hi className="overflow-hidden md:col-span-4 md:col-start-9">
          <img src={image} alt="" className="aspect-[3/4] w-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
