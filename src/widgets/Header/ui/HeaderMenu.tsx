import * as React from 'react';
import { HeaderMenuItem } from './HeaderMenuItem';

type Category = {
  id: string;
  name: string;
};

type MenuItem = {
  id: string;
  label: string;
  subMenu?: Category[];
  href?: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'categories',
    label: 'Categories',
    subMenu: [
      { id: 'demo', name: 'Demo Category' },
      { id: 'demo2', name: 'Demo Category 2' },
    ],
  },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const HeaderMenu: React.FC = () => (
  <nav>
    <ul className="flex items-center gap-8">
      {MENU_ITEMS.map((item) => (
        <HeaderMenuItem key={item.id} {...item} />
      ))}
    </ul>
  </nav>
);
