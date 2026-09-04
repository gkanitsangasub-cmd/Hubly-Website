import { pageMetadata, quoteHref } from "../lib/site";
import { SOLUTIONS } from "../lib/services";
import VideoHero from "../components/VideoHero";
import ContentSection from "../components/ContentSection";
import { SectionHeading, ButtonLink } from "../components/ui";
import { CheckIcon } from "../components/icons";
import MotionReveal from "../components/MotionReveal";
import WorkSteps from "../components/WorkSteps";
import CtaCard from "../components/CtaCard";
import ServiceSchema from "../components/ServiceSchema";
import TourismFeature from "../components/TourismFeature";

const description =
  "Business Automation, AI Business Solutions, Custom Business Systems และ Website Development ออกแบบตามวิธีทำงานของธุรกิจคุณ";
export const metadata = pageMetadata(
  "Business Solutions — AI และระบบธุรกิจ",
  description,
  "/solutions",
);
export default function SolutionsPage() {
  return (
    <>
      <ServiceSchema
        name="AI & Business Solutions"
        description={description}
        path="/solutions"
      />
      <VideoHero
        src="/hero/ai-hero.mp4"
        poster="/hero/ai-hero-poster.jpg"
        eyebrow="AI & Business Solutions"
        title="เทคโนโลยีที่เข้ากับวิธีทำงานของธุรกิจคุณ"
        subtitle="Technology built around the way your business works. ออกแบบ AI, Automation และระบบเฉพาะทางให้เหมาะกับโจทย์จริง"
      >
        <ButtonLink href="/contact" variant="light">
          ปรึกษาโปรเจกต์
        </ButtonLink>
      </VideoHero>
      <ContentSection>
        <SectionHeading
          eyebrow="Business Solutions"
          title="จากงานซ้ำ สู่ระบบที่ช่วยให้ทีมทำงานได้ดีขึ้น"
          subtitle="เชื่อม Marketing, Sales และ Operation ผ่านโซลูชันที่ออกแบบตามความต้องการ"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <MotionReveal
                key={solution.id}
                delay={i * 0.08}
                className="h-full"
              >
                <article
                  id={solution.id}
                  className="flex h-full scroll-mt-24 flex-col rounded-card border border-ink/8 bg-card p-7 shadow-warm transition-all hover:-translate-y-1 hover:shadow-warm-lg"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-card bg-orange-400/20 text-orange-700">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{solution.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {solution.desc}
                  </p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm">
                        <CheckIcon
                          width={16}
                          height={16}
                          className="mt-0.5 shrink-0 text-sage"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={quoteHref("ปรึกษา " + solution.name, [
                      "สนใจบริการ " + solution.name,
                      "สิ่งที่อยากให้ระบบช่วย:",
                      "ระบบหรือเครื่องมือที่ใช้อยู่:",
                    ])}
                    variant="outline"
                    className="mt-7"
                  >
                    คุยเรื่อง {solution.name}
                  </ButtonLink>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </ContentSection>
      <TourismFeature />
      <ContentSection id="project">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Built Around Your Business"
            title="เริ่มจากโจทย์ แล้วออกแบบขอบเขตร่วมกัน"
            subtitle="แต่ละธุรกิจมีวิธีทำงานต่างกัน เราจึงประเมินแนวทาง ขอบเขต และราคาให้เหมาะกับโปรเจกต์ของคุณ"
          />
          <p className="mt-6 text-sm leading-relaxed text-muted">
            เตรียมเป้าหมาย ปัญหาที่ต้องการแก้ ระบบที่ใช้อยู่
            และช่วงเวลาที่ต้องการเริ่ม เพื่อให้ทีมช่วยประเมินได้ตรงจุด
          </p>
          <ButtonLink href="/contact" className="mt-8">
            ปรึกษาและขอใบเสนอราคา
          </ButtonLink>
        </div>
      </ContentSection>
      <WorkSteps />
      <CtaCard
        title="เปลี่ยน Technology ให้สร้างผลลัพธ์ทางธุรกิจ"
        subtitle="คุยกับทีม Hubly เพื่อออกแบบโซลูชันที่เหมาะกับการทำงานของคุณ"
        secondaryHref="/services"
        secondaryLabel="ดูบริการทั้งหมด"
      />
    </>
  );
}
