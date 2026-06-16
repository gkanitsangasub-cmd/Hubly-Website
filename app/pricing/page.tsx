import type { Metadata } from "next";
import { APP, MODULE_ACCENT } from "../lib/site";
import { MODULE_CARDS, PRICING_FEATURES, FAQ } from "../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../components/ui";
import { CheckIcon, ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "ราคา",
  description:
    "เลือก SaaS ที่ตรงกับธุรกิจคุณ — HubDeal, HubChat, HubStore ไม่มีค่าติดตั้ง ยกเลิกได้ทุกเมื่อ เลือก 2 SaaS ลด 15% หรือครบ 3 SaaS ลด 20%",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ราคา"
            title="เลือก SaaS ที่ตรงกับธุรกิจคุณ"
            subtitle="ไม่มีค่าติดตั้ง · ยกเลิกได้ทุกเมื่อ · ทดลองฟรี 14 วัน ทุก module"
          />
        </div>
      </section>

      {/* Plan cards */}
      <section className="bg-card pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {MODULE_CARDS.map((m) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              const featured = m.key === "hubchat";
              return (
                <div
                  key={m.key}
                  className={`relative flex flex-col rounded-card border bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    featured
                      ? "border-mocha/40 ring-1 ring-mocha/20"
                      : "border-ink/8"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-mocha px-3 py-1 text-xs font-semibold text-[#FDFBF9]">
                      ยอดนิยม
                    </span>
                  )}
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-[0.85rem] ${accent.badge}`}
                  >
                    <Icon width={24} height={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {m.tagline}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-3xl font-bold text-ink">
                      {m.price}
                    </span>
                    <span className="pb-1 text-sm text-muted">/เดือน</span>
                  </div>
                  {m.priceNote && (
                    <p className="mt-1 text-xs text-clay">*{m.priceNote}</p>
                  )}

                  <ButtonLink
                    href={APP.signup}
                    external
                    variant={featured ? "primary" : "outline"}
                    className="mt-5 w-full"
                  >
                    เริ่มทดลองฟรี
                  </ButtonLink>

                  <ul className="mt-6 space-y-3 border-t border-ink/8 pt-6">
                    {PRICING_FEATURES[m.key].map((f) => (
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bundle discount */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-hero border border-mocha/15 bg-gradient-to-br from-beige to-card p-8 text-center shadow-sm md:p-12">
            <Eyebrow>ส่วนลดแพ็กเกจ</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
              ยิ่งใช้หลาย SaaS ยิ่งประหยัด
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
              ทุก module ทำงานเชื่อมกันอัตโนมัติ — แชทเข้า HubChat สร้าง Lead ใน
              HubDeal และต่อยอดเป็น Order ใน HubStore
            </p>
            <div className="mx-auto mt-7 grid max-w-md gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-ink/8 bg-card p-6 shadow-sm">
                <div className="text-3xl font-bold text-mocha">ลด 15%</div>
                <div className="mt-1 text-sm font-medium text-ink">
                  เลือก 2 SaaS
                </div>
              </div>
              <div className="rounded-card border border-mocha/30 bg-card p-6 shadow-sm ring-1 ring-mocha/20">
                <div className="text-3xl font-bold text-mocha">ลด 20%</div>
                <div className="mt-1 text-sm font-medium text-ink">
                  เลือกครบ 3 SaaS
                </div>
              </div>
            </div>
            <div className="mt-7 flex justify-center">
              <ButtonLink href={APP.signup} external className="px-6 py-3.5">
                เริ่มแพ็กเกจรวม
                <ArrowRightIcon width={18} height={18} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="คำถามที่พบบ่อย" title="FAQ" />
          <div className="mt-12 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-card border border-ink/8 bg-cream p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
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

      {/* Bottom CTA */}
      <section className="bg-mocha">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold text-[#FDFBF9] md:text-4xl">
            พร้อมเริ่มแล้วใช่ไหม?
          </h2>
          <p className="mt-4 text-base text-cream/80">
            ทดลองฟรี 14 วัน · ไม่ต้องใช้บัตรเครดิต
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
