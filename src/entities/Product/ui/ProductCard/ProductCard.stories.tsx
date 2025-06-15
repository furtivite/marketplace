import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../../model/mockProducts';

const meta: Meta<typeof ProductCard> = {
  title: 'entities/product/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: {
    product: mockProducts[0],
  },
  argTypes: {
    onAddToCart: { action: 'add-to-cart' },
    onToggleLike: { action: 'toggle-like' },
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
