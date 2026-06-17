import type { Metadata } from "next";
import Link from "next/link";
import { TECH_SOLUTIONS } from "../../lib/content";
import VideoHero from "../../components/VideoHero";
import { ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "AI Solution",
  description:
    "AI Solution จาก HublyCompany — เว็บไซต์ด้วยโค้ดจริง (built by Claude AI), Chatbot, และระบบ AI ที่สร้างตามความต้องการธุรกิจคุณ",
};

export default function AiSolutionPage() {
  return (
    <>
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

      {/* Solutions */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {TECH_SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <MotionReveal key={s.title} delay={i * 0.1} className="h-full">
                  <div
                    className={`flex h-full flex-col rounded-card border border-ink/8 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-warm hover:shadow-warm-lg`}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-[0.9rem] bg-orange-400/20 text-orange-700">
                      <Icon width={28} height={28} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            มีโปรเจกต์ในใจอยู่แล้ว?{" "}
            <Link
              href="/contact"
              className="font-semibold text-mocha underline"
            >
              เล่าให้เราฟัง
            </Link>
          </p>
        </div>
      </section>

      <CtaCard
        title="อยากได้ระบบหรือ AI ที่ใช่สำหรับธุรกิจคุณ?"
        subtitle="ปรึกษาทีม Tech ของ HublyCompany ฟรี — ออกแบบโซลูชันให้ตรงโจทย์"
      />
    </>
  );
}
