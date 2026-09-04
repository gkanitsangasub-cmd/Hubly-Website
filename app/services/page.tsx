import { pageMetadata } from "../lib/site";
import { SectionHeading } from "../components/ui";
import ContentSection from "../components/ContentSection";
import ServiceAreas from "../components/ServiceAreas";
import WorkSteps from "../components/WorkSteps";
import CtaCard from "../components/CtaCard";

export const metadata = pageMetadata(
  "บริการของเรา",
  "Digital Growth & Performance, Website & Digital Experience และ AI & Business Solutions — เชื่อมการตลาด เทคโนโลยี และระบบธุรกิจ",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <ContentSection>
        <SectionHeading
          as="h1"
          eyebrow="Our Services"
          title="สามด้านที่ช่วยให้ธุรกิจเติบโตอย่างเป็นระบบ"
          subtitle="ตั้งแต่การตลาดและเว็บไซต์ ไปจนถึง AI และระบบการทำงาน เลือกบริการให้เหมาะกับเป้าหมายของคุณ"
        />
        <ServiceAreas />
      </ContentSection>
      <WorkSteps />
      <CtaCard
        title="เริ่มจากสิ่งที่ธุรกิจคุณต้องการ"
        subtitle="เราช่วยประเมินเป้าหมาย ขอบเขตงาน และงบประมาณ เพื่อวางแผนที่เหมาะสมร่วมกัน"
      />
    </>
  );
}
