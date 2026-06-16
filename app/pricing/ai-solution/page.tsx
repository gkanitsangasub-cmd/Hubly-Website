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
};

const CARD_SHADOW =
  "shadow-[0_16px_44px_-24px_rgba(60,48,39,0.30)] hover:shadow-[0_30px_64px_-28px_rgba(60,48,39,0.42)]";

// NOTE: pricing TBD — scopes are placeholders for the client to confirm.
const TIERS = [
  {
    icon: CodeIcon,
    name: "Website",
    desc: "เว็บไซต์ที่เขียนด้วยโค้ดจริง (built by Claude AI) เร็ว ปรับแต่งได้ ดีต่อ SEO",
    points: ["ออกแบบตามแบรนด์", "โหลดเร็ว + SEO-ready", "ปรับแก้ได้อิสระ"],
    pricing: "ราคาตามโปรเจกต์",
  },
  {
    icon: RobotIcon,
    name: "Chatbot",
    desc: "แชตบอตตอบลูกค้าอัตโนมัติตามกฎที่กำหนด ลดงานซ้ำ ตอบไว 24 ชม.",
    points: ["ตอบอัตโนมัติตาม flow", "เชื่อมช่องทางแชท", "ส่งต่อทีมเมื่อจำเป็น"],
    pricing: "ราคาตามขอบเขต",
  },
  {
    icon: KanbanIcon,
    name: "Software / ระบบ",
    desc: "ระบบจัดการ Lead และเครื่องมือเฉพาะธุรกิจ — รวมถึง Hubly SaaS แบบ Subscription",
    points: ["ระบบจัดการ Lead", "Custom workflow", "Subscription via Hubly SaaS"],
    pricing: "ตามโปรเจกต์ / รายเดือน",
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
            title="ราคาตามโปรเจกต์ที่ออกแบบเฉพาะคุณ"
            subtitle="แต่ละงานออกแบบเฉพาะตามความต้องการ — เล่าโจทย์ให้เราฟัง แล้วรับใบเสนอราคาฟรี"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TIERS.map((t, i) => {
              const Icon = t.icon;
              return (
                <MotionReveal key={t.name} delay={i * 0.1} className="h-full">
                  <div
                    className={`flex h-full flex-col rounded-card border border-ink/8 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 ${CARD_SHADOW}`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-orange-400/20 text-orange-700">
                      <Icon width={24} height={24} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{t.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t.desc}
                    </p>
                    <div className="mt-5 border-y border-ink/8 py-4">
                      <span className="text-lg font-bold text-mocha">
                        {t.pricing}
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
                      ปรึกษาโปรเจกต์
                      <ArrowRightIcon width={16} height={16} />
                    </Link>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            * ขอบเขตและราคายังไม่ final — รอ HublyCompany ยืนยันรายละเอียด
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
