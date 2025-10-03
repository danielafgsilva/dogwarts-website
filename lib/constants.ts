// Service data
export const SERVICES = [
  {
    icon: 'Home',
    title: "Petsitting",
    desc: "Cuidados ao domicílio",
    detail: "Sessões de 1h30 no conforto da sua casa, mantendo a rotina do seu cão.",
    price: "A partir de 15€",
    color: "primary",
    delay: "delay-100",
    bgColor: "bg-[#FDCF4D]/10",
    iconColor: "text-[#FDCF4D]",
    priceColor: "bg-[#FDCF4D] text-[#1F3B75]",
  },
  {
    icon: 'MapPin',
    title: "Dogwalking",
    desc: "Passeios diários",
    detail: "Passeios energizantes e socializantes adaptados às necessidades do seu cão.",
    price: "A partir de 12€",
    color: "accent",
    delay: "delay-200",
    bgColor: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
    priceColor: "bg-[#8B5CF6] text-white",
  },
  {
    icon: 'Clock',
    title: "Creche/Daycare",
    desc: "Cuidados diurnos",
    detail: "Ambiente seguro e divertido para o seu cão durante o dia de trabalho.",
    price: "A partir de 25€",
    color: "secondary",
    delay: "delay-300",
    bgColor: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
    priceColor: "bg-[#10B981] text-white",
  },
  {
    icon: 'Heart',
    title: "Estadia Familiar",
    desc: "Hospedagem completa",
    detail: "O seu cão fica na nossa família durante as suas férias ou viagens.",
    price: "A partir de 30€/dia",
    color: "chart-4",
    delay: "delay-400",
    bgColor: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
    priceColor: "bg-[#F59E0B] text-white",
  },
] as const;

// Testimonials data
export const TESTIMONIALS = [
  {
    stars: 5,
    text: "A Dogwarts transformou a nossa rotina! O Max fica sempre feliz e eu trabalho tranquila sabendo que está em boas mãos.",
    initials: "MC",
    name: "Maria Costa",
    role: "Tutora do Max",
    color: "primary",
    delay: "delay-100",
    bgColor: "bg-[#FDCF4D]/20",
    textColor: "text-[#1F3B75]",
  },
  {
    stars: 5,
    text: "Profissionalismo e carinho genuíno. A Luna adora os passeios e volta sempre cansada e feliz. Recomendo vivamente!",
    initials: "JS",
    name: "João Silva",
    role: "Tutor da Luna",
    color: "accent",
    delay: "delay-200",
    bgColor: "bg-[#8B5CF6]/20",
    textColor: "text-[#8B5CF6]",
  },
  {
    stars: 5,
    text: "Durante as nossas férias, o Bobby ficou na Dogwarts. Voltámos e ele estava radiante! Serviço de confiança total.",
    initials: "AF",
    name: "Ana Ferreira",
    role: "Tutora do Bobby",
    color: "secondary",
    delay: "delay-300",
    bgColor: "bg-[#10B981]/20",
    textColor: "text-[#10B981]",
  },
] as const;

// Navigation links
export const FOOTER_LINKS = {
  services: [
    { href: "/servicos", label: "Petsitting" },
    { href: "/servicos", label: "Dogwalking" },
    { href: "/servicos", label: "Creche/Daycare" },
    { href: "/servicos", label: "Estadia Familiar" },
  ],
  company: [
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/testemunhos", label: "Testemunhos" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ],
} as const;

// Contact information
export const CONTACT_INFO = {
  phone: "+351 XXX XXX XXX",
  email: "info@dogwarts.pt",
  location: "Lisboa, Portugal",
} as const;

// Brand colors
export const BRAND_COLORS = {
  primary: "#FDCF4D",
  secondary: "#1F3B75",
  accent: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
} as const;
