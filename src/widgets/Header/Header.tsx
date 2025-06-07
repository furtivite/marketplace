import * as React from 'react';
import { Container } from '../../shared/ui/Container';
import { Input } from '../../shared/ui/Input';
import { Logo } from '../../shared/ui/Logo';
import { HeaderMenu } from './ui/HeaderMenu';

import CartIcon from '../../shared/assets/icons/cart.svg?react';
import UserIcon from '../../shared/assets/icons/user.svg?react';


export const Header: React.FC = () => {
  return (
    <header className="border-b relative">
      <Container className="flex items-center justify-between py-4 relative z-10">
        <div className="flex items-center justify-between gap-8 max-w-[641px]">
          <Logo />
          <HeaderMenu />
        </div>

        <div className="flex justify-end items-center gap-8">
          <Input placeholder="Search products" />
          <a href="/cart" aria-label="Cart">
            <CartIcon className="w-6 h-6 text-neutral-700 hover:text-primary-700" />
          </a>
          <a href="/profile" aria-label="User Profile">
            <UserIcon className="w-6 h-6 text-neutral-700 hover:text-primary-700" />
          </a>
        </div>
      </Container>
    </header>
  );
};
