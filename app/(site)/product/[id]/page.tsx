"use client";

import Rating from "@/app/components/Rating";
import Button from "@/app/components/UI/Button";
import Modal from "@/app/components/UI/Modal";
import ProductSkeleton from "@/app/components/UI/ProductSkeleton";
import useFetchProduct from "@/app/hooks/useFetchProduct";
import { formatPrice } from "@/helpers";
import { ButtonType } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const [showModal, setshowModal] = useState(false);
  const params = useParams();
  const { product, loading } = useFetchProduct(+params?.id);
  const formattedPrice = formatPrice(product?.price, "usd");

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <>
      {Object.keys(product)?.length ? (
        <div className="flex flex-col justify-center max-w-screen-md gap-16 p-4 mx-auto my-8 md:flex-row md:items-start md:my-16 md:justify-between mix-blend-multiply">
          <Image
            src={product?.image}
            width={250}
            height={500}
            alt={product?.title}
            priority
            style={{ width: "auto", height: "auto" }}
            className="object-contain max-w-[250px] mx-auto"
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
              onClick={() => {}}
              className="mb-3"
            />
            <Button
              text="Add to wishlist"
              variant={ButtonType.secondary}
              onClick={() => setshowModal(true)}
            />
          </div>
        </div>
      ) : null}

      {/* Confirm Modal */}
      {showModal && (
        <Modal title="Add to wishlist" onClose={() => setshowModal(false)}>
          <p className="mb-6">Do you want to add this product to wishlist?</p>

          <div className="flex items-center justify-center gap-6">
            <Button
              text="No"
              onClick={() => setshowModal(false)}
              variant={ButtonType.secondary}
              className="w-20 min-w-max"
            />
            <Button
              text="Yes"
              onClick={() => {}}
              variant={ButtonType.primary}
              className="w-20 min-w-max"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductPage;
