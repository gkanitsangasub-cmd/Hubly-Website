import type { Metadata } from "next";
import { APP, MODULE_ACCENT } from "../lib/site";
import { FEATURE_GROUPS } from "../lib/content";
import { ButtonLink, Eyebrow, SectionHeading } from "../components/ui";
import { ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "ฟีเจอร์",
  description:
    "ฟีเจอร์ครบของ Hubly — HubDeal CRM, HubChat Inbox รวมทุกช่องทาง และ HubStore จัดการร้านค้า ออกแบบมาสำหรับ SME ไทย",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="ฟีเจอร์"
            title="ทุกเครื่องมือที่ธุรกิจคุณต้องใช้ ในที่เดียว"
            subtitle="HubDeal, HubChat และ HubStore ออกแบบมาให้ทำงานเชื่อมกันอัตโนมัติ — เลือกใช้เฉพาะที่ต้องการ"
          />
        </div>
      </section>

      {/* Feature groups */}
      {FEATURE_GROUPS.map((group, gi) => {
        const accent = MODULE_ACCENT[group.key];
        const GroupIcon = group.icon;
        return (
          <section
            key={group.key}
            className={`py-20 md:py-24 ${gi % 2 === 0 ? "bg-card" : "bg-cream"}`}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex items-center gap-4">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-[0.95rem] ${accent.badge}`}
                >
                  <GroupIcon width={28} height={28} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-ink md:text-3xl">
                    {group.name}
                  </h2>
                  <p className="text-sm font-medium text-muted">
                    {group.heading}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((f) => {
                  const FeatureIcon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="rounded-card border border-ink/8 bg-card/60 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-card hover:shadow-md"
                    >
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-[0.8rem] ${accent.badge}`}
                      >
                        <FeatureIcon width={22} height={22} />
                      </span>
                      <h3 className="mt-4 text-base font-bold text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {f.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Integration note */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-hero border border-ink/8 bg-card p-8 text-center shadow-sm md:p-12">
            <Eyebrow>ทำงานเชื่อมกัน</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
              ทุก module พูดคุยกันอัตโนมัติ
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
              แชทเข้า HubChat → สร้าง Lead ใน HubDeal → ปิดดีลแล้วต่อยอดเป็น Order
              ใน HubStore ทั้งหมดไหลต่อกันโดยไม่ต้องคีย์ข้อมูลซ้ำ
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-mocha">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold text-[#FDFBF9] md:text-4xl">
            ลองใช้ฟีเจอร์ทั้งหมดฟรี 14 วัน
          </h2>
          <p className="mt-4 text-base text-cream/80">
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
