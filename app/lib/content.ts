import type { ComponentType, SVGProps } from "react";
import {
  KanbanIcon,
  ChatIcon,
  StoreIcon,
  MegaphoneIcon,
  GoogleIcon,
  ImageIcon,
  SearchIcon,
  RocketIcon,
  CodeIcon,
  RobotIcon,
  LayersIcon,
  SparkleIcon,
} from "../components/icons";
import type { ModuleKey } from "./site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ===== Home: three pillars ===== */
export type Pillar = {
  icon: Icon;
  no: string;
  name: string;
  tag: string;
  desc: string;
  points: string[];
  href: string;
  cta: string;
  accent: string;
  dot: string;
};

export const PILLARS: Pillar[] = [
  {
    icon: MegaphoneIcon,
    no: "01",
    name: "Marketing Agency",
    tag: "การตลาดที่ลงมือทำจริง",
    desc: "วางแผน ยิงโฆษณา สร้าง Content และวัดผลจริงทุกช่องทาง ให้ธุรกิจโตแบบมีตัวเลข",
    points: ["Social & Google Ads", "Content & Artwork", "กลยุทธ์ & วัดผล"],
    href: "/services",
    cta: "ดูบริการ Marketing",
    accent: "bg-amber-500/12 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    icon: SparkleIcon,
    no: "02",
    name: "AI Solution",
    tag: "ระบบ & AI ตามสั่ง",
    desc: "เว็บไซต์ ระบบ และ AI ที่สร้างตามความต้องการธุรกิจคุณ — built by Claude AI",
    points: ["เว็บไซต์ด้วยโค้ดจริง", "Chatbot อัตโนมัติ", "ระบบจัดการ Lead"],
    href: "/services",
    cta: "ดู AI Solution",
    accent: "bg-orange-400/25 text-orange-700",
    dot: "bg-orange-400",
  },
  {
    icon: LayersIcon,
    no: "03",
    name: "Hubly SaaS",
    tag: "ซอฟต์แวร์พร้อมใช้",
    desc: "ซอฟต์แวร์จัดการธุรกิจสำหรับ SME ไทย — CRM, แชท และร้านค้า เลือกเฉพาะที่ต้องการ",
    points: ["HubDeal CRM", "HubChat รวมแชท", "HubStore ร้านค้า"],
    href: "/products",
    cta: "ดู Hubly SaaS",
    accent: "bg-lime-700/12 text-lime-800",
    dot: "bg-lime-700",
  },
];

/* ===== Services: Marketing Agency ===== */
export type ServiceItem = { icon: Icon; title: string; desc: string };

export const MARKETING_SERVICES: ServiceItem[] = [
  {
    icon: MegaphoneIcon,
    title: "Social Media Ads",
    desc: "ยิงโฆษณา Facebook, Instagram, TikTok ให้ตรงกลุ่มเป้าหมาย คุมงบ วัดผลได้",
  },
  {
    icon: GoogleIcon,
    title: "Google Ads",
    desc: "Search, Display และ YouTube Ads ดักลูกค้าที่กำลังค้นหาธุรกิจแบบคุณ",
  },
  {
    icon: ImageIcon,
    title: "Content Social Media",
    desc: "Content & Artwork สำหรับโซเชียล สวย ตรงแบรนด์ โพสต์ได้สม่ำเสมอ",
  },
  {
    icon: SearchIcon,
    title: "Content Website",
    desc: "Blog & SEO เขียนบทความติดอันดับ Google ดึง traffic เข้าเว็บระยะยาว",
  },
  {
    icon: KanbanIcon,
    title: "Marketing Consultant",
    desc: "Planner & Performance วางกลยุทธ์ ติดตามผล และปรับแผนให้คุ้มทุกบาท",
  },
  {
    icon: RocketIcon,
    title: "Marketing Campaign",
    desc: "Production แคมเปญครบวงจร ตั้งแต่คอนเซ็ปต์ ถ่ายทำ จนถึงเผยแพร่",
  },
  {
    icon: StoreIcon,
    title: "Marketplace Marketing",
    desc: "ดูแลร้านบน Shopee & Lazada ทั้งโฆษณา โปรโมชัน และยอดขาย",
  },
];

/* ===== Services: AI Solution =====
   Note: only the first three are confirmed from spec; the rest of the
   spec section was truncated. Keep this list to the confirmed items. */
export const TECH_SOLUTIONS: ServiceItem[] = [
  {
    icon: KanbanIcon,
    title: "Software Lead Management",
    desc: "ระบบจัดการ Lead แบบ Subscription — ขับเคลื่อนด้วย Hubly SaaS พร้อมใช้ทันที",
  },
  {
    icon: CodeIcon,
    title: "Build Website with Codebase",
    desc: "เว็บไซต์ที่เขียนด้วยโค้ดจริง Built by Claude AI เร็ว ปรับแต่งได้ ไม่ติด template",
  },
  {
    icon: RobotIcon,
    title: "Chatbot Rulebase",
    desc: "แชตบอตตอบลูกค้าอัตโนมัติตามกฎที่กำหนด ลดงานซ้ำ ตอบไว 24 ชม.",
  },
];

/* ===== Products: Hubly SaaS modules (single source of pricing) ===== */
export type Module = {
  key: ModuleKey;
  name: string;
  icon: Icon;
  tagline: string;
  priceValue: number; // THB / month
  features: string[];
};

