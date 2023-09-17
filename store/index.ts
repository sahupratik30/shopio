import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, wishlistReducer } from "./reducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
