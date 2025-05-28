import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

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
