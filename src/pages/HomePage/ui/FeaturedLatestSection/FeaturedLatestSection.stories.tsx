// src/pages/HomePage/ui/FeaturedLatestSection/FeaturedLatestSection.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FeaturedLatestSection } from './FeaturedLatestSection';
import { mockProducts } from '../../../../entities/Product/model/mockProducts';
import { filterProductsByIds } from '../../../../shared/utils/filterProductsByIds';

/* ---------------------------------------------------
 * Test data
 * --------------------------------------------------*/
const featuredProducts = filterProductsByIds(mockProducts, [1, 2, 3, 4]);
const latestProducts = filterProductsByIds(mockProducts, [5, 6, 7, 8]);

/* ---------------------------------------------------
 * Meta
 * --------------------------------------------------*/
const meta: Meta<typeof FeaturedLatestSection> = {
  title: 'pages/HomePage/FeaturedLatestSection',
  component: FeaturedLatestSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      // Storybook’s built-in “light” может отличаться от чисто белого;
      // поэтому задаём свой пресет.
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  decorators: [
    /**
     * Оборачиваем историю в div с белым фоном, чтобы компонент
     * всегда отображался на «чистом» фоне, независимо от глобальных тем.
     */
    (Story) => (
      <div className="bg-white-0">
        <Story />
      </div>
    ),
  ],
};

export default meta;

/* ---------------------------------------------------
 * Stories
 * --------------------------------------------------*/
type Story = StoryObj<typeof FeaturedLatestSection>;

export const Default: Story = {
  render: (args) => <FeaturedLatestSection {...args} />,
  args: {
    featured: featuredProducts,
    latest: latestProducts,
  },
};

export const OnlyFeatured: Story = {
  render: (args) => <FeaturedLatestSection {...args} />,
  args: {
    featured: featuredProducts,
    latest: [],
  },
};

export const OnlyLatest: Story = {
  render: (args) => <FeaturedLatestSection {...args} />,
  args: {
    featured: [],
    latest: latestProducts,
  },
};
