import type { Metadata } from "next";
import { APP, MODULE_ACCENT } from "../../lib/site";
import { MODULES, FAQ, baht } from "../../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../../components/ui";
import { CheckIcon } from "../../components/icons";
import BundleTable from "../../components/BundleTable";
import CtaCard from "../../components/CtaCard";
import MotionReveal from "../../components/MotionReveal";

export const metadata: Metadata = {
  title: "ราคา Hubly SaaS",
  description:
    "ราคา Hubly SaaS — ฿1,990/เดือน ทุก SaaS (HubChat, HubDeal, HubStore) ไม่มีค่าติดตั้ง เลือก 2 SaaS ลด 15% หรือครบ 3 SaaS ลด 20%",
};

const CARD_SHADOW =
  "shadow-[0_16px_44px_-24px_rgba(60,48,39,0.30)] hover:shadow-[0_30px_64px_-28px_rgba(60,48,39,0.42)]";

const ORDERED = [MODULES[1], MODULES[0], MODULES[2]];

export default function SaasPricingPage() {
  return (
    <>
      {/* Plan cards */}
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
            eyebrow="ราคา Hubly SaaS"
            title="฿1,990/เดือน เท่ากันทุก SaaS"
            subtitle="ไม่มีค่าติดตั้ง · ยกเลิกได้ทุกเมื่อ · จ่ายเท่าที่ใช้จริง"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Video lead card (same footage as the Home bento) */}
            <MotionReveal delay={0} className="h-full">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-card border border-ink/8 bg-ink lg:min-h-[440px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero/pillar-poster.jpg"
                  aria-hidden="true"
                >
                  <source src="/hero/pillar.mp4" type="video/mp4" />
                </video>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/70">
                    Hubly SaaS
                  </div>
                  <p className="mt-1.5 text-lg font-bold leading-snug text-cream">
                    ฿1,990/เดือน
                    <br />
                    เท่ากันทุก SaaS
                  </p>
                </div>
              </div>
            </MotionReveal>

            {ORDERED.map((m, i) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              const featured = m.key === "hubchat";
              return (
                <MotionReveal
                  key={m.key}
                  delay={(i + 1) * 0.1}
                  className="h-full"
                >
                  <div
                    className={`relative flex h-full flex-col rounded-card border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 ${CARD_SHADOW} ${
                      featured
                        ? "border-mocha/40 ring-1 ring-mocha/20"
                        : "border-ink/8"
                    }`}
                  >
                    {featured && (
                      <span className="absolute -top-3 left-6 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                        ยอดนิยม
                      </span>
                    )}
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-[0.8rem] ${accent.badge}`}
                    >
                      <Icon width={22} height={22} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                    <p className="mt-1 text-xs text-muted">{m.tagline}</p>

                    <div className="mt-4 flex items-end gap-1">
                      <span className="text-2xl font-bold text-ink">
                        {baht(m.priceValue)}
                      </span>
                      <span className="pb-0.5 text-xs text-muted">/เดือน</span>
                    </div>

                    <ButtonLink
                      href={APP.url}
                      external
                      variant={featured ? "primary" : "outline"}
                      className="mt-4 w-full"
                    >
                      เริ่มทดลองฟรี
                    </ButtonLink>

                    <ul className="mt-5 flex-1 space-y-2 border-t border-ink/8 pt-5">
                      {m.features.map((f) => (
                        <li
                          key={f}
                          className="flex gap-2 text-sm text-ink/80"
                        >
                          <CheckIcon
                            width={15}
                            height={15}
                            className="mt-0.5 shrink-0 text-sage"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bundle table */}
      <section className="relative isolate overflow-hidden bg-beige py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="แพ็คเกจรวม"
            title="รวม SaaS แล้วประหยัดกว่า"
            subtitle="เลือก 2 SaaS ลด 15% หรือครบทั้ง 3 SaaS ลด 20% จากราคาปกติ"
          />
          <div className="mt-12">
            <BundleTable />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden bg-cream py-16 md:py-24">
        <div
          aria-hidden
          className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="คำถามที่พบบ่อย" title="FAQ" />
          <div className="mt-12 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className={`group rounded-card border border-ink/8 bg-card p-5 [&_summary::-webkit-details-marker]:hidden ${CARD_SHADOW}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink">
                  {item.q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-beige text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaCard
        title="พร้อมเริ่มแล้วใช่ไหม?"
        subtitle="ทดลองใช้ Hubly SaaS ฟรี ไม่ต้องใช้บัตรเครดิต"
      />
    </>
  );
}
