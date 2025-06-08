import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'shared/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    label: 'Title',
    value: 75,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
