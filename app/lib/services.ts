import {
  ChartIcon,
  CodeIcon,
  SparkleIcon,
  PlugIcon,
  LayersIcon,
} from "../components/icons";

export const SERVICE_AREAS = [
  {
    no: "01",
    name: "Digital Growth & Performance",
    tag: "เติบโตด้วยการตลาดที่วัดผลได้",
    icon: ChartIcon,
    href: "/services/digital-growth",
    desc: "วางกลยุทธ์การตลาดออนไลน์ พร้อมดูแล Ads, Campaign และ Performance เพื่อสร้างการเติบโตที่วัดผลได้",
    points: [
      "Digital Marketing & Ads",
      "Campaign & Content",
      "Performance & Strategy",
    ],
    accent: "bg-amber-500/12 text-amber-700",
  },
  {
    no: "02",
    name: "Website & Digital Experience",
    tag: "เปลี่ยนผู้เข้าชมเป็นโอกาสทางธุรกิจ",
    icon: CodeIcon,
    href: "/services/website",
    desc: "พัฒนาและดูแล Website, SEO และ Digital Experience ให้ธุรกิจถูกค้นพบและเปลี่ยน Traffic เป็นโอกาสทางธุรกิจ",
    points: [
      "Website Development",
      "WordPress & Website Care",
      "SEO & Digital Experience",
    ],
    accent: "bg-lime-700/12 text-lime-800",
  },
  {
    no: "03",
    name: "AI & Business Solutions",
    tag: "เทคโนโลยีที่เข้ากับการทำงานของคุณ",
    icon: SparkleIcon,
    href: "/solutions",
    desc: "พัฒนา AI, Automation และ Business Systems เพื่อช่วยลดงานซ้ำ เพิ่มประสิทธิภาพ และทำให้ธุรกิจขยายตัวได้ง่ายขึ้น",
    points: [
      "AI Business Solutions",
      "Business Automation",
      "Custom Business Systems",
    ],
    accent: "bg-orange-400/25 text-orange-700",
  },
];

export const SOLUTIONS = [
  {
    id: "automation",
    name: "Business Automation",
    icon: PlugIcon,
    desc: "เชื่อมขั้นตอนการทำงานและข้อมูล ลดงานซ้ำระหว่างทีม Marketing, Sales และ Operation",
    features: [
      "Workflow & CRM Automation",
      "Notification",
      "Data Sync",
      "LINE & Email Automation",
    ],
  },
  {
    id: "ai",
    name: "AI Business Solutions",
    icon: SparkleIcon,
    desc: "ออกแบบ AI ให้ช่วยงานจริง ตั้งแต่ดูแลลูกค้า คัดกรองโอกาสทางการขาย ไปจนถึงสรุปรายงาน",
    features: [
      "AI Assistant",
      "Customer Service",
      "Lead Qualification",
      "AI Reporting",
    ],
  },
  {
    id: "systems",
    name: "Custom Business Systems",
    icon: LayersIcon,
    desc: "สร้างระบบตามกระบวนการของธุรกิจ ให้ทีมเห็นข้อมูลและทำงานร่วมกันได้ในที่เดียว",
    features: [
      "CRM / Booking / Sales",
      "Inventory",
      "Dashboard",
      "Internal Web App",
    ],
  },
  {
    id: "website",
    name: "Website Development",
    icon: CodeIcon,
    desc: "พัฒนาเว็บไซต์ใหม่หรือปรับเว็บไซต์เดิม เลือกแนวทางให้เหมาะกับแบรนด์ การใช้งาน และทีมดูแล",
    features: [
      "Corporate Website",
      "WordPress",
      "Custom Website",
      "Website Redesign",
    ],
  },
];

export const WORK_STEPS = [
  {
    no: "01",
    title: "Understand",
    desc: "ทำความเข้าใจเป้าหมาย ปัญหา และสิ่งที่ธุรกิจต้องการแก้ก่อนเริ่มงาน",
  },
  {
    no: "02",
    title: "Plan",
    desc: "ออกแบบ Strategy, Channel และ Solution ให้เหมาะกับเป้าหมายและงบประมาณ",
  },
  {
    no: "03",
    title: "Execute",
    desc: "ลงมือทำ Marketing, Technology และ Creative / Development ตามแผนร่วมกัน",
  },
  {
    no: "04",
    title: "Optimize",
    desc: "วัดผล วิเคราะห์ และพัฒนางานอย่างต่อเนื่องจากข้อมูลและผลลัพธ์จริง",
  },
];
