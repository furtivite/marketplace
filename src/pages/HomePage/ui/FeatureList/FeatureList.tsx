// src/pages/HomePage/ui/FeatureList/FeatureList.tsx
import React from 'react';
import type { TFeatureProps } from '../Feature/types';
import type { TFeatureListProps } from './types';
import { Feature } from '../Feature/Feature';

export const FeatureList: React.FC<TFeatureListProps> = ({ items }) => {
  const displayedItems = React.useMemo<TFeatureProps[]>(() => {
    if (items.length <= 3) {
      return items;
    }
    return [...items].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [items]);

  const justifyClass = displayedItems.length <= 2 ? 'justify-between' : 'justify-start';

  return (
    <ul className={`flex ${justifyClass} gap-[54px]`}>
      {displayedItems.map((item, index) => (
        <li key={index}>
          <Feature {...item} />
        </li>
      ))}
    </ul>
  );
};
