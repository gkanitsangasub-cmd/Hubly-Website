import type { Metadata } from "next";
import Link from "next/link";
import { MARKETING_SERVICES } from "../../lib/content";
import VideoHero from "../../components/VideoHero";
import { SectionHeading, ButtonLink } from "../../components/ui";
import { ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "Marketing Agency",
  description:
    "บริการ Marketing Agency ครบวงจรจาก HublyCompany — Social & Google Ads, Content & Artwork, Blog/SEO, Marketplace และวางกลยุทธ์การตลาดให้ธุรกิจ SME ไทย",
};

const SERVICE_TAGS: string[][] = [
  ["Facebook", "Instagram", "TikTok", "LINE"],
  ["Google Search", "Display", "YouTube"],
  ["Artwork", "Caption", "Content Calendar"],
  ["Blog", "SEO", "Organic"],
  ["Shopee", "Lazada", "Marketplace"],
  ["กลยุทธ์", "วิเคราะห์", "Optimize"],
  ["Short Video", "Creative", "Production"],
];

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

      {/* Services grid */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
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
            eyebrow="สิ่งที่เราทำ"
            title="ครอบคลุมทุกช่องทางการตลาดดิจิทัล"
            subtitle="ตั้งแต่ยิงโฆษณา สร้าง Content ไปจนถึง Marketplace — ดูแลได้ทั้งหมดหรือเลือกเฉพาะที่ต้องการ"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETING_SERVICES.map((s, i) => {
              const Icon = s.icon;
              const tags = SERVICE_TAGS[i] ?? [];
              return (
                <MotionReveal key={s.title} delay={i * 0.07} className="h-full">
                  <div className="group flex h-full flex-col rounded-card border border-ink/8 bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg">
                    {/* Icon */}
                    <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-amber-500/12 text-amber-700 transition-colors duration-300 group-hover:bg-amber-500/20">
                      <Icon width={22} height={22} />
                    </span>

                    {/* Title + desc */}
                    <h3 className="mt-4 text-base font-bold text-ink md:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>

                    {/* Channel tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-amber-500/20 bg-amber-500/8 px-2.5 py-0.5 text-[11px] font-medium text-amber-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="/pricing/marketing" variant="outline">
              ดูแพ็คเกจและราคา
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaCard
        title="พร้อมให้การตลาดทำงานจริง?"
        subtitle="ปรึกษาทีม Marketing ของ HublyCompany ฟรี — วางแผน ยิงจริง วัดผลได้"
      />
    </>
  );
}
