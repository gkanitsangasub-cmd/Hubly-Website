import { pageMetadata } from "../lib/site";
import { SectionHeading, ButtonLink } from "../components/ui";
import VideoHero from "../components/VideoHero";
import ContentSection from "../components/ContentSection";
import GrowthPlans, { PackageComparison } from "../components/GrowthPlans";
import RateCardSelector from "./RateCardSelector";
import CtaCard from "../components/CtaCard";
import { GROWTH_FAQ } from "../lib/marketing-services";

export const metadata = pageMetadata(
  "แพ็กเกจและราคา",
  "Growth Partner เริ่ม 17,900+, Growth Team 32,900+, Growth Team Plus 52,900+ บาท/เดือน หรือเลือกบริการรายด้าน ไม่รวมงบโฆษณา",
  "/pricing",
);
export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: GROWTH_FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <VideoHero
        src="/hero/marketing-hero.mp4"
        poster="/hero/marketing-hero-poster.jpg"
        eyebrow="Pricing & Packages"
        title="เลือกทีม Growth ที่เหมาะกับธุรกิจคุณ"
        subtitle="บริการรายเดือนแบบเลือกเฉพาะด้าน หรือแพ็กเกจดูแลต่อเนื่องที่ขยายตามเป้าหมายของคุณ"
      >
        <ButtonLink href="#packages" variant="light">
          ดูแพ็กเกจรายเดือน
        </ButtonLink>
        <ButtonLink href="#rate-card" variant="light">
          เลือกบริการรายด้าน
        </ButtonLink>
      </VideoHero>
      <ContentSection id="packages">
        <SectionHeading
          eyebrow="Monthly Growth Packages"
          title="เริ่มจากสิ่งที่ต้องการ แล้วขยายได้เมื่อพร้อม"
          subtitle="ดูแลการตลาดรายเดือน ตั้งแต่ช่องทางและโฆษณา ไปจนถึง SEO และ Content Production"
        />
        <GrowthPlans />
        <p className="mt-6 text-center text-sm text-muted">
          ราคาเริ่มต้นต่อเดือน · ทุกแพ็กเกจไม่รวมงบโฆษณา ·
          ยืนยันขอบเขตงานและราคาก่อนเริ่มบริการ
        </p>
      </ContentSection>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Package Scope Comparison"
          title="แต่ละแพ็กเกจรวมอะไรบ้าง?"
          subtitle="Growth Team และ Growth Team Plus รวม SEO: Keyword Planning, On-page SEO, บทความภายใน 10 ชิ้น และภายนอก 1 ชิ้นต่อเดือน"
        />
        <PackageComparison />
        <p className="mt-4 text-center text-xs text-muted sm:hidden">
          เลื่อนตารางแนวนอนเพื่อดูทุกแพ็กเกจ
        </p>
      </ContentSection>
      <ContentSection id="rate-card">
        <SectionHeading
          eyebrow="Service Rate Card"
          title="เลือกบริการรายเดือนเฉพาะที่ต้องการ"
          subtitle="เลือกบริการเพื่อดูยอดประมาณ และส่งรายการให้ทีมประเมินขอบเขตเพิ่มเติมได้"
        />
        <RateCardSelector />
      </ContentSection>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Business Solutions"
          title="ต้องการเว็บไซต์ AI หรือระบบเฉพาะธุรกิจ?"
          subtitle="งาน Website Development, Business Automation, AI และ Custom Business Systems ประเมินขอบเขตและราคาแยกตามโปรเจกต์"
        />
        <div className="mt-8 text-center">
          <ButtonLink href="/solutions" variant="outline">
            ดู Business Solutions
          </ButtonLink>
        </div>
      </ContentSection>
      <ContentSection>
        <SectionHeading eyebrow="FAQ" title="คำถามเกี่ยวกับบริการและแพ็กเกจ" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {GROWTH_FAQ.map((item) => (
            <details
              key={item.q}
              className="rounded-card border border-ink/10 bg-card p-5"
            >
              <summary className="cursor-pointer text-sm font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </ContentSection>
      <CtaCard
        title="ยังไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับคุณ?"
        subtitle="เล่าเป้าหมายและงบประมาณให้ทีมฟัง เพื่อวางแผนบริการที่เหมาะกับธุรกิจ"
        secondaryHref="/services"
        secondaryLabel="ทำความรู้จักบริการ"
      />
    </>
  );
}
