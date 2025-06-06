import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'shared/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: 'Tooltip text',
    position: 'top',
    adaptive: true,
  },
  argTypes: {
    adaptive: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: (args) => (
    <div className="flex justify-center w-full">
      <Tooltip {...args}>
        <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  render: (args) => (
    <div className="flex justify-center w-full">
      <Tooltip {...args}>
        <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    </div>
  ),
};

export const Left: Story = {
  render: (args) => (
    <div className="flex justify-end w-full pl-36">
      <Tooltip {...args}>
        <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    </div>
  ),
  args: {
    position: 'left',
    adaptive: false,
  },
};

export const Right: Story = {
  render: (args) => (
    <div className="flex justify-center w-full">
      <Tooltip {...args}>
        <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
      </Tooltip>
    </div>
  ),
  args: {
    position: 'right',
  },
};