import { Product, WishlistState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: WishlistState = {
  items: [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
