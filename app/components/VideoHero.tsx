import type { ReactNode } from "react";

/** Reusable warm-controlled video hero (framed, on-brand) used across pages. */
export default function VideoHero({
  src,
  poster,
  eyebrow,
  title,
  subtitle,
  filter = "sepia(0.4) saturate(1.2) hue-rotate(-12deg) brightness(0.9) contrast(1.02)",
  tintClassName = "bg-mocha/25 mix-blend-multiply",
  children,
}: {
  src: string;
  poster: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  filter?: string;
  tintClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream p-4 md:p-6">
      <div
        className="relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-2xl bg-ink bg-cover bg-center md:min-h-[30rem] md:rounded-[2rem]"
        style={{ backgroundImage: `url(${poster})` }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          aria-hidden="true"
          style={{ filter }}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* warm tint + scrim to pull it onto brand */}
        <div aria-hidden className={`absolute inset-0 ${tintClassName}`} />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(60,48,39,0.5), transparent 72%)",
          }}
        />
        <div
          aria-hidden
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-cream/30 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cream backdrop-blur-sm">
              {eyebrow}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#FDFBF9] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {subtitle}
          </p>
          {children && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
