import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'white', 'outline-black'],
    },
    isSmall: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Купить',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Добавить',
    variant: 'outline',
  },
};

export const White: Story = {
  args: {
    children: 'Детали',
    variant: 'white',
  },
};

export const OutlineBlack: Story = {
  args: {
    children: 'Назад',
    variant: 'outline-black',
  },
};

export const SmallDefault: Story = {
  args: {
    children: 'Купить',
    variant: 'default',
    isSmall: true,
  },
};

export const SmallOutline: Story = {
  args: {
    children: 'Добавить',
    variant: 'outline',
    isSmall: true,
  },
};

export const SmallOutlineBlack: Story = {
  args: {
    children: 'Назад',
    variant: 'outline-black',
    isSmall: true,
  },
};

export const AsLink: Story = {
  args: {
    children: 'Перейти',
    href: 'https://example.com',
    variant: 'white',
  },
};
