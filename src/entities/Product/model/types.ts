export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  isInStock?: boolean;
  isLiked?: boolean;
  isInCart?: boolean;
}
