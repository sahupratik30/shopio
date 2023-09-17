import store from "@/store";

export const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(price);
};

export const isWishlistItem = (id: number) => {
  const { wishlist } = store.getState();

  const item = wishlist.items.find((item) => item.id === id);

  return item ? true : false;
};
