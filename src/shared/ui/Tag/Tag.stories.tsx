import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'shared/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    isSmall: { control: 'boolean' },
    isFilled: { control: 'boolean' },
    inInputWrapper: { control: 'boolean' },
    inList: { control: 'boolean' }, // добавлен контрол для inList
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Frontend',
    isSmall: false,
    isFilled: false,
    inInputWrapper: false,
    inList: false, // по умолчанию false
  },
};

export const Small: Story = {
  args: {
    children: 'UI/UX',
    isSmall: true,
    isFilled: false,
    inInputWrapper: false,
    inList: false,
  },
};

export const Filled: Story = {
  args: {
    children: 'TypeScript',
    isSmall: false,
    isFilled: true,
    inInputWrapper: false,
    inList: false,
  },
};

export const InInputWrapper: Story = {
  args: {
    children: 'React',
    isSmall: false,
    isFilled: true,
    inInputWrapper: true,
    inList: false,
  },
};
