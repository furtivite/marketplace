import * as React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Container } from '../../shared/ui/Container';
import { Input } from '../../shared/ui/Input';
import { Logo } from '../../shared/ui/Logo';
import { HeaderMenu } from './ui/HeaderMenu';

import CartIcon from '../../shared/assets/icons/cart.svg?react';
import UserIcon from '../../shared/assets/icons/user.svg?react';
import SearchIcon from '../../shared/assets/icons/search.svg?react';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={clsx('relative', className)}>
      <Container className="flex items-center justify-between py-4 relative z-10">
        <div className="flex items-center justify-between gap-8 max-w-[641px]">
          {isHome ? (
            <Logo />
          ) : (
            <a href="/" aria-label="Home">
              <Logo />
            </a>
          )}
          <HeaderMenu />
        </div>

        <div className="flex justify-end items-center gap-8">
          <Input
            placeholder="Search products"
            startIcon={<SearchIcon className="w-5 h-5 text-neutral-400" />}
          />
          <a
            href="/cart"
            aria-label="Cart"
            className="p-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 hover:bg-black/10"
          >
            <CartIcon className="w-6 h-6 text-neutral-700 transition-opacity hover:opacity-80" />
          </a>
          <a
            href="/profile"
            aria-label="User Profile"
            className="p-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 hover:bg-black/10"
          >
            <UserIcon className="w-6 h-6 text-neutral-700 transition-opacity hover:opacity-80" />
          </a>
        </div>
      </Container>
    </header>
  );
};
