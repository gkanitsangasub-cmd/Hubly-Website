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

export const metadata: Metadata = {
  metadataBase: new URL("https://hublycompany.com"),
  title: {
    default: "HublyCompany — Agency ดิจิทัล + เทคโนโลยี AI + SaaS ของคุณเอง",
    template: "%s · HublyCompany",
  },
  description:
    "HublyCompany รวมบริการ Marketing Agency, Tech & AI Solutions และซอฟต์แวร์ Hubly SaaS ไว้ในที่เดียว เพื่อให้ธุรกิจ SME ไทยเติบโตได้จริง",
  openGraph: {
    title: "HublyCompany — Agency ดิจิทัล + เทคโนโลยี AI + SaaS ของคุณเอง",
    description:
      "Marketing, Tech & AI Solutions และ Hubly SaaS ในที่เดียว สำหรับธุรกิจ SME ไทย",
    type: "website",
    locale: "th_TH",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
