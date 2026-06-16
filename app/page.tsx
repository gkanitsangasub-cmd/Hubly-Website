import Link from "next/link";
import { APP, MODULE_ACCENT } from "./lib/site";
import { MODULE_CARDS, STEPS, TESTIMONIALS } from "./lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "./components/ui";
import { ArrowRightIcon, CheckIcon } from "./components/icons";
import HeroMockup from "./components/HeroMockup";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-clay/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>ทดลองฟรี 14 วัน · ไม่ต้องใช้บัตรเครดิต</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-ink md:text-6xl">
              ระบบจัดการธุรกิจครบวงจร
              <br className="hidden sm:block" /> สำหรับ SME ภาษาไทย
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              รวม CRM, Inbox แชท และระบบจัดการร้านค้าไว้ในที่เดียว — เลือกเฉพาะ
              SaaS ที่ธุรกิจคุณต้องการ แล้วเริ่มปิดดีลได้เลย
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={APP.signup} external className="px-6 py-3.5">
                เริ่มทดลองฟรี
                <ArrowRightIcon width={18} height={18} />
              </ButtonLink>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-btn border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-beige"
              >
                ดูฟีเจอร์ทั้งหมด
              </Link>
            </div>
          </div>

          <div className="mt-14 md:mt-16">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ===== Module cards ===== */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="SaaS Modules"
            title="เลือก SaaS ที่ตรงกับธุรกิจของคุณ"
            subtitle="เริ่มจาก module เดียว หรือใช้ครบทั้งชุดให้ทำงานเชื่อมกันอัตโนมัติ"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {MODULE_CARDS.map((m) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              return (
                <div
                  key={m.key}
                  className="group flex flex-col rounded-card border border-ink/8 bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
                  <ul className="mt-5 space-y-3">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-ink/85">
                        <CheckIcon
                          width={18}
                          height={18}
                          className="mt-0.5 shrink-0 text-sage"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-ink/8 pt-5">
                    <div>
                      <span className="text-2xl font-bold text-ink">
                        {m.price}
                      </span>
                      <span className="text-sm text-muted">/เดือน</span>
                      {m.priceNote && (
                        <p className="mt-0.5 text-xs text-clay">
                          *{m.priceNote}
                        </p>
                      )}
                    </div>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-mocha transition-colors group-hover:text-mocha-dark"
                    >
                      ดูราคา
                      <ArrowRightIcon width={16} height={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="เริ่มง่ายใน 3 ขั้นตอน"
            title="เริ่มต้นใช้งานได้ภายในไม่กี่นาที"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-card border border-ink/8 bg-card p-7 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-mocha text-lg font-bold text-[#FDFBF9]">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRightIcon
                    aria-hidden
                    width={22}
                    height={22}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-clay md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="เสียงจากผู้ใช้งาน"
            title="ธุรกิจไทยเติบโตไปกับ Hubly"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-card border border-ink/8 bg-cream p-7 shadow-sm"
              >
                <div aria-hidden className="text-3xl leading-none text-clay">
                  &ldquo;
                </div>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-beige text-sm font-bold text-mocha">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="bg-mocha">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold leading-tight text-[#FDFBF9] md:text-4xl">
            เริ่มต้นวันนี้ — ทดลองฟรี 14 วัน
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream/80">
            ไม่ต้องใช้บัตรเครดิต · ยกเลิกได้ทุกเมื่อ
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={APP.signup}
              external
              variant="light"
              className="px-7 py-3.5 text-base"
            >
              สมัครเลย
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
