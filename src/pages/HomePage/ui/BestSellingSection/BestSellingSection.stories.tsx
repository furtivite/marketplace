// src/pages/HomePage/ui/BestSellingSection/BestSellingSection.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { BestSellingSection } from './BestSellingSection';
import { mockProducts } from '../../../../entities/Product/model/mockProducts';
import type { IProduct } from '../../../../entities/Product/model/types';

const meta: Meta<typeof BestSellingSection> = {
  title: 'pages/HomePage/BestSellingSection',
  component: BestSellingSection,
  tags: ['autodocs'],
  args: {
    products: mockProducts as IProduct[],
  },
  argTypes: {
    onAddToCart: { action: 'add-to-cart' },
    onToggleLike: { action: 'toggle-like' },
  },
};

export default meta;
type Story = StoryObj<typeof BestSellingSection>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    products: [] as IProduct[],
  },
};
