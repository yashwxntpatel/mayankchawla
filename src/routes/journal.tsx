import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { images, journal } from "@/config/assets";
import { PageHero } from "@/components/site/PageHero";
import { useScrollMotion } from "@/lib/motion";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal | MAYANKCHAWLA Menswear" },
      { name: "description", content: "Campaigns, craft and style stories from the MAYANKCHAWLA atelier." },
      { property: "og:title", content: "Journal | MAYANKCHAWLA" },
      { property: "og:description", content: "Campaigns, craft and style stories from the atelier." },
      { property: "og:image", content: images.journal[0] },
      { name: "twitter:image", content: images.journal[0] },
    ],
  }),
  component: Journal,
});

function Journal() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope);
  return (
    <div ref={scope}>
      <PageHero eyebrow="Journal" title="Notes from the Atelier" image={images.journal[1]} />
      <section className="section-pad bg-paper">
        <div className="container-lux space-y-28 md:space-y-40">
          {journal.map((j, i) => (
            <article id={j.slug} key={j.slug} className="grid items-center gap-10 md:grid-cols-12">
              <div data-reveal-img className={`aspect-[4/5] overflow-hidden md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>
                <img src={j.image} alt={j.title} className="h-full w-full object-cover object-top" />
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
                <p data-reveal className="eyebrow text-muted-foreground">{j.kicker}</p>
                <h2 data-reveal className="display-lg mt-6 text-maroon">{j.title}</h2>
                <p data-reveal className="lede mt-6 text-muted-foreground">{j.excerpt}</p>
                <Link data-reveal to="/shop" className="link-line mt-8 inline-block text-[0.78rem] uppercase tracking-[0.28em]">Shop the Story</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
