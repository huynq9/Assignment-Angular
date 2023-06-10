export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  price_sale: number;
  sale_offer: number;
  desc: string;
  isNew: boolean;
  isInvistable: boolean;
  isFavorite: boolean;
  categoryId: string;
}
export interface IFormProduct {
  _id?: string;
  name: string;
  price: number;
  price_sale: number;
  sale_offer: number;
  desc: string;
  categoryId: string;
}
