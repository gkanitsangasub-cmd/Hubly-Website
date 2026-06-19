import type { Metadata } from "next";
import Link from "next/link";
import { TECH_SOLUTIONS } from "../../lib/content";
import VideoHero from "../../components/VideoHero";
import { SectionHeading, ButtonLink } from "../../components/ui";
import { ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "AI Solution",
  description:
    "AI Solution จาก HublyCompany — เว็บไซต์ด้วยโค้ดจริง (built by Claude AI), Chatbot, และระบบ AI ที่สร้างตามความต้องการธุรกิจคุณ",
  alternates: { canonical: "https://hublycompany.com/services/ai-solution" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Solution",
  "serviceType": "Software Development",
  "description":
    "AI Solution จาก HublyCompany — เว็บไซต์ด้วยโค้ดจริง (built by Claude AI), Chatbot รูลเบสและ LLM, ระบบ AI และ System Integration ตามความต้องการธุรกิจ",
  "provider": {
    "@type": "Organization",
    "name": "HublyCompany",
    "url": "https://hublycompany.com",
  },
  "areaServed": { "@type": "Country", "name": "Thailand" },
  "url": "https://hublycompany.com/services/ai-solution",
};

const SERVICE_TAGS: string[][] = [
  ["Lead Management", "Pipeline", "Hubly SaaS"],
  ["Next.js", "Claude AI", "SEO-ready"],
  ["LINE", "Facebook", "Messenger", "24 ชม."],
  ["LLM", "OpenAI", "Claude AI"],
  ["REST API", "Webhook", "Automation"],
  ["LINE OA", "Broadcast", "Rich Menu"],
];

export default function AiSolutionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <VideoHero
        src="/hero/ai-hero.mp4"
        poster="/hero/ai-hero-poster.jpg"
        eyebrow="AI Solution"
        title="ระบบ เว็บไซต์ และ AI ที่สร้างตามธุรกิจคุณ"
        subtitle="เครื่องมือและ AI ที่ออกแบบเฉพาะให้ตรงกับการทำงานของคุณ — built by Claude AI"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
        >
          ปรึกษาโปรเจกต์
          <ArrowRightIcon width={18} height={18} />
        </Link>
      </VideoHero>

      {/* Solutions grid */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="สิ่งที่เราทำ"
            title="โซลูชัน AI และเทคโนโลยีที่ปรับได้ตามธุรกิจ"
            subtitle="ไม่ว่าจะเป็นระบบจัดการ เว็บไซต์ หรือ Chatbot — เราออกแบบและสร้างตามโจทย์จริงของคุณ"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TECH_SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              const tags = SERVICE_TAGS[i] ?? [];
              return (
                <MotionReveal key={s.title} delay={i * 0.1} className="h-full">
                  <div className="group flex h-full flex-col rounded-card border border-ink/8 bg-card p-6 shadow-warm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-lg">
                    <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-orange-400/20 text-orange-700 transition-colors duration-300 group-hover:bg-orange-400/30">
                      <Icon width={22} height={22} />
                    </span>

                    <h3 className="mt-4 text-base font-bold text-ink md:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-orange-400/20 bg-orange-400/8 px-2.5 py-0.5 text-[11px] font-medium text-orange-700"
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
            <ButtonLink href="/pricing/ai-solution" variant="outline">
              ดูราคาและโซลูชัน
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaCard
        title="อยากได้ระบบหรือ AI ที่ใช่สำหรับธุรกิจคุณ?"
        subtitle="ปรึกษาทีม Tech ของ HublyCompany ฟรี — ออกแบบโซลูชันให้ตรงโจทย์"
      />
    </>
  );
}
