"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <div className="absolute flex items-center justify-center px-1 text-sm text-white rounded-md bg-primary -right-2 -top-3 full w-max">
      {totalQuantity}
    </div>
  );
};

export default CartIcon;
