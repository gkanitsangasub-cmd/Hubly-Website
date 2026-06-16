import Link from "next/link";
import { APP } from "../lib/site";
import { ButtonLink } from "./ui";
import { ArrowRightIcon } from "./icons";

export default function HeroVideo() {
  return (
    <section
      className="relative flex min-h-[34rem] items-center justify-center overflow-hidden bg-ink bg-cover bg-center md:min-h-[88vh]"
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

      {/* Warm scrim for legibility (uses ink/mocha, stays on-brand) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/75"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(60,48,39,0.55), transparent 70%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#FDFBF9] drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
          HublyCompany
        </h1>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg font-medium text-cream sm:text-xl md:text-2xl">
          <span>Agency</span>
          <span aria-hidden className="text-clay">
            |
          </span>
          <span>Production</span>
          <span aria-hidden className="text-clay">
            |
          </span>
          <span>SaaS</span>
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/85 sm:text-base">
          รวมบริการ Marketing, Production และซอฟต์แวร์ Hubly SaaS ไว้ในที่เดียว
          เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
          >
            ดูบริการ
            <ArrowRightIcon width={18} height={18} />
          </Link>
          <ButtonLink
            href={APP.url}
            external
            variant="outline"
            className="border-cream/40 bg-white/5 px-6 py-3.5 text-cream backdrop-blur-sm hover:bg-white/15"
          >
            ทดลอง Hubly ฟรี
          </ButtonLink>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream"
      />
    </section>
  );
}
