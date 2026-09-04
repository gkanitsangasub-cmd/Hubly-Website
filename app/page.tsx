import { COMPANY, pageMetadata } from "./lib/site";
import { SOLUTIONS } from "./lib/services";
import { GROWTH_PACKAGES, baht } from "./lib/marketing-services";
import HeroVideo from "./components/HeroVideo";
import ContentSection from "./components/ContentSection";
import ServiceAreas from "./components/ServiceAreas";
import WorkSteps from "./components/WorkSteps";
import CtaCard from "./components/CtaCard";
import MotionReveal from "./components/MotionReveal";
import { SectionHeading, ButtonLink } from "./components/ui";
import { ArrowRightIcon } from "./components/icons";
import Link from "next/link";
import TourismFeature from "./components/TourismFeature";

export const metadata = pageMetadata(
  "HublyCompany — การตลาด เว็บไซต์ และ AI เพื่อธุรกิจ",
  COMPANY.description,
  "/",
);

export default function Home() {
  return (
    <>
      <HeroVideo />
      <ContentSection>
        <SectionHeading
          eyebrow="Our Services"
          title="เชื่อมการตลาด เทคโนโลยี และการทำงานของธุรกิจ"
          subtitle="Hubly คือ Digital Agency & Business Solutions Partner ที่ช่วยให้ Marketing, Sales และ Operation ทำงานร่วมกันอย่างเป็นระบบ"
        />
        <ServiceAreas withVideo />
      </ContentSection>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Monthly Growth Packages"
          title="ทีมดูแลการเติบโต ที่ขยายไปพร้อมธุรกิจคุณ"
          subtitle="เลือกตั้งแต่การดูแลช่องทางและโฆษณา ไปจนถึง SEO และ Content Production รายเดือน"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {GROWTH_PACKAGES.map((plan, i) => (
            <MotionReveal key={plan.id} delay={i * 0.08} className="h-full">
              <Link
                href={"/pricing#" + plan.id}
                className="group flex h-full flex-col rounded-card border border-ink/8 bg-card p-7 shadow-warm transition-all hover:-translate-y-1 hover:shadow-warm-lg"
              >
                <span className="text-xs font-semibold text-mocha">
                  GROWTH / 0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
                <p className="mt-6 text-xs text-muted">เริ่มต้น</p>
                <p className="mt-1">
                  <strong className="text-3xl text-mocha">
                    {baht(plan.price)}+
                  </strong>
                  <span className="text-sm text-muted"> /เดือน</span>
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mocha">
                  ดูขอบเขตแพ็กเกจ
                  <ArrowRightIcon width={16} height={16} />
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          ทุกแพ็กเกจไม่รวมงบโฆษณา · เลือกบริการรายด้านได้ตามความต้องการ
        </p>
      </ContentSection>
      <ContentSection>
        <SectionHeading
          eyebrow="Business Solutions"
          title="เทคโนโลยีที่ออกแบบตามวิธีทำงานของคุณ"
          subtitle="ลดงานซ้ำ เชื่อมข้อมูล และสร้างเครื่องมือที่ช่วยให้ทีมทำงานได้ดีขึ้น"
        />
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
          {SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <MotionReveal key={solution.id} delay={i * 0.05}>
                <Link
                  href={"/solutions#" + solution.id}
                  className="group flex items-center gap-4 px-2 py-6 transition-colors hover:bg-beige/50 md:gap-6 md:px-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-beige text-mocha">
                    <Icon width={22} height={22} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{solution.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {solution.desc}
                    </p>
                  </div>
                  <ArrowRightIcon
                    className="shrink-0 text-mocha"
                    width={18}
                    height={18}
                  />
                </Link>
              </MotionReveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/solutions" variant="outline">
            ดู Business Solutions ทั้งหมด
          </ButtonLink>
        </div>
      </ContentSection>
      <TourismFeature />
      <WorkSteps />
      <CtaCard
        title="ให้เราเป็นพาร์ตเนอร์การเติบโตของคุณ"
        subtitle="เล่าเป้าหมายธุรกิจให้เราฟัง แล้ววางแผน Marketing, Website หรือ Business Solutions ไปด้วยกัน"
      />
    </>
  );
}
