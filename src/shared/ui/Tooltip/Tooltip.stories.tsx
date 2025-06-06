import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'shared/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: 'Tooltip text',
    position: 'top',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    position: 'top',
    children: <button className="p-2 bg-blue-500 text-white-0 rounded">Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    children: <button className="p-2 bg-blue-500 text-white-0 rounded">Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    position: 'left',
    children: (
      <div className="w-full min-w-96 flex justify-end pl-24">
        <button className="p-2 bg-blue-500 text-white-0 rounded">Hover me</button>
      </div>
    ),
  },
};

export const Right: Story = {
  args: {
    position: 'right',
    children: <button className="p-2 bg-blue-500 text-white-0 rounded">Hover me</button>,
  },
};
