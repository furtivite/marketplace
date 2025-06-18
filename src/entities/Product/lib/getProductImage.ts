// src/entities/product/lib/getProductImage.ts
export const productImagePath: string = 'https://cdn.jsdelivr.net/gh/furtivite/cdn.common@v1.0.2/marketplace/images/goods';

export const getProductImage = (id: number): string => `${productImagePath}/goods-list--${id}.png`;
