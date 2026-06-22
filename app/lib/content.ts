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

/* ===== Services: AI Solution ===== */
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
  {
    icon: SparkleIcon,
    title: "AI Chatbot (LLM-Powered)",
    desc: "แชทบอทอัจฉริยะที่ขับเคลื่อนด้วย Large Language Model — ตอบคำถามซับซ้อน เรียนรู้ Context และ Escalate หาทีมได้อัตโนมัติ",
  },
  {
    icon: LayersIcon,
    title: "System Integration & API",
    desc: "เชื่อมต่อระบบที่มีอยู่กับ Platform ต่างๆ ผ่าน REST API และ Webhook — ให้ข้อมูลไหลต่อเนื่องโดยไม่ต้องคีย์ซ้ำ",
  },
  {
    icon: RocketIcon,
    title: "LINE OA Automation",
    desc: "ระบบอัตโนมัติสำหรับ LINE Official Account — Broadcast, Rich Menu, Member Card และ Loyalty Program ตามโจทย์ธุรกิจ",
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

/* ===== Blog ===== */
export type BlogSection = { h?: string; p: string };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedDate: string; // ISO 8601 for structured data
  category: string;
  coverImage?: string; // path relative to /public
  content: BlogSection[];
  serviceLinks?: { href: string; label: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scale-sme-with-crm",
    title: "5 สัญญาณว่าธุรกิจ SME ของคุณถึงเวลาใช้ CRM",
    excerpt:
      "ถ้ายังจด Lead ใน Excel หรือลืมตามลูกค้าอยู่บ่อยๆ บทความนี้ช่วยให้คุณรู้ว่าเมื่อไหร่ควรขยับมาใช้ระบบ",
    date: "12 มิถุนายน 2026",
    publishedDate: "2026-06-12",
    category: "Sales",
    serviceLinks: [
      { href: "/products#hubdeal", label: "ดู HubDeal CRM" },
      { href: "/pricing/saas", label: "ดูราคา Hubly SaaS" },
    ],
    content: [
      {
        p: "ธุรกิจส่วนใหญ่เริ่มต้นด้วย Excel Spreadsheet หรือ LINE Group — และมันก็ทำงานได้ดีในช่วงแรก แต่เมื่อทีมขยายและ Lead เข้ามาจากหลายช่องทาง สิ่งที่เคยเพียงพอกลับกลายเป็นอุปสรรค นี่คือ 5 สัญญาณที่บอกว่าธุรกิจของคุณพร้อมก้าวไปสู่ระบบ CRM แล้ว",
      },
      {
        h: "1. ลืมติดตาม Lead อยู่บ่อยๆ",
        p: "เมื่อ Lead เข้ามาแต่ไม่ได้รับการ Follow-up ทันเวลา — นั่นคือโอกาสที่หายไป งานวิจัยพบว่าการติดต่อ Lead ภายใน 5 นาทีแรกเพิ่มโอกาสปิดการขายสูงถึง 21 เท่า แต่ถ้าทีมคุณยังจด Lead ใน Excel หรือจำเอาไว้ในหัว โอกาสเหล่านั้นจะหลุดมือไปทุกวัน ระบบ CRM จะแจ้งเตือนอัตโนมัติให้ทีมติดตาม Lead ตามเวลาที่กำหนด",
      },
      {
        h: "2. ทีมไม่รู้ว่าใครดูแล Lead คนไหน",
        p: "เมื่อทีมขายมีหลายคน คำถามที่พบบ่อยคือ \"Lead คนนี้ใครรับอยู่?\" หรือแย่กว่านั้น — ลูกค้าถูกติดต่อซ้ำจากหลายคน ทำให้ดูไม่เป็นมืออาชีพ CRM ช่วยให้มองเห็น Pipeline ทั้งหมดของทีม รู้ว่า Lead แต่ละรายอยู่ขั้นตอนไหน และใครรับผิดชอบ",
      },
      {
        h: "3. ไม่รู้ว่าดีลไหนใกล้ปิดหรือเป็นแค่แนวโน้ม",
        p: "ผู้จัดการฝ่ายขายต้องเดินไปถามทีมทีละคนว่า \"เดือนนี้จะปิดได้เท่าไหร่?\" — นั่นเป็นสัญญาณว่าขาดข้อมูลแบบ Real-time CRM ช่วยให้เห็น Forecast ยอดขาย Win Rate และ Avg Deal Size แบบทันทีโดยไม่ต้องประชุมรายงาน",
      },
      {
        h: "4. รายงานผลการขายทำนานและไม่ถูกต้อง",
        p: "ถ้าทุกสิ้นเดือนทีมต้องใช้เวลาหลายชั่วโมงรวมข้อมูลจาก Excel หลายไฟล์เพื่อทำ Sales Report — นั่นคือเวลาที่สูญเสียไปโดยเปล่าประโยชน์ และตัวเลขก็มักมีข้อผิดพลาด ระบบ CRM สร้างรายงานได้อัตโนมัติทันที พร้อม Dashboard ที่ดูได้ตลอดเวลา",
      },
      {
        h: "5. ทีมโตขึ้นแต่งานยิ่งวุ่นขึ้น",
        p: "ถ้าการเพิ่มคนในทีมขายไม่ได้ทำให้ยอดขายโตตาม แต่กลับสร้างความวุ่นวายมากขึ้น — นั่นคือปัญหาของระบบ ไม่ใช่คน CRM ช่วยให้ Onboard พนักงานใหม่ได้เร็วขึ้น เพราะทุก Lead มีประวัติและ Context ครบในที่เดียว",
      },
      {
        p: "ถ้าคุณเจอสัญญาณ 2-3 ข้อข้างต้น ธุรกิจของคุณพร้อมสำหรับ CRM แล้ว HubDeal จาก Hubly SaaS ออกแบบมาเฉพาะสำหรับ SME ไทย เริ่มต้นได้ทันที ไม่ต้องติดตั้งซับซ้อน ทดลองใช้ฟรีได้เลยที่ app.hublycompany.com",
      },
    ],
  },
  {
    slug: "facebook-ads-budget",
    title: "ตั้งงบ Facebook Ads เท่าไหร่ดี สำหรับธุรกิจเพิ่งเริ่ม",
    excerpt:
      "เจาะวิธีคิดงบโฆษณาให้คุ้มค่า พร้อมตัวอย่างการกระจายงบระหว่างทดสอบและสเกล",
    date: "5 มิถุนายน 2026",
    publishedDate: "2026-06-05",
    category: "Marketing",
    serviceLinks: [
      { href: "/services/marketing", label: "ดูบริการ Marketing Agency" },
      { href: "/pricing/marketing", label: "ดูแพ็กเกจและราคา" },
    ],
    content: [
      {
        p: "คำถามที่ทีม HublyCompany ได้รับบ่อยที่สุดจากลูกค้า SME คือ \"ผมควรใช้งบโฆษณา Facebook เท่าไหร่?\" คำตอบสั้นคือ — ขึ้นอยู่กับเป้าหมาย แต่บทความนี้จะช่วยให้คุณคิดตัวเลขได้อย่างมีหลักการ",
      },
      {
        h: "ทำไมไม่มีตัวเลขตายตัว",
        p: "Facebook Ads ทำงานแบบ Auction — ราคาต่อผลลัพธ์ขึ้นอยู่กับกลุ่มเป้าหมาย ความแข็งแกร่งของ Creative และช่วงเวลา ธุรกิจที่ขาย Product ราคา 3,000 บาท ต้องคิดงบต่างกับธุรกิจที่ขาย Service ราคา 50,000 บาทโดยสิ้นเชิง",
      },
      {
        h: "Phase 1: งบทดสอบ (Test Phase)",
        p: "สำหรับธุรกิจที่เพิ่งเริ่มยิงโฆษณา แนะนำงบ 5,000–10,000 บาท/เดือน ในช่วง 1-2 เดือนแรก โดยเป้าหมายไม่ใช่ยอดขาย แต่คือ \"เรียนรู้\" — เรียนรู้ว่า Creative แบบไหนที่ผู้คนคลิก Audience กลุ่มไหนตอบสนอง และ Cost per Result ของธุรกิจคุณอยู่ที่เท่าไหร่ ข้อมูลเหล่านี้มีค่ามากกว่าการจ่ายแพงเพื่อ Conversion โดยไม่รู้ว่าอะไรทำงาน",
      },
      {
        h: "Phase 2: งบสเกล (Scale Phase)",
        p: "เมื่อคุณรู้แล้วว่า Creative และ Audience ไหนทำงาน ให้เพิ่มงบเป็น 2-3 เท่า โดยเน้นไปที่สิ่งที่พิสูจน์แล้วว่าได้ผล กฎทั่วไปคืออย่าเพิ่มงบเกิน 20-30% ต่อครั้ง เพราะ Algorithm ต้อง Learning อีกรอบก่อนที่ประสิทธิภาพจะกลับมาเท่าเดิม",
      },
      {
        h: "คิดจาก Target กลับมา",
        p: "วิธีคิดงบที่ดีที่สุดคือย้อนกลับจากเป้าหมาย เช่น คุณต้องการลูกค้าใหม่ 10 คน/เดือน ถ้า Conversion Rate อยู่ที่ 5% คุณต้องการ Lead 200 คน ถ้า Cost per Lead อยู่ที่ 150 บาท (ค่าเฉลี่ย B2C ไทย) งบที่ต้องใช้คือ 30,000 บาท/เดือน ตัวเลขนี้อาจดูสูง แต่ถ้า LTV ของลูกค้าคุณสูงพอ ROI ก็จะดีตามมาเอง",
      },
      {
        p: "ไม่มีงบที่ \"ถูก\" หรือ \"ผิด\" — มีแต่งบที่ตั้งมาจากข้อมูลจริงกับงบที่ตั้งมาจากความรู้สึก ถ้าคุณต้องการทีมที่ช่วยวางแผนงบและจัดการ Ads ให้คุ้มค่า ทีม Marketing Agency ของ HublyCompany พร้อมช่วยเสมอ",
      },
    ],
  },
  {
    slug: "unified-inbox-line-fb",
    title: "รวมแชท LINE และ Facebook ไว้ที่เดียว ช่วยปิดการขายได้จริงไหม",
    excerpt:
      "เมื่อทุกข้อความอยู่ใน inbox เดียว ทีมตอบไวขึ้น ไม่มีแชทตกหล่น และเปลี่ยนเป็นยอดขายได้มากขึ้น",
    date: "28 พฤษภาคม 2026",
    publishedDate: "2026-05-28",
    category: "Product",
    serviceLinks: [
      { href: "/products#hubchat", label: "ดู HubChat" },
      { href: "/pricing/saas", label: "ดูราคา Hubly SaaS" },
    ],
    content: [
      {
        p: "ลองนึกภาพนี้ — ลูกค้าทักมาใน Facebook Messenger แต่พนักงานเปิดหน้าต่าง LINE อยู่ กว่าจะสลับมาตอบก็ผ่านไป 3 ชั่วโมง ลูกค้าไปซื้อที่อื่นแล้ว นี่คือปัญหาที่ SME ไทยเผชิญทุกวัน และ Unified Inbox คือคำตอบ",
      },
      {
        h: "ต้นทุนที่แท้จริงของการแยกแอป",
        p: "การที่ทีมต้องสลับระหว่าง LINE Business Account, Facebook Page Inbox และช่องทางอื่นๆ ไม่ได้แค่ \"ไม่สะดวก\" แต่มีต้นทุนจริง งานวิจัยพบว่าการตอบแชทช้าเกิน 1 ชั่วโมงทำให้โอกาสปิดการขายลดลงกว่า 60% นอกจากนี้ยังเสี่ยงกับแชทตกหล่นเมื่อทีมลืมเช็ค Notification บางช่องทาง",
      },
      {
        h: "Unified Inbox ทำงานอย่างไร",
        p: "แทนที่จะเปิดหลายแอป ทีมงานเห็นทุกแชทจาก LINE และ Facebook ในที่เดียว ไม่ว่าลูกค้าจะทักจากช่องทางไหน ข้อความจะปรากฏใน Inbox เดียวกัน พร้อม Context ประวัติการสนทนาที่ผ่านมา ทีมสลับกันตอบได้โดยเห็น Handover อย่างชัดเจน ไม่มีข้อความซ้ำซ้อนหรือตอบผิดคน",
      },
      {
        h: "สิ่งที่เกิดขึ้นจริงกับทีมที่เปลี่ยนมาใช้",
        p: "ลูกค้าของ HublyCompany ที่ใช้ HubChat รายงานว่า Response Time ลดลงเฉลี่ย 70% ในเดือนแรก เพราะทีมไม่ต้องสลับแอป และ Round-robin จะแจกแชทให้ผู้รับผิดชอบโดยอัตโนมัติ นอกจากนี้ Auto-reply ช่วยให้ลูกค้าได้รับการตอบกลับทันทีแม้นอกเวลาทำการ",
      },
      {
        h: "แต่ช่วยปิดการขายได้จริงไหม",
        p: "ใช่ — แต่ไม่ใช่เพราะมันเป็น \"กล่องเดียว\" แต่เพราะมันทำให้ทีมมีเวลาและ Context ที่จะทำงานได้ดีขึ้น เมื่อพนักงานเห็นว่าลูกค้ารายนี้เคยถามเรื่องอะไร ซื้ออะไรไปแล้ว และสถานะ Order เป็นอย่างไร การ Up-sell และ Cross-sell ทำได้ง่ายขึ้นมาก",
      },
      {
        p: "HubChat จาก Hubly SaaS รวม LINE + Facebook ไว้ในที่เดียว พร้อม Auto-reply, Broadcast และ Round-robin แจกงานอัตโนมัติ ทดลองใช้ฟรีได้ที่ app.hublycompany.com",
      },
    ],
  },
  {
    slug: "ai-website-codebase",
    title: "เว็บไซต์เขียนด้วยโค้ดจริง vs Template ต่างกันยังไง",
    excerpt:
      "ทำไมเว็บที่ build ด้วย codebase ถึงเร็วกว่า ปรับแต่งได้อิสระกว่า และดีต่อ SEO ในระยะยาว",
    date: "20 พฤษภาคม 2026",
    publishedDate: "2026-05-20",
    category: "Tech",
    serviceLinks: [
      { href: "/services/ai-solution", label: "ดูบริการ AI Solution" },
      { href: "/pricing/ai-solution", label: "ดูราคา AI Solution" },
    ],
    content: [
      {
        p: "ในยุคที่ใครก็ทำเว็บได้ใน 5 นาทีด้วย Template สำเร็จรูป คำถามคือ — แล้วทำไมธุรกิจจำนวนมากถึงยังเลือกให้นักพัฒนาเขียน Codebase เอง? บทความนี้จะเจาะเปรียบเทียบทั้งสองแบบอย่างตรงไปตรงมา",
      },
      {
        h: "Template คืออะไร และดีตรงไหน",
        p: "Template หมายถึงเว็บไซต์สำเร็จรูปที่สร้างบน Platform อย่าง Wix, Squarespace, WordPress + Elementor หรือ Shopify ข้อดีชัดเจน — เร็ว ราคาถูก และใช้งานได้เลยโดยไม่ต้องมีความรู้ด้าน Code เหมาะมากสำหรับธุรกิจที่เพิ่งเริ่มต้นและต้องการ Online Presence อย่างรวดเร็ว",
      },
      {
        h: "Template มีข้อจำกัดอะไร",
        p: "ปัญหาของ Template มักเริ่มชัดขึ้นเมื่อธุรกิจโตขึ้น ได้แก่ ความเร็ว — Template มักโหลด Code และ Plugin ที่คุณไม่ได้ใช้จำนวนมาก ทำให้ Page Speed ช้า ซึ่งกระทบทั้ง User Experience และ Google Ranking นอกจากนี้ยังมีข้อจำกัดการ Customize ที่ทำให้เว็บดูเหมือนกันหมด และค่าใช้จ่าย Subscription ที่บวกรวมแล้วสูงกว่าที่คิด",
      },
      {
        h: "Codebase คืออะไร และดีกว่าตรงไหน",
        p: "เว็บที่เขียนด้วย Codebase หมายถึงนักพัฒนาเขียน Code ตั้งแต่ต้น (หรือใช้ Framework อย่าง Next.js แต่ไม่ใช่ Template สำเร็จรูป) ข้อได้เปรียบหลักคือ ความเร็ว — โหลดเฉพาะสิ่งที่จำเป็น ทำให้ Core Web Vitals ดีกว่า และ Google ให้คะแนน SEO สูงกว่า ความยืดหยุ่น — ออกแบบและ Function ได้ตามต้องการ ไม่มีข้อจำกัดจาก Platform และความเป็นเจ้าของ — Code เป็นของคุณ ไม่ขึ้นกับ Subscription ของ Platform ใดๆ",
      },
      {
        h: "Built by Claude AI หมายความว่าอะไร",
        p: "HublyCompany ใช้ Claude AI ในกระบวนการพัฒนาเว็บ ทำให้สร้างเว็บคุณภาพสูงได้เร็วขึ้นโดยไม่ลดคุณภาพ Code นักพัฒนายังคง Review และรับผิดชอบทุก Line แต่ AI ช่วย Accelerate งาน Boilerplate และ Testing ทำให้ราคาสมเหตุสมผลกว่าการจ้าง Agency ทั่วไปที่ไม่ใช้ AI",
      },
      {
        p: "สรุปง่ายๆ — Template เหมาะกับธุรกิจที่ต้องการเริ่มเร็วและงบจำกัด Codebase เหมาะกับธุรกิจที่ต้องการ Performance, SEO และความยืดหยุ่นระยะยาว ถ้าคุณอยากรู้ว่าแบบไหนเหมาะกับธุรกิจของคุณ ปรึกษาทีม AI Solution ของ HublyCompany ได้ฟรีที่หน้า Contact",
      },
    ],
  },
  {
    slug: "loyalty-points-system",
    title: "ระบบสะสมแต้มคืออะไร และทำไมร้านค้าออนไลน์ถึงขาดไม่ได้",
    excerpt:
      "ระบบสะสมแต้มไม่ใช่แค่ฟีเจอร์เสริม — มันคือเครื่องมือรักษาลูกค้าเดิมและเพิ่มยอดซื้อซ้ำได้จริง",
    date: "18 มิถุนายน 2026",
    publishedDate: "2026-06-18",
    category: "E-Commerce",
    coverImage: "/blog/blog-loyalty-points.jpg",
    serviceLinks: [
      { href: "/products#hubstore", label: "ดู HubStore" },
      { href: "/pricing/saas", label: "ดูราคา Hubly SaaS" },
    ],
    content: [
      {
        p: "ถ้าคุณเคยซื้อกาแฟแล้วได้ประทับตราบนบัตร หรือช้อปออนไลน์แล้วเห็นแต้มสะสมอยู่ในบัญชี — นั่นคือระบบสะสมแต้มในรูปแบบที่คุ้นเคยที่สุด แต่สำหรับธุรกิจออนไลน์ของ SME ไทย ระบบนี้มีความสำคัญมากกว่าที่หลายคนคิด",
      },
      {
        h: "ระบบสะสมแต้มคืออะไร",
        p: "ระบบสะสมแต้ม (Points System) คือกลไกที่ให้รางวัลลูกค้าทุกครั้งที่ซื้อสินค้าหรือใช้บริการ โดยแปลงมูลค่าการซื้อเป็น 'แต้ม' ที่สามารถสะสมและนำมาแลกส่วนลด ของรางวัล หรือสิทธิพิเศษต่างๆ ได้ในภายหลัง ตัวอย่างเช่น ซื้อสินค้า ฿100 ได้ 1 แต้ม สะสมครบ 100 แต้มแลกส่วนลด ฿50 หรือแลกของแถม",
      },
      {
        h: "ทำไมระบบสะสมแต้มถึงสำคัญสำหรับ SME",
        p: "การหาลูกค้าใหม่มีต้นทุนสูงกว่าการรักษาลูกค้าเดิมถึง 5-7 เท่า ระบบสะสมแต้มจึงเป็นเครื่องมือที่คุ้มค่าที่สุดในการสร้าง Repeat Purchase เมื่อลูกค้ารู้ว่าตัวเองมีแต้มสะสมอยู่ในร้านนี้ โอกาสที่เขาจะกลับมาซื้อซ้ำสูงกว่าร้านที่ไม่มีระบบนี้อย่างมีนัยสำคัญ",
      },
      {
        h: "ประเภทของระบบสะสมแต้มที่นิยม",
        p: "มีหลายรูปแบบให้เลือกใช้ตามลักษณะธุรกิจ ได้แก่ แต้มตามยอดซื้อ (1 บาท = X แต้ม) เหมาะกับสินค้าราคาหลากหลาย, แต้มตามจำนวนครั้ง (ซื้อครบ N ครั้งได้ของแถม) เหมาะกับร้านอาหารหรือบริการที่ซื้อบ่อย, และแต้มพิเศษจากกิจกรรม (รีวิวสินค้า แชร์โพสต์ วันเกิด) ที่ช่วยสร้าง Engagement นอกจากการซื้อ",
      },
      {
        h: "ข้อผิดพลาดที่ร้านค้ามักทำ",
        p: "ปัญหาหลักของหลายร้านคือ ออกแบบระบบแต้มที่ซับซ้อนเกินไปจนลูกค้าไม่เข้าใจ, ตั้งเงื่อนไขการแลกแต้มที่ยากเกินไปจนลูกค้าไม่มีแรงจูงใจสะสม, หรือไม่มีระบบแจ้งเตือนให้ลูกค้ารู้ว่าตัวเองมีแต้มเท่าไหร่ HubStore ช่วยแก้ปัญหาเหล่านี้ด้วยระบบที่ตั้งค่าง่าย โปร่งใส และแจ้งเตือนลูกค้าได้อัตโนมัติ",
      },
      {
        p: "ระบบสะสมแต้มในยุคดิจิทัลไม่ได้ซับซ้อนหรือมีแค่สำหรับแบรนด์ใหญ่อีกต่อไป HubStore จาก Hubly SaaS มีระบบ Loyalty Program พร้อมใช้สำหรับ SME ไทย ทดลองใช้ฟรีได้ที่ app.hublycompany.com",
      },
    ],
  },
  {
    slug: "loyalty-program-promotion",
    title: "Loyalty Program กับการแลกโปรโมชั่น: วางระบบยังไงให้ลูกค้ากลับมาซื้อซ้ำ",
    excerpt:
      "ออกแบบ Loyalty Program ที่ดีไม่ใช่แค่แจกแต้ม แต่ต้องสร้างแรงจูงใจให้ลูกค้าอยากกลับมาและซื้อมากขึ้น",
    date: "15 มิถุนายน 2026",
    publishedDate: "2026-06-15",
    category: "E-Commerce",
    coverImage: "/blog/blog-loyalty-promotion.jpg",
    serviceLinks: [
      { href: "/products#hubstore", label: "ดู HubStore" },
      { href: "/pricing/saas", label: "ดูราคา Hubly SaaS" },
    ],
    content: [
      {
        p: "Loyalty Program ที่ดีไม่ใช่แค่การแจกส่วนลดให้ลูกค้า — มันคือการสร้างความสัมพันธ์ระยะยาวที่ทำให้ลูกค้าเลือกร้านคุณก่อนเสมอ บทความนี้จะพาคุณเข้าใจหลักการออกแบบ Loyalty Program ให้ได้ผลจริง",
      },
      {
        h: "ความแตกต่างระหว่าง Loyalty Program กับโปรโมชั่นทั่วไป",
        p: "โปรโมชั่นทั่วไป (เช่น ลด 20% วันนี้วันเดียว) กระตุ้นการซื้อในระยะสั้นแต่ไม่สร้างความผูกพัน ลูกค้าซื้อเพราะราคา ไม่ใช่เพราะแบรนด์ ในขณะที่ Loyalty Program สร้าง 'ต้นทุนในการเปลี่ยนใจ' — ลูกค้าที่มีแต้มสะสมอยู่จะไม่อยากไปซื้อที่อื่นเพราะรู้สึกว่าเสียของที่สะสมมา",
      },
      {
        h: "วิธีออกแบบการแลกโปรโมชั่นให้น่าสนใจ",
        p: "กุญแจสำคัญคือ 'ความรู้สึกคุ้มค่า' ไม่ใช่มูลค่าจริง งานวิจัยพบว่าลูกค้าจะพึงพอใจมากกว่าเมื่อได้รับ 'ของแถม' มากกว่าการได้รับ 'ส่วนลดมูลค่าเท่ากัน' ดังนั้นการออกแบบรางวัลเป็นสินค้าแถม, ประสบการณ์พิเศษ (เช่น ส่งฟรี) หรือ Early Access จะได้ผลดีกว่าการลดราคาล้วนๆ",
      },
      {
        h: "โปรโมชั่นพิเศษสำหรับสมาชิก Loyalty",
        p: "นอกจากการแลกแต้ม ลูกค้าในโปรแกรม Loyalty ควรได้รับสิทธิพิเศษเพิ่มเติมที่ลูกค้าทั่วไปไม่มี เช่น Flash Sale พิเศษสำหรับสมาชิกก่อน 24 ชั่วโมง, วันเกิดรับส่วนลดพิเศษ, Double Points ในช่วง Campaign และการแจ้งเตือนสินค้าใหม่ก่อนใคร สิ่งเหล่านี้ทำให้ลูกค้ารู้สึกว่าการเป็นสมาชิกมีคุณค่าจริง",
      },
      {
        h: "วัดผล Loyalty Program อย่างไร",
        p: "ตัวชี้วัดหลักที่ควรติดตามคือ Repeat Purchase Rate (% ลูกค้าที่กลับมาซื้อซ้ำ), Customer Lifetime Value (CLV), และ Redemption Rate (% สมาชิกที่ใช้แต้มจริง) ถ้า Redemption Rate ต่ำกว่า 20% แสดงว่าโปรแกรมไม่น่าสนใจพอหรือเงื่อนไขยากเกินไป",
      },
      {
        p: "การวาง Loyalty Program ที่ดีต้องการระบบหลังบ้านที่รองรับ ทั้งการติดตามแต้ม การแจ้งเตือนอัตโนมัติ และรายงานที่วิเคราะห์ได้ HubStore จาก Hubly SaaS รองรับทั้งหมดนี้ในระบบเดียว ทดลองใช้ฟรีที่ app.hublycompany.com",
      },
    ],
  },
  {
    slug: "member-tier-system",
    title: "ระบบ Tier สมาชิก: Silver, Gold, Platinum ช่วยให้ร้านขายได้มากขึ้นจริงไหม",
    excerpt:
      "ระบบ Tier สมาชิกสร้างแรงจูงใจให้ลูกค้าซื้อมากขึ้นเพื่อเลื่อนระดับ — แต่ต้องออกแบบให้ถูกต้องจึงจะได้ผล",
    date: "10 มิถุนายน 2026",
    publishedDate: "2026-06-10",
    category: "E-Commerce",
    coverImage: "/blog/blog-member-tier.jpg",
    serviceLinks: [
      { href: "/products#hubstore", label: "ดู HubStore" },
      { href: "/pricing/saas", label: "ดูราคา Hubly SaaS" },
    ],
    content: [
      {
        p: "เคยสังเกตไหมว่าทำไมสายการบินถึงใช้ระบบ Silver-Gold-Platinum มาหลายสิบปีโดยไม่เลิก? เพราะมันทำงานได้ผล ระบบ Tier สมาชิกสร้างพฤติกรรมที่ธุรกิจต้องการ — ลูกค้าซื้อมากขึ้นเพื่อรักษาระดับและเลื่อนขั้น",
      },
      {
        h: "ระบบ Tier คืออะไรและทำงานอย่างไร",
        p: "ระบบ Tier แบ่งลูกค้าออกเป็นระดับต่างๆ ตามยอดซื้อสะสมหรือความถี่ในการซื้อ เช่น ซื้อครบ ฿5,000 = Silver, ฿15,000 = Gold, ฿30,000 = Platinum โดยแต่ละระดับได้รับสิทธิประโยชน์ที่ดีขึ้นตามลำดับ กลไกนี้สร้าง 2 แรงจูงใจพร้อมกัน — อยากเลื่อนขึ้น Tier สูงกว่า และไม่อยาก 'ตก' จาก Tier ที่มีอยู่",
      },
      {
        h: "สิทธิประโยชน์แต่ละ Tier ควรออกแบบอย่างไร",
        p: "ความแตกต่างระหว่าง Tier ต้องชัดเจนและรู้สึกได้จริง ไม่ใช่แค่ตัวเลขบนกระดาษ ตัวอย่างที่ได้ผล เช่น Silver: ส่งฟรีเมื่อซื้อครบ ฿500, Gold: ส่งฟรีทุกออเดอร์ + แต้ม 2 เท่า, Platinum: ส่งฟรี + แต้ม 3 เท่า + Early Access สินค้าใหม่ + บริการ Priority Support ความต่างที่ลูกค้า 'รู้สึก' ได้ในชีวิตประจำวันสำคัญกว่าตัวเลข % บนหน้ากระดาษ",
      },
      {
        h: "ข้อผิดพลาดในการออกแบบระบบ Tier",
        p: "ปัญหาที่พบบ่อย ได้แก่ ตั้งเงื่อนไขเลื่อน Tier สูงเกินไปจนลูกค้าหมดกำลังใจ, ให้สิทธิประโยชน์แต่ละ Tier ต่างกันน้อยเกินไปจนไม่มีแรงจูงใจ, ไม่มีระบบแจ้งเตือนว่าอีกเท่าไหร่จะเลื่อนระดับ (นี่คือฟีเจอร์สำคัญมาก) และไม่มี Grace Period ให้ลูกค้าที่ใกล้ตก Tier มีโอกาสรักษาระดับ",
      },
      {
        h: "เมื่อไหร่ควรเริ่มใช้ระบบ Tier",
        p: "ระบบ Tier เหมาะกับธุรกิจที่มีฐานลูกค้าประจำอยู่แล้วอย่างน้อย 200-300 คน และลูกค้ามีรูปแบบการซื้อซ้ำที่ชัดเจน ถ้าธุรกิจคุณยังอยู่ในช่วงเริ่มต้น อาจเริ่มจากระบบสะสมแต้มธรรมดาก่อน แล้วค่อยพัฒนาเป็น Tier เมื่อฐานลูกค้าโตขึ้น",
      },
      {
        p: "ระบบ Tier ที่ดีต้องการ Backend ที่ติดตามยอดซื้อ คำนวณ Tier อัตโนมัติ แจ้งเตือนลูกค้า และสร้างรายงาน HubStore จาก Hubly SaaS รองรับทั้งหมดนี้โดยไม่ต้องพัฒนาระบบเอง ทดลองใช้ฟรีที่ app.hublycompany.com",
      },
    ],
  },
];
