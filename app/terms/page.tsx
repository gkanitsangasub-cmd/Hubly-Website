import type { Metadata } from "next";
import { COMPANY } from "../lib/site";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน",
  description:
    "ข้อกำหนดและเงื่อนไขการใช้งาน (Terms of Service) ของ HublyCompany และบริการ Hubly SaaS",
};

const SECTIONS = [
  {
    h: "1. การยอมรับข้อกำหนด",
    p: "การเข้าใช้งานเว็บไซต์หรือบริการของ HublyCompany ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขเหล่านี้ หากไม่ยอมรับ กรุณางดใช้งานบริการ",
  },
  {
    h: "2. ขอบเขตการให้บริการ",
    p: "HublyCompany ให้บริการด้าน Marketing Agency, Tech & AI Solutions และซอฟต์แวร์ Hubly SaaS (HubDeal, HubChat, HubStore) ตามรายละเอียดและราคาที่ระบุบนเว็บไซต์ ซึ่งอาจมีการปรับปรุงเป็นครั้งคราว",
  },
  {
    h: "3. บัญชีผู้ใช้และการชำระเงิน",
    p: "ผู้ใช้มีหน้าที่รักษาความปลอดภัยของบัญชี ค่าบริการ Hubly SaaS เป็นแบบรายเดือน ไม่มีค่าติดตั้ง และสามารถยกเลิกได้ทุกเมื่อ โดยการเปลี่ยนแปลงจะมีผลในรอบบิลถัดไป",
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
        <p className="mt-3 text-sm text-muted">อัปเดตล่าสุด: มิถุนายน 2026</p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-ink">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 rounded-card border border-ink/8 bg-card p-5 text-xs leading-relaxed text-muted shadow-sm">
          เอกสารนี้เป็นเนื้อหาตัวอย่างเบื้องต้น ควรปรึกษาผู้เชี่ยวชาญด้านกฎหมายเพื่อปรับให้เหมาะสมกับธุรกิจของคุณก่อนเผยแพร่จริง
        </p>
      </div>
    </section>
  );
}
