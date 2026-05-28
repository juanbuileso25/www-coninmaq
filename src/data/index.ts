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
        icon: "mdi:crane",
        title: "Maquinaria Nueva",
        desc: "Importación directa, últimas versiones",
    },
    {
        icon: "mdi:wrench-outline",
        title: "Maquinaria Usada",
        desc: "Equipos certificados y revisados",
    },
    {
        icon: "mdi:cog-outline",
        title: "Repuestos",
        desc: "Más de 10.000 referencias disponibles",
    },
    {
        icon: "mdi:hammer-wrench",
        title: "Mantenimiento",
        desc: "Servicio técnico especializado",
    },
    {
        icon: "mdi:key-outline",
        title: "Renta",
        desc: "Equipos disponibles para alquiler",
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

export const NEW_PRODUCTS: Product[] = [
    {
        brand: "LONKING",
        model: "Excavadora CDM6225",
        desc: 'Motor Cummins B6.7 de 129 kW (173 HP), peso operativo 21.8 ton. Excavadora de 22T con cabina ROPS y pantalla LCD 8".',
        code: "CDM6225",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cdm6225",
    },
    {
        brand: "LONKING",
        model: "Excavadora CDM6150F",
        desc: "Motor Cummins QSF3.8 de 90 kW (121 HP), peso 14 ton. Sistema hidráulico de doble bomba, emisiones Euro V / Tier 4F.",
        code: "CDM6150F",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cdm6150f",
    },
    {
        brand: "LONKING",
        model: "Excavadora CDM6306",
        desc: "Motor Cummins QSL9 de 209 kW (280 HP), peso 32.8 ton. Excavadora de gran tonelaje para minería y obra pesada.",
        code: "CDM6306",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cdm6306",
    },
    {
        brand: "LONKING",
        model: "Excavadora CDM6060N",
        desc: "Motor Weichai 36.8 kW (49 HP), peso 5.85 ton. Excavadora de 6T compacta para obra civil, riego y obras municipales.",
        code: "CDM6060N",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cdm6060n",
    },
    {
        brand: "LONKING",
        model: "Miniexcavadora CDM6035",
        desc: "Motor Kubota 18.2 kW (24 HP), peso 3.85 ton. Chasis retráctil y pluma desviable, ideal para espacios reducidos.",
        code: "CDM6035",
        badge: "Nueva",
        href: "/maquinaria-pesada/miniexcavadoras/cdm6035",
    },
    {
        brand: "LONKING",
        model: "Cargador CDM835H",
        desc: "Motor Weichai 99 kW (133 HP), cucharón 1.8 m³, carga nominal 3.500 kg. Cargador de ruedas todo terreno.",
        code: "CDM835H",
        badge: "Nueva",
        href: "/maquinaria-pesada/cargadores/cdm835h",
    },
    {
        brand: "LONKING",
        model: "Cargador CDM856H",
        desc: "Motor Weichai 170 kW (228 HP), cucharón 3.6 m³, carga nominal 5.500 kg. Cargador de ruedas de alta capacidad.",
        code: "CDM856H",
        badge: "Nueva",
        href: "/maquinaria-pesada/cargadores/cdm856h",
    },
    {
        brand: "LONKING",
        model: "Minicargador CDM312",
        desc: "Motor Kubota V3307 de 54.6 kW (73 HP), carga nominal 1.230 kg. Skid steer con cambio rápido de aditamentos.",
        code: "CDM312",
        badge: "Nueva",
        href: "/maquinaria-pesada/minicargadores/cdm312",
    },
    {
        brand: "LONKING",
        model: "Retrocargadora 83D",
        desc: "Motor Perkins 74.4 kW (100 HP), peso 8.3 ton. Cucharón cargador 1.0 m³ y excavador 0.2 m³. Vel. máx 39 km/h.",
        code: "LONKING83D",
        badge: "Nueva",
        href: "/maquinaria-pesada/retrocargadoras/83d",
    },
];

export const PRODUCTS: Product[] = [
    {
        brand: "LONKING",
        model: "Excavadora CDM6225",
        desc: 'Motor Cummins B6.7 de 129 kW (173 HP), peso operativo 21.8 ton. Excavadora de 22T con cabina ROPS y pantalla LCD 8".',
        code: "CDM6225",
        badge: "Nueva",
        href: "/maquinaria-pesada/excavadoras/cdm6225",
    },
    {
        brand: "LONKING",
        model: "Cargador CDM835H",
        desc: "Motor Weichai 99 kW (133 HP), cucharón 1.8 m³, carga nominal 3.500 kg. Cargador de ruedas todo terreno.",
        code: "CDM835H",
        badge: "Nueva",
        href: "/maquinaria-pesada/cargadores/cdm835h",
    },
    {
        brand: "LONKING",
        model: "Retrocargadora 83D",
        desc: "Motor Perkins 74.4 kW (100 HP), peso 8.3 ton. Cucharón cargador 1.0 m³ y excavador 0.2 m³. Vel. máx 39 km/h.",
        code: "LONKING83D",
        badge: "Nueva",
        href: "/maquinaria-pesada/retrocargadoras/83d",
    },
];

export const USED_PRODUCTS: Product[] = [
    {
        brand: "CASE Construction",
        model: "Excavadora CX130D",
        desc: "Motor FPT de 98 HP, peso operativo 13.5 ton. Excelente estado general, mantenimiento preventivo al día.",
        code: "CX130D",
        badge: "Usada",
        href: "/maquinaria-pesada/excavadoras/cx130d-usada",
        anio: 2019,
        horasUso: "4.200 hrs",
    },
    {
        brand: "Komatsu",
        model: "Bulldozer D65EX-17",
        desc: "Motor Komatsu SAA6D114E de 168 HP. Tren de rodaje al 70%, ideal para movimiento de tierra.",
        code: "D65EX",
        badge: "Usada",
        href: "/maquinaria-pesada/bulldozers/d65ex-usada",
        anio: 2017,
        horasUso: "7.800 hrs",
    },
    {
        brand: "Caterpillar",
        model: "Motoniveladora 120K",
        desc: "Motor Cat C7.1 de 149 HP, hoja de 3.7 m. Revisada y certificada, lista para proyectos viales.",
        code: "120K",
        badge: "Usada",
        href: "/maquinaria-pesada/motoniveladoras/120k-usada",
        anio: 2018,
        horasUso: "6.500 hrs",
    },
    {
        brand: "DYNAPAC",
        model: "Compactador CA250D",
        desc: "Rodillo vibratorio de 10 ton, frecuencia doble. Operativo y con inspección técnica reciente.",
        code: "CA250",
        badge: "Usada",
        href: "/maquinaria-pesada/compactadores/ca250d-usada",
        anio: 2020,
        horasUso: "3.100 hrs",
    },
    {
        brand: "Bobcat",
        model: "Minicargador S650",
        desc: "Motor Bobcat de 74 HP, capacidad de carga 1.066 kg. En buenas condiciones, listo para entregar.",
        code: "S650",
        badge: "Usada",
        href: "/maquinaria-pesada/minicargadores/s650-usada",
        anio: 2021,
        horasUso: "2.400 hrs",
    },
    {
        brand: "Hitachi",
        model: "Excavadora ZX135US-6",
        desc: "Motor Isuzu de 98 HP, radio corto de giro. Perfecta para obras urbanas con espacio limitado.",
        code: "ZX135",
        badge: "Usada",
        href: "/maquinaria-pesada/excavadoras/zx135-usada",
        anio: 2018,
        horasUso: "8.300 hrs",
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
    {
        icon: "mdi:map-marker-outline",
        text: "KM 20 Autopista norte Copacabana a Girardota",
    },
    { icon: "mdi:phone", text: "316 381 5694" },
    { icon: "mdi:email-outline", text: "comercioexterior@coninmaqsas.com" },
    {
        icon: "mdi:clock-outline",
        text: "Lun – Vie: 7am – 5pm | Sáb: 8am – 12pm",
    },
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
    "Venta de maquinaria usada",
    "Renta de maquinaria",
    "Repuestos originales",
    "Mantenimiento preventivo",
    "Servicio técnico certificado",
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
