"use client";

import Link from "next/link";
import WishlistItem from "../../components/wishlist/WishlistItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const WishlistPage = () => {
  const { items: wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  // wishlist fallback
  if (!wishlistItems.length) {
    return (
      <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
        <h1 className="text-xl font-semibold text-gray-500">
          No products added to wishlist!
        </h1>

        <Link href="/" className="btn bg-primary w-max">
          Explore Products
        </Link>
      </div>
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
