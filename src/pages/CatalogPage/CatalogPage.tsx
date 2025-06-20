import * as React from 'react';
import { useGetNotificationQuery } from '../../shared/api/notificationApi';
import { Layout } from '../../widgets/Layout/Layout';

export const CatalogPage = () => {
  const { data: notification } = useGetNotificationQuery();

  return (
    <Layout
      hasFooter
      hasNewsletter
      notificationBar={notification}
    >
      <h1>CATALOG</h1>
      {/* ProductList, фильтры и т.д. будут здесь */}
    </Layout>
  );
};
