export const COMPANY = {
  name: "HublyCompany",
  contactName: "Kanit Sangasub",
  phone: "094-632-6916",
  phoneHref: "tel:+66946326916",
  email: "gkanit.sangasub@gmail.com",
} as const;

export const CONTACTS = [
  { name: "คุณแชมป์", phone: "094-632-6916", phoneHref: "tel:+66946326916" },
  { name: "คุณนัท", phone: "092-586-3639", phoneHref: "tel:+66925863639" },
] as const;

export const APP = {
  url: "https://app.hublycompany.com",
  login: "https://app.hublycompany.com/login",
} as const;

export type NavChild = { href: string; label: string; sublabel?: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services/marketing",
        label: "Marketing Agency",
        sublabel: "ยิงโฆษณา · Content · วัดผล",
      },
      {
        href: "/services/ai-solution",
        label: "AI Solution",
        sublabel: "เว็บไซต์ · ระบบ · AI ตามสั่ง",
      },
    ],
  },
  { href: "/products", label: "Products" },
  {
    href: "/pricing",
    label: "Pricing",
    children: [
      {
        href: "/pricing/marketing",
        label: "Marketing Agency",
        sublabel: "แพ็กเกจบริการการตลาด",
      },
      {
        href: "/pricing/ai-solution",
        label: "AI Solution",
        sublabel: "ราคาตามโปรเจกต์",
      },
      {
        href: "/pricing/saas",
        label: "Hubly SaaS",
        sublabel: "฿2,990/เดือน ทุก SaaS",
      },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type ModuleKey = "hubdeal" | "hubchat" | "hubstore";

export const MODULE_ACCENT: Record<
  ModuleKey,
  { badge: string; dot: string; ring: string; border: string }
> = {
  hubdeal: {
    badge: "bg-amber-500/12 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-500/20",
    border: "border-amber-500/30",
  },
  hubchat: {
    badge: "bg-rose-400/12 text-rose-700",
    dot: "bg-rose-400",
    ring: "ring-rose-400/20",
    border: "border-rose-400/30",
  },
  hubstore: {
    badge: "bg-lime-700/12 text-lime-800",
    dot: "bg-lime-700",
    ring: "ring-lime-700/20",
    border: "border-lime-700/30",
  },
};
