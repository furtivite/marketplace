// src/pages/HomePage/ui/BrowseBanner/BrowseBanner.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { BrowseBanner } from './BrowseBanner';

// локальные картинки (1× и 2×) — лежат в assets HomePage
import poncho1x from '../../assets/browse-poncho.png';
import poncho2x from '../../assets/browse-poncho@2x.png';

const BannerImage: React.FC = () => (
  <picture>
    <source srcSet={`${poncho2x} 2x, ${poncho1x} 1x`} />
    <img src={poncho1x} alt="" width={225} height={311} />
  </picture>
);

const meta: Meta<typeof BrowseBanner> = {
  title: 'pages/HomePage/BrowseBanner',
  component: BrowseBanner,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof BrowseBanner>;

export const Default: Story = {
  render: (args) => <BrowseBanner {...args} />,
  args: {
    title: 'Browse Our Fashion Paradise!',
    subtitle:
      'Step into a world of style and explore our diverse collection of clothing categories.',
    link: {
      text: 'Start Browsing',
      href: '#',
      hasArrow: true,
    },
    BannerImage,
  },
};
