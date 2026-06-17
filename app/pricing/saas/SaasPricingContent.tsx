"use client";

import { useState } from "react";
import { APP, MODULE_ACCENT } from "../../lib/site";
import { MODULES, FAQ, baht, ANNUAL_DISCOUNT } from "../../lib/content";
import { ButtonLink, SectionHeading } from "../../components/ui";
import { CheckIcon } from "../../components/icons";
import BundleTable from "../../components/BundleTable";
import CtaCard from "../../components/CtaCard";
import MotionReveal from "../../components/MotionReveal";

const BASE_PRICE = 1990;
const ORDERED = [MODULES[1], MODULES[0], MODULES[2]];

export default function SaasPricingContent() {
  const [isAnnual, setIsAnnual] = useState(false);

  const displayPrice = Math.round(
    isAnnual ? BASE_PRICE * (1 - ANNUAL_DISCOUNT) : BASE_PRICE,
  );
  const annualTotal = displayPrice * 12;

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

          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-ink/15 bg-card p-1 shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  !isAnnual
                    ? "bg-mocha text-[#FDFBF9] shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                รายเดือน
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isAnnual
                    ? "bg-mocha text-[#FDFBF9] shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                รายปี
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors ${
                    isAnnual
                      ? "bg-cream/20 text-cream"
                      : "bg-sage/15 text-sage"
                  }`}
                >
                  ประหยัด 10%
                </span>
              </button>
            </div>
          </div>

          {isAnnual && (
            <p className="mt-3 text-center text-xs text-muted">
              เรียกเก็บ{" "}
              <span className="font-semibold text-ink">
                {baht(annualTotal)}/ปี
              </span>{" "}
              ต่อ SaaS — ประหยัด{" "}
              <span className="font-semibold text-sage">
                {baht(BASE_PRICE * 12 - annualTotal)}
              </span>{" "}
              ต่อ SaaS ต่อปี
            </p>
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Video lead card */}
            <MotionReveal delay={0} className="h-full">
              <div
                className="relative h-full min-h-[320px] overflow-hidden rounded-card border border-ink/8 bg-ink bg-cover bg-center lg:min-h-[440px]"
                style={{ backgroundImage: "url(/hero/pillar-poster.jpg)" }}
              >
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
                    {baht(displayPrice)}/เดือน
                    <br />
                    เท่ากันทุก SaaS
                  </p>
                  {isAnnual && (
                    <span className="mt-2 inline-block rounded-full bg-sage/25 px-2.5 py-0.5 text-[10px] font-semibold text-sage">
                      รายปี
                    </span>
                  )}
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
                    className={`relative flex h-full flex-col rounded-card border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-warm hover:shadow-warm-lg ${
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

                    <div className="mt-4">
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-ink">
                          {baht(displayPrice)}
                        </span>
                        <span className="pb-0.5 text-xs text-muted">/เดือน</span>
                      </div>
                      {isAnnual && (
                        <p className="mt-1 text-[11px] text-muted">
                          เรียกเก็บ {baht(displayPrice * 12)}/ปี
                        </p>
                      )}
                      {!isAnnual && (
                        <p className="mt-1 text-[11px] text-muted">
                          หรือ{" "}
                          <button
                            onClick={() => setIsAnnual(true)}
                            className="font-semibold text-sage underline-offset-2 hover:underline"
                          >
                            {baht(Math.round(BASE_PRICE * (1 - ANNUAL_DISCOUNT)))}
                            /เดือน
                          </button>{" "}
                          หากจ่ายรายปี
                        </p>
                      )}
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
                        <li key={f} className="flex gap-2 text-sm text-ink/80">
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
            subtitle={
              isAnnual
                ? "รายปี + 2 SaaS ลด 15% · รายปี + ครบ 3 SaaS ลด 20% จากราคาปกติ"
                : "เลือก 2 SaaS ลด 5% · ครบ 3 SaaS ลด 10% — รวมกับรายปีได้สูงสุด 20%"
            }
          />
          <div className="mt-12">
            <BundleTable annual={isAnnual} />
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
                className="group rounded-card border border-ink/8 bg-card p-5 shadow-warm hover:shadow-warm-lg [&_summary::-webkit-details-marker]:hidden"
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
