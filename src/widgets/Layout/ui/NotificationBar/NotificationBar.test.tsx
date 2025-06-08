// src/widgets/Layout/ui/NotificationBar/NotificationBar.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { NotificationBar } from './NotificationBar';

describe('NotificationBar', () => {
  it('отображает текст предложения', () => {
    render(<NotificationBar text="Free shipping for orders over $50" />);
    expect(
      screen.getByText(/free shipping for orders over \$50/i),
    ).toBeInTheDocument();
  });

  it('рисует ссылку, если передан link-объект', () => {
    render(
      <NotificationBar
        text="Summer Sale"
        link={{ href: 'https://example.com/sale', text: 'Learn more' }}
      />,
    );

    const link = screen.getByRole('link', { name: /learn more/i });
    expect(link).toHaveAttribute('href', 'https://example.com/sale');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringMatching(/noopener/i));
  });

  it('не рисует ссылку, если link не передан', () => {
    render(<NotificationBar text="Just a notice" />);
    expect(screen.queryByRole('link')).toBeNull();
  });
});
