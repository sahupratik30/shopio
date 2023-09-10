import { CartItem, CartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        // if item is already in cart just increase its quantity
        state.items[itemIndex].quantity += action.payload.quantity;
        state.totalQuantity += action.payload.quantity;
        state.totalAmount += action.payload.price * action.payload.quantity;
      } else {
        // if item is not in cart then add it to cart
        state.items.push(action.payload);
        state.totalQuantity++;
        state.totalAmount += action.payload.price;
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity > 1) {
        // if item quantity is greater than 1 then just reduce its quantity
        state.items[itemIndex].quantity--;
      } else {
        // if item quantity is 1 then remove it from cart
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
