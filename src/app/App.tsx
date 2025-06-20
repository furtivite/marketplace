// src/app/App.tsx

import * as React from 'react';
import {
  BrowserRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import { useGetNotificationQuery } from '@/shared/api/notificationApi';
import { HomePage } from '../pages/HomePage/HomePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { Layout } from '../widgets/Layout/Layout';

const AppRoutes = () => {
  const location = useLocation();
  const { data: notification } = useGetNotificationQuery();

  const isHome = location.pathname === '/';

  return (

    <Routes>
      <Route element={(
        <Layout
          hasFooter
          hasNewsletter
          hasFullWidth={isHome}
          notificationBar={notification}
        />
      )}
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>

  );
};

export const App: React.FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
