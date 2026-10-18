import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { collections, images } from "@/config/assets";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { useScrollMotion } from "@/lib/motion";
import horseGold from "@/assets/horse-gold.png";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections | MAYANKCHAWLA Menswear" },
      { name: "description", content: "Midnight Majesty, Eternal Heritage and Regal Reflections. The signature collections of MAYANKCHAWLA." },
      { property: "og:title", content: "Collections | MAYANKCHAWLA" },
      { property: "og:description", content: "Three worlds of Indian couture menswear." },
      { property: "og:image", content: images.heroAlt },
      { name: "twitter:image", content: images.heroAlt },
    ],
  }),
  component: Collections,
});

function Collections() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope);
  return (
    <div ref={scope}>
      <PageHero eyebrow="Collections" title="Three Worlds of Couture" lede="Each collection is a chapter. Together they write the language of the house." image={images.heroAlt} />
      {collections.map((c, idx) => (
        <section key={c.slug} id={c.slug} className={idx % 2 ? "section-pad bg-ink text-ink-foreground" : "section-pad bg-paper"}>
          <div className="container-lux">
            <div className="grid items-end gap-10 md:grid-cols-12">
              <div className={`relative md:col-span-6 ${idx % 2 ? "md:order-2 md:col-start-7" : ""}`}>
                <div data-reveal-img className="aspect-[4/5] overflow-hidden">
                  <img src={c.image} alt={c.name} className="h-full w-full object-cover object-[50%_10%]" />
                </div>
                <img src={horseGold} alt="" className="absolute bottom-5 right-5 h-9 w-auto" />
              </div>
              <div className={`md:col-span-5 ${idx % 2 ? "md:order-1" : "md:col-start-8"}`}>
                <p data-reveal className={`eyebrow ${idx % 2 ? "text-gold" : "text-muted-foreground"}`}>Chapter {String(idx + 1).padStart(2, "0")}</p>
                <h2 data-reveal className={`display-lg mt-6 ${idx % 2 ? "" : "text-maroon"}`}>{c.name}</h2>
                <p data-reveal className={`lede mt-6 ${idx % 2 ? "text-ink-muted" : "text-muted-foreground"}`}>{c.line}</p>
                <Link data-reveal to="/shop" className={`btn-lux mt-10 ${idx % 2 ? "btn-lux-ink" : ""}`}>Shop the Collection</Link>
              </div>
            </div>
            <div data-stagger className={`mt-20 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4 ${idx % 2 ? "[&_.text-muted-foreground]:text-ink-muted" : ""}`}>
              {c.products.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
