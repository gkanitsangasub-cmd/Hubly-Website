import Image from "next/image";
import Link from "next/link";
import { BASE_URL, COMPANY, pageMetadata } from "../../lib/site";
import {
  TOURISM_DESCRIPTION,
  TOURISM_PATH,
  TOURISM_DEMO_HREF,
  TOURISM_SCREENS,
  TOURISM_FAQS,
} from "../../lib/tourism-crm";
import ContentSection from "../../components/ContentSection";
import TourismScreens from "../../components/TourismScreens";
import { ButtonLink, Eyebrow, SectionHeading } from "../../components/ui";

const meta = pageMetadata(
  "CRM สำหรับบริษัททัวร์ — Hubly Tourism",
  TOURISM_DESCRIPTION,
  TOURISM_PATH,
);
export const metadata = {
  ...meta,
  openGraph: {
    ...meta.openGraph,
    images: [
      {
        url: BASE_URL + TOURISM_SCREENS[0].src,
        width: 1130,
        height: 540,
        alt: "Hubly Tourism — CRM สำหรับธุรกิจทัวร์",
      },
    ],
  },
  twitter: { ...meta.twitter, images: [BASE_URL + TOURISM_SCREENS[0].src] },
};

const capabilities = [
  [
    "01",
    "ข้อมูลลูกค้าไม่กระจาย",
    "รวมช่องทางติดต่อและประวัติลูกค้า ลูกค้าคนเดิมกลับมาสนใจอีกทริปก็สร้างดีลใหม่ภายใต้ข้อมูลลูกค้าเดิมได้",
  ],
  [
    "02",
    "รายละเอียดพร้อมส่งต่อ",
    "ระบุโปรแกรม รอบเดินทาง จำนวนผู้ใหญ่ เด็ก ทารก และงบประมาณ พร้อมเก็บเอกสารลูกค้าแยกจากเอกสารเฉพาะทริป",
  ],
  [
    "03",
    "รับเรื่องแล้วติดตามต่อ",
    "สร้างแบบฟอร์มรับลูกค้า แชร์ผ่านลิงก์หรือ QR Code และฝังบนเว็บไซต์ เลือกรับเป็นข้อมูลลูกค้าหรือสร้างดีลด้วยได้",
  ],
  [
    "04",
    "ทีมเห็นงานที่รับผิดชอบ",
    "กำหนดผู้ดูแลดีล บันทึกประวัติการคุยและนัดติดตาม พร้อมแยกบทบาทของผู้ดูแลระบบ ฝ่ายขาย และฝ่ายปฏิบัติการ",
  ],
];

