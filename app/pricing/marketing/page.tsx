import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "../../components/ui";
import { CheckIcon, ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "ราคา Marketing Agency",
  description:
    "แพ็กเกจบริการ Marketing Agency จาก HublyCompany — ราคาตามขอบเขตงาน ติดต่อรับใบเสนอราคาฟรี",
};

const CARD_SHADOW =
  "shadow-[0_16px_44px_-24px_rgba(60,48,39,0.30)] hover:shadow-[0_30px_64px_-28px_rgba(60,48,39,0.42)]";

// NOTE: pricing TBD — package scopes are placeholders for the client to confirm.
const TIERS = [
  {
    name: "Starter",
    desc: "เริ่มต้นสำหรับธุรกิจเล็ก ที่อยากเริ่มทำการตลาดอย่างมีระบบ",
    points: [
      "ดูแลโฆษณา 1 แพลตฟอร์ม (FB / IG / TikTok / Google)",
      "Content & Artwork พื้นฐาน",
      "รายงานผลรายเดือน",
    ],
    featured: false,
  },
  {
    name: "Growth",
    desc: "สำหรับธุรกิจที่ต้องการสเกลและทำหลายช่องทางพร้อมกัน",
    points: [
      "ดูแลโฆษณาหลายแพลตฟอร์ม",
      "Content + Artwork สม่ำเสมอ",
      "วางกลยุทธ์ + Optimize ต่อเนื่อง",
      "รายงาน + ปรึกษารายสัปดาห์",
    ],
    featured: true,
  },
  {
    name: "Full-Service",
    desc: "ดูแลการตลาดครบวงจร เหมือนมีทีมการตลาดเป็นของตัวเอง",
    points: [
      "ครบทุกช่องทาง + Marketplace (Shopee/Lazada)",
      "Campaign Production",
      "Marketing Consultant ประจำ",
    ],
    featured: false,
  },
];

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
            title="แพ็กเกจบริการการตลาด"
            subtitle="ราคาขึ้นกับขอบเขตงานและช่องทางที่ดูแล — เลือกแพ็กเกจที่ใกล้เคียง แล้วรับใบเสนอราคาฟรี"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TIERS.map((t, i) => (
              <MotionReveal key={t.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-card border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 ${CARD_SHADOW} ${
                    t.featured
                      ? "border-mocha/40 ring-1 ring-mocha/20"
                      : "border-ink/8"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                      แนะนำ
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-ink">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.desc}
                  </p>
                  <div className="mt-5 border-y border-ink/8 py-4">
                    <span className="text-lg font-bold text-mocha">
                      ราคาตามขอบเขตงาน
                    </span>
                    <p className="mt-0.5 text-xs text-muted">
                      ติดต่อรับใบเสนอราคาฟรี
                    </p>
                  </div>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-ink/80">
                        <CheckIcon
                          width={16}
                          height={16}
                          className="mt-0.5 shrink-0 text-sage"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-btn border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-beige"
                  >
                    ขอใบเสนอราคา
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            * แพ็กเกจและราคายังไม่ final — รอ HublyCompany ยืนยันรายละเอียด
          </p>
        </div>
      </section>

      <CtaCard
        title="อยากได้แผนการตลาดที่เหมาะกับธุรกิจคุณ?"
        subtitle="ปรึกษาทีม Marketing ฟรี เราจะช่วยประเมินขอบเขตและเสนอราคาที่เหมาะสม"
        primaryHref="/contact"
        primaryLabel="ขอใบเสนอราคา"
      />
    </>
  );
}
