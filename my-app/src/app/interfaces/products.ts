export interface IProduct {
  _id?: string | number;
  name: string;
  price: number;
  price_sale: number;
  sale_offer: number;
  desc: string;
  image: Array<string>;
  isNew: boolean;
  isInvisible: boolean;
  isFavorited: boolean;
  categoryId: string;
  quantity: number;
}
export interface IFormProduct {
  _id?: string;
  name: string;
  price: number;
  // quantity: number;
  price_sale: number;
  sale_offer: number;
  desc: string;
  categoryId: string;
}