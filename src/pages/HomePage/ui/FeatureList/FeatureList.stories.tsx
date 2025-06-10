// src/pages/HomePage/ui/FeatureList/FeatureList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FeatureList } from './FeatureList';
import type { TFeatureListProps } from './types';
import starBadge from '../../../../shared/assets/icons/star-badge.svg';

const StarBadgeIcon: React.FC = () => (
  <img src={starBadge} alt="" width={24} height={24} />
);

const sampleItems = [
  { icon: StarBadgeIcon, title: 'Free Shipping', subtitle: 'On orders over $100' },
  { icon: StarBadgeIcon, title: 'Secure Payment', subtitle: '100% secure checkout' },
  { icon: StarBadgeIcon, title: '24/7 Support', subtitle: 'We are here to help' },
];

const meta: Meta<TFeatureListProps> = {
  title: 'pages/HomePage/FeatureList',
  component: FeatureList,
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
  },
};

export default meta;
type Story = StoryObj<TFeatureListProps>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const OneItem: Story = {
  args: {
    items: sampleItems.slice(0, 1),
  },
};

export const TwoItems: Story = {
  args: {
    items: sampleItems.slice(0, 2),
  },
};

export const ManyItems: Story = {
  args: {
    items: [...sampleItems,
      { icon: StarBadgeIcon, title: 'Easy Returns', subtitle: '30-day return policy' },
      { icon: StarBadgeIcon, title: 'Member Discounts', subtitle: 'Exclusive offers' },
    ],
  },
};
