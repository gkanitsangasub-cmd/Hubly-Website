import type { Metadata } from "next";

export const BASE_URL = "https://hublycompany.com";
export const COMPANY = {
  name: "HublyCompany",
  tagline: "Digital Growth & Business Solutions Partner",
  description:
    "HublyCompany เชื่อม Marketing, Sales และ Operation ด้วย Digital Marketing, Website, AI, Automation และระบบที่ออกแบบตามธุรกิจคุณ",
  contactName: "Kanit Sangasub",
  phone: "094-632-6916",
  phoneHref: "tel:+66946326916",
  email: "gkanit.sangasub@gmail.com",
} as const;
export const CONTACTS = [
  { name: "คุณแชมป์", phone: "094-632-6916", phoneHref: "tel:+66946326916" },
  { name: "คุณนัท", phone: "092-586-3639", phoneHref: "tel:+66925863639" },
] as const;
export type NavChild = { href: string; label: string; sublabel?: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };
export const NAV_LINKS: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/digital-growth",
        label: "Digital Growth & Performance",
        sublabel: "การตลาด · แคมเปญ · วัดผล",
      },
      {
        href: "/services/website",
        label: "Website & Digital Experience",
        sublabel: "พัฒนาเว็บไซต์ · ดูแล · SEO",
      },
      {
        href: "/solutions",
        label: "AI & Business Solutions",
        sublabel: "AI · Automation · ระบบเฉพาะธุรกิจ",
      },
    ],
  },
  {
    href: "/solutions",
    label: "Business Solutions",
    children: [
      {
        href: "/solutions",
        label: "Business Solutions ทั้งหมด",
        sublabel: "AI · Automation · ระบบเฉพาะธุรกิจ",
      },
      {
        href: "/solutions/tourism-crm",
        label: "Hubly Tourism",
        sublabel: "ผลงาน CRM สำหรับธุรกิจทัวร์",
      },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = BASE_URL + path;
  const fullTitle = title.includes(COMPANY.name)
    ? title
    : title + " · " + COMPANY.name;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      images: [
        {
          url: BASE_URL + "/opengraph-image",
          width: 1200,
          height: 630,
          alt: COMPANY.tagline,
        },
      ],
      description,
      url,
      type: "website",
      locale: "th_TH",
      siteName: COMPANY.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      images: [BASE_URL + "/twitter-image"],
      description,
    },
  };
}
export function quoteHref(subject: string, lines: readonly string[]) {
  const body = [
    "สวัสดีครับ/ค่ะ",
    "",
    ...lines,
    "",
    "ชื่อ / บริษัท:",
    "เบอร์ติดต่อ:",
    "เป้าหมายและรายละเอียดเพิ่มเติม:",
    "",
    "กรุณาติดต่อกลับเพื่อประเมินขอบเขตงานและยืนยันราคาครับ/ค่ะ",
  ].join("\n");
  return (
    "mailto:" +
    COMPANY.email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}
