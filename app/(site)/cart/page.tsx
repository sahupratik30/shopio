"use client";

import Link from "next/link";
import CartItem from "../../components/Cart/CartItem";
import PaymentDetails from "../../components/Cart/PaymentDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CartPage = () => {
  const { items: cartItems, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  // cart fallback
  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
        <h1 className="text-xl font-semibold text-gray-500 ">
          You haven&apos;t added any items yet!
        </h1>
        <Link href="/" className="btn bg-primary w-max">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="container mx-auto mt-8 mb-24">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          You have{" "}
          <span className="text-primary">&quot;{totalQuantity}&quot;</span>{" "}
          {totalQuantity > 1 ? "items " : "item "}
          in your cart
        </h1>

        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {/* Cart Items */}
          <div className="flex flex-col flex-[0.7] gap-12 p-4 bg-white rounded-md">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>

          {/* Payment Details */}
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
