export const siteConfig = {
  legalName: 'ABE & JACK TECH MAESTROS LTD',
  name: 'AJ Tech Maestros',
  monogram: 'AJTM',
  tagline: 'Design. Engineer. Create.',
  description:
    'AJ Tech Maestros is an engineering and product development company offering CAD design, 3D printing, rapid prototyping, digital fabrication and related technology services.',
  email: 'ajtechmaestros@gmail.com',
  phone: '+254703656580',
  whatsappNumber: '254703656580',
  location: 'Roysambu, Nairobi, Kenya',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/products/', label: 'Products' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/request-quote/', label: 'Request Quote' },
  { href: '/contact/', label: 'Contact' },
];

export const whatsappMessage =
  'Hello AJ Tech Maestros, I would like to ask about your design, engineering, prototyping or 3D printing services.';

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;
