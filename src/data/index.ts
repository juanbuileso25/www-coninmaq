import type {
    NavItem,
    Stat,
    Service,
    Category,
    Product,
    Testimonial,
    FooterLinks,
    ContactItem,
} from "../types";

export const NAV_ITEMS: NavItem[] = [
    { label: "Inicio", href: "/" },
    {
        label: "Nosotros",
        href: "/nosotros",
        sub: [
            { label: "Quiénes somos", href: "/nosotros" },
            { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
        ],
    },
    {
        label: "Maquinaria Pesada",
        href: "/maquinaria-pesada",
        sub: [
            { label: "Maquinaria Nueva", href: "/maquinaria-pesada/nueva" },
            { label: "Maquinaria Usada", href: "/maquinaria-pesada/usada" },
            { label: "Excavadoras", href: "/maquinaria-pesada/excavadoras" },
            { label: "Bulldozers", href: "/maquinaria-pesada/bulldozers" },
            {
                label: "Minicargadores",
                href: "/maquinaria-pesada/minicargadores",
            },
            {
                label: "Compactadores",
                href: "/maquinaria-pesada/compactadores",
            },
            {
                label: "Motoniveladoras",
                href: "/maquinaria-pesada/motoniveladoras",
            },
            { label: "Aditamentos", href: "/maquinaria-pesada/aditamentos" },
        ],
    },
    {
        label: "Repuestos",
        href: "/repuestos",
        sub: [
            { label: "Repuestos CATERPILLAR", href: "/repuestos/caterpillar" },
            { label: "Repuestos CASE", href: "/repuestos/case" },
            { label: "Repuestos BOBCAT", href: "/repuestos/bobcat" },
            { label: "Repuestos KOMATSU", href: "/repuestos/komatsu" },
            { label: "Ver todos", href: "/repuestos" },
        ],
    },
    { label: "Tienda Virtual", href: "/tienda" },
    { label: "Contacto", href: "/contacto" },
];

export const STATS: Stat[] = [
    { num: "+7", label: "Años de experiencia" },
    { num: "+500", label: "Máquinas vendidas" },
    { num: "+8", label: "Marcas disponibles" },
    { num: "100%", label: "Satisfacción garantizada" },
];

export const SERVICES: Service[] = [
    {
        icon: "🏗️",
        title: "Maquinaria Nueva",
        desc: "Importación directa, últimas versiones",
    },
    {
        icon: "🔧",
        title: "Maquinaria Usada",
        desc: "Equipos certificados y revisados",
    },
    {
        icon: "⚙️",
        title: "Repuestos",
        desc: "Más de 10.000 referencias disponibles",
    },
    {
        icon: "🛠️",
        title: "Mantenimiento",
        desc: "Servicio técnico especializado",
    },
];

export const CATEGORIES: Category[] = [
    {
        label: "Excavadoras",
        desc: "CASE, Hitachi, Caterpillar — Nuevas y usadas",
        code: "EXC",
        href: "/maquinaria-pesada/excavadoras",
        span: true,
    },
    {
        label: "Bulldozers",
        desc: "CASE Construction — Serie 1150M, 1650M, 2050M",
        code: "BULL",
        href: "/maquinaria-pesada/bulldozers",
    },
    {
        label: "Minicargadores",
        desc: "CASE, Bobcat — Alta maniobrabilidad",
        code: "MINI",
        href: "/maquinaria-pesada/minicargadores",
    },
    {
        label: "Compactadores",
        desc: "DYNAPAC — Suelo, doble rodillo, neumáticos",
        code: "COMP",
        href: "/maquinaria-pesada/compactadores",
    },
    {
        label: "Motoniveladoras",
        desc: "CASE Construction — 845C, 865C Tier 4",
        code: "MOTO",
        href: "/maquinaria-pesada/motoniveladoras",
    },
    {
        label: "Repuestos",
        desc: "Caterpillar, CASE, Komatsu, Bobcat y más",
        code: "REP",
        href: "/repuestos",
    },
];

export const BRANDS: string[] = [
    "CASE",
    "Caterpillar",
    "Hitachi",
    "Komatsu",
    "Dynapac",
    "Yanmar",
    "Bobcat",
    "John Deere",
    "Volvo",
    "Liebherr",
    "Doosan",
    "Hyundai",
];

export const PRODUCTS: Product[] = [
    {
        brand: "CASE Construction",
        model: "Excavadora CX 210D Tier4",
        desc: "Motor FPT de 156 HP, peso operativo 20.2 ton. Ideal para obra civil y minería a cielo abierto.",
        code: "CX210D",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cx210d",
    },
    {
        brand: "CASE Construction",
        model: "Bulldozer 1150M Tier4",
        desc: "Motor de 190 HP, potencia de tracción máxima. Diseñado para los trabajos de movimiento de tierra más exigentes.",
        code: "1150M",
        badge: "Nueva",
        href: "/maquinaria-pesada/bulldozers/1150m",
    },
    {
        brand: "YANMAR",
        model: "Miniexcavadora VIO50-6a",
        desc: "Motor Yanmar de 38.5 HP, peso operativo 5 ton. Cero vuelo trasero para trabajo en espacios reducidos.",
        code: "VIO50",
        badge: "Nueva",
        href: "/maquinaria-pesada/miniexcavadoras/vio50",
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        text: "Excelente servicio, la excavadora llegó en perfectas condiciones y el acompañamiento técnico fue impecable. Recomendamos totalmente a Coninmaq para cualquier proyecto de gran escala.",
        name: "Jorge Mendoza",
        role: "Gerente, Constructora Andina S.A.S",
        initials: "JM",
    },
    {
        text: "Los repuestos llegaron al día siguiente y el precio fue muy competitivo. Ya hemos comprado más de 3 equipos y la relación calidad-precio es inmejorable en el mercado colombiano.",
        name: "Carlos Posada",
        role: "Director Técnico, Obras Civiles del Cauca",
        initials: "CP",
    },
    {
        text: "La atención postventa es lo que nos tiene fieles a Coninmaq. Siempre disponibles, con técnicos capacitados y repuestos originales. Son nuestros aliados estratégicos.",
        name: "Adriana Morales",
        role: "Socia, Minería y Tierra S.A",
        initials: "AM",
    },
];

export const FOOTER_LINKS: FooterLinks = {
    Maquinaria: [
        "Maquinaria Nueva",
        "Maquinaria Usada",
        "Excavadoras",
        "Bulldozers",
        "Compactadores",
        "Motoniveladoras",
        "Aditamentos",
    ],
    Repuestos: [
        "Caterpillar",
        "CASE Construction",
        "Bobcat",
        "Komatsu",
        "Hitachi",
        "Tienda Virtual",
    ],
};

export const CONTACT_ITEMS: ContactItem[] = [
    { icon: "📍", text: "KM 20 Autopista norte Copacabana a Girardota" },
    { icon: "📞", text: "316 381 5694" },
    { icon: "✉", text: "comercioexterior@coninmaqsas.com" },
    { icon: "🕐", text: "Lun – Vie: 7am – 5pm | Sáb: 8am – 12pm" },
];

export const CAT_GRADIENTS: string[] = [
    "from-[#1a1a2e] to-[#16213e]",
    "from-[#2e1a1a] to-[#3e1616]",
    "from-[#1a2e1a] to-[#163e16]",
    "from-[#2e2a1a] to-[#3e3416]",
    "from-[#1a2a2e] to-[#16323e]",
    "from-[#2a1a2e] to-[#34163e]",
];

export const PRODUCT_GRADIENTS: string[] = [
    "from-[#1a1a2e] to-[#16213e]",
    "from-[#2e1a1a] to-[#3e1616]",
    "from-[#1a2e1a] to-[#163e16]",
];

export const ABOUT_FEATURES: string[] = [
    "Venta de maquinaria nueva",
    "Importación de usados",
    "Repuestos originales",
    "Mantenimiento preventivo",
    "Servicio técnico certificado",
    "Financiación disponible",
];

export const SOCIAL_LINKS = [
    {
        label: "Instagram",
        short: "ig",
        href: "https://www.instagram.com/coninmaq/",
    },
    {
        label: "LinkedIn",
        short: "in",
        href: "https://www.linkedin.com/company/coninmaq/",
    },
    {
        label: "Facebook",
        short: "f",
        href: "https://www.facebook.com/Coninmaq",
    },
];
