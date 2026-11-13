const u = (id) => `https://images.unsplash.com/${id}?q=85&w=1600&auto=format&fit=crop`;

export const CONTACT = {
  phone: "+91 98200 12345",
  email: "info@coveredge.in",
  hours: "Mon–Sat · 09:00–19:00 IST",
};

export const PHOTOS = {
  band: u("photo-1592085198739-ffcad7f36b54"),
  racks: u("photo-1689942010216-dc412bb1e7a9"),
  forklift: u("photo-1740914994657-f1cdffdc418e"),
  forklift2: u("photo-1532635042-a6f6ad4745f9"),
  loading: u("photo-1620388640785-892616248ec8"),
  truckIn: u("photo-1681004478577-cb7f8421f78c"),
  trucks: u("photo-1635774152029-17bf0a3e1cb4"),
  tunnel: u("photo-1791217265786-f82d39b220fa"),
  worker: u("photo-1586528116022-aeda1613c63d"),
  aerial: u("photo-1726776230760-ae81dc9d4e55"),
  modernTruck: u("photo-1571989928541-674d0cf46c4a"),
  truckMan: u("photo-1716512060259-d114cfba13e8"),
};

export const SERVICES = [
  {
    slug: "warehousing",
    title: "Smart Warehousing",
    icon: "Warehouse",
    tag: "Storage that flexes with you",
    desc: "Multi-client and dedicated facilities planned around your SKU profile — with dock-to-stock discipline and safety-first operations on every shift.",
    points: [
      "Multi-client & dedicated facilities",
      "Flexible storage & racking plans",
      "Dock-to-stock discipline",
      "Safety & compliance first",
    ],
    photo: PHOTOS.racks,
  },
  {
    slug: "fulfilment",
    title: "Order Fulfilment",
    icon: "Boxes",
    tag: "B2B & B2C, picked to perfection",
    desc: "Pick, pack and dispatch lines tuned for both marketplace sellers and trade orders — accurate, fast and audit-ready.",
    points: [
      "Pick, pack & labelling",
      "Same-day dispatch cut-offs",
      "E-commerce & marketplace ready",
      "Returns processing",
    ],
    photo: PHOTOS.worker,
  },
  {
    slug: "transportation",
    title: "Transportation & Distribution",
    icon: "Truck",
    tag: "Four hubs, one corridor network",
    desc: "Full-truck and part-load movement across our West–Central–North–East corridor network, with express delivery when the clock wins.",
    points: [
      "FTL & LTL loads",
      "Express & last-mile delivery",
      "Pan-India corridor coverage",
      "Load optimisation & tracking",
    ],
    photo: PHOTOS.truckIn,
  },
  {
    slug: "inventory",
    title: "Inventory Management",
    icon: "BarChart3",
    tag: "Every unit, accounted for",
    desc: "WMS-driven stock visibility with cycle counts and exception reporting, so your books and your bins always agree.",
    points: [
      "WMS-driven stock visibility",
      "Cycle counts & audits",
      "Batch tracking",
      "Low-stock alerts & reporting",
    ],
    photo: PHOTOS.forklift,
  },
  {
    slug: "value-added",
    title: "Value-Added Services",
    icon: "Layers",
    tag: "Retail-ready, out of the box",
    desc: "Kitting, barcoding, quality checks and repacking — the finishing touches that make every consignment shelf-ready.",
    points: [
      "Kitting & bundling",
      "Barcoding & serialisation",
      "Quality checks",
      "Labelling & repacking",
    ],
    photo: PHOTOS.loading,
  },
];

export const HUBS = [
  {
    city: "Bhiwandi",
    code: "BHI",
    region: "Mumbai Metropolitan Region · Maharashtra",
    role: "Western corridor gateway",
    photo: PHOTOS.tunnel,
  },
  {
    city: "Nagpur",
    code: "NAG",
    region: "Central India · Maharashtra",
    role: "Zero-mile distribution hub",
    photo: PHOTOS.aerial,
  },
  {
    city: "New Delhi",
    code: "DEL",
    region: "National Capital Region",
    role: "North India supply chain hub",
    photo: PHOTOS.trucks,
  },
  {
    city: "Siliguri",
    code: "SIG",
    region: "North Bengal · West Bengal",
    role: "North-East gateway",
    photo: PHOTOS.truckMan,
  },
];

export const NAV_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Warehouses", "/warehouses"],
  ["Contact", "/contact"],
];
