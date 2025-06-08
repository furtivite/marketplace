import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { TYPOGRAPHY_TYPES } from './const';

const meta: Meta<typeof Typography> = {
  title: 'Shared/Typography',
  component: Typography,
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(TYPOGRAPHY_TYPES),
    },
    as: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    type: TYPOGRAPHY_TYPES.H1,
    as: 'div',
    children: 'Пример текста',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: {
    className: '',
  },
};
