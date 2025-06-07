import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

import SearchIcon from '../../assets/icons/search.svg?react';
import ClearIcon from '../../assets/icons/close.svg?react';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Small: Story = {
  args: {
    label: 'Name',
    placeholder: 'Short input',
    isSmall: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Name',
    placeholder: 'Invalid value',
    error: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: <SearchIcon className="w-5 h-5 text-neutral-400" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Clear',
    placeholder: 'Type something',
    endIcon: <ClearIcon className="w-5 h-5 text-neutral-400 cursor-pointer" />,
  },
};
