import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/shop", label: "Shop" },
  { to: "/the-house", label: "The House" },
  { to: "/journal", label: "Journal" },
  { to: "/connect", label: "Connect" },
] as const;

const darkTop = ["/", "/collections", "/the-house", "/journal"];

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = darkTop.includes(path);
  const onDark = (light && !scrolled) || open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between rounded-[6px] px-4 transition-all duration-700 md:px-7",
            scrolled ? "h-16" : "h-20",
            onDark ? "glass text-ink-foreground" : "glass-light text-foreground",
            !scrolled && light && !open && "border-transparent bg-none shadow-none backdrop-blur-[2px]",
          )}
          style={{ transitionTimingFunction: "var(--ease-lux)" }}
        >
          <Link to="/" aria-label="MAYANKCHAWLA home">
            <Brand tone={onDark ? "light" : "dark"} />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="link-line text-[0.74rem] uppercase tracking-[0.26em] opacity-80 transition-opacity hover:opacity-100 data-[status=active]:opacity-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            className="flex h-11 w-11 flex-col items-end justify-center gap-[7px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("h-px w-7 bg-current transition-transform duration-500", open && "translate-y-[4px] rotate-45")} />
            <span className={cn("h-px bg-current transition-all duration-500", open ? "w-7 -translate-y-[4px] -rotate-45" : "w-5")} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-32 text-ink-foreground transition-[clip-path] duration-700 lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
        style={{ transitionTimingFunction: "var(--ease-lux)" }}
      >
        <nav className="flex flex-col gap-4">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-[2.6rem] uppercase leading-none tracking-wide transition-colors hover:text-gold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="eyebrow mt-12 text-ink-muted">Gurugram · New Delhi</p>
      </div>
    </>
  );
}
