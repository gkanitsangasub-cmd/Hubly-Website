import type { Metadata } from "next";
import Link from "next/link";
import { APP, MODULE_ACCENT } from "../lib/site";
import { MODULES, WORKFLOWS } from "../lib/content";
import { Eyebrow, SectionHeading } from "../components/ui";
import { ArrowRightIcon, CheckIcon, LayersIcon, PlugIcon } from "../components/icons";
import MotionReveal from "../components/MotionReveal";
import CtaCard from "../components/CtaCard";

export const metadata: Metadata = {
  title: "Hubly SaaS",
  description:
    "Hubly SaaS — ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย: HubChat (Inbox แชท), HubDeal (CRM), HubStore (ร้านค้า) ทำงานเชื่อมกันครบวงจร",
  alternates: { canonical: "https://hublycompany.com/products" },
};

const byKey = Object.fromEntries(MODULES.map((m) => [m.key, m]));
// Display order: HubChat, HubDeal, HubStore
const ORDERED = [MODULES[1], MODULES[0], MODULES[2]];

const OBJECTIVES = [
  {
    icon: LayersIcon,
    title: "ครบในชุดเดียว",
    desc: "CRM, Inbox แชท และร้านค้า รวมในแพลตฟอร์มเดียว ไม่ต้องต่อหลายเครื่องมือ",
  },
  {
    icon: PlugIcon,
    title: "ทำงานเชื่อมกันอัตโนมัติ",
    desc: "ข้อมูลไหลข้าม SaaS เอง — แชทเป็น Lead, ปิดดีลเป็น Order ไม่ต้องคีย์ซ้ำ",
  },
  {
    icon: CheckIcon,
    title: "เลือกเฉพาะที่ต้องการ",
    desc: "เริ่มจาก SaaS เดียว แล้วเพิ่มทีหลังได้ จ่ายเท่าที่ใช้จริง",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ===== Video hero (warm-controlled) ===== */}
      <section className="bg-cream p-4 md:p-6">
        <div
          className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-2xl bg-ink bg-cover bg-center sm:min-h-[26rem] md:min-h-[32rem] md:rounded-[2rem]"
          style={{ backgroundImage: "url(/hero/products-hero-poster.jpg)" }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero/products-hero-poster.jpg"
            aria-hidden="true"
            style={{
              filter:
                "sepia(0.42) saturate(1.25) hue-rotate(-12deg) brightness(0.9) contrast(1.02)",
            }}
          >
            <source src="/hero/products-hero.mp4" type="video/mp4" />
          </video>
          {/* warm tint + scrim to pull it onto brand */}
          <div
            aria-hidden
            className="absolute inset-0 bg-mocha/25 mix-blend-multiply"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80"
          />
          <div
            aria-hidden
            className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
          />

          <div className="relative z-10 mx-auto max-w-3xl px-6 py-12 text-center sm:py-20">
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-full border border-cream/30 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cream backdrop-blur-sm">
                Hubly SaaS
              </span>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#FDFBF9] sm:text-4xl md:text-6xl">
              ซอฟต์แวร์จัดการธุรกิจ
              <br className="hidden sm:block" /> ครบในชุดเดียว
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              HubChat · HubDeal · HubStore — เลือกเฉพาะที่ต้องการ
              แล้วให้ทุกอย่างทำงานเชื่อมกันอัตโนมัติ
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={APP.url}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-mocha px-6 py-3.5 text-sm font-semibold text-[#FDFBF9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-mocha-dark"
              >
                เริ่มทดลองฟรี
                <ArrowRightIcon width={18} height={18} />
              </a>
              <Link
                href="/pricing/saas"
                className="inline-flex items-center justify-center gap-2 rounded-btn border border-cream/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
              >
                ดูราคา
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Objective ===== */}
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ทำไมต้อง Hubly SaaS"
            title="เครื่องมือจัดการธุรกิจที่ออกแบบมาให้ทำงานร่วมกัน"
            subtitle="ไม่ใช่หลายแอปที่ไม่คุยกัน แต่เป็นระบบเดียวที่ข้อมูลไหลต่อเนื่องตั้งแต่แชทจนถึงรายงาน"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {OBJECTIVES.map((o, i) => {
              const Icon = o.icon;
              return (
                <MotionReveal key={o.title} delay={i * 0.1} className="h-full">
                  <div
                    className={`h-full rounded-card border border-ink/8 bg-card p-7 shadow-warm hover:shadow-warm-lg`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-[0.85rem] bg-mocha/10 text-mocha">
                      <Icon width={24} height={24} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {o.desc}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Per-SaaS detailed sections ===== */}
      {ORDERED.map((m, idx) => {
        const accent = MODULE_ACCENT[m.key];
        const Icon = m.icon;
        const textRight = idx % 2 === 1;
        return (
          <section
            key={m.key}
            id={m.key}
            className={`relative isolate scroll-mt-24 overflow-hidden py-16 md:py-24 ${
              idx % 2 === 0 ? "bg-beige" : "bg-cream"
            }`}
          >
            <div
              aria-hidden
              className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
            />
            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
              {/* text */}
              <div className={textRight ? "md:order-2" : ""}>
                <span
                  className={`grid h-14 w-14 place-items-center rounded-[0.9rem] ${accent.badge}`}
                >
                  <Icon width={28} height={28} />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">{m.name}</h2>
                <p className="mt-1 text-base font-medium text-muted">
                  {m.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                  {m.desc}
                </p>
                <Link
                  href="/pricing/saas"
                  className="mt-6 inline-flex items-center gap-2 rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] transition-colors hover:bg-mocha-dark"
                >
                  ดูราคา {m.name}
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </div>
              {/* features card */}
              <div className={textRight ? "md:order-1" : ""}>
                <div
                  className={`rounded-card border border-ink/8 bg-card p-7 shadow-warm hover:shadow-warm-lg`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                    ฟีเจอร์
                  </div>
                  <ul className="mt-4 space-y-3">
                    {m.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-sm text-ink/80 md:text-[15px]"
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
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ===== Workflow (work together) ===== */}
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-clay/20 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ทำงานร่วมกัน"
            title="ยิ่งใช้หลาย SaaS ยิ่งทำงานต่อเนื่อง"
            subtitle="แต่ละ SaaS เชื่อมกันอัตโนมัติ — เลือกคู่ที่ใช่ หรือใช้ครบทั้งวงจร"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WORKFLOWS.filter((w) => !w.featured).map((w, i) => (
              <MotionReveal key={w.title} delay={i * 0.1} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-card border border-ink/8 bg-card p-6 shadow-warm hover:shadow-warm-lg`}
                >
                  <div className="flex items-center gap-2">
                    {w.combo.map((k, j) => {
                      const M = byKey[k];
                      const Mi = M.icon;
                      const acc = MODULE_ACCENT[k];
                      return (
                        <span key={k} className="flex items-center gap-2">
                          {j > 0 && (
                            <span aria-hidden className="text-muted">
                              +
                            </span>
                          )}
                          <span
                            className={`grid h-10 w-10 place-items-center rounded-[0.7rem] ${acc.badge}`}
                          >
                            <Mi width={20} height={20} />
                          </span>
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {w.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Featured all-three */}
          {WORKFLOWS.filter((w) => w.featured).map((w) => (
            <MotionReveal key={w.title} delay={0.15}>
              <div className="mt-5 flex flex-col items-start gap-6 rounded-card border border-mocha/25 bg-card p-7 ring-1 ring-mocha/10 md:flex-row md:items-center md:p-8">
                <div className="flex items-center gap-2">
                  {w.combo.map((k, j) => {
                    const M = byKey[k];
                    const Mi = M.icon;
                    const acc = MODULE_ACCENT[k];
                    return (
                      <span key={k} className="flex items-center gap-2">
                        {j > 0 && (
                          <span aria-hidden className="text-muted">
                            +
                          </span>
                        )}
                        <span
                          className={`grid h-12 w-12 place-items-center rounded-[0.8rem] ${acc.badge}`}
                        >
                          <Mi width={24} height={24} />
                        </span>
                      </span>
                    );
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {w.desc}
                  </p>
                </div>
                <Link
                  href="/pricing/saas"
                  className="inline-flex shrink-0 items-center gap-2 rounded-btn bg-mocha px-5 py-3 text-sm font-semibold text-[#FDFBF9] transition-colors hover:bg-mocha-dark"
                >
                  ดูแพ็กเกจรวม
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <CtaCard
        title="เริ่มใช้ Hubly SaaS วันนี้"
        subtitle="ทดลองฟรี ไม่ต้องใช้บัตรเครดิต หรือดูราคาแต่ละแพ็กเกจก่อนก็ได้"
        primaryHref="/pricing/saas"
        primaryLabel="ดูราคา"
      />
    </>
  );
}
