// src/pages/HomePage/ui/Feature/Feature.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Feature } from './Feature';
import { type TFeatureProps } from './types';
import starBadge from '../../../../shared/assets/icons/star-badge.svg';

const StarBadgeIcon: React.FC = () => <img src={starBadge} alt="" width={24} height={24} />;

const meta: Meta<TFeatureProps> = {
  title: 'pages/HomePage/Feature',
  component: Feature,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false }, // icon is rendered as ReactNode
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TFeatureProps>;

export const Default: Story = {
  args: {
    icon: StarBadgeIcon,
    title: 'Free Shipping',
    subtitle: 'Upgrade your style today and get FREE shipping on all orders! Don\'t miss out.',
  },
};
