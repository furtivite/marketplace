import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Shared/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: 'dark',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Admin: Story = {
  args: {
    variant: 'admin',
  },
};
