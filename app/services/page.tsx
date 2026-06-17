import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "../components/ui";
import {
  MegaphoneIcon,
  SparkleIcon,
  ArrowRightIcon,
  CheckIcon,
} from "../components/icons";
import MotionReveal from "../components/MotionReveal";
import CtaCard from "../components/CtaCard";

export const metadata: Metadata = {
  title: "บริการ",
  description:
    "บริการของ HublyCompany — Marketing Agency ครบวงจร และ AI Solution สร้างระบบ เว็บไซต์ และ AI ตามความต้องการธุรกิจคุณ",
};

const AREAS = [
  {
    href: "/services/marketing",
    icon: MegaphoneIcon,
    name: "Marketing Agency",
    desc: "วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง ให้ธุรกิจโตแบบมีตัวเลข",
    points: ["Social & Google Ads", "Content & Artwork", "กลยุทธ์ & วัดผล"],
    accent: "bg-amber-500/12 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    href: "/services/ai-solution",
    icon: SparkleIcon,
    name: "AI Solution",
    desc: "เว็บไซต์ ระบบ และ AI ที่สร้างตามความต้องการธุรกิจคุณ — built by Claude AI",
    points: ["เว็บไซต์ด้วยโค้ดจริง", "Chatbot อัตโนมัติ", "ระบบจัดการ Lead"],
    accent: "bg-orange-400/20 text-orange-700",
    dot: "bg-orange-400",
  },
];

export default function ServicesPage() {
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
          className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-clay/20 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="บริการของเรา"
            title="บริการครบ ตั้งแต่การตลาดจนถึงเทคโนโลยี"
            subtitle="HublyCompany ดูแลทั้ง Marketing Agency และ AI Solution ให้ธุรกิจ SME ไทยเติบโตได้จริง"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {AREAS.map((a, i) => {
              const Icon = a.icon;
              return (
                <MotionReveal key={a.href} delay={i * 0.12} className="h-full">
                  <Link
                    href={a.href}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-ink/8 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-warm hover:shadow-warm-lg md:p-8`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${a.dot}`}
                    />
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-[0.9rem] ${a.accent}`}
                    >
                      <Icon width={28} height={28} />
                    </span>
                    <h2 className="mt-5 text-xl font-bold text-ink sm:text-2xl">
                      {a.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {a.desc}
                    </p>
                    <ul className="mt-5 flex flex-1 flex-col gap-2">
                      {a.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2.5 text-sm text-ink/80"
                        >
                          <CheckIcon
                            width={16}
                            height={16}
                            className="shrink-0 text-sage"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mocha transition-all group-hover:gap-2.5 group-hover:text-mocha-dark">
                      ดูบริการ {a.name}
                      <ArrowRightIcon width={16} height={16} />
                    </span>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaCard
        title="อยากให้ธุรกิจโตแบบมีระบบ?"
        subtitle="ทีม HublyCompany พร้อมช่วยวางแผนและลงมือทำให้ครบจบในที่เดียว"
      />
    </>
  );
}
