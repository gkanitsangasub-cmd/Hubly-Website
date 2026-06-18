export type ServiceItem = {
  id: string;
  name: string;
  price: number;
  unit: string;
  isFlat?: boolean;
  isOneTime?: boolean;
  min?: number;
  autoSelectTriggeredBy?: string;
  note?: string;
  priceNote?: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  items: ServiceItem[];
};

export const MARKETING_SERVICES: ServiceCategory[] = [
  {
    id: "social",
    name: "Social Media Content",
    items: [
      {
        id: "content-calendar",
        name: "Content Calendar",
        price: 1500,
        unit: "เดือน",
        isFlat: true,
        autoSelectTriggeredBy: "artwork-caption",
      },
      {
        id: "artwork-caption",
        name: "Artwork + Caption (Static Post)",
        price: 400,
        unit: "ชิ้น",
        min: 4,
      },
      {
        id: "short-video",
        name: "Short Video / Reel / TikTok",
        price: 2000,
        unit: "ชิ้น",
        min: 1,
        priceNote: "ราคาอาจเปลี่ยนตามคุณภาพงาน",
      },
      {
        id: "page-management",
        name: "Page Management (Comment + DM)",
        price: 6000,
        unit: "กะ",
        min: 1,
        note: "1 กะ = 8 ชม. ต่อ 1 platform",
      },
    ],
  },
  {
    id: "ads",
    name: "Paid Advertising",
    items: [
      {
        id: "fb-ig-ads",
        name: "Facebook & Instagram Ads",
        price: 4000,
        unit: "brand",
        min: 1,
        note: "ไม่รวมค่า Ads",
      },
      {
        id: "google-ads",
        name: "Google Search Ads + Display + YouTube",
        price: 4000,
        unit: "brand",
        min: 1,
        note: "ไม่รวม Ads และ Artwork ที่ใช้ใน Display",
      },
      {
        id: "tiktok-line-ads",
        name: "TikTok & LINE Ads",
        price: 2000,
        unit: "เดือน",
        isFlat: true,
        note: "ไม่รวมค่า Ads",
      },
    ],
  },
  {
    id: "seo",
    name: "SEO & Blog Content",
    items: [
      {
        id: "blog-article",
        name: "Blog Article (SEO-optimized)",
        price: 600,
        unit: "บทความ",
        min: 2,
        note: "รวม Artwork ในบทความ",
      },
      {
        id: "keyword-seo-audit",
        name: "Keyword Research + On-Page SEO Audit",
        price: 2000,
        unit: "ครั้ง",
        isFlat: true,
        isOneTime: true,
      },
    ],
  },
  {
    id: "marketplace",
    name: "Marketplace",
    items: [
      {
        id: "marketplace-ads",
        name: "Shopee / Lazada Ads Management",
        price: 2000,
        unit: "platform",
        min: 1,
        note: "ไม่รวมค่า Ads",
      },
      {
        id: "product-listing",
        name: "Product Listing + SEO",
        price: 100,
        unit: "รายการ",
        min: 10,
        note: "min 10 รายการ",
      },
      {
        id: "flash-sale",
        name: "Flash Sale / Campaign Planning",
        price: 3000,
        unit: "ครั้ง",
        min: 1,
        isOneTime: true,
      },
      {
        id: "shop-decoration",
        name: "Shop Page Decoration",
        price: 2000,
        unit: "ครั้ง",
        isFlat: true,
        isOneTime: true,
      },
    ],
  },
  {
    id: "strategy",
    name: "Strategy & Consulting",
    items: [
      {
        id: "monthly-strategy",
        name: "Monthly Marketing Strategy",
        price: 6000,
        unit: "เดือน",
        isFlat: true,
        note: "รวม Performance Report, SEO Report และ Consultant",
      },
    ],
  },
];

// Build auto-select map: triggerItemId → itemIdToAutoSelect
export const AUTO_SELECT_MAP: Record<string, string> = {};
for (const cat of MARKETING_SERVICES) {
  for (const item of cat.items) {
    if (item.autoSelectTriggeredBy) {
      AUTO_SELECT_MAP[item.autoSelectTriggeredBy] = item.id;
    }
  }
}

export const allServiceItems = MARKETING_SERVICES.flatMap((c) => c.items);
