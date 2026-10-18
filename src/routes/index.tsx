import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { celebrities, collections, founder, images, journal, links, products, store } from "@/config/assets";
import { ProductCard } from "@/components/site/ProductCard";
import { StoreBlock } from "@/components/site/StoreBlock";
import { ensureGsap, prefersReduced, useScrollMotion } from "@/lib/motion";
import horseGold from "@/assets/horse-gold.png";
import horseBlack from "@/assets/horse-black.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAYANKCHAWLA Menswear | Indian Designer Menswear House" },
      { name: "description", content: "Couture tuxedos, bandhgalas and indowesterns from the house of MAYANKCHAWLA, New Delhi." },
      { property: "og:title", content: "MAYANKCHAWLA Menswear" },
      { property: "og:description", content: "A world of Indian designer menswear. Couture for the moments that outlive the evening." },
      { property: "og:image", content: images.hero },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo("[data-hero-img]", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.8, ease: "expo.inOut" })
        .fromTo("[data-hero-img] img", { scale: 1.3 }, { scale: 1, duration: 2.6 }, 0)
        .from("[data-hero-line]", { yPercent: 110, duration: 1.4, stagger: 0.1 }, 0.6)
        .from("[data-hero-fade]", { opacity: 0, y: 20, duration: 1.2, stagger: 0.1 }, 1);
      gsap.to("[data-hero-img] img", {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="grain relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
      <div className="grid min-h-[100svh] md:grid-cols-12">
        <div data-hero-img className="relative order-1 h-[68svh] overflow-hidden md:order-2 md:col-span-6 md:col-start-7 md:h-auto lg:col-span-5 lg:col-start-8">
          <img src={images.hero} alt="Noir velvet tuxedo by MAYANKCHAWLA" className="absolute inset-0 h-full w-full object-cover object-[50%_12%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent md:bg-gradient-to-r md:from-ink md:via-transparent" />
        </div>
        <div className="relative order-2 flex flex-col justify-end px-5 pb-12 pt-6 md:order-1 md:col-span-6 md:px-14 md:pb-20 lg:col-span-7">
          <p data-hero-fade className="eyebrow text-gold">Midnight Majesty · The Couture Edit</p>
          <h1 className="display-xl mt-6">
            <span className="block overflow-hidden"><span data-hero-line className="block">Enter</span></span>
            <span className="block overflow-hidden"><span data-hero-line className="block">Like a Legend</span></span>
          </h1>
          <div data-hero-fade className="mt-10 flex flex-wrap gap-4">
            <Link to="/collections" className="btn-lux btn-lux-ink">Discover Collections</Link>
            <Link to="/shop" className="link-line self-center text-[0.78rem] uppercase tracking-[0.28em]">Enter the Showroom</Link>
          </div>
        </div>
      </div>
      <div data-hero-fade className="absolute bottom-6 right-6 hidden items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-ink-muted md:flex">
        <span className="h-10 w-px bg-ink-line" /> Scroll
      </div>
    </section>
  );
}

