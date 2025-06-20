import type { NotificationBarProps } from '@/widgets/Layout/ui/NotificationBar/types';
import { baseApi } from './baseApi';

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<NotificationBarProps, void>({
      // заменяем query → queryFn
      queryFn: async () => ({
        data: {
          text: 'Get 25% OFF on your first order.',
          link: {
            text: 'Order Now',
            href: '#',
          },
        },
      }),
    }),
  }),
});

export const { useGetNotificationQuery } = notificationApi;
