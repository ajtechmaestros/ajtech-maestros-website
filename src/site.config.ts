export const siteConfig = {
  legalName: 'ABE & JACK TECH MAESTROS LTD',
  name: 'AJ Tech Maestros',
  monogram: 'AJTM',
  tagline: 'Design. Engineer. Create.',
  description:
    'AJ Tech Maestros is an engineering and product development company offering CAD design, 3D printing, rapid prototyping, digital fabrication and related technology services.',
  email: 'ajtechmaestros@gmail.com',
  phone: '+254703656580',
  phoneDisplay: '+254 703 656580',
  whatsappNumber: '254703656580',
  location: 'Roysambu, Nairobi, Kenya',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/academy/', label: 'Academy' },
  { href: '/products/', label: 'Products' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export const whatsappBase = `https://wa.me/${siteConfig.whatsappNumber}`;

export const whatsappMessages = {
  project: "Hello AJ Tech Maestros, I'd like to talk about a project.",
  services: "Hello AJ Tech Maestros, I'd like to ask about your services.",
  product: "Hello AJ Tech Maestros, I'd like to ask about a custom product.",
  academy: "Hello AJ Tech Maestros, I'd like to ask about Academy training.",
  academyPricing: "Hello AJ Tech Maestros, I'd like training pricing for the Academy.",
};

export const whatsappLink = (message: string = whatsappMessages.project) =>
  `${whatsappBase}?text=${encodeURIComponent(message)}`;

export const whatsappUrl = whatsappLink();
