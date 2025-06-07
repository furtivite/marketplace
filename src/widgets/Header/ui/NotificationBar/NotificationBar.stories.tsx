import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBar } from './NotificationBar.tsx';

const meta: Meta<typeof NotificationBar> = {
  title: 'Widgets/Header/NotificationBar',
  component: NotificationBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotificationBar>;

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
