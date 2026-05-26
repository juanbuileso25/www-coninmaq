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
