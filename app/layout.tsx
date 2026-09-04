import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BASE_URL, COMPANY, CONTACTS } from "./lib/site";
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const title = COMPANY.name + " — " + COMPANY.tagline;
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: title, template: "%s · HublyCompany" },
  description: COMPANY.description,
  openGraph: {
    title,
    description: COMPANY.description,
    type: "website",
    locale: "th_TH",
    url: BASE_URL,
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: COMPANY.description,
  },
};
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: BASE_URL + "/opengraph-image" },
  description: COMPANY.description,
  telephone: COMPANY.phoneHref.replace("tel:", ""),
  email: COMPANY.email,
  contactPoint: CONTACTS.map((contact) => ({
    "@type": "ContactPoint",
    telephone: contact.phoneHref.replace("tel:", ""),
    contactType: "customer service",
    availableLanguage: "Thai",
    areaServed: "TH",
  })),
  areaServed: { "@type": "Country", name: "Thailand" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={prompt.variable + " h-full"}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-card focus:p-4"
        >
          ข้ามไปเนื้อหาหลัก
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
