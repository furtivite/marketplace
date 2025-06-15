import { getProductImage, productImagePath } from './getProductImage';

describe('getProductImage', () => {
  it('возвращает корректный URL для заданного id', () => {
    expect(getProductImage(1)).toBe(
      `${productImagePath}/goods-list--1.png`,
    );
    expect(getProductImage(11)).toContain('--11.png');
  });
});
