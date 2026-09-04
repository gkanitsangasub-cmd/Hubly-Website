import { pageMetadata, quoteHref } from "../../lib/site";
import { RATE_CARD, baht } from "../../lib/marketing-services";
import { SOLUTIONS } from "../../lib/services";
import VideoHero from "../../components/VideoHero";
import ContentSection from "../../components/ContentSection";
import { SectionHeading, ButtonLink } from "../../components/ui";
import { CheckIcon } from "../../components/icons";
import CtaCard from "../../components/CtaCard";
import ServiceSchema from "../../components/ServiceSchema";
const description =
  "พัฒนาและดูแล Website, SEO และ Digital Experience ให้ธุรกิจถูกค้นพบและเปลี่ยนผู้เข้าชมเป็นโอกาสทางธุรกิจ";
export const metadata = pageMetadata(
  "พัฒนาและดูแลเว็บไซต์ WordPress และ Custom Website",
  description,
  "/services/website",
);
const care = RATE_CARD.find((item) => item.id === "website")!;
const seo = RATE_CARD.find((item) => item.id === "seo")!;
const website = SOLUTIONS.find((item) => item.id === "website")!;

export default function WebsitePage() {
  return (
    <>
      <ServiceSchema
        name="Website & Digital Experience"
        description={description}
        path="/services/website"
      />
      <VideoHero
        src="/hero/products-hero.mp4"
        poster="/hero/products-hero-poster.jpg"
        eyebrow="Website & Digital Experience"
        title="เว็บไซต์ที่สร้างโอกาสให้ธุรกิจ"
        subtitle={description}
      >
        <ButtonLink href="/contact" variant="light">
          ปรึกษาเรื่องเว็บไซต์
        </ButtonLink>
      </VideoHero>
      <ContentSection>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Website Development"
              title="สร้างใหม่ ปรับโฉม หรือพัฒนาตามโจทย์ของคุณ"
              subtitle="เลือก WordPress หรือ Custom Website ให้เหมาะกับแบรนด์ การใช้งาน และวิธีดูแลของทีม"
            />
            <div className="mt-7">
              <ButtonLink
                href={quoteHref("ปรึกษา Website Development", [
                  "สนใจพัฒนาเว็บไซต์ / ปรับโฉมเว็บไซต์",
                  "ประเภทเว็บไซต์และเป้าหมาย:",
                  "เว็บไซต์เดิม (ถ้ามี):",
                ])}
              >
                ขอประเมินโปรเจกต์
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-card border border-ink/8 bg-card p-8 shadow-warm">
            <h3 className="text-xl font-bold">เว็บไซต์ที่เหมาะกับธุรกิจคุณ</h3>
            <ul className="mt-6 space-y-4">
              {website.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckIcon
                    className="shrink-0 text-sage"
                    width={20}
                    height={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink/8 pt-5 text-sm leading-relaxed text-muted">
              ประเมินราคาและขอบเขตตามความต้องการของแต่ละโปรเจกต์
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Care & Optimization"
          title="ดูแลต่อเนื่อง ให้เว็บไซต์พร้อมเติบโต"
          subtitle="เลือกงานดูแลเว็บไซต์และ SEO รายด้าน หรือรวมกับแผน Growth รายเดือน"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[care, seo].map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-card border border-ink/8 bg-card p-7 shadow-warm"
            >
              <h3 className="text-xl font-bold">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mt-4 text-sm text-muted">{service.scope}</p>
              <p className="mt-6 text-3xl font-bold text-mocha">
                {baht(service.price)}
                <span className="text-sm font-normal text-muted"> /เดือน</span>
              </p>
              <ButtonLink
                href="/pricing#rate-card"
                variant="outline"
                className="mt-6"
              >
                เลือกบริการรายเดือน
              </ButtonLink>
            </article>
          ))}
        </div>
      </ContentSection>
      <CtaCard
        title="มีเว็บไซต์เดิม หรือกำลังจะเริ่มใหม่?"
        subtitle="เล่าเป้าหมายและปัญหาที่พบ แล้วเราจะช่วยวางแนวทางพัฒนาและดูแลต่อเนื่อง"
      />
    </>
  );
}
