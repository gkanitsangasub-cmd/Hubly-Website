import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE = "https://hublycompany.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HublyCompany",
  "url": BASE,
  "logo": { "@type": "ImageObject", "url": `${BASE}/opengraph-image` },
  "description":
    "HublyCompany รวมบริการ Marketing Agency, AI Solution และซอฟต์แวร์ Hubly SaaS ไว้ในที่เดียว เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง",
  "telephone": "+66946326916",
  "email": "gkanit.sangasub@gmail.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+66946326916",
    "contactType": "customer service",
    "availableLanguage": "Thai",
    "areaServed": "TH",
  },
  "areaServed": { "@type": "Country", "name": "Thailand" },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "HublyCompany — Agency ดิจิทัล + เทคโนโลยี AI + SaaS ของคุณเอง",
    template: "%s · HublyCompany",
  },
  description:
    "HublyCompany รวมบริการ Marketing Agency, AI Solution และซอฟต์แวร์ Hubly SaaS ไว้ในที่เดียว เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง",
  openGraph: {
    title: "HublyCompany — Agency ดิจิทัล + เทคโนโลยี AI + SaaS ของคุณเอง",
    description:
      "Marketing, AI Solution และ Hubly SaaS ในที่เดียว สำหรับธุรกิจ SME ไทย",
    type: "website",
    locale: "th_TH",
    url: "https://hublycompany.com",
    siteName: "HublyCompany",
  },
  twitter: {
    card: "summary_large_image",
    title: "HublyCompany — Agency ดิจิทัล + เทคโนโลยี AI + SaaS ของคุณเอง",
    description:
      "Marketing, AI Solution และ Hubly SaaS ในที่เดียว สำหรับธุรกิจ SME ไทย",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
