import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function KanbanIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="5" height="11" rx="1.2" />
      <rect x="10" y="4" width="5" height="15" rx="1.2" />
      <rect x="17" y="4" width="4" height="8" rx="1.2" />
    </svg>
  );
}

export function ChatIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.1 7.5L3 20.5l1.6-5A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  );
}

export function StoreIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9.5 5 4h14l1 5.5" />
      <path d="M4 9.5h16v1a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0v-1Z" />
      <path d="M5.5 12.5V20h13v-7.5" />
      <path d="M10 20v-4h4v4" />
    </svg>
  );
}

export function TimelineIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3v18" />
      <circle cx="6" cy="7" r="2" />
      <circle cx="6" cy="15" r="2" />
      <path d="M10 7h9M10 15h9" />
    </svg>
  );
}

export function ChartIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4v16h16" />
      <path d="M8 14v3M12 10v7M16 6v11" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  );
}

export function TagIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 12.5 11.5 4H20v8.5L11.5 21 3 12.5Z" />
      <circle cx="15.5" cy="8.5" r="1.4" />
    </svg>
  );
}

export function PaperclipIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 11.5 12 19.5a5 5 0 0 1-7-7l8-8a3.3 3.3 0 0 1 4.7 4.7l-8 8a1.6 1.6 0 0 1-2.3-2.3l7.3-7.3" />
    </svg>
  );
}

export function BroadcastIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 10v4l11 5V5L4 10Z" />
      <path d="M18 8a5 5 0 0 1 0 8" />
    </svg>
  );
}

export function UsersIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 19a6 6 0 0 0-4-5.6" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export function BoxIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

export function ReceiptIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21 5.5 19.5 6 21V3Z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}

export function BellIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function PlugIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 3v5M15 3v5" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
      <path d="M12 16v5" />
    </svg>
  );
}

export function SparkleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M7 7l3 3M14 14l3 3M17 7l-3 3M10 14l-3 3" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ArrowRightIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MegaphoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9v6h3l9 4V5L7 9H4Z" />
      <path d="M19 9a3 3 0 0 1 0 6" />
      <path d="M7 15v3a2 2 0 0 0 3 0" />
    </svg>
  );
}

export function GoogleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 12h7a7 7 0 1 1-2-5" />
    </svg>
  );
}

export function ImageIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m4 18 5-5 4 3 3-3 4 4" />
    </svg>
  );
}

export function SearchIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function RocketIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5a2.1 2.1 0 0 0-2.5-2.5Z" />
      <path d="M9 13c-2 0-3 1-3 1l-2-2s1-3 4-5c4-2.5 8-2 8-2s.5 4-2 8c-.8 1.2-1.8 2-2.8 2.5" />
      <path d="M14 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M9 13l2 2" />
    </svg>
  );
}

export function CodeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
    </svg>
  );
}

export function RobotIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="M8 5V3M16 5V3" />
      <path d="M9 10.5h.01M15 10.5h.01" />
      <path d="M9 14h6" />
    </svg>
  );
}

export function LayersIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 16.5l9 5 9-5" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function DocIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export function BagIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}
