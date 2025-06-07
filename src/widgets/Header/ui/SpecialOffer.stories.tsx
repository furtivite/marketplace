// src/widgets/Header/ui/SpecialOffer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SpecialOffer } from './SpecialOffer';

const meta: Meta<typeof SpecialOffer> = {
  title: 'Widgets/Header/SpecialOffer',
  component: SpecialOffer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpecialOffer>;

export const TextOnly: Story = {
  args: {
    text: 'Это специальное предложение без ссылки',
  },
};

export const WithLink: Story = {
  args: {
    text: 'Это специальное предложение с ссылкой',
    link: {
      text: 'Подробнее',
      href: 'https://example.com',
    },
  },
};
