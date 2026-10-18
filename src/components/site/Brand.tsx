import horseBlack from "@/assets/horse-black.png";
import horseWhite from "@/assets/horse-white.png";
import { cn } from "@/lib/utils";

export function Brand({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img src={tone === "light" ? horseWhite : horseBlack} alt="" className="h-9 w-auto md:h-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] tracking-[0.06em] md:text-[1.3rem]">MAYANKCHAWLA</span>
        <span className="mt-1 text-[0.62rem] uppercase tracking-[0.5em] opacity-70">Menswear</span>
      </span>
    </span>
  );
}
