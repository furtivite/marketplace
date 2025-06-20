import { baseApi } from '@/shared/api/baseApi';
import { type IProduct } from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
