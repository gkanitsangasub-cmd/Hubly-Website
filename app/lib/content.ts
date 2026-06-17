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
    href: "/services/marketing",
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
    href: "/services/ai-solution",
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
    desc: "ยิงโฆษณา Facebook, Instagram, TikTok และ LINE ให้ตรงกลุ่มเป้าหมาย คุมงบ วัดผลได้",
  },
  {
    icon: GoogleIcon,
    title: "Google Ads",
    desc: "Search, Display และ YouTube Ads ดักลูกค้าที่กำลังค้นหาธุรกิจแบบคุณ",
  },
  {
    icon: ImageIcon,
    title: "Content & Artwork",
    desc: "ออกแบบ Artwork และเขียน Caption สำหรับโซเชียล สวย ตรงแบรนด์ พร้อม Content Calendar",
  },
  {
    icon: SearchIcon,
    title: "Blog & SEO",
    desc: "เขียนบทความติดอันดับ Google ดึง organic traffic เข้าเว็บระยะยาว",
  },
  {
    icon: StoreIcon,
    title: "Marketplace Marketing",
    desc: "ดูแลร้านบน Shopee & Lazada ทั้งโฆษณา Listing SEO โปรโมชัน และยอดขาย",
  },
  {
    icon: KanbanIcon,
    title: "Marketing Strategy",
    desc: "วางกลยุทธ์การตลาด วิเคราะห์คู่แข่ง และ Optimize แคมเปญต่อเนื่องทุกเดือน",
  },
  {
    icon: RocketIcon,
    title: "Campaign Production",
    desc: "ผลิตแคมเปญครบวงจร ตั้งแต่คอนเซ็ปต์ Short Video จนถึงเผยแพร่",
  },
];

