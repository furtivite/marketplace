// src/shared/utils/filterProductsByIds.test.ts

import { describe, it, expect } from 'vitest';
import { filterProductsByIds } from './filterProductsByIds';
import type { IProduct } from '../../entities/Product/model/types';

describe('filterProductsByIds', () => {
  const makeProduct = (id: number, name = `Product ${id}`): IProduct => ({
    id,
    title: name,
    price: id * 10,
    image: `${name.toLowerCase()}.png`,
    isInStock: true,
    isLiked: false,
  });

  const products: IProduct[] = [
    makeProduct(1),
    makeProduct(2),
    makeProduct(3),
    makeProduct(4),
    makeProduct(5),
  ];

  it('returns only products with matching ids', () => {
    const result = filterProductsByIds(products, [2, 4]);
    expect(result).toEqual([
      expect.objectContaining({ id: 2 }),
      expect.objectContaining({ id: 4 }),
    ]);
  });

  it('preserves the order of the original array', () => {
    const result = filterProductsByIds(products, [5, 1, 3]);
    expect(result.map((p) => p.id)).toEqual([1, 3, 5]);
  });

  it('returns an empty array if no ids match', () => {
    const result = filterProductsByIds(products, [999, 1000]);
    expect(result).toEqual([]);
  });

  it('returns an empty array if the id list is empty', () => {
    const result = filterProductsByIds(products, []);
    expect(result).toEqual([]);
  });

  it('ignores duplicate ids in the id list', () => {
    const result = filterProductsByIds(products, [2, 2, 3, 3]);
    expect(result.map((p) => p.id)).toEqual([2, 3]);
  });

  it('works with an empty products array', () => {
    const result = filterProductsByIds([], [1, 2, 3]);
    expect(result).toEqual([]);
  });
});
