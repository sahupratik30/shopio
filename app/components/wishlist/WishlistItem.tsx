"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Rating from "../Rating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Product } from "@/types";
import { formatPrice } from "@/helpers";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/slices/wishlist-slice";
import { addToCart } from "@/store/slices/cart-slice";
import ConfirmModal from "../ConfirmModal";

const WishlistItem = ({ item }: { item: Product }) => {
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();

  const { id, category, image, price, rating, title } = item;
  const formattedPrice = formatPrice(price, "usd");

  // remove item from wishlist
  const _handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(id));
    setshowModal(false);
  };

  // move item to cart
  const _handleMoveToCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    _handleRemoveFromWishlist();
  };

  return (
    <>
      <div className="flex items-start gap-8">
        <Image
          src={image}
          width={95}
          height={95}
          priority={true}
          alt={title}
          className="object-contain w-auto h-auto"
        />

        <div className="flex flex-col">
          {/* product name and category */}
          <p className="mb-1 line-clamp-1">{title}</p>
          <p className="mb-2 text-xs text-gray-400 capitalize">{category}</p>

          <div className="flex flex-col gap-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-4 h-full cursor-pointer sm:w-5 text-primary"
              onClick={() => setshowModal(true)}
            />
            {/* price */}
            <p className="font-semibold text-dark sm:text-lg">
              {formattedPrice}
            </p>
          </div>

          {/* ratings */}
          <Rating count={rating.count} rating={rating.rate} />

          {/* move to cart */}
          <button
            className="btn w-max text-primary"
            onClick={_handleMoveToCart}
          >
            Move to cart
          </button>
        </div>
      </div>

      {showModal ? (
        <ConfirmModal
          title="Remove from wishlist"
          text="Do you want to remove this product from wishlist?"
          onClose={() => setshowModal(false)}
          onConfirm={_handleRemoveFromWishlist}
          onCancel={() => setshowModal(false)}
        />
      ) : null}
    </>
  );
};

export default WishlistItem;
