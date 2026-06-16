import type { ComponentType, SVGProps } from "react";
import {
  KanbanIcon,
  ChatIcon,
  StoreIcon,
  TimelineIcon,
  ChartIcon,
  TagIcon,
  PaperclipIcon,
  BroadcastIcon,
  UsersIcon,
  ClockIcon,
  BoxIcon,
  ReceiptIcon,
  BellIcon,
  PlugIcon,
} from "../components/icons";
import type { ModuleKey } from "./site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type ModuleCard = {
  key: ModuleKey;
  name: string;
  tagline: string;
  icon: Icon;
  bullets: string[];
  price: string;
  priceNote?: string;
};

/* Landing-page module cards */
export const MODULE_CARDS: ModuleCard[] = [
  {
    key: "hubdeal",
    name: "HubDeal",
    tagline: "CRM สำหรับทีมขาย",
    icon: KanbanIcon,
    bullets: [
      "Kanban Pipeline จัดการ Lead ไม่จำกัด",
      "Activity timeline & KPI dashboard",
      "Tasks, reports, file attachments",
    ],
    price: "฿2,490",
  },
  {
    key: "hubchat",
    name: "HubChat",
    tagline: "Inbox รวม LINE / Facebook",
    icon: ChatIcon,
    bullets: [
      "รับแชทจากทุกช่องทางในที่เดียว",
      "Auto-create Lead ใน HubDeal อัตโนมัติ",
      "Broadcast & quick replies & round-robin",
    ],
    price: "฿1,990",
  },
  {
    key: "hubstore",
    name: "HubStore",
    tagline: "จัดการร้านค้า & สต็อก",
    icon: StoreIcon,
    bullets: [
      "จัดการสินค้าและสต็อก",
      "ออเดอร์และการขาย",
      "รายรับ-รายจ่าย & รายงาน",
      "แจ้งเตือนสต็อก",
    ],
    price: "฿1,990",
  },
];

/* Pricing-page detailed feature lists */
export const PRICING_FEATURES: Record<ModuleKey, string[]> = {
  hubdeal: [
    "Kanban Pipeline ไม่จำกัด Lead",
    "Person & Contact management",
    "Activity timeline & events",
    "Tasks & Subtasks",
    "Reports & KPI dashboard",
    "Custom stages, sources, tags",
    "File attachments 5 GB",
    "รองรับทีมทุกขนาด",
  ],
  hubchat: [
    "Inbox รวมทุกช่องทาง",
    "LINE Official Account",
    "Facebook Messenger",
    "Auto-create Lead ใน HubDeal",
    "Quick replies & templates",
    "Broadcast ส่งข้อความหาลูกค้าทุกคน",
    "Team assignment & round-robin",
    "Message history ไม่จำกัด",
  ],
  hubstore: [
    "รายรับ-รายจ่ายรายวัน",
    "Order management",
    "Stock เข้า/ออก",
    "สต็อกต่ำ alert",
    "รายงานยอดขาย",
    "สร้าง Order จากแชท HubChat",
    "เชื่อม Won Deal จาก HubDeal",
    "Multi-location (เร็วๆ นี้)",
  ],
};

/* Features page — grouped */
export type Feature = { icon: Icon; title: string; desc: string };
export type FeatureGroup = {
  key: ModuleKey;
  name: string;
  heading: string;
  icon: Icon;
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    key: "hubdeal",
    name: "HubDeal",
    heading: "CRM สำหรับทีมขาย",
    icon: KanbanIcon,
    features: [
      {
        icon: KanbanIcon,
        title: "Kanban Pipeline",
        desc: "ลาก-วาง Lead ข้าม stage เห็นภาพรวมดีลทั้งทีมในที่เดียว",
      },
      {
        icon: TimelineIcon,
        title: "Activity Timeline",
        desc: "ทุกการโทร นัดหมาย และโน้ต ถูกบันทึกเรียงตามเวลาอัตโนมัติ",
      },
      {
        icon: ChartIcon,
        title: "Reports & KPI",
        desc: "Dashboard ยอดขาย อัตราปิดดีล และ performance รายทีม",
      },
      {
        icon: TagIcon,
        title: "Custom Stages & Tags",
        desc: "ปรับ pipeline, sources และ tags ให้ตรงกับกระบวนการขายของคุณ",
      },
      {
        icon: PaperclipIcon,
        title: "File Attachments",
        desc: "แนบไฟล์ รูป และ PDF ใน Lead ได้เลย พื้นที่ 5 GB",
      },
      {
        icon: UsersIcon,
        title: "Tasks & Subtasks",
        desc: "มอบหมายงานติดตามลูกค้า พร้อมกำหนดเวลาและผู้รับผิดชอบ",
      },
    ],
  },
  {
    key: "hubchat",
    name: "HubChat",
    heading: "Inbox รวมทุกช่องทาง",
    icon: ChatIcon,
    features: [
      {
        icon: ChatIcon,
        title: "Unified Inbox",
        desc: "LINE + Facebook ในหน้าเดียว ไม่ต้องสลับ app ให้วุ่นวาย",
      },
      {
        icon: BroadcastIcon,
        title: "Broadcast",
        desc: "ส่งข้อความหาลูกค้าทุกคนพร้อมกันได้ใน 1 คลิก",
      },
      {
        icon: TagIcon,
        title: "Quick Replies & Templates",
        desc: "ตอบเร็วด้วย template ที่ตั้งไว้ ลดเวลาพิมพ์ซ้ำ",
      },
      {
        icon: UsersIcon,
        title: "Round-Robin Assignment",
        desc: "แจกงานให้ทีม agent ทั่วถึงอัตโนมัติ ไม่มีแชทตกหล่น",
      },
      {
        icon: ClockIcon,
        title: "Working Hours & Auto-reply",
        desc: "ตั้งเวลาทำการ ตอบลูกค้าอัตโนมัตินอกเวลาทำการ",
      },
      {
        icon: PlugIcon,
        title: "Auto-create Lead",
        desc: "ทุกแชทใหม่สร้าง Lead ใน HubDeal ให้อัตโนมัติ",
      },
    ],
  },
  {
    key: "hubstore",
    name: "HubStore",
    heading: "จัดการร้านค้าครบวงจร",
    icon: StoreIcon,
    features: [
      {
        icon: ReceiptIcon,
        title: "Order Management",
        desc: "สร้าง ติดตาม และยืนยัน Order ได้ในที่เดียว",
      },
      {
        icon: BoxIcon,
        title: "Stock Ledger",
        desc: "ติดตามสต็อกเข้า-ออกแบบเรียลไทม์ รู้ของคงเหลือตลอดเวลา",
      },
      {
        icon: BellIcon,
        title: "Low-stock Alert",
        desc: "แจ้งเตือนเมื่อสต็อกใกล้หมด เติมของได้ทันก่อนขาดมือ",
      },
      {
        icon: ChartIcon,
        title: "รายรับ-รายจ่าย & รายงาน",
        desc: "บันทึกรายรับ-รายจ่ายรายวัน พร้อมรายงานยอดขาย",
      },
      {
        icon: ChatIcon,
        title: "สร้าง Order จากแชท",
        desc: "เปลี่ยนบทสนทนาใน HubChat เป็น Order ได้ทันที",
      },
      {
        icon: PlugIcon,
        title: "เชื่อม Won Deal",
        desc: "ดีลที่ปิดได้ใน HubDeal ไหลเข้ามาเป็น Order อัตโนมัติ",
      },
    ],
  },
];

