export const COMPANY = {
  name: "HublyCompany",
  contactName: "Kanit Sangasub",
  phone: "094-632-6916",
  phoneHref: "tel:+66946326916",
  email: "gkanit.sangasub@gmail.com",
} as const;

export const APP = {
  url: "https://app.hublycompany.com",
  login: "https://app.hublycompany.com/login",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

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
