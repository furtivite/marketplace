import * as React from 'react';
import { Container } from '../../../../shared/ui/Container';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';

import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';

type BreadcrumbItem = {
  label: string;
  href?: string;
  subItems?: BreadcrumbItem[];
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

function findLastItem(items: BreadcrumbItem[]): BreadcrumbItem {
  let current = items[items.length - 1];
  while (current.subItems && current.subItems.length > 0) {
    current = current.subItems[current.subItems.length - 1];
  }
  return current;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const activeItem = findLastItem(items);

  const flattenItems = (items: BreadcrumbItem[]): BreadcrumbItem[] => {
    let result: BreadcrumbItem[] = [];
    items.forEach((item) => {
      result.push({ label: item.label, href: item.href });
      if (item.subItems && item.subItems.length > 0) {
        result = result.concat(flattenItems(item.subItems));
      }
    });
    return result;
  };

  const flatItems = flattenItems(items);

  return (
    <Container className="py-4">
      <Typography type={TYPOGRAPHY_TYPES.H3} as='h1' className="mb-2">
        {activeItem.label}
      </Typography>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-neutral-600">
          {flatItems.map((item, index) => {
            const isLast = index === flatItems.length - 1;
            return (
              <li key={index} className="flex items-center">
                {!isLast && item.href ? (
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:underline"
                  >
                    <Typography type={TYPOGRAPHY_TYPES.BODY_MEDIUM}>
                      {item.label}
                    </Typography>
                  </a>
                ) : (
                  <Typography
                    type={TYPOGRAPHY_TYPES.BODY_MEDIUM}
                    className="text-neutral-900 font-semibold"
                  >
                    {item.label}
                  </Typography>
                )}
                {!isLast && (
                  <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
};
