import * as React from 'react';
import type { NotificationBarProps } from '@/widgets/Layout/ui/NotificationBar/types';
import { Layout } from '../../widgets/Layout/Layout';

const notification: NotificationBarProps = {
  text: 'Get 25% OFF on your first order.',
  link: {
    text: 'Order Now',
    href: '#',
  },
};

export const CatalogPage = () => (
  <Layout
    hasFooter
    hasNewsletter
    notificationBar={notification}
  >
    <h1>CATALOG</h1>
    {/* ProductList, фильтры и т.д. будут здесь */}
  </Layout>
);
