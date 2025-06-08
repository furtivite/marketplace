// src/shared/ui/TextField/TextField.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TextField } from './TextField';

describe('TextField component', () => {
  it('renders label and links htmlFor to textarea id', () => {
    render(<TextField id="txt1" label="Comment" />);
    const label = screen.getByText(/Comment/);
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'txt1');
    const textarea = screen.getByLabelText('Comment') as HTMLTextAreaElement;
    expect(textarea).toHaveAttribute('id', 'txt1');
  });

  it('shows required asterisk when required=true', () => {
    render(<TextField id="txt2" label="Notes" required />);
    const label = screen.getByText(/\*/);
    expect(label).toBeInTheDocument();
    const textarea = screen.getByLabelText(/Notes/);
    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  it('forwards className and other props', () => {
    render(
      <TextField
        id="txt3"
        className="custom-field"
        placeholder="Type..."
        data-testid="tf"
      />,
    );
    const wrapper = screen.getByTestId('tf').parentElement!;
    expect(wrapper).toHaveClass('custom-field');
    expect(screen.getByPlaceholderText('Type...')).toBeInTheDocument();
  });

  it('sets correct ring color when error=false', () => {
    render(<TextField id="txt4" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('ring-neutral-200');
  });

  it('sets aria-invalid and red ring when error=true', () => {
    render(<TextField id="txt5" error />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveClass('ring-red-500');
  });

  it('renders error message when error is string and links aria-describedby', () => {
    render(<TextField id="txt6" error="Bad input" />);
    const textarea = screen.getByRole('textbox');
    // error div is visually hidden (sr-only) but in DOM
    const errorEl = screen.getByText('Bad input');
    expect(errorEl).toHaveAttribute('id', 'txt6-error');
    expect(textarea).toHaveAttribute('aria-describedby', 'txt6-error');
  });

  it('forwards ref to the textarea element', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<TextField id="txt7" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    expect(ref.current).toHaveAttribute('id', 'txt7');
  });
});
