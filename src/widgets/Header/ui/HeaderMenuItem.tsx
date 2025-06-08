import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';

import ChevronDownIcon from '@/shared/assets/icons/chevron-down.svg?react';

type Category = {
  id: string;
  name: string;
};

type MenuItemProps = {
  id: string;
  label: string;
  subMenu?: Category[];
  href?: string;
};

export const HeaderMenuItem: React.FC<MenuItemProps> = ({
  id, label, subMenu, href,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  const toggleSubMenu = () => {
    if (subMenu) {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen
        && containerRef.current
        && !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (subMenu) {
    return (
      <li ref={containerRef} className="relative">
        <button
          type="button"
          onClick={toggleSubMenu}
          className="flex items-center text-neutral-500 cursor-pointer font-medium"
          aria-expanded={isOpen}
          aria-controls={`${id}-submenu`}
          aria-haspopup="true"
        >
          <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} className="text-neutral-500">
            {label}
          </Typography>
          <ChevronDownIcon
            className={`ml-1 transition-transform duration-300 text-neutral-500 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        {isOpen && (
          <ul
            id={`${id}-submenu`}
            role="menu"
            className="absolute mt-2 bg-white-0 border rounded shadow-md py-2 w-48"
          >
            {subMenu.map((cat, index) => (
              <React.Fragment key={cat.id}>
                {index > 0 && <div className="w-full h-px bg-white-100" />}
                <li role="menuitem" className="px-4 py-2 cursor-pointer hover:bg-neutral-100">
                  <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} className="text-neutral-500">
                    {cat.name}
                  </Typography>
                </li>
              </React.Fragment>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <a href={href} className="text-neutral-500 cursor-pointer font-medium">
        <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM} className="text-neutral-500">
          {label}
        </Typography>
      </a>
    </li>
  );
};
