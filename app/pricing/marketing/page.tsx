import type { Metadata } from "next";
import Link from "next/link";
import { MARKETING_PACKAGES, baht } from "../../lib/content";
import { SectionHeading } from "../../components/ui";
import { CheckIcon, ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "ราคา Marketing Agency",
  description:
    "แพ็คเกจ Marketing Agency จาก HublyCompany — Boost ฿8,900 · Scale ฿12,900 · Full-Service ฿19,900 · Marketplace ฿8,900 ราคาไม่รวม Ad Spend",
};

const MAIN_PACKAGES = MARKETING_PACKAGES.filter((p) => !p.isMarketplace);
const MARKETPLACE_PKG = MARKETING_PACKAGES.find((p) => p.isMarketplace)!;

export default function MarketingPricingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-24 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ราคา · Marketing Agency"
            title="แพ็คเกจบริการการตลาด"
            subtitle="ราคาเริ่มต้นชัดเจน ไม่มีค่าใช้จ่ายซ่อนเร้น — ราคาไม่รวม Ad Spend ของลูกค้า"
          />

          {/* Lead card + 3 plan cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Cinematic lead card */}
            <MotionReveal delay={0} className="h-full">
              <div
                className="relative h-full min-h-[320px] overflow-hidden rounded-card border border-ink/8 bg-ink bg-cover bg-center lg:min-h-[440px]"
                style={{ backgroundImage: "url(/hero/marketing-hero-poster.jpg)" }}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero/marketing-hero-poster.jpg"
                  aria-hidden="true"
                  style={{
                    filter:
                      "sepia(0.3) saturate(1.2) hue-rotate(-8deg) brightness(0.85) contrast(1.04)",
                  }}
                >
                  <source src="/hero/marketing-hero.mp4" type="video/mp4" />
                </video>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/70">
                    Marketing Agency
                  </div>
                  <p className="mt-1.5 text-lg font-bold leading-snug text-cream">
                    เริ่มต้น {baht(8900)}/เดือน
                    <br />
                    ไม่รวม Ad Spend
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* 3 main plan cards */}
            {MAIN_PACKAGES.map((pkg, i) => (
              <MotionReveal
                key={pkg.name}
                delay={(i + 1) * 0.1}
                className="h-full"
              >
                <div
                  className={`relative flex h-full flex-col rounded-card border bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg ${
                    pkg.featured
                      ? "border-mocha/40 ring-1 ring-mocha/20"
                      : "border-ink/8"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                      แนะนำ
                    </span>
                  )}

                  {/* Icon */}
                  <span className="grid h-11 w-11 place-items-center rounded-[0.8rem] bg-amber-500/12 text-amber-700">
                    <span className="text-base font-bold">
                      {pkg.name === "Boost" ? "🚀" : pkg.name === "Scale" ? "📈" : "⭐"}
                    </span>
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-4">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-ink">
                        {baht(pkg.startingPrice)}
                      </span>
                      <span className="pb-0.5 text-xs text-muted">/เดือน</span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted">
                      ราคาเริ่มต้น · ไม่รวม Ad Spend
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-4 inline-flex items-center justify-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition-colors ${
                      pkg.featured
                        ? "bg-mocha text-[#FDFBF9] hover:bg-mocha-dark"
                        : "border border-ink/15 text-ink hover:bg-beige"
                    }`}
                  >
                    ขอใบเสนอราคา
                  </Link>

                  <ul className="mt-5 flex-1 space-y-2 border-t border-ink/8 pt-5">
                    {pkg.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-ink/80">
                        <CheckIcon
                          width={15}
                          height={15}
                          className="mt-0.5 shrink-0 text-sage"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Marketplace — separated wide card */}
          <MotionReveal delay={0.4}>
            <div className="mt-5 overflow-hidden rounded-card border border-amber-500/30 bg-amber-500/[0.04] shadow-warm">
              <div className="flex flex-col gap-6 p-7 md:flex-row md:items-start md:gap-10">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-ink">
                      {MARKETPLACE_PKG.name}
                    </h3>
                    <span className="rounded-full bg-amber-500/15 px-3 py-0.5 text-xs font-semibold text-amber-700">
                      บริการแยก · รวมกับแพ็คเกจอื่นได้
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {MARKETPLACE_PKG.desc}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold text-amber-700">
                        {baht(MARKETPLACE_PKG.startingPrice)}
                      </span>
                      <span className="pb-1 text-sm text-muted">/เดือน</span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted">
                      ราคาเริ่มต้น · ไม่รวม Ad Spend
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:w-72">
                  <ul className="space-y-2.5">
                    {MARKETPLACE_PKG.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-ink/80">
                        <CheckIcon
                          width={15}
                          height={15}
                          className="mt-0.5 shrink-0 text-sage"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-btn bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
                  >
                    ขอใบเสนอราคา Marketplace
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>

          <p className="mt-6 text-center text-xs text-muted">
            * ราคาเริ่มต้น — ราคาจริงขึ้นอยู่กับขอบเขตงาน จำนวนแพลตฟอร์ม และปริมาณ Content
          </p>
        </div>
      </section>

      <CtaCard
        title="อยากได้แผนการตลาดที่เหมาะกับธุรกิจคุณ?"
        subtitle="ปรึกษาทีม Marketing ฟรี เราจะช่วยประเมินขอบเขตและเสนอราคาที่เหมาะสม"
        primaryHref="/contact"
        primaryLabel="ขอใบเสนอราคาฟรี"
      />
    </>
  );
}
