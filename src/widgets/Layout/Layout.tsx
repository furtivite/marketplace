import * as React from 'react';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Container } from '../../shared/ui/Container';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NotificationBar } from './ui/NotificationBar';
import type { NotificationBarProps } from './ui/NotificationBar/types';

export type LayoutProps = {
  notificationBar?: NotificationBarProps;
  withoutHeader?: boolean;
  hasFooter?: boolean;
  hasNewsletter?: boolean;
  hasFullWidth?: boolean;
};

export const Layout: React.FC<LayoutProps> = React.memo(({
  withoutHeader = false,
  notificationBar,
  hasFooter = false,
  hasNewsletter = false,
  hasFullWidth = false,
}) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showHeaderOrNotification = Boolean(notificationBar) || !withoutHeader;

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderOrNotification && (
        <div
          className={clsx(
            'sticky top-0 z-50 bg-white-0 transition-shadow',
            scrolled && 'shadow-[0px_4px_8px_0px_rgba(182,183,188,0.2)]',
          )}
        >
          {notificationBar && (
            <NotificationBar text={notificationBar.text} link={notificationBar.link} />
          )}
          {!withoutHeader && <Header />}
        </div>
      )}

      <main className="flex-grow">
        <Container fullWidth={hasFullWidth} className="py-8">
          <Outlet />
        </Container>
      </main>

      {hasFooter && <Footer hasNewsletter={hasNewsletter} />}
    </div>
  );
});
