export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  sub?: NavSubItem[];
}

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Category {
  label: string;
  desc: string;
  code: string;
  href: string;
  span?: boolean;
}

export interface Product {
  brand: string;
  model: string;
  desc: string;
  code: string;
  badge: string;
  href: string;
  anio?: number;
  horasUso?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface MachineDetailData {
  slideLabels: string[];
  specs: ProductSpec[];
  highlights: string[];
  garantia?: string;
  entrega?: string;
  condicion?: string;
  inspeccion?: string;
}

export interface Part {
  code: string;
  slug: string;
  name: string;
  brand: string;
  brandLabel: string;
  desc: string;
  compatibility: string[];
  type: "OEM" | "Aftermarket";
  category: string;
  specs: ProductSpec[];
  highlights: string[];
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

export interface FooterLinks {
  [section: string]: string[];
}

export interface ContactItem {
  icon: string;
  text: string;
}

export interface ApiMachineSpec {
  id: string;
  label: string;
  value: string;
  icon: string;
  order: number;
}

export interface ApiMachineHighlight {
  id: string;
  text: string;
  order: number;
}

export interface ApiMachine {
  id: string;
  code: string;
  brand: string;
  category: string;
  model: string;
  slug: string;
  description: string;
  price: number;
  show_price: boolean;
  warranty: string;
  delivery_time: string;
  image_url: string;
  pdf_url: string;
  visible_web: boolean;
  featured: boolean;
  machine_type: string;
  specs: ApiMachineSpec[];
  highlights: ApiMachineHighlight[];
}
