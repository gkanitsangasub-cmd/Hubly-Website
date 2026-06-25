import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "../components/ui";
import {
  MegaphoneIcon,
  SparkleIcon,
  LayersIcon,
  ArrowRightIcon,
} from "../components/icons";
import MotionReveal from "../components/MotionReveal";
import CtaCard from "../components/CtaCard";

export const metadata: Metadata = {
  title: "ราคา",
  description:
    "ราคาของ HublyCompany — Marketing Agency, AI Solution และ Hubly SaaS เลือกบริการที่ตรงกับธุรกิจคุณ",
  alternates: { canonical: "https://hublycompany.com/pricing" },
};

const OPTIONS = [
  {
    href: "/pricing/marketing",
    icon: MegaphoneIcon,
    name: "Marketing Agency",
    price: "ราคาตามขอบเขตงาน",
    desc: "แพ็กเกจดูแลการตลาด ยิงโฆษณา Content และวัดผล",
    accent: "bg-amber-500/12 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    href: "/pricing/ai-solution",
    icon: SparkleIcon,
    name: "AI Solution",
    price: "ราคาตามโปรเจกต์",
    desc: "เว็บไซต์ Chatbot และระบบ AI ออกแบบเฉพาะธุรกิจ",
    accent: "bg-orange-400/20 text-orange-700",
    dot: "bg-orange-400",
  },
  {
    href: "/pricing/saas",
    icon: LayersIcon,
    name: "Hubly SaaS",
    price: "฿2,990/เดือน",
    desc: "HubChat · HubDeal · HubStore — รายปีลด 10% · Bundle สูงสุด −20%",
    accent: "bg-lime-700/12 text-lime-800",
    dot: "bg-lime-700",
  },
];

export default function PricingHubPage() {
  return (
    <>
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
            eyebrow="ราคา"
            title="เลือกบริการที่ตรงกับธุรกิจคุณ"
            subtitle="ดูราคาของ Marketing Agency, AI Solution หรือ Hubly SaaS — โปร่งใส ไม่มีค่าแอบแฝง"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OPTIONS.map((o, i) => {
              const Icon = o.icon;
              return (
                <MotionReveal key={o.href} delay={i * 0.1} className="h-full">
                  <Link
                    href={o.href}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-ink/8 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-warm hover:shadow-warm-lg`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${o.dot}`}
                    />
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-[0.85rem] ${o.accent}`}
                    >
                      <Icon width={24} height={24} />
                    </span>
                    <h2 className="mt-5 text-xl font-bold text-ink">{o.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {o.desc}
                    </p>
                    <div className="mt-5 border-t border-ink/8 pt-5">
                      <div className="text-lg font-bold text-mocha">
                        {o.price}
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-mocha transition-all group-hover:gap-2.5 group-hover:text-mocha-dark">
                      ดูราคา {o.name}
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
        title="ไม่แน่ใจว่าควรเริ่มจากตรงไหน?"
        subtitle="ปรึกษาทีม HublyCompany ฟรี เราจะช่วยแนะนำบริการที่เหมาะกับธุรกิจคุณ"
        primaryHref="/contact"
        primaryLabel="ปรึกษาเรา"
      />
    </>
  );
}
