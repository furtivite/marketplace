// src/pages/HomePage/ui/Feature/Feature.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Feature } from './Feature';

const DummyIcon: React.FC = () => <svg data-testid="dummy-icon" />;

describe('Feature', () => {
  const props = {
    icon: DummyIcon,
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  };

  it('renders the title as a heading', () => {
    render(<Feature {...props} />);
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Title' }),
    ).toBeInTheDocument();
  });

  it('renders the subtitle text', () => {
    render(<Feature {...props} />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders the icon inside an aria-hidden container', () => {
    render(<Feature {...props} />);
    const icon = screen.getByTestId('dummy-icon');
    expect(icon).toBeInTheDocument();
    const wrapper = icon.closest('div');
    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies the correct layout classes on root element', () => {
    const { container } = render(<Feature {...props} />);
    const article = container.querySelector('article');
    expect(article).toHaveClass(
      'flex',
      'flex-col',
      'max-w-[328px]',
      'pr-14',
      'space-y-3',
    );
  });
});
