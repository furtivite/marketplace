import type { Meta, StoryObj } from '@storybook/react';
import { TagsInput } from './TagsInput';

const meta: Meta<typeof TagsInput> = {
  title: 'shared/TagsInput',
  component: TagsInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const Default: Story = {
  args: {
    label: 'Tags',
    tags: ['React', 'TypeScript'],
    onRemove: (tag) => console.log('Removed:', tag),
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Tags',
    tags: ['React'],
    error: true,
    onRemove: (tag) => console.log('Removed:', tag),
  },
};