/* ===== Pricing: Marketing Packages ===== */
export type MarketingPackage = {
  name: string;
  startingPrice: number;
  desc: string;
  points: string[];
  featured?: boolean;
  isMarketplace?: boolean;
};

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    name: "Boost",
    startingPrice: 8900,
    desc: "เริ่มต้นทำการตลาดอย่างมีระบบ เหมาะกับธุรกิจที่เพิ่งเริ่ม",
    points: [
      "Facebook + Instagram Ads (1 Brand)",
      "Artwork + Caption 8 ชิ้น/เดือน",
      "Content Calendar",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Scale",
    startingPrice: 12900,
    desc: "สเกลหลายช่องทาง เหมาะกับธุรกิจที่รันอยู่แล้วอยากโต",
    points: [
      "Facebook/IG + Google Search Ads",
      "Artwork + Caption 12 ชิ้น/เดือน",
      "Content Calendar",
      "2 บทความ Blog/SEO",
      "Monthly Performance Report",
    ],
    featured: true,
  },
  {
    name: "Full-Service",
    startingPrice: 19900,
    desc: "เหมือนมีทีมการตลาดเป็นของตัวเอง ดูแลครบวงจร",
    points: [
      "ทุก Paid Channel (FB/IG + Google + TikTok + LINE)",
      "Artwork + Caption 20 ชิ้น/เดือน",
      "Content Calendar",
      "10 บทความ Blog/SEO",
      "Dedicated Marketing Consultant",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Marketplace",
    startingPrice: 8900,
    desc: "ดูแล Shopee & Lazada ครบวงจร เพิ่มยอดขายบน Marketplace",
    points: [
      "Shopee & Lazada Ads Management",
      "Product Listing + SEO Optimization (สูงสุด 20 รายการ)",
      "Flash Sale / Campaign Planning",
      "Shop Page Setup / Decoration",
      "Monthly Sales Report",
    ],
    isMarketplace: true,
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
  desc: string;
  priceValue: number; // THB / month
  features: string[];
};

export const MODULES: Module[] = [
  {
    key: "hubdeal",
    name: "HubDeal",
    icon: KanbanIcon,
    tagline: "ระบบ CRM จัดการ Lead และปิดดีลอย่างมืออาชีพ",
    desc: "จัดการ Lead ทั้งทีมใน Kanban pipeline เดียว เห็นว่าดีลไหนอยู่ขั้นตอนไหน ใครรับผิดชอบ และ KPI ทีมขายเป็นอย่างไร — ปิดการขายได้เร็วขึ้นโดยไม่มีลูกค้าหลุดมือ",
    priceValue: 1990,
    features: [
      "Kanban pipeline ลาก Lead ข้าม stage ได้เลย",
      "ติดตาม Lead ทุกขั้นตอน พร้อม Activity timeline",
      "Assign ทีมขาย + Bulk actions จัดการหลาย Lead พร้อมกัน",
      "รายงาน KPI — Win rate, Sales velocity, Avg deal size",
      "Leaderboard Top sales + Drill-down รายดีล",
    ],
  },
  {
    key: "hubchat",
    name: "HubChat",
    icon: ChatIcon,
    // NOTE: HubChat tagline/description + first features reconstructed
    // (spec was truncated) — verify against intended copy.
    tagline: "Inbox รวมแชททุกช่องทาง ตอบไว ปิดการขาย",
    desc: "รวมแชท LINE และ Facebook มาไว้กล่องเดียว ทีมตอบไว ไม่พลาดข้อความ พร้อม Auto-reply, Broadcast และ Round-robin แจกงานอัตโนมัติ — เปลี่ยนทุกแชทให้เป็นยอดขาย",
    priceValue: 1990,
    features: [
      "Unified Inbox — LINE + Facebook Messenger ในที่เดียว",
      "Auto-reply นอกเวลาทำการ + Keyword trigger",
      "Broadcast ส่งข้อความหาลูกค้าทั้งหมดพร้อมกัน",
      "Round-robin แจกแชทให้ทีมอัตโนมัติ",
      "สร้าง Order และบันทึกรายได้โดยไม่ต้องออกจากแชท",
    ],
  },
  {
    key: "hubstore",
    name: "HubStore",
    icon: StoreIcon,
    tagline: "ระบบจัดการร้านค้า สต็อก และรายรับ-รายจ่าย",
    desc: "ดูสินค้า สต็อก ออเดอร์ และรายรับ-รายจ่ายครบในระบบเดียว รู้สถานะร้านแบบเรียลไทม์ พร้อมแจ้งเตือนเมื่อสต็อกต่ำ และเชื่อมต่อกับ HubDeal + HubChat ได้อัตโนมัติ",
    priceValue: 1990,
    features: [
      "จัดการสินค้าและสต็อกแบบเรียลไทม์",
      "ออเดอร์และการขาย ครบในที่เดียว",
      "รายรับ-รายจ่าย + รายงานยอดขาย",
      "แจ้งเตือนเมื่อสต็อกใกล้หมด",
      "เชื่อม HubDeal + HubChat อัตโนมัติ",
    ],
  },
];

export const baht = (n: number) => `฿${n.toLocaleString("en-US")}`;

export const ANNUAL_DISCOUNT = 0.10; // −10% when billed annually

/* ===== How the SaaS work together ===== */
export type Workflow = {
  combo: ModuleKey[];
  title: string;
  desc: string;
  featured?: boolean;
};

export const WORKFLOWS: Workflow[] = [
  {
    combo: ["hubchat", "hubdeal"],
    title: "HubChat + HubDeal",
    desc: "แชทเข้ามาใน HubChat → สร้าง Lead ใน HubDeal อัตโนมัติ ทีมขายตามต่อและปิดดีลได้ทันที ไม่มีลูกค้าหลุดมือ",
  },
  {
    combo: ["hubdeal", "hubstore"],
    title: "HubDeal + HubStore",
    desc: "ปิดดีลใน HubDeal → สร้าง Order ใน HubStore อัตโนมัติ ตัดสต็อกและบันทึกรายได้ในขั้นตอนเดียว",
  },
  {
    combo: ["hubchat", "hubstore"],
    title: "HubChat + HubStore",
    desc: "ลูกค้าทักมาสั่งซื้อในแชท → สร้าง Order และตัดสต็อกได้ทันทีจากในแชท ไม่ต้องสลับหน้าจอ",
  },
  {
    combo: ["hubchat", "hubdeal", "hubstore"],
    title: "ครบทั้ง 3 SaaS",
    desc: "แชท → Lead → ปิดดีล → Order → ตัดสต็อก → รายงาน ครบทั้งวงจรในระบบเดียว ข้อมูลไหลต่อเนื่องโดยไม่ต้องคีย์ซ้ำ",
    featured: true,
  },
];

/* ===== Bundles (derived from module prices) =====
   Bundle-only discount: 2 SaaS = 5% · 3 SaaS = 10% (5%+5%).
   Stacks with annual billing (−10%) → max −15% / −20%. */
export type Bundle = {
  label: string;
  modules: ModuleKey[];
  bundleDiscount: number; // bundle-only fraction (excludes annual discount)
};

export const BUNDLES: Bundle[] = [
  { label: "HubDeal + HubChat", modules: ["hubdeal", "hubchat"], bundleDiscount: 0.05 },
  { label: "HubDeal + HubStore", modules: ["hubdeal", "hubstore"], bundleDiscount: 0.05 },
  { label: "HubChat + HubStore", modules: ["hubchat", "hubstore"], bundleDiscount: 0.05 },
  {
    label: "ครบทั้ง 3 SaaS",
    modules: ["hubdeal", "hubchat", "hubstore"],
    bundleDiscount: 0.10, // 5%+5% cumulative
  },
];

export function bundleRows(annual = false) {
  const billingDiscount = annual ? ANNUAL_DISCOUNT : 0;
  const priceOf = (k: ModuleKey) =>
    MODULES.find((m) => m.key === k)!.priceValue;
  return BUNDLES.map((b) => {
    const normal = b.modules.reduce((s, k) => s + priceOf(k), 0);
    const totalDiscount = billingDiscount + b.bundleDiscount;
    const special = Math.round(normal * (1 - totalDiscount));
    return {
      label: b.label,
      normal,
      discountPct: Math.round(totalDiscount * 100),
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
    q: "ส่วนลดรายปีและแพ็คเกจคิดยังไง?",
    a: "ซื้อรายปีลด 10% ทันที และยังได้ส่วนลด Bundle เพิ่มอีก — เลือก 2 SaaS +5% หรือครบ 3 SaaS +10% รวมสูงสุดลด 20% จากราคาปกติ",
  },
  {
    q: "มีค่าติดตั้งหรือสัญญาผูกมัดไหม?",
    a: "ไม่มีค่าติดตั้ง รายเดือนยกเลิกได้ทุกเมื่อ รายปีชำระล่วงหน้าและได้ส่วนลด 10%",
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
