import Image from "next/image";
import Link from "next/link";
import ContentSection from "./ContentSection";
import { ButtonLink, Eyebrow } from "./ui";
import { TOURISM_PATH, TOURISM_SCREENS } from "../lib/tourism-crm";

export default function TourismFeature() {
  const screen = TOURISM_SCREENS[0];
  return (
    <ContentSection id="featured-work" tone="beige">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <Eyebrow>Featured Solution · ผลงานของ Hubly</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            Hubly Tourism
            <span className="mt-3 block text-2xl font-medium text-mocha md:text-3xl">
              CRM ที่เข้าใจงานขายทัวร์
            </span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            จากลูกค้าที่สนใจทริป สู่ดีลที่ทีมติดตามต่อได้ เชื่อมข้อมูลลูกค้า
            โปรแกรมทัวร์ รอบเดินทาง และภาพรวมการขายไว้ในระบบเดียว
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-mocha">
            {["Tourism CRM", "Sales Pipeline", "Business Dashboard"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-mocha/15 px-3 py-1.5"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <ButtonLink href={TOURISM_PATH} className="mt-8">
            ดู CRM สำหรับธุรกิจทัวร์ <span aria-hidden>↗</span>
          </ButtonLink>
        </div>
        <Link
          href={TOURISM_PATH}
          className="group block min-w-0"
          aria-label="ดูผลงาน Hubly Tourism และหน้าจอระบบ"
        >
          <div className="overflow-hidden rounded-card border border-ink/10 bg-card shadow-warm-lg transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center justify-between gap-3 border-b border-ink/8 px-5 py-4">
              <span className="text-sm font-semibold">
                Hubly Tourism{" "}
                <span className="font-normal text-muted">/ Products</span>
              </span>
              <span className="text-xs text-mocha">ภาพระบบจริง</span>
            </div>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="(max-width: 1023px) 100vw, 620px"
              className="h-auto w-full"
            />
            <div className="grid grid-cols-3 divide-x divide-ink/10 border-t border-ink/8 py-5 text-center text-xs text-muted">
              <span>โปรแกรมทัวร์</span>
              <span>รอบเดินทาง</span>
              <span>เชื่อมกับดีลขาย</span>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            ผลงานระบบที่พัฒนาโดย Hubly · ภาพจากพื้นที่สาธิต
          </p>
        </Link>
      </div>
    </ContentSection>
  );
}
