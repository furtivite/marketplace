import * as React from 'react';
import { Container } from '../../shared/ui/Container';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NotificationBar } from './ui/NotificationBar';
import type { SpecialOfferProps } from './ui/types';

type LayoutProps = {
  children: React.ReactNode;
  withoutHeader?: boolean;
  hasNotificationBar?: boolean;
  hasFooter?: boolean;
  hasNewsletter?: boolean;
  hasFullWidth?: boolean;
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
}) => (
  <div className="min-h-screen flex flex-col">
    {hasNotificationBar && text && <NotificationBar text={text} link={link} />}
    {!withoutHeader && (
      <Header className="shadow-[0_1px_4px_0_rgba(255,255,255,0.4)] bg-white-0" />
    )}

    <main className="flex-grow">
      {hasFullWidth ? children : <Container className="py-8">{children}</Container>}
    </main>

    {hasFooter && (
      <Footer hasNewsletter={hasNewsletter} />
    )}
  </div>
);
