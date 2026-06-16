import Link from "next/link";
import { APP } from "../lib/site";
import { ArrowRightIcon } from "./icons";

export default function HeroVideo() {
  return (
    <section className="bg-night p-4 md:p-6">
      {/* Inset cinematic frame */}
      <div
        className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-2xl bg-ink bg-cover bg-center md:min-h-[calc(100vh-3rem)] md:rounded-[2rem]"
        style={{ backgroundImage: "url(/hero/hero-poster.jpg)" }}
      >
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Film grain */}
        <div
          aria-hidden
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
        />

        {/* Warm scrim (ink/mocha, on-brand) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/40 to-ink/75"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(60,48,39,0.55), transparent 70%)",
          }}
        />

        {/* Centered content (CSS pull-up — visible without JS, SEO-safe) */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <h1
            className="hero-rise text-5xl font-bold leading-[1.02] tracking-tight text-[#FDFBF9] drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.05s" }}
          >
            HublyCompany
          </h1>
          <p
            className="hero-rise mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-medium text-cream sm:text-xl md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span>Marketing Agency</span>
            <span aria-hidden className="text-clay">
              |
            </span>
            <span>AI Solution</span>
            <span aria-hidden className="text-clay">
              |
            </span>
            <span>SaaS</span>
          </p>
          <p
            className="hero-rise mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/85 sm:text-base"
            style={{ animationDelay: "0.32s" }}
          >
            รวมบริการ Marketing Agency, AI Solution และซอฟต์แวร์ Hubly SaaS
            ไว้ในที่เดียว เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง
          </p>

          <div
            className="hero-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.44s" }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
            >
              ดูบริการ
              <ArrowRightIcon width={18} height={18} />
            </Link>
            <a
              href={APP.url}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-btn border border-cream/70 bg-ink/45 px-6 py-3.5 text-sm font-semibold text-cream shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink/65"
            >
              ทดลอง Hubly ฟรี
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
