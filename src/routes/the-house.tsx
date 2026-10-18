import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { images } from "@/config/assets";
import { PageHero } from "@/components/site/PageHero";
import { StoreBlock } from "@/components/site/StoreBlock";
import { useScrollMotion } from "@/lib/motion";

export const Route = createFileRoute("/the-house")({
  head: () => ({
    meta: [
      { title: "The House | MAYANKCHAWLA Menswear" },
      { name: "description", content: "The story of MAYANKCHAWLA, a couture menswear house founded in New Delhi by designer Mayank Chawla." },
      { property: "og:title", content: "The House | MAYANKCHAWLA" },
      { property: "og:description", content: "Exclusivity, worn with ease. The story behind the horse." },
      { property: "og:image", content: images.founderMood },
      { name: "twitter:image", content: images.founderMood },
    ],
  }),
  component: House,
});

const pillars = [
  { t: "The Cut", d: "Sharp shoulders and a long, clean line. Structure that flatters without announcing the effort." },
  { t: "The Hand", d: "Cutdana, aari and thread work placed by artisans who measure progress in millimetres." },
  { t: "The Fit", d: "Every piece is made to measure. It is finished on you, not on a hanger." },
];

function House() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope);
  return (
    <div ref={scope}>
      <PageHero eyebrow="The House" title="Exclusivity, Worn with Ease" lede="A Delhi house built on a simple belief. Each piece should tell its own story, and the man wearing it should never have to explain it." image={images.founderMood} />
      <section className="section-pad bg-paper">
        <div className="container-lux grid gap-14 md:grid-cols-12">
          <h2 data-reveal className="display-lg text-maroon md:col-span-5">Why the Horse</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p data-reveal className="lede text-muted-foreground">
              Power held in balance. Strength that does not need to shout. The rearing stallion is the house mark
              because it is the posture we design for: chest open, head high, entirely in command.
            </p>
            <p data-reveal className="lede text-muted-foreground">
              Founded by designer Mayank Chawla in New Delhi, the house creates groom couture, tuxedos, bandhgalas
              and indowesterns for the Indian man who would rather be remembered than merely noticed.
            </p>
          </div>
        </div>
        <div data-stagger className="container-lux mt-24 grid gap-px border bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.t} className="bg-paper p-10">
              <p className="font-display text-5xl text-maroon/20">0{i + 1}</p>
              <h3 className="display-md mt-6 text-maroon">{p.t}</h3>
              <p className="mt-4 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-pad bg-ink text-ink-foreground">
        <div className="container-lux grid items-center gap-14 md:grid-cols-2">
          <div data-reveal-img className="aspect-[4/5] overflow-hidden"><img src={images.occasion} alt="Stallion embroidery" className="h-full w-full scale-150 object-cover object-[60%_25%]" /></div>
          <div>
            <p data-reveal className="eyebrow text-gold">The Founder</p>
            <h2 data-reveal className="display-lg mt-6">Mayank Chawla</h2>
            <p data-reveal className="lede mt-8 text-ink-muted">
              His philosophy is direct: fashion that blends exclusivity with ease, crafted with precision for men who
              value both comfort and individuality. His invitation is even simpler.
            </p>
            <p data-reveal className="mt-8 font-display text-3xl uppercase">Be bold. Be different. Be you.</p>
            <Link data-reveal to="/collections" className="btn-lux btn-lux-ink mt-10">See the Collections</Link>
          </div>
        </div>
      </section>
      <StoreBlock />
    </div>
  );
}
