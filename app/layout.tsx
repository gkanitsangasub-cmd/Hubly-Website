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
    default: "Hubly — ระบบจัดการธุรกิจครบวงจร สำหรับ SME ไทย",
    template: "%s · Hubly",
  },
  description:
    "Hubly รวม CRM, Inbox แชท และระบบจัดการร้านค้าไว้ในที่เดียว — HubDeal, HubChat, HubStore สำหรับธุรกิจ SME ไทย เริ่มทดลองฟรี 14 วัน",
  openGraph: {
    title: "Hubly — ระบบจัดการธุรกิจครบวงจร สำหรับ SME ไทย",
    description:
      "CRM, Inbox แชท และระบบจัดการร้านค้าในที่เดียว สำหรับธุรกิจ SME ไทย",
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
