import type { Metadata } from "next";
import { FAQ } from "../../lib/content";
import SaasPricingContent from "./SaasPricingContent";

export const metadata: Metadata = {
  title: "ราคา Hubly SaaS",
  description:
    "ราคา Hubly SaaS — ฿2,990/เดือน ทุก SaaS (HubChat, HubDeal, HubStore) รายปีลด 10% · Bundle 2 SaaS +5% · Bundle 3 SaaS +10% ไม่มีค่าติดตั้ง",
  alternates: { canonical: "https://hublycompany.com/pricing/saas" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

export default function SaasPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SaasPricingContent />
    </>
  );
}
