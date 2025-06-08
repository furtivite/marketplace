import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'shared/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    message: 'Пример алерта',
    onClose: () => {
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Ошибка! Что-то пошло не так.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Успех! Всё хорошо.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Информационное сообщение.',
  },
};
