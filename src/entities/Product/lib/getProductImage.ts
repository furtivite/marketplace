// src/entities/product/lib/getProductImage.ts
const path: string = 'https://cdn.jsdelivr.net/gh/furtivite/cdn.common@v1.0.2/marketplace/images/goods';

export const getProductImage = (id: number): string => `${path}/goods-list--${id}.png`;
