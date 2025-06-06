import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import placeholderImg from './assets/placeholder-48x48.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'Emma',
    surname: 'Doe',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Circle: Story = {};

export const Square: Story = {
  args: {
    type: 'square',
  },
};

export const WithImage: Story = {
  args: {
    image: placeholderImg,
  },
};