export const MODULES: Module[] = [
  {
    key: "hubdeal",
    name: "HubDeal",
    icon: KanbanIcon,
    tagline: "ระบบ CRM จัดการ Lead และดีล",
    priceValue: 1990,
    features: [
      "Kanban pipeline",
      "ติดตาม lead ทุกขั้นตอน",
      "จัดการทีมขาย",
      "รายงาน KPI",
      "Deal analytics",
    ],
  },
  {
    key: "hubchat",
    name: "HubChat",
    icon: ChatIcon,
    tagline: "Inbox รวมแชทจากทุกช่องทาง",
    priceValue: 1990,
    features: [
      "LINE + Facebook Messenger",
      "ตอบแชทจากที่เดียว",
      "Auto-reply",
      "Broadcast",
      "เชื่อม CRM อัตโนมัติ",
    ],
  },
  {
    key: "hubstore",
    name: "HubStore",
    icon: StoreIcon,
    tagline: "ระบบจัดการร้านค้าและสต็อก",
    priceValue: 1990,
    features: [
      "จัดการสินค้าและสต็อก",
      "ออเดอร์และการขาย",
      "รายรับ-รายจ่าย & รายงาน",
      "แจ้งเตือนสต็อก",
    ],
  },
];

export const baht = (n: number) => `฿${n.toLocaleString("en-US")}`;

/* ===== Bundles (derived from module prices) =====
   2 SaaS = 15% off · 3 SaaS = 20% off.
   Chat+Store special and the all-3 row are computed (spec rows truncated). */
export type Bundle = {
  label: string;
  modules: ModuleKey[];
  discount: number; // fraction
};

export const BUNDLES: Bundle[] = [
  { label: "HubDeal + HubChat", modules: ["hubdeal", "hubchat"], discount: 0.15 },
  { label: "HubDeal + HubStore", modules: ["hubdeal", "hubstore"], discount: 0.15 },
  { label: "HubChat + HubStore", modules: ["hubchat", "hubstore"], discount: 0.15 },
  {
    label: "ครบทั้ง 3 SaaS",
    modules: ["hubdeal", "hubchat", "hubstore"],
    discount: 0.2,
  },
];

export function bundleRows() {
  const priceOf = (k: ModuleKey) =>
    MODULES.find((m) => m.key === k)!.priceValue;
  return BUNDLES.map((b) => {
    const normal = b.modules.reduce((s, k) => s + priceOf(k), 0);
    const special = Math.round(normal * (1 - b.discount));
    return {
      label: b.label,
      normal,
      discountPct: Math.round(b.discount * 100),
      special,
    };
  });
}

/* ===== Pricing FAQ ===== */
export const FAQ = [
  {
    q: "เลือกใช้ SaaS แค่ตัวเดียวได้ไหม?",
    a: "ได้เลย เลือกเฉพาะ module ที่ธุรกิจคุณต้องการ จ่ายเท่าที่ใช้ และเพิ่ม module อื่นทีหลังได้ตลอด",
  },
  {
    q: "ส่วนลดแพ็คเกจคิดยังไง?",
    a: "เลือก 2 SaaS รับส่วนลด 15% ทันที และถ้าเลือกครบทั้ง 3 SaaS รับส่วนลด 20% จากราคาปกติ",
  },
  {
    q: "มีค่าติดตั้งหรือสัญญาผูกมัดไหม?",
    a: "ไม่มีค่าติดตั้ง และยกเลิกได้ทุกเมื่อ ราคาเป็นแบบรายเดือน",
  },
  {
    q: "ข้อมูลปลอดภัยแค่ไหน?",
    a: "ข้อมูลของแต่ละธุรกิจถูกแยกเก็บเฉพาะของคุณ ไม่แชร์กับผู้ใช้รายอื่น",
  },
  {
    q: "มีทีม support ภาษาไทยไหม?",
    a: "มีครับ ทีม HublyCompany พร้อมช่วยเหลือผ่านโทรศัพท์และอีเมล",
  },
];

/* ===== Blog (placeholder posts) ===== */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scale-sme-with-crm",
    title: "5 สัญญาณว่าธุรกิจ SME ของคุณถึงเวลาใช้ CRM",
    excerpt:
      "ถ้ายังจด Lead ใน Excel หรือลืมตามลูกค้าอยู่บ่อยๆ บทความนี้ช่วยให้คุณรู้ว่าเมื่อไหร่ควรขยับมาใช้ระบบ",
    date: "12 มิถุนายน 2026",
    category: "Sales",
  },
  {
    slug: "facebook-ads-budget",
    title: "ตั้งงบ Facebook Ads เท่าไหร่ดี สำหรับธุรกิจเพิ่งเริ่ม",
    excerpt:
      "เจาะวิธีคิดงบโฆษณาให้คุ้มค่า พร้อมตัวอย่างการกระจายงบระหว่างทดสอบและสเกล",
    date: "5 มิถุนายน 2026",
    category: "Marketing",
  },
  {
    slug: "unified-inbox-line-fb",
    title: "รวมแชท LINE และ Facebook ไว้ที่เดียว ช่วยปิดการขายได้จริงไหม",
    excerpt:
      "เมื่อทุกข้อความอยู่ใน inbox เดียว ทีมตอบไวขึ้น ไม่มีแชทตกหล่น และเปลี่ยนเป็นยอดขายได้มากขึ้น",
    date: "28 พฤษภาคม 2026",
    category: "Product",
  },
  {
    slug: "ai-website-codebase",
    title: "เว็บไซต์เขียนด้วยโค้ดจริง vs Template ต่างกันยังไง",
    excerpt:
      "ทำไมเว็บที่ build ด้วย codebase ถึงเร็วกว่า ปรับแต่งได้อิสระกว่า และดีต่อ SEO ในระยะยาว",
    date: "20 พฤษภาคม 2026",
    category: "Tech",
  },
];