export default function TourismCrmPage() {
  const cover = TOURISM_SCREENS[0];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Hubly Tourism",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web browser",
        description: TOURISM_DESCRIPTION,
        url: BASE_URL + TOURISM_PATH,
        image: BASE_URL + cover.src,
        creator: { "@type": "Organization", name: COMPANY.name, url: BASE_URL },
        featureList: [
          "ข้อมูลลูกค้าและประวัติการติดต่อ",
          "โปรแกรมทัวร์และรอบเดินทาง",
          "Sales Pipeline",
          "แบบฟอร์มรับลูกค้า",
          "Dashboard การขาย",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Business Solutions",
            item: BASE_URL + "/solutions",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hubly Tourism",
            item: BASE_URL + TOURISM_PATH,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: TOURISM_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="overflow-hidden bg-beige pb-16 pt-7 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-xs text-muted"
          >
            <Link href="/">หน้าแรก</Link>
            <span aria-hidden>/</span>
            <Link href="/solutions">Business Solutions</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">Hubly Tourism</span>
          </nav>
          <div className="mx-auto max-w-3xl pt-12 text-center md:pt-16">
            <Eyebrow>Hubly Tourism · Built by Hubly</Eyebrow>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              CRM สำหรับบริษัททัวร์
              <span className="mt-3 block text-mocha">
                เชื่อมทุกโอกาสขาย ให้ทีมไปต่อได้
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              รวมข้อมูลลูกค้า โปรแกรมทัวร์ รอบเดินทาง และดีลขายไว้ในที่เดียว
              ให้ทีมติดตามงานต่อกันได้ ตั้งแต่รับเรื่องจนถึงปิดการขาย
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={TOURISM_DEMO_HREF}>
                นัดดูเดโม Hubly Tourism
              </ButtonLink>
              <ButtonLink href="#screens" variant="outline">
                ดูหน้าจอและฟีเจอร์
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
            <div className="overflow-hidden rounded-hero border border-ink/10 bg-card shadow-warm-lg">
              <div className="flex items-center justify-between gap-3 border-b border-ink/8 px-5 py-4">
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg bg-mocha text-white"
                    aria-hidden
                  >
                    H
                  </span>
                  Hubly Tourism
                </span>
                <span className="text-xs text-muted">Tourism CRM</span>
              </div>
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(max-width: 1100px) 100vw, 1024px"
                loading="eager"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted">
              ภาพหน้าจอจริงจากพื้นที่สาธิต ·
              โปรแกรมและราคาในภาพใช้ประกอบการแสดงระบบ
            </p>
          </div>
        </div>
      </section>
      <ContentSection>
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <SectionHeading
            center={false}
            eyebrow="Designed for Tour Businesses"
            title="งานขายทัวร์ มีรายละเอียดมากกว่าชื่อลูกค้า"
          />
          <div className="text-base leading-relaxed text-muted">
            <p>
              ลูกค้าหนึ่งคนอาจสนใจหลายโปรแกรม แต่ละทริปมีรอบเดินทาง
              จำนวนผู้ร่วมทริป และเอกสารต่างกัน เมื่อข้อมูลอยู่หลายที่
              ทีมต้องย้อนถามและค้นหาก่อนทำงานต่อ
            </p>
            <p className="mt-4">
              Hubly Tourism จึงเชื่อมลูกค้าเข้ากับดีลและรายละเอียดการเดินทาง
              พร้อมให้ทีมบันทึกสิ่งที่คุยและกำหนดวันติดตามต่อ เป็นตัวอย่างของ
              Business Solutions ที่ออกแบบตามวิธีทำงานของธุรกิจ
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(([number, title, description]) => (
            <article
              key={number}
              className="rounded-card border border-ink/8 bg-card p-6"
            >
              <p className="text-sm font-medium text-mocha">/ {number}</p>
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>
      <ContentSection id="screens" tone="beige">
        <SectionHeading
          eyebrow="Inside Hubly Tourism"
          title="ดูระบบที่ทีมใช้ทำงานจริง"
          subtitle="สำรวจโปรแกรมทัวร์ บอร์ดติดตามดีล และ Dashboard พร้อมตัวอย่างหน้าจอจากระบบ"
        />
        <TourismScreens />
      </ContentSection>
      <ContentSection>
        <SectionHeading
          eyebrow="From Enquiry to Follow-up"
          title="จากคนสนใจทริป สู่การติดตามที่ต่อเนื่อง"
          subtitle="ตัวอย่างลำดับการทำงานของทีมขายทัวร์ใน Hubly Tourism"
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [
              "รับความสนใจ",
              "รับข้อมูลผ่านแบบฟอร์ม หรือให้ทีมบันทึกเรื่องที่ลูกค้าสอบถาม เลือกข้อมูลลูกค้าเดิมเมื่อเคยติดต่อกันแล้ว",
            ],
            [
              "เชื่อมกับทริป",
              "สร้างดีล เลือกโปรแกรมและรอบเดินทาง ระบุความต้องการ จำนวนผู้เดินทาง และผู้รับผิดชอบ",
            ],
            [
              "ติดตามจนรู้ผล",
              "บันทึกการคุย กำหนดวันติดต่อครั้งถัดไป อัปเดตสถานะ และดูผลการขายที่ Dashboard",
            ],
          ].map(([title, text], i) => (
            <li key={title} className="border-t-2 border-mocha/30 pt-6">
              <span className="text-xs font-medium text-mocha">
                STEP 0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection tone="beige">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="ก่อนเริ่มใช้ CRM กับธุรกิจทัวร์ของคุณ"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {TOURISM_FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer text-base font-medium leading-relaxed">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </ContentSection>
      <ContentSection id="demo">
        <div className="rounded-hero bg-ink px-6 py-12 text-center text-cream md:px-12 md:py-16">
          <p className="text-xs font-medium tracking-widest text-clay">
            LET’S WALK THROUGH YOUR WORKFLOW
          </p>
          <h2 className="mt-5 text-2xl font-bold leading-tight md:text-4xl">
            ลองดูระบบ กับโจทย์ของบริษัททัวร์คุณ
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/80 md:text-base">
            เล่าวิธีรับลูกค้าและติดตามงานขายให้เราฟัง
            แล้วนัดดูเดโมเพื่อประเมินการตั้งค่า ขอบเขต
            และค่าใช้งานที่เหมาะกับทีม
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={TOURISM_DEMO_HREF} variant="light">
              นัดดูเดโมทางอีเมล
            </ButtonLink>
            <ButtonLink
              href={COMPANY.phoneHref}
              className="border border-cream/30 bg-transparent text-cream hover:bg-cream/10"
            >
              โทรคุยกับทีม Hubly
            </ButtonLink>
          </div>
          <Link
            href="/solutions"
            className="mt-7 inline-block text-sm text-cream/75 underline underline-offset-4"
          >
            ดู Business Solutions อื่น ๆ
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
