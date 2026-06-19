import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../../components/ui";
import {
  CheckIcon,
  ArrowRightIcon,
  CodeIcon,
  RobotIcon,
  KanbanIcon,
} from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "ราคา AI Solution",
  description:
    "ราคา AI Solution จาก HublyCompany — เว็บไซต์, Chatbot และระบบ AI ราคาตามโปรเจกต์ ติดต่อรับใบเสนอราคาฟรี",
  alternates: { canonical: "https://hublycompany.com/pricing/ai-solution" },
};

const TIERS = [
  {
    icon: CodeIcon,
    name: "Website",
    desc: "เว็บไซต์ที่เขียนด้วยโค้ดจริง (built by Claude AI) เร็ว ปรับแต่งได้ ดีต่อ SEO",
    points: [
      "ออกแบบตามแบรนด์",
      "โหลดเร็ว + SEO-ready",
      "ปรับแก้ได้อิสระ",
      "ไม่ติด template ใดๆ",
    ],
    pricing: "ราคาตามโปรเจกต์",
    featured: false,
  },
  {
    icon: RobotIcon,
    name: "Chatbot",
    desc: "แชตบอตตอบลูกค้าอัตโนมัติตามกฎที่กำหนด ลดงานซ้ำ ตอบไว 24 ชม.",
    points: [
      "ตอบอัตโนมัติตาม flow",
      "เชื่อมช่องทางแชท",
      "ส่งต่อทีมเมื่อจำเป็น",
      "Dashboard ดูสถิติ",
    ],
    pricing: "ราคาตามขอบเขต",
    featured: true,
  },
  {
    icon: KanbanIcon,
    name: "Software / ระบบ",
    desc: "ระบบจัดการ Lead และเครื่องมือเฉพาะธุรกิจ — รวมถึง Hubly SaaS แบบ Subscription",
    points: [
      "ระบบจัดการ Lead",
      "Custom workflow",
      "Subscription via Hubly SaaS",
      "ออกแบบตาม process จริง",
    ],
    pricing: "ตามโปรเจกต์ / รายเดือน",
    featured: false,
  },
];

export default function AiPricingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ราคา · AI Solution"
            title="ออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ"
            subtitle="แต่ละงานออกแบบเฉพาะตามความต้องการ — เล่าโจทย์ให้เราฟัง แล้วรับใบเสนอราคาฟรี"
          />

          {/* Cinematic full-width banner */}
          <MotionReveal delay={0} className="mt-14">
            <div
              className="relative h-[260px] md:h-[340px] overflow-hidden rounded-card border border-ink/8 bg-ink bg-cover bg-center"
              style={{ backgroundImage: "url(/hero/ai-hero-poster.jpg)" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero/ai-hero-poster.jpg"
                aria-hidden="true"
                style={{
                  filter:
                    "sepia(0.2) saturate(1.1) hue-rotate(5deg) brightness(0.85) contrast(1.05)",
                }}
              >
                <source src="/hero/ai-hero.mp4" type="video/mp4" />
              </video>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/70">
                  AI Solution
                </div>
                <p className="mt-1.5 text-lg font-bold leading-snug text-cream">
                  ราคาตามโปรเจกต์ · ปรึกษาฟรีไม่มีค่าใช้จ่าย
                </p>
              </div>
            </div>
          </MotionReveal>

          {/* 3 tier cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {TIERS.map((t, i) => {
              const Icon = t.icon;
              return (
                <MotionReveal
                  key={t.name}
                  delay={(i + 1) * 0.1}
                  className="h-full"
                >
                  <div
                    className={`relative flex h-full flex-col rounded-card border bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg ${
                      t.featured
                        ? "border-mocha/40 ring-1 ring-mocha/20"
                        : "border-ink/8"
                    }`}
                  >
                    {t.featured && (
                      <span className="absolute -top-3 left-6 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                        แนะนำ
                      </span>
                    )}

                    <span className="grid h-11 w-11 place-items-center rounded-[0.8rem] bg-orange-400/20 text-orange-700">
                      <Icon width={20} height={20} />
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-ink">{t.name}</h3>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-muted">
                      {t.desc}
                    </p>

                    <div className="mt-4">
                      <div className="text-xl font-bold text-mocha">
                        {t.pricing}
                      </div>
                      <p className="mt-1 text-[11px] text-muted">
                        ติดต่อรับใบเสนอราคาฟรี
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className={`mt-4 inline-flex items-center justify-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition-colors ${
                        t.featured
                          ? "bg-mocha text-[#FDFBF9] hover:bg-mocha-dark"
                          : "border border-ink/15 text-ink hover:bg-beige"
                      }`}
                    >
                      ปรึกษาโปรเจกต์
                      <ArrowRightIcon width={14} height={14} />
                    </Link>

                    <ul className="mt-5 space-y-2 border-t border-ink/8 pt-5">
                      {t.points.map((p) => (
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
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            * ราคาขึ้นอยู่กับขอบเขตงาน ความซับซ้อน และ timeline — ปรึกษาก่อนได้เลย ไม่มีค่าใช้จ่าย
          </p>
        </div>
      </section>

      <CtaCard
        title="มีโปรเจกต์ในใจอยู่แล้ว?"
        subtitle="เล่าความต้องการให้เราฟัง แล้วเราจะออกแบบโซลูชันและเสนอราคาที่เหมาะสม"
        primaryHref="/contact"
        primaryLabel="ปรึกษาโปรเจกต์"
      />
    </>
  );
}
