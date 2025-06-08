// src/shared/ui/Typography/Typography.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';
import { TYPOGRAPHY_TYPES } from './const';

describe('Typography component', () => {
  it('renders a div by default with "sans" base class and type class', () => {
    render(
      <Typography type={TYPOGRAPHY_TYPES.H1} data-testid="typ">
        Hello
      </Typography>,
    );
    const el = screen.getByTestId('typ');
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('sans');
    // H1 mapping includes text-[40px] and font-semibold
    expect(el).toHaveClass('text-[40px]', 'font-semibold');
    expect(el).toHaveTextContent('Hello');
  });

  it('renders the correct element when "as" prop is provided', () => {
    render(
      <Typography as="p" type={TYPOGRAPHY_TYPES.BODY_MEDIUM} data-testid="typ-p">
        Para
      </Typography>,
    );
    const el = screen.getByTestId('typ-p');
    expect(el.tagName).toBe('P');
    // BODY_MEDIUM mapping includes font-medium
    expect(el).toHaveClass('font-medium');
  });

  it('supports label element with htmlFor', () => {
    render(
      <Typography as="label" type={TYPOGRAPHY_TYPES.LABEL} htmlFor="foo" data-testid="typ-label">
        Lab
      </Typography>,
    );
    const el = screen.getByTestId('typ-label');
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveAttribute('for', 'foo');
    // LABEL mapping includes text-[12px] leading-[24px]
    expect(el).toHaveClass('text-[12px]', 'leading-[24px]');
  });

  it('forwards custom className and other props', () => {
    render(
      <Typography
        as="span"
        type={TYPOGRAPHY_TYPES.H4}
        className="custom"
        id="myid"
        data-testid="typ-span"
      >
        X
      </Typography>,
    );
    const el = screen.getByTestId('typ-span');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('custom', 'sans');
    expect(el).toHaveAttribute('id', 'myid');
  });

  it('applies uppercase class for LABEL_UPPERCASE type', () => {
    render(
      <Typography as="div" type={TYPOGRAPHY_TYPES.LABEL_UPPERCASE} data-testid="typ-up">
        Up
      </Typography>,
    );
    const el = screen.getByTestId('typ-up');
    expect(el).toHaveClass('uppercase');
    expect(el).toHaveClass('font-medium');
  });
});
