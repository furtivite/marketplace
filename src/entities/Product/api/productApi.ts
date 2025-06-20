import { baseApi } from '@/shared/api/baseApi';
import { mockProducts } from '../model/mockProducts';
import type { IProduct } from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      queryFn: async () => ({
        data: mockProducts,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
