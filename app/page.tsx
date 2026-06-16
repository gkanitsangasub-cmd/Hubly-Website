import Link from "next/link";
import { APP, MODULE_ACCENT } from "./lib/site";
import { PILLARS, MARKETING_SERVICES, MODULES, baht } from "./lib/content";
import { ButtonLink, SectionHeading } from "./components/ui";
import { ArrowRightIcon, CheckIcon } from "./components/icons";
import HeroVideo from "./components/HeroVideo";
import MotionReveal from "./components/MotionReveal";

const CARD_SHADOW =
  "shadow-[0_16px_44px_-24px_rgba(60,48,39,0.30)] hover:shadow-[0_30px_64px_-28px_rgba(60,48,39,0.42)]";

export default function Home() {
  return (
    <>
      {/* ===== Hero (video) ===== */}
      <HeroVideo />

      {/* ===== 3 Pillars ===== */}
      <section className="relative isolate overflow-hidden bg-cream py-20 md:py-28">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-24 h-80 w-80 rounded-full bg-clay/20 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="สามเสาหลักของเรา"
            title="ครบทุกอย่างที่ธุรกิจคุณต้องใช้ ในที่เดียว"
            subtitle="ตั้งแต่การตลาด ระบบ & AI ไปจนถึงซอฟต์แวร์จัดการธุรกิจ — พาร์ตเนอร์รายเดียวที่โตไปกับคุณ"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <MotionReveal key={p.name} delay={i * 0.12} className="h-full">
                  <Link
                    href={p.href}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-card border border-ink/8 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 ${CARD_SHADOW}`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${p.dot}`}
                    />
                    <span
                      aria-hidden
                      className="absolute right-6 top-5 text-5xl font-bold text-ink/[0.06]"
                    >
                      {p.no}
                    </span>

                    <span
                      className={`grid place-items-center rounded-[0.9rem] transition-transform duration-300 group-hover:scale-105 ${p.accent}`}
                      style={{ width: "3.25rem", height: "3.25rem" }}
                    >
                      <Icon width={26} height={26} />
                    </span>

                    <div
                      className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${p.accent}`}
                    >
                      {p.tag}
                    </div>
                    <h3 className="mt-2.5 text-2xl font-bold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>

                    <ul className="mt-5 flex flex-1 flex-col gap-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2.5 text-sm text-ink/80"
                        >
                          <span
                            aria-hidden
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mocha transition-all group-hover:gap-2.5 group-hover:text-mocha-dark">
                      {p.cta}
                      <ArrowRightIcon width={16} height={16} />
                    </span>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Services highlight ===== */}
      <section className="relative isolate overflow-hidden bg-beige py-20 md:py-28">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-mocha/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Marketing Agency"
            title="บริการ Marketing ครบวงจร"
            subtitle="วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING_SERVICES.slice(0, 4).map((s, i) => {
              const Icon = s.icon;
              return (
                <MotionReveal key={s.title} delay={i * 0.1} className="h-full">
                  <div
                    className={`h-full rounded-card border border-ink/8 bg-card p-6 transition-all duration-200 hover:-translate-y-1 ${CARD_SHADOW}`}
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
                </MotionReveal>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-btn border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream"
            >
              ดูบริการทั้งหมด
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Products highlight ===== */}
      <section className="relative isolate overflow-hidden bg-cream py-20 md:py-28">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 right-1/4 h-80 w-80 rounded-full bg-clay/15 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Hubly SaaS"
            title="ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย"
            subtitle="เลือกเฉพาะ SaaS ที่ธุรกิจคุณต้องการ ราคาที่จ่ายได้จริง"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {MODULES.map((m, i) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              return (
                <MotionReveal key={m.key} delay={i * 0.12} className="h-full">
                  <div
                    className={`group flex h-full flex-col rounded-card border border-ink/8 bg-card p-7 transition-all duration-200 hover:-translate-y-1 ${CARD_SHADOW}`}
                  >
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-[0.85rem] ${accent.badge}`}
                    >
                      <Icon width={24} height={24} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {m.tagline}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {m.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="flex gap-2.5 text-sm text-ink/85"
                        >
                          <CheckIcon
                            width={18}
                            height={18}
                            className="mt-0.5 shrink-0 text-sage"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-ink/8 pt-5">
                      <span className="text-2xl font-bold text-ink">
                        {baht(m.priceValue)}
                      </span>
                      <span className="text-sm text-muted">/เดือน</span>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-btn bg-mocha px-6 py-3 text-sm font-semibold text-[#FDFBF9] transition-colors hover:bg-mocha-dark"
            >
              ดูรายละเอียด Hubly
              <ArrowRightIcon width={18} height={18} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-btn border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-beige"
            >
              ดูราคา
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="bg-mocha">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold leading-tight text-[#FDFBF9] md:text-4xl">
            พร้อมให้ธุรกิจคุณโตไปอีกขั้น?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream/80">
            ปรึกษาทีม HublyCompany ฟรี หรือเริ่มทดลองใช้ Hubly SaaS ได้ทันที
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/contact"
              variant="light"
              className="px-7 py-3.5 text-base"
            >
              ปรึกษาเรา
            </ButtonLink>
            <a
              href={APP.url}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-btn border border-cream/40 px-7 py-3.5 text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              ทดลอง Hubly ฟรี
              <ArrowRightIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
