// src/widgets/Layout/Layout.tsx
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Container } from '../../shared/ui/Container';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NotificationBar } from './ui/NotificationBar';
import type { SpecialOfferProps } from './ui/NotificationBar/types';

export type LayoutProps = {
  children: React.ReactNode
  withoutHeader?: boolean
  hasNotificationBar?: boolean
  hasFooter?: boolean
  hasNewsletter?: boolean
  hasFullWidth?: boolean
} & Partial<SpecialOfferProps>;

export const Layout: React.FC<LayoutProps> = ({
  children,
  withoutHeader = false,
  hasNotificationBar = false,
  hasFooter = false,
  hasNewsletter = false,
  hasFullWidth = false,
  text,
  link,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const hasNotificationOrHeader = hasNotificationBar || !withoutHeader;

  return (
    <div className="min-h-screen flex flex-col">
      {hasNotificationOrHeader && (
        <div className={clsx(
          'sticky top-0 z-50 bg-white-0 transition-shadow',
          { 'shadow-[0px_4px_8px_0px_rgba(182,183,188,0.2)]': scrolled },
        )}
        >
          {hasNotificationBar && text && <NotificationBar text={text} link={link} />}
          {!withoutHeader && <Header />}
        </div>
      )}

      <main className="flex-grow">
        {hasFullWidth ? (
          children
        ) : (
          <Container className="py-8">{children}</Container>
        )}
      </main>

      {
        hasFooter && <Footer hasNewsletter={hasNewsletter} />
      }
    </div>
  );
};
