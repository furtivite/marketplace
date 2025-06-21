// src/widgets/Layout/Layout.stories.tsx
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Layout, LayoutProps } from './Layout';

const meta: Meta<LayoutProps> = {
  title: 'widgets/Layout',
  component: Layout,
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Layout {...context.args} />}>
            <Route path="/" element={<Story />} />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<LayoutProps>;

export const Default: Story = {
  args: {},
  render: () => <div>Page content</div>,
};

export const WithoutHeader: Story = {
  args: { withoutHeader: true },
  render: () => <div>Page content</div>,
};

export const WithNotificationBar: Story = {
  args: {
    notificationBar: {
      text: 'Hello world!',
      link: { href: '#', text: 'Read more' },
    },
  },
  render: () => <div>Page content</div>,
};

export const FullWidth: Story = {
  args: { hasFullWidth: true },
  render: () => <div>Full-width page content</div>,
};

export const WithFooter: Story = {
  args: { hasFooter: true, hasNewsletter: true },
  render: () => <div>Page content</div>,
};
