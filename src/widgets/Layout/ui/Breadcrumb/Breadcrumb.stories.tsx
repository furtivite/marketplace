import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Widgets/Layout/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const exampleItems = [
  {
    label: 'Page Title',
    href: '/',
    subItems: [
      {
        label: 'Page name',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    items: exampleItems,
  },
};
