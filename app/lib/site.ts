export const APP = {
  signup: "https://app.hublycompany.com/signup",
  login: "https://app.hublycompany.com/login",
} as const;

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
] as const;

export type ModuleKey = "hubdeal" | "hubchat" | "hubstore";

export const MODULE_ACCENT: Record<
  ModuleKey,
  { badge: string; dot: string; ring: string }
> = {
  hubdeal: {
    badge: "bg-amber-500/12 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-500/20",
  },
  hubchat: {
    badge: "bg-rose-400/12 text-rose-700",
    dot: "bg-rose-400",
    ring: "ring-rose-400/20",
  },
  hubstore: {
    badge: "bg-lime-700/12 text-lime-800",
    dot: "bg-lime-700",
    ring: "ring-lime-700/20",
  },
};
