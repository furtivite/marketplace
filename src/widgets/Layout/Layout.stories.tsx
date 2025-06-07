import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'widgets/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: (args) => (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Layout {...args} />
    </div>
  ),
  args: {
    children: (
      <div style={{ height: 1200, backgroundColor: '#f0f0f0' }}>
        <p>Main content area with scroll</p>
      </div>
    ),
    withoutHeader: false,
    hasNotificationBar: false,
    hasFooter: false,
    hasNewsletter: false,
  },
};

export const WithNotificationBarAndFooter: Story = {
  render: (args) => (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Layout {...args} />
    </div>
  ),
  args: {
    children: (
      <div style={{ height: 1200, backgroundColor: '#f0f0f0' }}>
        <p>Main content with NotificationBar and Footer</p>
      </div>
    ),
    withoutHeader: false,
    hasNotificationBar: true,
    hasFooter: true,
    hasNewsletter: true,
    text: 'Special offer: 25% off!',
    link: { text: 'Order now', href: 'https://example.com' },
  },
};

export const WithoutHeaderWithFooter: Story = {
  render: (args) => (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Layout {...args} />
    </div>
  ),
  args: {
    children: (
      <div style={{ height: 1200, backgroundColor: '#f0f0f0' }}>
        <p>Layout without Header but with Footer</p>
      </div>
    ),
    withoutHeader: true,
    hasFooter: true,
  },
};
