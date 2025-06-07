import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'shared/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    total: 24,
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    page: 1,
  },
};

export const Middle: Story = {
  args: {
    page: 12,
  },
};

export const End: Story = {
  args: {
    page: 24,
  },
};

export const CustomVisiblePages: Story = {
  args: {
    page: 10,
    visiblePages: 6,
  },
};

export const Disabled: Story = {
  args: {
    page: 3,
    disabled: true,
  },
};
