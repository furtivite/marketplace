import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>
    {children}
  </Provider>
);
