"use client";

import Rating from "@/app/components/Rating";
import Button from "@/app/components/UI/Button";
import ProductSkeleton from "@/app/components/UI/ProductSkeleton";
import useFetchProduct from "@/hooks/useFetchProduct";
import { formatPrice, isWishlistItem } from "@/helpers";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/slices/wishlist-slice";
import { ButtonType } from "@/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import ConfirmModal from "@/app/components/ConfirmModal";

const ProductPage = () => {
  const [showModal, setshowModal] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useFetchProduct(+params?.id);

  const formattedPrice = formatPrice(product?.price, "usd");

  // remove item from wishlist
  const _handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(+params?.id));
    setshowModal(false);
  };

  // add item to wishlist
  const _handleAddToWishlist = () => {
    if (!session) router.push("/login");
    dispatch(addToWishlist(product));
    setshowModal(false);
  };

  // add item to cart
  const _handleAddToCart = () => {
    if (!session) router.push("/login");
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <>
      {Object.keys(product)?.length ? (
        <div className="flex flex-col justify-center max-w-screen-md gap-16 p-4 mx-auto my-8 md:flex-row md:items-start md:my-16 md:justify-between mix-blend-multiply">
          <Image
            src={product?.image}
            width={150}
            height={150}
            alt={product?.title}
            priority
            className="object-contain w-auto h-auto mx-auto"
          />

          <div className="flex flex-col">
            <p className="mb-1">{product?.title}</p>
            <p className="mb-2 text-xs text-gray-400 capitalize">
              {product?.category}
            </p>

            {/* ratings */}
            <Rating
              count={product?.rating?.count}
              rating={product?.rating?.rate}
            />

            {/* price */}
            <p className="font-semibold text-dark sm:text-lg">
              {formattedPrice}
            </p>

            {/* description */}
            <p
              className="mt-4 mb-8 text-sm text-justify text-gray-600 first-letter:uppercase line-clamp-4"
              title={product?.description}
            >
              {product?.description}
            </p>

            <Button
              text="Add to cart"
              variant={ButtonType.primary}
              onClick={_handleAddToCart}
              className="mb-3"
            />
            <Button
              text={
                isWishlistItem(+params?.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
              variant={ButtonType.secondary}
              onClick={() => setshowModal(true)}
            />
          </div>
        </div>
      ) : null}

      {/* Confirm Modal */}
      {showModal ? (
        <ConfirmModal
          title={
            isWishlistItem(+params?.id)
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          text={
            isWishlistItem(+params?.id)
              ? "Do you want to remove this product from wishlist?"
              : "Do you want to add this product to wishlist?"
          }
          onClose={() => setshowModal(false)}
          onConfirm={
            isWishlistItem(+params?.id)
              ? _handleRemoveFromWishlist
              : _handleAddToWishlist
          }
          onCancel={() => setshowModal(false)}
        />
      ) : null}
    </>
  );
};

export default ProductPage;
