// src/entities/product/ui/ProductCardList/ProductCardList.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardList } from './ProductCardList';
import { mockProducts } from '../../../../entities/Product/model/mockProducts';
import { IProduct } from '../../../../entities/Product/model/types';

const meta: Meta<typeof ProductCardList> = {
  title: 'entities/product/ProductCardList',
  component: ProductCardList,
  tags: ['autodocs'],
  args: {
    products: mockProducts as IProduct[],
    ariaLabel: 'Список самых популярных товаров',
  },
  argTypes: {
    onAddToCart: { action: 'add-to-cart' },
    onToggleLike: { action: 'toggle-like' },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label для списка карточек',
    },
    className: {
      control: 'text',
      description: 'Дополнительные классы Tailwind для сетки',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCardList>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    products: [] as IProduct[],
  },
};

export const ManyItems: Story = {
  args: {
    products: [...mockProducts, ...mockProducts] as IProduct[],
  },
};
