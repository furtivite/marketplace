// src/entities/product/model/mockProducts.test.ts
import { mockProducts } from './mockProducts';

describe('mockProducts', () => {
  it('должен содержать не более 11 товаров', () => {
    expect(mockProducts.length).toBeLessThanOrEqual(11);
  });

  it('каждый товар должен соответствовать интерфейсу Product', () => {
    mockProducts.forEach((p) => {
      expect(typeof p.id).toBe('number');
      expect(typeof p.title).toBe('string');
      expect(typeof p.price).toBe('number');
      expect(typeof p.image).toBe('string');
    });
  });
});
