import Image from "next/image";
import { useState } from "react";
import Button from "../UI/Button";
import { ButtonType, Product } from "@/types";
import Rating from "../Rating";
import { formatPrice, isWishlistItem } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/slices/wishlist-slice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showModal, setshowModal] = useState(false);

  const dispatch = useDispatch();

  const { id, title, price, category, description, image, rating } = product;
  const formattedPrice = formatPrice(price, "usd");

  // remove item from wishlist
  const _handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(id));
    setshowModal(false);
  };

  // add item to wishlist
  const _handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setshowModal(false);
  };

  // add item to cart
  const _handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className="p-4 bg-white rounded-md">
        <div className="flex items-center justify-center h-44">
          <Image
            src={image}
            height={95}
            width={95}
            alt={title}
            className="object-contain w-auto h-auto"
          />
        </div>

        <p className="mt-4 text-sm sm:text-base line-clamp-1" title={title}>
          {title}
        </p>
        <p className="mb-1 text-[10px] text-gray-400 capitalize">{category}</p>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-dark sm:text-lg">{formattedPrice}</p>

          <FontAwesomeIcon
            icon={isWishlistItem(id) ? faHeartSolid : faHeart}
            className="w-5 h-full cursor-pointer sm:w-6 text-primary"
            onClick={() => setshowModal(true)}
          />
        </div>

        {/* ratings */}
        <Rating count={rating?.count} rating={rating?.rate} />

        <p className="mt-4 mb-8 text-sm text-justify text-gray-600 line-clamp-3 md:line-clamp-2 first-letter:uppercase">
          {description}
        </p>

        {/* product actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href={`/product/${product.id}`}
            className="text-center btn text-primary"
          >
            View
          </Link>

          <Button
            text="Add"
            variant={ButtonType.primary}
            onClick={_handleAddToCart}
          />
        </div>
      </div>

      {/* Confirm Modal */}
      {showModal && (
        <Modal
          title={
            isWishlistItem(id) ? "Remove from wishlist" : "Add to wishlist"
          }
          onClose={() => setshowModal(false)}
        >
          <p className="mb-6">
            {isWishlistItem(id)
              ? "Do you want to remove this product from wishlist?"
              : "Do you want to add this product to wishlist?"}
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
              onClick={
                isWishlistItem(id)
                  ? _handleRemoveFromWishlist
                  : _handleAddToWishlist
              }
              variant={ButtonType.primary}
              className="w-20 min-w-max"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
