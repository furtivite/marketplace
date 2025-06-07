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

export const FooterNavigation: React.FC = () => {
  return (
    <nav
      aria-label="Footer navigation"
      className="flex flex-wrap gap-12 flex-1 justify-between"
    >
      {footerMenu.map(({ title, links }) => (
        <div key={title}>
          <Typography
            type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
            as="h3"
            className="mb-16 text-neutral-300"
          >
            {title}
          </Typography>
          <ul className="space-y-2" role="list">
            {links.map(({ label, href }) => (
              <Typography
                key={label}
                as="li"
                type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
                className="text-neutral-500"
                role="listitem"
              >
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </Typography>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
