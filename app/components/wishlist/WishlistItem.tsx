"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Rating from "../Rating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { ButtonType, Product } from "@/types";
import { formatPrice } from "@/helpers";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/slices/wishlist-slice";
import { addToCart } from "@/store/slices/cart-slice";

const WishlistItem = ({ item }: { item: Product }) => {
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();

  const { id, category, description, image, price, rating, title } = item;
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
          width={100}
          height={200}
          priority
          alt={title}
          className="object-contain"
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

      {showModal && (
        <Modal title="Remove from wishlist" onClose={() => setshowModal(false)}>
          <p className="mb-6">
            Do you want to remove this product from wishlist?
          </p>

          <div className="flex items-center justify-center gap-6">
            <Button
              text="No"
              onClick={() => setshowModal(false)}
              variant={ButtonType.secondary}
              className="w-20 min-w-max"
            />
            <Button
              text="Yes"
              onClick={_handleRemoveFromWishlist}
              variant={ButtonType.primary}
              className="w-20 min-w-max"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default WishlistItem;
