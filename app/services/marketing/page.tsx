import type { Metadata } from "next";
import Link from "next/link";
import { MARKETING_SERVICES, MARKETING_PACKAGES, baht } from "../../lib/content";
import VideoHero from "../../components/VideoHero";
import { SectionHeading } from "../../components/ui";
import { ArrowRightIcon, CheckIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "Marketing Agency",
  description:
    "บริการ Marketing Agency ครบวงจรจาก HublyCompany — Social & Google Ads, Content & Artwork, Blog/SEO, Marketplace และวางกลยุทธ์การตลาดให้ธุรกิจ SME ไทย",
};

export default function MarketingAgencyPage() {
  return (
    <>
      <VideoHero
        src="/hero/marketing-hero.mp4"
        poster="/hero/marketing-hero-poster.jpg"
        eyebrow="Marketing Agency"
        title="บริการ Marketing ครบวงจร"
        subtitle="วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง — ให้ธุรกิจคุณโตแบบมีตัวเลข"
        filter="sepia(0.25) saturate(1.2) hue-rotate(-8deg) brightness(0.9) contrast(1.04)"
        tintClassName="bg-mocha/20 mix-blend-multiply"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
        >
          คุยกับทีมการตลาด
          <ArrowRightIcon width={18} height={18} />
        </Link>
      </VideoHero>

      {/* Services list */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="สิ่งที่เราทำ"
            title="ครอบคลุมทุกช่องทางการตลาดดิจิทัล"
            subtitle="ตั้งแต่ยิงโฆษณา สร้าง Content ไปจนถึง Marketplace — ดูแลได้ทั้งหมดหรือเลือกเฉพาะที่ต้องการ"
          />
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {MARKETING_SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <MotionReveal key={s.title} delay={i * 0.05}>
                  <div className="group flex items-center gap-4 px-2 py-5 md:gap-7 md:px-4">
                    <span className="w-7 shrink-0 text-sm font-semibold tabular-nums text-ink/30 md:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-card text-amber-700 shadow-sm sm:grid">
                      <Icon width={20} height={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-ink md:text-lg">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-muted md:line-clamp-none">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package overview */}
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="แพ็คเกจบริการ"
            title="เลือกแพ็คเกจที่เหมาะกับธุรกิจคุณ"
            subtitle="ราคาเริ่มต้นชัดเจน ไม่มีค่าใช้จ่ายซ่อนเร้น — ราคาไม่รวม Ad Spend"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING_PACKAGES.map((pkg, i) => (
              <MotionReveal key={pkg.name} delay={i * 0.08} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-card border bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg ${
                    pkg.featured
                      ? "border-mocha/40 ring-1 ring-mocha/20"
                      : pkg.isMarketplace
                        ? "border-amber-500/30 bg-amber-500/[0.03]"
                        : "border-ink/8"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-5 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                      แนะนำ
                    </span>
                  )}
                  {pkg.isMarketplace && (
                    <span className="absolute -top-3 left-5 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                      Marketplace
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {pkg.desc}
                  </p>
                  <div className="mt-4 border-t border-ink/8 pt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      เริ่มต้น
                    </div>
                    <div className="mt-1 text-2xl font-bold text-mocha">
                      {baht(pkg.startingPrice)}
                      <span className="text-sm font-normal text-muted">
                        /เดือน
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 flex-1 space-y-2">
                    {pkg.points.map((p) => (
                      <li key={p} className="flex gap-2 text-xs text-ink/75">
                        <CheckIcon
                          width={13}
                          height={13}
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
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/pricing/marketing"
              className="inline-flex items-center gap-2 rounded-btn bg-mocha px-6 py-3 text-sm font-semibold text-[#FDFBF9] transition-colors hover:bg-mocha-dark"
            >
              ดูรายละเอียดราคา
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-btn border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-beige"
            >
              ขอใบเสนอราคาฟรี
            </Link>
          </div>
          <p className="mt-5 text-center text-xs text-muted">
            * ราคาไม่รวม Ad Spend · ราคาเริ่มต้น ขึ้นอยู่กับขอบเขตงานจริง
          </p>
        </div>
      </section>

      <CtaCard
        title="พร้อมให้การตลาดทำงานจริง?"
        subtitle="ปรึกษาทีม Marketing ของ HublyCompany ฟรี — วางแผน ยิงจริง วัดผลได้"
      />
    </>
  );
}
