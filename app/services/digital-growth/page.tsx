import { pageMetadata } from "../../lib/site";
import { RATE_CARD, baht } from "../../lib/marketing-services";
import VideoHero from "../../components/VideoHero";
import ContentSection from "../../components/ContentSection";
import { SectionHeading, ButtonLink } from "../../components/ui";
import MotionReveal from "../../components/MotionReveal";
import GrowthPlans from "../../components/GrowthPlans";
import CtaCard from "../../components/CtaCard";
import ServiceSchema from "../../components/ServiceSchema";

const description =
  "วางกลยุทธ์การตลาดออนไลน์ ดูแล Social Media, Ads, Campaign, Content และ Performance เพื่อสร้างการเติบโตที่วัดผลได้";
export const metadata = pageMetadata(
  "Digital Growth — บริการการตลาดออนไลน์",
  description,
  "/services/digital-growth",
);
export default function DigitalGrowthPage() {
  return (
    <>
      <ServiceSchema
        name="Digital Growth & Performance"
        description={description}
        path="/services/digital-growth"
      />
      <VideoHero
        src="/hero/marketing-hero.mp4"
        poster="/hero/marketing-hero-poster.jpg"
        eyebrow="Digital Growth & Performance"
        title="เติบโตด้วยการตลาดที่วัดผลได้"
        subtitle={description}
        filter="sepia(0.25) saturate(1.2) hue-rotate(-8deg) brightness(0.9) contrast(1.04)"
        tintClassName="bg-mocha/20 mix-blend-multiply"
      >
        <ButtonLink href="/pricing" variant="light">
          ดูแพ็กเกจและราคา
        </ButtonLink>
        <ButtonLink href="/contact" variant="light">
          คุยกับทีม Growth
        </ButtonLink>
      </VideoHero>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Digital Growth Services"
          title="เลือกดูแลเฉพาะด้าน หรือให้เราช่วยทั้งแผน"
          subtitle="บริการรายเดือนที่ขยายขอบเขตเพิ่มได้ตามความต้องการของธุรกิจ"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RATE_CARD.map((service, i) => (
            <MotionReveal key={service.id} delay={i * 0.05} className="h-full">
              <article className="flex h-full flex-col rounded-card border border-ink/8 bg-card p-6 shadow-warm transition-all hover:-translate-y-1 hover:shadow-warm-lg">
                <span className="text-xs font-semibold text-mocha">
                  SERVICE / {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <p className="mt-4 border-t border-ink/8 pt-4 text-xs leading-relaxed text-muted">
                  {service.scope}
                </p>
                <p className="mt-3 font-bold text-mocha">
                  {baht(service.price)}
                  <span className="text-xs font-normal text-muted">
                    {" "}
                    /เดือน
                  </span>
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          ราคาบริการไม่รวมงบโฆษณา · ประเมินขอบเขตและยืนยันราคาก่อนเริ่มงาน
        </p>
        <div className="mt-8 text-center">
          <ButtonLink href="/pricing#rate-card" variant="outline">
            เลือกบริการและคำนวณยอด
          </ButtonLink>
        </div>
      </ContentSection>
      <ContentSection>
        <SectionHeading
          eyebrow="Monthly Growth Packages"
          title="มีทีม Growth ดูแลต่อเนื่องทุกเดือน"
          subtitle="เริ่มจากการดูแลช่องทาง เพิ่ม SEO และขยายสู่ Content Production เมื่อธุรกิจพร้อม"
        />
        <GrowthPlans />
      </ContentSection>
      <CtaCard
        title="วางแผนการเติบโตให้ธุรกิจคุณ"
        subtitle="คุยกับทีมเพื่อเลือกช่องทาง แพ็กเกจ และขอบเขตที่เหมาะกับเป้าหมาย"
      />
    </>
  );
}
