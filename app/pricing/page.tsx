import type { Metadata } from "next";
import { APP, MODULE_ACCENT } from "../lib/site";
import { MODULES, FAQ, baht } from "../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../components/ui";
import { CheckIcon, ArrowRightIcon } from "../components/icons";
import BundleTable from "../components/BundleTable";

export const metadata: Metadata = {
  title: "ราคา",
  description:
    "ราคา Hubly SaaS — HubDeal ฿2,490 · HubChat ฿1,990 · HubStore ฿1,990 ต่อเดือน ไม่มีค่าติดตั้ง เลือก 2 SaaS ลด 15% หรือครบ 3 SaaS ลด 20%",
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
            subtitle="ไม่มีค่าติดตั้ง · ยกเลิกได้ทุกเมื่อ · จ่ายเท่าที่ใช้จริง"
          />
        </div>
      </section>

      {/* Plan cards */}
      <section className="bg-card pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {MODULES.map((m) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              const featured = m.key === "hubchat";
              return (
                <div
                  key={m.key}
                  className={`relative flex flex-col rounded-card border bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    featured ? "border-mocha/40 ring-1 ring-mocha/20" : "border-ink/8"
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
                      {baht(m.priceValue)}
                    </span>
                    <span className="pb-1 text-sm text-muted">/เดือน</span>
                  </div>

                  <ButtonLink
                    href={APP.url}
                    external
                    variant={featured ? "primary" : "outline"}
                    className="mt-5 w-full"
                  >
                    เริ่มทดลองฟรี
                  </ButtonLink>

                  <ul className="mt-6 space-y-3 border-t border-ink/8 pt-6">
                    {m.features.map((f) => (
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

      {/* Bundle table */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
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
            ทดลองใช้ฟรี ไม่ต้องใช้บัตรเครดิต
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={APP.url}
              external
              variant="light"
              className="px-7 py-3.5 text-base"
            >
              เริ่มทดลองฟรี
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
