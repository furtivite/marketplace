// src/widgets/Layout/Layout.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Layout } from './Layout';
import type { NotificationBarProps } from './ui/NotificationBar/types';

const meta: Meta<typeof Layout> = {
  title: 'widgets/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    withoutHeader: { control: 'boolean' },
    notificationBar: { control: 'object' },
    hasFooter: { control: 'boolean' },
    hasNewsletter: { control: 'boolean' },
    hasFullWidth: { control: 'boolean' },
  },
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
    notificationBar: undefined,
    hasFooter: false,
    hasNewsletter: false,
    hasFullWidth: false,
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
    notificationBar: {
      text: 'Special offer: 25% off!',
      link: { text: 'Order now', href: 'https://example.com' },
    } as NotificationBarProps,
    hasFooter: true,
    hasNewsletter: true,
    hasFullWidth: false,
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
    notificationBar: undefined,
    hasFooter: true,
    hasNewsletter: false,
    hasFullWidth: false,
  },
};

export const FullWidthContent: Story = {
  render: (args) => (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Layout {...args} />
    </div>
  ),
  args: {
    children: (
      <div style={{ height: 1200, backgroundColor: '#e0e0e0' }}>
        <p>Full-width content without Container wrapper</p>
      </div>
    ),
    withoutHeader: false,
    notificationBar: undefined,
    hasFooter: false,
    hasNewsletter: false,
    hasFullWidth: true,
  },
};
