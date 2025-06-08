// src/shared/ui/Avatar/Avatar.test.tsx
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  it('renders initials when no image is provided', () => {
    render(<Avatar name="John" surname="Doe" />);
    // Показывает инициалы "JD"
    const initials = screen.getByText('JD');
    expect(initials).toBeInTheDocument();
    // Имеет aria-hidden="true"
    expect(initials).toHaveAttribute('aria-hidden', 'true');
    // Корневой элемент с aria-label="John Doe"
    const root = screen.getByLabelText('John Doe');
    expect(root).toBeInTheDocument();
    // По умолчанию круглая форма
    expect(root).toHaveClass('rounded-full');
  });

  it('renders image when image prop is provided', () => {
    const src = 'https://example.com/avatar.png';
    render(<Avatar name="Jane" surname="Smith" image={src} />);
    // Ищем <img> по пустому alt
    const img = screen.getByAltText('');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', src);
    // Инициалов не должно быть
    expect(screen.queryByText('JS')).toBeNull();
  });

  it('applies square shape when type="square"', () => {
    render(<Avatar name="Alice" surname="Brown" type="square" />);
    const root = screen.getByLabelText('Alice Brown');
    expect(root).toHaveClass('rounded-md');
    // Отображаются инициалы "AB"
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('forwards custom className and props', () => {
    render(
      <Avatar
        name="Tom"
        surname="Lee"
        className="custom-class"
        data-testid="avatar-root"
        title="User avatar"
      />,
    );
    const root = screen.getByTestId('avatar-root');
    expect(root).toHaveClass('custom-class');
    // Переданный атрибут title тоже установлен
    expect(root).toHaveAttribute('title', 'User avatar');
    // Базовые классы присутствуют
    expect(root).toHaveClass('w-12', 'h-12', 'bg-gray-100');
  });
});
