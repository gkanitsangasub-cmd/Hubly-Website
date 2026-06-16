import Link from "next/link";
import { APP, MODULE_ACCENT } from "./lib/site";
import { PILLARS, MARKETING_SERVICES, MODULES, baht } from "./lib/content";
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
            <Eyebrow>Marketing · Tech & AI · Hubly SaaS</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-ink md:text-6xl">
              Agency ดิจิทัล + เทคโนโลยี AI
              <br className="hidden sm:block" /> + SaaS ของคุณเอง
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              HublyCompany รวมบริการ Marketing, Tech Solutions และซอฟต์แวร์
              Hubly SaaS ไว้ในที่เดียว เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
              >
                ดูบริการ
                <ArrowRightIcon width={18} height={18} />
              </Link>
              <ButtonLink href={APP.url} external variant="outline" className="px-6 py-3.5">
                ทดลอง Hubly ฟรี
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 md:mt-16">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ===== 3 Pillars ===== */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="สามเสาหลักของเรา"
            title="ครบทุกอย่างที่ธุรกิจคุณต้องใช้"
            subtitle="ตั้งแต่การตลาด ระบบเทคโนโลยี ไปจนถึงซอฟต์แวร์จัดการธุรกิจ — ในพาร์ตเนอร์รายเดียว"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="group flex flex-col rounded-card border border-ink/8 bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-[0.85rem] ${p.accent}`}
                  >
                    <Icon width={24} height={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-mocha transition-colors group-hover:text-mocha-dark"
                  >
                    ดูเพิ่มเติม
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Services highlight ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Marketing Agency"
            title="บริการ Marketing ครบวงจร"
            subtitle="วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING_SERVICES.slice(0, 4).map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-card border border-ink/8 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-btn border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-beige"
            >
              ดูบริการทั้งหมด
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Products highlight ===== */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Hubly SaaS"
            title="ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย"
            subtitle="เลือกเฉพาะ SaaS ที่ธุรกิจคุณต้องการ ราคาที่จ่ายได้จริง"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {MODULES.map((m) => {
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
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {m.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-ink/85">
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
            <ButtonLink
              href={APP.url}
              external
              variant="outline"
              className="border-cream/30 px-7 py-3.5 text-base text-cream hover:bg-white/10"
            >
              ทดลอง Hubly ฟรี
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
