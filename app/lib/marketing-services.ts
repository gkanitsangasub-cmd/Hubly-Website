/** Company Profile, pages 6–8. Prices are THB, excluding ad spend. */
export const RATE_CARD = [
  {
    id: "social",
    name: "Social Media Management",
    price: 4900,
    description:
      "ดูแลการลงโพสต์ ตั้งเวลาเผยแพร่ และติดตามผลการทำงานของช่องทางโซเชียล",
    scope: "Content Publishing / Scheduling / Performance Monitoring",
  },
  {
    id: "ads",
    name: "Performance Ads Management",
    price: 10900,
    description:
      "ดูแล Meta และ Google Ads ตั้งแต่ตั้งค่า ปรับแคมเปญ ไปจนถึงรายงานผล",
    scope: "Meta & Google Ads / Setup / Optimize / Report",
  },
  {
    id: "website",
    name: "Website Care",
    price: 2900,
    description: "ดูแลเว็บไซต์ WordPress พร้อมสำรองข้อมูลและอัปเดตเนื้อหา",
    scope: "WordPress Update / Backup / Plugin / Content Update",
  },
  {
    id: "report",
    name: "Report & Strategy Meeting",
    price: 2900,
    description:
      "ทบทวนผลลัพธ์และ Insight พร้อมประชุมวางกลยุทธ์รายเดือนร่วมกับทีม",
    scope: "Performance Review / Insight / Monthly Strategy Meeting",
  },
  {
    id: "seo",
    name: "SEO Content & Optimization",
    price: 12900,
    description:
      "วางแผนคีย์เวิร์ด ปรับ On-page SEO และสร้างเนื้อหาให้ธุรกิจถูกค้นพบ",
    scope: "Keyword Planning / On-page SEO / SEO Content",
  },
  {
    id: "planning",
    name: "Campaign & Content Planning",
    price: 4900,
    description:
      "กำหนดทิศทางแคมเปญ วางแผนเนื้อหา และคิดโปรโมชันให้สอดคล้องกับเป้าหมาย",
    scope: "Campaign Direction / Content Planning / Promotion Idea",
  },
  {
    id: "graphic",
    name: "Graphic Content",
    price: 7900,
    description:
      "กราฟิกคอนเทนต์ 8 ชิ้นต่อเดือน สำหรับสื่อสารแบรนด์และบริการของคุณ",
    scope: "8 Graphic Contents / Month",
  },
  {
    id: "video",
    name: "Video Content",
    price: 8900,
    description:
      "ตัดต่อวิดีโอสั้น 2 ชิ้นต่อเดือน สำหรับเนื้อหาบนช่องทางดิจิทัล",
    scope: "2 Short-form Video Edits / Month",
  },
] as const;

export type RateId = (typeof RATE_CARD)[number]["id"];
export const baht = (value: number) => "฿" + value.toLocaleString("en-US");
const partnerScope = [
  "Social Media Management",
  "Ads Management",
  "Website Care",
  "Monthly Report & Strategy Meeting",
];
const teamScope = [
  "SEO Keyword Planning",
  "On-page SEO",
  "Internal SEO Article 10 ชิ้น/เดือน",
  "External SEO Article 1 ชิ้น/เดือน",
];
const plusScope = [
  "Campaign & Content Planning",
  "Graphic Content 8 ชิ้น/เดือน",
  "Short-form Video 2 ชิ้น/เดือน",
];

export const GROWTH_PACKAGES = [
  {
    id: "growth-partner",
    name: "Growth Partner",
    price: 17900,
    description:
      "ทีมช่วยดู Growth รายเดือน สำหรับธุรกิจที่ยังไม่ทำ SEO และ Content Production เต็มชุด",
    includesLabel: "เริ่มต้นดูแลการเติบโต",
    features: partnerScope,
    scope: partnerScope,
    included: ["social", "ads", "website", "report"],
    excludes: "งบโฆษณา / กราฟิก / วิดีโอ / SEO",
  },
  {
    id: "growth-team",
    name: "Growth Team",
    price: 32900,
    description: "เพิ่ม Organic Search และสร้างฐาน Content ให้ธุรกิจในระยะยาว",
    includesLabel: "ทุกอย่างใน Growth Partner และเพิ่ม",
    features: teamScope,
    scope: [...partnerScope, ...teamScope],
    included: ["social", "ads", "website", "report", "seo"],
    excludes: "งบโฆษณา / กราฟิก / วิดีโอ",
  },
  {
    id: "growth-team-plus",
    name: "Growth Team Plus",
    price: 52900,
    description: "ทีมการตลาดที่ครบขึ้น พร้อมวางแคมเปญและผลิต Content รายเดือน",
    includesLabel: "ทุกอย่างใน Growth Team และเพิ่ม",
    features: plusScope,
    scope: [...partnerScope, ...teamScope, ...plusScope],
    included: [
      "social",
      "ads",
      "website",
      "report",
      "seo",
      "planning",
      "graphic",
      "video",
    ],
    excludes: "งบโฆษณา",
  },
] as const;

export function selectedRates(ids: readonly RateId[]) {
  return RATE_CARD.filter((item) => ids.includes(item.id));
}
export function monthlyEstimate(ids: readonly RateId[]) {
  return selectedRates(ids).reduce((total, item) => total + item.price, 0);
}

export const GROWTH_FAQ = [
  {
    q: "แพ็กเกจ Growth รวมงบโฆษณาหรือไม่?",
    a: "ทุกแพ็กเกจไม่รวมงบโฆษณาที่ใช้กับแพลตฟอร์ม งบโฆษณาแยกจากค่าบริการดูแลรายเดือน",
  },
  {
    q: "Growth Partner, Growth Team และ Growth Team Plus ต่างกันอย่างไร?",
    a: "Growth Partner ดูแล Social Media, Ads, Website Care และ Report & Strategy Meeting ส่วน Growth Team เพิ่ม SEO พร้อมบทความภายใน 10 ชิ้นและภายนอก 1 ชิ้นต่อเดือน และ Growth Team Plus เพิ่ม Campaign & Content Planning กราฟิก 8 ชิ้น และวิดีโอสั้น 2 ชิ้นต่อเดือน",
  },
  {
    q: "เลือกเฉพาะบริการที่ต้องการได้ไหม?",
    a: "เลือกบริการรายด้านได้จาก Service Rate Card และสามารถขยายขอบเขตเพิ่มภายหลัง โดยทีมจะประเมินขอบเขตและยืนยันราคาก่อนเริ่มงาน",
  },
  {
    q: "งานพัฒนาเว็บไซต์ AI และระบบธุรกิจคิดราคาอย่างไร?",
    a: "งาน Business Solutions ประเมินขอบเขตและราคาตามความต้องการของแต่ละโปรเจกต์ แยกจากแพ็กเกจ Growth รายเดือน",
  },
] as const;
