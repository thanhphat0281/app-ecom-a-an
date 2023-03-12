export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  color: string;
  rating: {
    rate: number;
    count: number;
  };
  brands: string
}
