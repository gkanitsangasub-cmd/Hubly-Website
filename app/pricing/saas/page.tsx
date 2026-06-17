import type { Metadata } from "next";
import SaasPricingContent from "./SaasPricingContent";

export const metadata: Metadata = {
  title: "ราคา Hubly SaaS",
  description:
    "ราคา Hubly SaaS — ฿1,990/เดือน ทุก SaaS (HubChat, HubDeal, HubStore) รายปีลด 10% · Bundle 2 SaaS +5% · Bundle 3 SaaS +10% ไม่มีค่าติดตั้ง",
};

export default function SaasPricingPage() {
  return <SaasPricingContent />;
}
