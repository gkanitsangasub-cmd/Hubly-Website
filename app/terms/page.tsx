import type { Metadata } from "next";
import { COMPANY } from "../lib/site";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน",
  description: "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์และบริการของ HublyCompany",
  alternates: { canonical: "https://hublycompany.com/terms" },
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    h: "1. การยอมรับข้อกำหนด",
    p: "การเข้าใช้งานเว็บไซต์หรือบริการของ HublyCompany ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขเหล่านี้ หากไม่ยอมรับ กรุณางดใช้งานบริการ",
  },
  {
    h: "2. ขอบเขตการให้บริการ",
    p: "HublyCompany ให้บริการด้าน Digital Growth & Performance, Website & Digital Experience และ AI & Business Solutions ตามรายละเอียดและขอบเขตงานที่ตกลงร่วมกัน",
  },
  {
    h: "3. ขอบเขตงานและค่าบริการ",
    p: "รายละเอียดงาน ค่าบริการ และเงื่อนไขการชำระเงินเป็นไปตามใบเสนอราคาและข้อตกลงของแต่ละงาน ราคาแพ็กเกจ Growth ที่แสดงเป็นราคาเริ่มต้นรายเดือนและไม่รวมงบโฆษณา กรุณายืนยันขอบเขตกับทีมก่อนเริ่มบริการ",
  },
  {
    h: "4. การใช้งานที่ยอมรับได้",
    p: "ห้ามใช้บริการเพื่อกระทำการที่ผิดกฎหมาย ละเมิดสิทธิผู้อื่น ส่งสแปม หรือรบกวนการทำงานของระบบ เราขอสงวนสิทธิ์ระงับบัญชีที่ฝ่าฝืน",
  },
  {
    h: "5. ทรัพย์สินทางปัญญา",
    p: "เนื้อหา ซอฟต์แวร์ และเครื่องหมายการค้าทั้งหมดเป็นทรัพย์สินของ HublyCompany ห้ามทำซ้ำหรือนำไปใช้โดยไม่ได้รับอนุญาต",
  },
  {
    h: "6. ข้อจำกัดความรับผิด",
    p: "บริการให้ตามสภาพที่เป็นอยู่ HublyCompany จะพยายามรักษาความต่อเนื่องของบริการอย่างเต็มที่ แต่ไม่รับผิดต่อความเสียหายทางอ้อมที่เกิดจากการใช้งาน",
  },
  {
    h: "7. การติดต่อ",
    p: `หากมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน ติดต่อ ${COMPANY.contactName} โทร ${COMPANY.phone} หรืออีเมล ${COMPANY.email}`,
  },
];

export default function TermsPage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
          ข้อกำหนดการใช้งาน
        </h1>
        <p className="mt-3 text-sm text-muted">อัปเดตล่าสุด: กันยายน 2026</p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-ink">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
