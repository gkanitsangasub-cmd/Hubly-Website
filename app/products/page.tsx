import type { Metadata } from "next";
import Link from "next/link";
import { APP, MODULE_ACCENT } from "../lib/site";
import { MODULES, baht } from "../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../components/ui";
import { ArrowRightIcon, CheckIcon } from "../components/icons";
import BundleTable from "../components/BundleTable";

export const metadata: Metadata = {
  title: "Hubly SaaS",
  description:
    "Hubly — ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย เลือกเฉพาะ SaaS ที่ต้องการ: HubDeal (CRM), HubChat (แชท), HubStore (ร้านค้า)",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Hubly SaaS</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Hubly — ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            เลือกเฉพาะ SaaS ที่ธุรกิจคุณต้องการ ราคาที่จ่ายได้จริง
          </p>
        </div>
      </section>

      {/* Module cards */}
      <section className="bg-card pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {MODULES.map((m) => {
              const accent = MODULE_ACCENT[m.key];
              const Icon = m.icon;
              return (
                <div
                  key={m.key}
                  className={`flex flex-col rounded-card border bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${accent.border}`}
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

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-3xl font-bold text-ink">
                      {baht(m.priceValue)}
                    </span>
                    <span className="pb-1 text-sm text-muted">/เดือน</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-ink/8 pt-6">
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

                  <ButtonLink
                    href={APP.url}
                    external
                    className="mt-6 w-full"
                  >
                    ทดลองฟรี
                  </ButtonLink>
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
            title="ยิ่งใช้หลาย SaaS ยิ่งคุ้ม"
            subtitle="เลือก 2 SaaS ลด 15% หรือครบทั้ง 3 SaaS ลด 20% จากราคาปกติ"
          />
          <div className="mt-12">
            <BundleTable />
          </div>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={APP.url} external className="px-6 py-3.5">
              เริ่มแพ็คเกจรวม
              <ArrowRightIcon width={18} height={18} />
            </ButtonLink>
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            ดูราคาแยกแต่ละ SaaS และคำถามที่พบบ่อยได้ที่{" "}
            <Link href="/pricing" className="font-semibold text-mocha underline">
              หน้าราคา
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
