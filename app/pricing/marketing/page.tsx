import type { Metadata } from "next";
import { SectionHeading } from "../../components/ui";
import CtaCard from "../../components/CtaCard";
import MarketingBuilderContent from "./MarketingBuilderContent";

export const metadata: Metadata = {
  title: "ราคา Marketing Agency",
  description:
    "เลือกบริการ Marketing Agency ที่ต้องการ — Social Media, Ads, SEO, Marketplace และ Consulting คำนวณราคาได้ทันที ไม่รวม Ad Spend",
};

export default function MarketingPricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-24 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl"
        />

        {/* Full-width video banner */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ราคา · Marketing Agency"
            title="ออกแบบแพ็คเกจการตลาดของคุณเอง"
            subtitle="เลือกเฉพาะบริการที่ต้องการ ราคาจะคำนวณให้อัตโนมัติ — ไม่ต้องจ่ายสิ่งที่ไม่ได้ใช้"
          />

          <div className="mt-10 h-[240px] md:h-[320px] overflow-hidden rounded-card border border-ink/8 relative bg-ink bg-cover bg-center"
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
                ราคาตามบริการที่คุณเลือก · ไม่รวม Ad Spend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder */}
      <MarketingBuilderContent />

      <CtaCard
        title="อยากได้แผนการตลาดที่เหมาะกับธุรกิจคุณ?"
        subtitle="ปรึกษาทีม Marketing ฟรี เราจะช่วยประเมินขอบเขตและเสนอราคาที่เหมาะสม"
        primaryHref="/contact"
        primaryLabel="ขอใบเสนอราคาฟรี"
      />
    </>
  );
}
