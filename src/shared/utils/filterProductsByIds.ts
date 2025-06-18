// src/shared/utils/filterProductsByIds.ts

import { IProduct } from '../../entities/Product/model/types';

/**
 * Фильтрует список продуктов по заданному массиву идентификаторов.
 *
 * @param products - массив продуктов
 * @param ids - массив id, которые нужно оставить
 * @returns новый массив продуктов, содержащий только те, чьи id присутствуют в ids
 */
export function filterProductsByIds(
  products: IProduct[],
  ids: Array<IProduct['id']>,
): IProduct[] {
  const idSet = new Set(ids);
  return products.filter((product) => idSet.has(product.id));
}
