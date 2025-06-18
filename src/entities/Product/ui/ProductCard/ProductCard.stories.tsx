// src/entities/product/ui/ProductCard/ProductCard.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../../model/mockProducts';

const meta: Meta<typeof ProductCard> = {
  title: 'entities/product/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: {
    product: mockProducts[0],
    showStockStatus: true,
  },
  argTypes: {
    onAddToCart: { action: 'add-to-cart' },
    onToggleLike: { action: 'toggle-like' },
    showStockStatus: {
      control: 'boolean',
      description: 'Показывать ли статус наличия товара',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};

export const Liked: Story = {
  args: {
    product: { ...mockProducts[0], isLiked: true },
  },
};

export const OutOfStock: Story = {
  args: {
    product: { ...mockProducts[0], isInStock: false },
  },
};

export const WithoutStockStatus: Story = {
  args: {
    showStockStatus: false,
  },
};
