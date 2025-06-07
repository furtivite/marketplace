import type { Meta, StoryObj } from '@storybook/react';
import { Newsletter } from './Newsletter';

const meta: Meta<typeof Newsletter> = {
  title: 'Widgets/Footer/Newsletter',
  component: Newsletter,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Newsletter>;

export const Primary: Story = {
  args: {},
};
