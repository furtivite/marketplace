import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterMenuSection {
  title: string;
  links: FooterLink[];
}

const footerMenu: FooterMenuSection[] = [
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Terms of use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'My Account', href: '#' },
      { label: 'Checkout', href: '#' },
      { label: 'Cart', href: '#' },
    ],
  },
];

export const FooterNavigation: React.FC = () => (
  <nav
    aria-label="Footer navigation"
    className="flex flex-wrap gap-12 flex-1 justify-between"
  >
    {footerMenu.map(({ title, links }) => (
      <div key={title}>
        <Typography
          as="h3"
          type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
          className="mb-4 text-neutral-300"
        >
          {title}
        </Typography>
        <ul className="space-y-2 list-none p-0 m-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-neutral-500 hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
);
