// src/shared/ui/Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import ShoppingCartIcon from '../../assets/icons/add-to-cart_white.svg?react';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'white', 'outline-black'],
      description: 'Вариант отображения кнопки',
    },
    isSmall: {
      control: 'boolean',
      description: 'Компактная версия кнопки (32px высота)',
    },
    href: {
      control: 'text',
      description: 'Если указан, кнопка рендерится как <a>',
    },
    squareCorners: {
      control: 'boolean',
      description: 'Убирает скругление углов',
    },
    renderStartIcon: {
      control: false,
      description: 'Иконка слева от текста. Если указана, renderEndIcon игнорируется.',
    },
    renderEndIcon: {
      control: false,
      description: 'Иконка справа от текста (если нет renderStartIcon).',
    },
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
      description: 'Отключает кнопку',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Купить',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Добавить',
    variant: 'outline',
  },
};

export const White: Story = {
  args: {
    children: 'Детали',
    variant: 'white',
  },
};

export const OutlineBlack: Story = {
  args: {
    children: 'Назад',
    variant: 'outline-black',
  },
};

export const SmallDefault: Story = {
  args: {
    children: 'Купить',
    variant: 'default',
    isSmall: true,
  },
};

export const AsLink: Story = {
  args: {
    children: 'Перейти',
    href: 'https://example.com',
    variant: 'white',
  },
};

export const SquareCorners: Story = {
  args: {
    children: 'Купить',
    variant: 'default',
    squareCorners: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Купить',
    renderStartIcon: <ShoppingCartIcon className="h-5 w-5" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Купить',
    renderEndIcon: <ShoppingCartIcon className="h-5 w-5" />,
  },
};
