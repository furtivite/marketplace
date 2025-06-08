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

  const flattenItems = (
    list: BreadcrumbItem[],
  ): BreadcrumbItem[] => list.reduce<BreadcrumbItem[]>((acc, item) => {
    acc.push({ label: item.label, href: item.href });
    if (item.subItems) {
      acc.push(...flattenItems(item.subItems));
    }
    return acc;
  }, []);

  const flatItems = flattenItems(items);

  return (
    <Container className="py-4">
      <Typography
        as="h1"
        type={TYPOGRAPHY_TYPES.H3}
        className="mb-2 text-neutral-900 font-semibold"
      >
        {activeItem.label}
      </Typography>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 list-none p-0 m-0 text-neutral-600">
          {flatItems.map((item, index) => {
            const isLast = index === flatItems.length - 1;
            return (
              <li key={index} className="flex items-center">
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="text-neutral-500 hover:underline"
                  >
                    <Typography as="span" type={TYPOGRAPHY_TYPES.BODY_MEDIUM}>
                      {item.label}
                    </Typography>
                  </a>
                ) : (
                  <Typography
                    as="span"
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
