import { IProduct } from './types';
import { getProductImage } from '../lib/getProductImage';

export const mockProducts: IProduct[] = [
  {
    id: 1,
    title: 'Classic Monochrome Tees',
    price: 35,
    image: getProductImage(1),
  },
  {
    id: 2,
    title: 'Monochromatic Wardrobe',
    price: 27,
    image: getProductImage(2),
  },
  {
    id: 3,
    title: 'Essential Neutrals',
    price: 22,
    image: getProductImage(3),
  },
  {
    id: 4,
    title: 'UTRAANET Black',
    price: 43,
    image: getProductImage(4),
  },
  {
    id: 5,
    title: 'Elegant Ebony Sweatshirts',
    price: 35,
    image: getProductImage(5),
  },
  {
    id: 6,
    title: 'Sleek and Cozy Black',
    price: 57,
    image: getProductImage(6),
  },
  {
    id: 7,
    title: 'Raw Black Tees',
    price: 19,
    image: getProductImage(7),
  },
  {
    id: 8,
    title: 'MOCKUP Black',
    price: 30,
    image: getProductImage(8),
  },
  // {
  //   id: 9,
  //   title: 'Monochromatic Wardrobe',
  //   price: 27,
  //   image: getProductImage(9),
  // },
  {
    id: 10,
    title: 'Classic Monochrome Tees',
    price: 35,
    image: getProductImage(10),
  },
  {
    id: 11,
    title: 'Athletic Shirt',
    price: 35,
    image: getProductImage(11),
  },
];
