export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
}

export enum FilterType {
  category = "category",
  search = "search",
}

export type Product = {
  id: string;
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
