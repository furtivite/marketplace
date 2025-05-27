import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'shared/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    isSmall: { control: 'boolean' },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Frontend',
    isSmall: false,
  },
};

export const Small: Story = {
  args: {
    children: 'UI/UX',
    isSmall: true,
  },
};
