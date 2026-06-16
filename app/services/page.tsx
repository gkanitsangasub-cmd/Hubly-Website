import type { Metadata } from "next";
import Link from "next/link";
import { MARKETING_SERVICES, TECH_SOLUTIONS } from "../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../components/ui";
import { ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "บริการ",
  description:
    "บริการของ HublyCompany — Marketing Agency ครบวงจร และ AI Solution สร้างระบบ เว็บไซต์ และ AI ตามความต้องการธุรกิจคุณ",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>บริการของเรา</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            บริการครบ ตั้งแต่การตลาดจนถึงเทคโนโลยี
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            ทีม HublyCompany ดูแลทั้ง Marketing Agency และ AI Solution
            ให้ธุรกิจ SME ไทยเติบโตได้จริง
          </p>
        </div>
      </section>

      {/* Section 1 — Marketing Agency */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="01 · Marketing Agency"
            title="บริการ Marketing ครบวงจร"
            subtitle="วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETING_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-card border border-ink/8 bg-cream p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[0.8rem] bg-amber-500/12 text-amber-700">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 — AI Solution */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="02 · AI Solution"
            title="AI Solution"
            subtitle="ระบบ เครื่องมือ และ AI ที่สร้างขึ้นตามความต้องการธุรกิจคุณ"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_SOLUTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-card border border-ink/8 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[0.8rem] bg-orange-400/25 text-orange-700">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 rounded-hero border border-ink/8 bg-card p-8 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-ink">
              มีโปรเจกต์ในใจอยู่แล้ว?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              เล่าความต้องการของคุณให้เราฟัง แล้วเราจะออกแบบโซลูชันที่ใช่ให้
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] transition-colors hover:bg-mocha-dark"
              >
                ปรึกษาโปรเจกต์
                <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-mocha">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold text-[#FDFBF9] md:text-4xl">
            อยากให้ธุรกิจโตแบบมีระบบ?
          </h2>
          <p className="mt-4 text-base text-cream/80">
            ทีม HublyCompany พร้อมช่วยวางแผนและลงมือทำให้ครบจบในที่เดียว
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="light" className="px-7 py-3.5 text-base">
              ติดต่อเรา
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
