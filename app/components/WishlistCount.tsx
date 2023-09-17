"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const WishlistCount = () => {
  const { items } = useSelector((state: RootState) => state.wishlist);

  return (
    <div className="absolute flex items-center justify-center px-1 text-sm text-white rounded-md bg-primary -right-2 -top-2 full w-max">
      {items.length}
    </div>
  );
};

export default WishlistCount;
