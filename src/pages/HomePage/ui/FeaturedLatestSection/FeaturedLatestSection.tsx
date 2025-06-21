// src/pages/HomePage/ui/FeaturedLatestSection/FeaturedLatestSection.tsx

import * as React from 'react';
import clsx from 'clsx';
import { Container } from '../../../../shared/ui/Container';
import { IProduct } from '../../../../entities/Product/model/types';
import { ProductCardList } from '../../../../entities/Product/ui/ProductCardList/ProductCardList';

enum TabType {
  FEATURED = 'featured',
  LATEST = 'latest',
}

interface Props {
  featured: IProduct[];
  latest: IProduct[];
  onAddToCart?: (p: IProduct) => void;
  onToggleLike?: (p: IProduct) => void;
}

type TabsRef = Partial<Record<TabType, HTMLButtonElement | null>>;

/**
 * Секция с переключением между «Featured» и «Latest» товарами.
 * Полностью соответствует ARIA-паттерну Tabs и WCAG-рекомендациям.
 */
export const FeaturedLatestSection: React.FC<Props> = ({
  featured,
  latest,
  onAddToCart,
  onToggleLike,
}) => {
  const [activeTab, setActiveTab] = React.useState<TabType>(TabType.FEATURED);
  const idPrefix = React.useId();
  const tabsRef = React.useRef<TabsRef>({});

  const tabs: readonly { label: string; type: TabType }[] = [
    { label: 'Featured', type: TabType.FEATURED },
    { label: 'Latest', type: TabType.LATEST },
  ];

  const focusTab = (type: TabType) => {
    tabsRef.current[type]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = tabs.findIndex((t) => t.type === activeTab);

    switch (e.key) {
      case 'ArrowRight': {
        e.preventDefault();
        const nextType = tabs[(currentIndex + 1) % tabs.length].type;
        setActiveTab(nextType);
        focusTab(nextType);
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        const nextType = tabs[(currentIndex - 1 + tabs.length) % tabs.length].type;
        setActiveTab(nextType);
        focusTab(nextType);
        break;
      }
      case 'Home': {
        e.preventDefault();
        setActiveTab(tabs[0].type);
        focusTab(tabs[0].type);
        break;
      }
      case 'End': {
        e.preventDefault();
        setActiveTab(tabs[tabs.length - 1].type);
        focusTab(tabs[tabs.length - 1].type);
        break;
      }
      default:
        break;
    }
  };

  return (
    <section aria-labelledby={`${idPrefix}-title`}>
      <Container className="mt-[88px] mb-[128px]">
        <h2 id={`${idPrefix}-title`} className="sr-only">
          Product lists
        </h2>

        {/* Tablist */}
        <div
          role="tablist"
          aria-labelledby={`${idPrefix}-title`}
          className="flex justify-center gap-4 mb-8"
        >
          {tabs.map(({ label, type }) => (
            <button
              key={type}
              ref={(el) => {
                tabsRef.current[type] = el;
              }}
              id={`${idPrefix}-${type}-tab`}
              role="tab"
              aria-controls={`${idPrefix}-${type}-panel`}
              aria-selected={activeTab === type}
              tabIndex={activeTab === type ? 0 : -1}
              type="button"
              onClick={() => setActiveTab(type)}
              onKeyDown={handleKeyDown}
              className={clsx(
                'px-6 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                activeTab === type
                  ? 'bg-white text-neutral-800 border border-neutral-300'
                  : 'text-neutral-500 hover:text-neutral-900 border border-transparent',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Panels */}
        {tabs.map(({ type }) => (
          <div
            key={type}
            id={`${idPrefix}-${type}-panel`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}-${type}-tab`}
            hidden={activeTab !== type}
          >
            <ProductCardList
              products={
                type === TabType.FEATURED
                  ? featured.slice(0, 4)
                  : latest.slice(0, 4)
              }
              ariaLabel={
                type === TabType.FEATURED
                  ? 'Список избранных товаров'
                  : 'Список последних товаров'
              }
              onAddToCart={onAddToCart}
              onToggleLike={onToggleLike}
            />
          </div>
        ))}
      </Container>
    </section>
  );
};
