// src/pages/HomePage/ui/FeatureList/FeatureList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { FeatureList } from './FeatureList';

// Mock the Feature component to simplify testing
vi.mock('../Feature/Feature', () => ({
  __esModule: true,
  Feature: ({ title }: { title: string }) => <div data-testid="feature">{title}</div>,
}));

// Helper to generate dummy items
const makeItems = (count: number) => Array.from({ length: count }, (_, i) => ({
  icon: () => (
    <div>
      icon-
      {i}
    </div>
  ),
  title: `Title ${i}`,
  subtitle: `Subtitle ${i}`,
}));

describe('FeatureList', () => {
  it('renders a list container with proper role and gap class', () => {
    render(<FeatureList items={makeItems(1)} />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex', 'gap-[54px]');
  });

  it('renders three features and uses justify-start for three items', () => {
    render(<FeatureList items={makeItems(3)} />);
    const features = screen.getAllByTestId('feature');
    expect(features).toHaveLength(3);
    expect(screen.getByRole('list')).toHaveClass('justify-start');
  });

  it('limits to three random features and uses justify-start when more than three items', () => {
    const items = makeItems(5);
    render(<FeatureList items={items} />);
    const features = screen.getAllByTestId('feature');
    expect(features).toHaveLength(3);
    expect(screen.getByRole('list')).toHaveClass('justify-start');
  });
});
