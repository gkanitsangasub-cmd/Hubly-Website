import type { Metadata } from "next";
import Link from "next/link";
import { MARKETING_SERVICES } from "../../lib/content";
import { Eyebrow } from "../../components/ui";
import { ArrowRightIcon } from "../../components/icons";
import MotionReveal from "../../components/MotionReveal";
import CtaCard from "../../components/CtaCard";

export const metadata: Metadata = {
  title: "Marketing Agency",
  description:
    "บริการ Marketing Agency ครบวงจรจาก HublyCompany — Social & Google Ads, Content & Artwork, SEO, วางกลยุทธ์และวัดผลจริงทุกช่องทาง",
};

export default function MarketingAgencyPage() {
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
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Marketing Agency</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            บริการ Marketing ครบวงจร
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง —
            ให้ธุรกิจคุณโตแบบมีตัวเลข
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
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
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            อยากได้แผนการตลาดที่เหมาะกับธุรกิจคุณ?{" "}
            <Link
              href="/contact"
              className="font-semibold text-mocha underline"
            >
              คุยกับทีมเรา
            </Link>
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
