"use client";

import WishlistItem from "../../components/wishlist/WishlistItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Fallback from "@/app/components/UI/Fallback";

const WishlistPage = () => {
  const { items: wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  // wishlist fallback
  if (!wishlistItems.length) {
    return (
      <Fallback
        text="No products added to wishlist!"
        btnText="Explore Products"
        redirectUrl="/"
      />
    );
  }

  return (
    <div className="px-4">
      <div className="max-w-screen-md mx-auto mt-8 mb-24">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          You have{" "}
          <span className="text-primary">
            &quot;{wishlistItems.length}&quot;
          </span>{" "}
          {wishlistItems.length > 1 ? "items" : "item"} in your wishlist
        </h1>

        {/* Wishlist Items */}
        <div className="flex flex-col gap-12 p-4 bg-white rounded-md">
          {/* Single wishlist item */}
          {wishlistItems.map((wishlistItem) => (
            <WishlistItem key={wishlistItem.id} item={wishlistItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