function Home() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollMotion(scope);
  const selected = [products[0], products[2], products[4], products[6]];

  return (
    <div ref={scope}>
      <Hero />

      {/* THE HOUSE */}
      <section className="section-pad bg-paper">
        <div className="container-lux grid items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p data-reveal className="eyebrow text-muted-foreground">The House</p>
            <h2 data-reveal className="display-lg mt-6 text-maroon">Born in Delhi. Built for the Spotlight.</h2>
            <p data-reveal className="lede mt-8 max-w-md text-muted-foreground">
              MAYANKCHAWLA dresses the Indian man for the nights he will retell for the rest of his life. Sculpted
              tuxedos, regal bandhgalas and indowesterns, each one finished by hand in our Delhi atelier.
            </p>
            <Link data-reveal to="/the-house" className="btn-lux mt-10">View More</Link>
          </div>
          <div className="relative md:col-span-6 md:col-start-7">
            <div data-reveal-img className="aspect-[4/5] overflow-hidden">
              <img src={images.house} alt="Crest indowestern by MAYANKCHAWLA" className="h-full w-full object-cover object-[50%_15%]" />
            </div>
            <img src={horseBlack} alt="" className="absolute -bottom-10 -left-6 hidden h-28 w-auto opacity-[0.07] md:block" />
          </div>
        </div>
      </section>

      {/* SIGNATURE COLLECTIONS */}
      <section className="section-pad bg-ink text-ink-foreground">
        <div className="container-lux">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p data-reveal className="eyebrow text-gold">Signature Collections</p>
              <h2 data-reveal className="display-lg mt-6">Three Worlds. One Signature.</h2>
            </div>
            <Link data-reveal to="/collections" className="link-line text-[0.78rem] uppercase tracking-[0.28em]">All Collections</Link>
          </div>
          <div data-stagger className="mt-16 grid gap-6 md:h-[78vh] md:grid-cols-3 lg:flex">
            {collections.map((c) => (
              <Link
                key={c.slug}
                to="/collections"
                hash={c.slug}
                className="group relative block aspect-[3/4] overflow-hidden md:aspect-auto md:h-full lg:flex-1 lg:transition-[flex] lg:duration-[1200ms] lg:ease-[var(--ease-lux)] lg:hover:flex-[1.6]"
              >
                <img src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover object-[50%_10%] transition-transform duration-[1600ms] ease-[var(--ease-lux)] group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
                <img src={horseGold} alt="" className="absolute right-5 top-5 h-8 w-auto opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="display-md">{c.name}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-[0.95rem] text-ink-muted opacity-0 transition-all duration-700 group-hover:max-h-20 group-hover:opacity-100 max-lg:max-h-20 max-lg:opacity-100">
                    {c.line}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONWEAR */}
      <section className="section-pad overflow-hidden bg-paper">
        <div className="container-lux grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:pt-24">
            <p data-reveal className="eyebrow text-muted-foreground">Occasionwear</p>
            <h2 data-reveal className="display-lg mt-6 text-maroon">The Groom Arrives First.</h2>
            <p data-reveal className="lede mt-8 max-w-md text-muted-foreground">
              Sangeet, pheras, reception. Every chapter of the wedding asks something different of a man. We answer
              each one with a silhouette that holds the room.
            </p>
            <div data-reveal-img className="mt-14 hidden aspect-[3/4] w-2/3 overflow-hidden md:block">
              <img src={images.occasionSide} alt="Admiral navy indowestern" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div data-reveal-img className="relative aspect-[2/3] overflow-hidden">
              <img data-parallax="6" src={images.occasion} alt="Wine stallion bandhgala" className="h-[110%] w-full object-cover object-top" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-[0.95rem] text-muted-foreground">The Wine Stallion Bandhgala</p>
              <Link to="/shop/$slug" params={{ slug: "wine-velvet-bandhgala" }} className="link-line text-[0.78rem] uppercase tracking-[0.28em]">View Piece</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PIECES */}
      <section className="section-pad border-t bg-paper">
        <div className="container-lux">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p data-reveal className="eyebrow text-muted-foreground">Selected Pieces</p>
              <h2 data-reveal className="display-lg mt-6 text-maroon">Chosen by the Atelier</h2>
            </div>
            <Link data-reveal to="/shop" className="btn-lux">Enter the Shop</Link>
          </div>
          <div data-stagger className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
            {selected.filter((p): p is NonNullable<typeof p> => !!p).map((p, i) => <ProductCard key={p.slug} p={p} signature={i === 0} />)}
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section className="section-pad bg-ink text-ink-foreground">
        <div className="container-lux">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p data-reveal className="eyebrow text-gold">Craft & Detail</p>
              <h2 data-reveal className="display-lg mt-6">Look Closer.</h2>
              <p data-reveal className="lede mt-8 text-ink-muted">
                Cutdana placed by hand. Silver thread traced across velvet. Embroidery that reveals itself only when
                you stand near enough to deserve it.
              </p>
            </div>
            <div data-stagger className="grid grid-cols-2 gap-4 md:col-span-8 md:gap-6">
              {images.craft.map((src, i) => (
                <div key={src} className={`img-zoom aspect-square overflow-hidden ${i % 2 ? "md:translate-y-16" : ""}`}>
                  <img src={src} alt="Embroidery detail" loading="lazy" className="h-full w-full scale-[1.7] object-cover object-[50%_28%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad bg-paper">
        <div className="container-lux grid items-center gap-14 md:grid-cols-12">
          <div className="relative md:col-span-5">
            {founder.portrait ? (
              <div data-reveal-img className="aspect-[4/5] overflow-hidden">
                <img src={founder.portrait} alt={founder.name} className="h-full w-full object-cover object-top" />
              </div>
            ) : (
              <div data-reveal className="flex aspect-[4/5] items-center justify-center border bg-secondary">
                <img src={horseBlack} alt="" className="h-1/2 w-auto opacity-90" />
              </div>
            )}
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p data-reveal className="eyebrow text-muted-foreground">The Founder</p>
            <h2 data-reveal className="display-lg mt-6 text-maroon">Mayank Chawla</h2>
            <p data-reveal className="lede mt-8 max-w-lg text-muted-foreground">
              A New Delhi designer who believes a man should be remembered for how he carried the night. His house
              builds couture menswear around one idea: exclusivity, worn with ease. Each piece tells its own story.
            </p>
            <blockquote data-reveal className="mt-10 border-l-2 border-maroon pl-6 font-display text-2xl uppercase leading-tight">
              Be bold. Be different. Be you.
            </blockquote>
            <Link data-reveal to="/the-house" className="btn-lux mt-10">The House</Link>
          </div>
        </div>
      </section>

      {/* CELEBRITIES */}
      <section className="section-pad bg-ink text-ink-foreground">
        <div className="container-lux">
          <p data-reveal className="eyebrow text-gold">Celebrity Closet</p>
          <h2 data-reveal className="display-lg mt-6">In MAYANKCHAWLA</h2>
          {celebrities.length > 0 ? (
            <div data-stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {celebrities.map((c) => (
                <figure key={c.name}>
                  <div className="img-zoom aspect-[3/4] overflow-hidden"><img src={c.image} alt={c.name} className="h-full w-full object-cover object-top" /></div>
                  <figcaption className="mt-4">
                    <p className="font-display text-xl uppercase">{c.name}</p>
                    <p className="eyebrow mt-1 text-[0.62rem] text-ink-muted">In MAYANKCHAWLA</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div data-reveal className="mt-14 flex flex-col justify-between gap-8 border-y border-ink-line py-12 md:flex-row md:items-center">
              <p className="lede max-w-xl text-ink-muted">
                Red carpets, premieres and unforgettable evenings. See the icons who have stepped into the spotlight
                wearing the house.
              </p>
              <a href={links.instagram} target="_blank" rel="noreferrer" className="btn-lux btn-lux-ink shrink-0">View the Closet</a>
            </div>
          )}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="section-pad bg-paper">
        <div className="container-lux">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p data-reveal className="eyebrow text-muted-foreground">Journal</p>
              <h2 data-reveal className="display-lg mt-6 text-maroon">Stories from the Atelier</h2>
            </div>
            <Link data-reveal to="/journal" className="link-line text-[0.78rem] uppercase tracking-[0.28em]">Read the Journal</Link>
          </div>
          <div data-stagger className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
            {journal.map((j) => (
              <Link key={j.slug} to="/journal" hash={j.slug} className="group block">
                <div className="img-zoom aspect-[4/5] overflow-hidden"><img src={j.image} alt={j.title} loading="lazy" className="h-full w-full object-cover object-top" /></div>
                <p className="eyebrow mt-6 text-muted-foreground">{j.kicker}</p>
                <h3 className="display-md mt-3 text-maroon">{j.title}</h3>
                <p className="mt-3 text-[0.95rem] text-muted-foreground">{j.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <StoreBlock />

      {/* FINAL */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[80svh] overflow-hidden md:h-[100svh]">
            <img data-parallax="10" src={images.finale} alt="MAYANKCHAWLA couture" className="absolute inset-0 h-[115%] w-full object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-16">
            <img src={horseGold} alt="" className="h-14 w-auto self-start" />
            <h2 data-reveal className="display-xl mt-10">Not Clothes.<br />A Kingdom.</h2>
            <p data-reveal className="lede mt-8 max-w-md text-ink-muted">Step inside the world of MAYANKCHAWLA. {store.hours}.</p>
            <Link data-reveal to="/connect" className="btn-lux btn-lux-ink mt-10 self-start">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