/* How it works (landing) */
export const STEPS = [
  {
    n: "1",
    title: "สมัครและเลือก module",
    desc: "เลือก SaaS ที่ตรงกับธุรกิจของคุณ เริ่มได้จาก module เดียวหรือครบชุด",
  },
  {
    n: "2",
    title: "เชื่อมต่อช่องทาง",
    desc: "เชื่อม LINE Official Account / Facebook Page ของคุณภายในไม่กี่คลิก",
  },
  {
    n: "3",
    title: "เริ่มปิดดีล",
    desc: "เริ่มรับแชท สร้าง Lead และปิดดีลได้เลย ทุกอย่างอยู่ในที่เดียว",
  },
];

/* Testimonials (placeholder) */
export const TESTIMONIALS = [
  {
    quote:
      "ย้ายจากการจดใน Excel มาใช้ HubDeal แล้วทีมขายเห็นภาพ pipeline ชัดขึ้นมาก ปิดดีลเร็วขึ้นจริง",
    name: "คุณนภัส ว.",
    role: "เจ้าของธุรกิจ",
    company: "ร้านเฟอร์นิเจอร์ออนไลน์",
  },
  {
    quote:
      "HubChat รวมแชท LINE กับ Facebook ไว้ที่เดียว ทีม agent ไม่พลาดข้อความลูกค้าอีกเลย",
    name: "คุณธีรพงศ์ ส.",
    role: "Marketing Manager",
    company: "แบรนด์เครื่องสำอาง",
  },
  {
    quote:
      "ใช้ครบทั้ง 3 module คุ้มมาก ตั้งแต่แชท ปิดดีล ยันจัดการสต็อก จบในระบบเดียว",
    name: "คุณอารยา พ.",
    role: "ผู้ก่อตั้ง",
    company: "ร้านอาหารเสริม",
  },
];

/* FAQ (pricing). Item #1 reconstructed; #2–#6 from spec. */
export const FAQ = [
  {
    q: "Hubly คืออะไร?",
    a: "Hubly คือระบบจัดการธุรกิจครบวงจรสำหรับ SME ไทย รวม CRM (HubDeal), Inbox แชท (HubChat) และระบบจัดการร้านค้า (HubStore) ไว้ในที่เดียว เลือกใช้เฉพาะ module ที่ต้องการได้",
  },
  {
    q: "ข้อมูลปลอดภัยแค่ไหน?",
    a: "ข้อมูลของคุณอยู่ใน Supabase database แยกเฉพาะของคุณคนเดียว ไม่แชร์กับลูกค้าคนอื่น",
  },
  {
    q: "ถ้าอยากเพิ่ม module ทีหลังได้ไหม?",
    a: "ได้เลย เพิ่มหรือลด module ได้ตลอดเวลา ราคาปรับตามรอบบิลถัดไป",
  },
  {
    q: "รองรับกี่ user?",
    a: "ไม่จำกัดจำนวน user ในทีม",
  },
  {
    q: "ยกเลิกแล้วข้อมูลหายไหม?",
    a: "ข้อมูลยังอยู่ครบ 30 วันหลังยกเลิก สามารถ export ได้",
  },
  {
    q: "มี support ภาษาไทยไหม?",
    a: "มีครับ ทีม support ไทยพร้อมช่วยเหลือผ่าน LINE และ email",
  },
];
