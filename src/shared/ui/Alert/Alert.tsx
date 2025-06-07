import * as React from 'react';
import clsx from 'clsx';

import CheckIcon from '@/shared/assets/icons/check.svg?react';
import InfoIcon from '@/shared/assets/icons/info.svg?react';
import WarningIcon from '@/shared/assets/icons/warning.svg?react';
import CloseIcon from '@/shared/assets/icons/close.svg?react';

type AlertType = 'error' | 'success' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
}

const ICONS: Record<AlertType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  error: WarningIcon,
  success: CheckIcon,
  info: InfoIcon,
};

export const Alert: React.FC<AlertProps> = ({
                                              type,
                                              message,
                                              onClose,
                                              autoHideDuration,
                                            }) => {
  const [visible, setVisible] = React.useState(true);

  // Автоматическое скрытие по таймеру
  React.useEffect(() => {
    if (!autoHideDuration) return;
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, autoHideDuration);
    return () => clearTimeout(timer);
  }, [autoHideDuration, onClose]);

  // Закрытие по ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
        setTimeout(onClose, 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClose = React.useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const Icon = ICONS[type];

  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded-lg px-4 py-3 mb-2 w-full max-w-lg shadow transition-all duration-300',
        {
          'bg-red-100 border border-red-200 text-red-800': type === 'error',
          'bg-green-100 border border-green-200 text-green-800': type === 'success',
          'bg-neutral-900 border border-neutral-900 text-white-0': type === 'info',
          'opacity-0 translate-y-4 pointer-events-none': !visible,
          'opacity-100 translate-y-0': visible,
        },
      )}
      role="alert"
      aria-live="assertive"
    >
      <span className="flex-shrink-0">
        <Icon
          className={clsx('w-5 h-5', {
            'text-red-700': type === 'error',
            'text-green-700': type === 'success',
            'text-white-0': type === 'info',
          })}
        />
      </span>
      <span className="flex-1 text-sm">{message}</span>
      <button
        className={clsx(
          'ml-3 p-1 rounded focus:outline-none focus-visible:ring-2 transition',
          type === 'info'
            ? 'text-white-0 hover:bg-white/10'
            : 'text-inherit hover:bg-black/10',
        )}
        aria-label="Close"
        onClick={handleClose}
        tabIndex={0}
      >
        <CloseIcon
          className={clsx(
            'w-4 h-4 transition-opacity',
            type === 'info'
              ? 'text-white-0 hover:opacity-80'
              : 'text-inherit hover:opacity-70'
          )}
        />
      </button>
    </div>
  );
};
