import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SortButton } from './SortButton';

const meta: Meta<typeof SortButton> = {
  title: 'shared/SortButton',
  component: SortButton,
  tags: ['autodocs'],
  args: {
    label: 'By price',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SortButton>;

export const Ascending: Story = {
  args: {
    order: 'asc',
    onChange: () => {},
  },
};

export const Descending: Story = {
  args: {
    order: 'desc',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    order: 'asc',
    disabled: true,
    onChange: () => {},
  },
};

// Вот правильный интерактивный story:
const InteractiveSortButton = (props: React.ComponentProps<typeof SortButton>) => {
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
  return (
    <SortButton
      {...props}
      order={order}
      onChange={setOrder}
      label="By name"
    />
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveSortButton {...args} />,
};
