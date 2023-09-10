export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
}

export enum FilterType {
  category = "category",
  search = "search",
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};
