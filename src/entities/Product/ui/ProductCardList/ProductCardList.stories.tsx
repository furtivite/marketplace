import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardList } from './ProductCardList';
import { mockProducts } from '../../model/mockProducts';

const meta: Meta<typeof ProductCardList> = {
  title: 'entities/product/ProductCardList',
  component: ProductCardList,
  tags: ['autodocs'],
  args: {
    products: mockProducts,
    ariaLabel: 'Product list',
  },
  argTypes: {
    onAddToCart: { action: 'add-to-cart' },
    onToggleLike: { action: 'toggle-like' },
    ariaLabel: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCardList>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    products: [],
  },
};

export const ManyItems: Story = {
  args: {
    products: [...mockProducts, ...mockProducts],
  },
};
