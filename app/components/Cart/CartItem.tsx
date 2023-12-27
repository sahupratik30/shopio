"use client";

import { formatPrice } from "@/helpers";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { CartItem } from "@/types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

enum CartAction {
  add = "add",
  remove = "remove",
}

const CartItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();

  const { id, image, category, price, quantity, title } = item;
  const formattedPrice = formatPrice(price, "usd");

  // update item count in cart
  const _updateCart = (action: CartAction) => {
    switch (action) {
      case CartAction.add:
        dispatch(addToCart({ ...item, quantity: 1 }));
        break;
      case CartAction.remove:
        dispatch(removeFromCart(id));
        break;
    }
  };

  return (
    <div className="flex items-start gap-8">
      <Link href={`/product/${id}`} as={`/product/${id}`}>
        <Image
          src={image}
          width={65}
          height={65}
          priority={true}
          alt={title}
          className="object-contain w-auto h-auto"
        />
      </Link>

      <div className="flex flex-col">
        {/* product name and category */}
        <p className="mb-1 line-clamp-1">{title}</p>
        <p className="mb-4 text-xs text-gray-400 capitalize">{category}</p>

        {/* price */}
        <p className="font-semibold text-dark sm:text-lg">{formattedPrice}</p>

        {/* increase/decrease item count */}
        <div className="flex items-center gap-4 my-2">
          <FontAwesomeIcon
            className="w-4 cursor-pointer text-primary"
            icon={faMinus}
            onClick={() => _updateCart(CartAction.remove)}
          />
          <p className="text-lg font-medium select-none">{quantity}</p>
          <FontAwesomeIcon
            className="w-4 cursor-pointer text-primary"
            icon={faPlus}
            onClick={() => _updateCart(CartAction.add)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
