"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Rating from "../Rating";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { ButtonType } from "@/types";

const WishlistItem = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <div className="flex items-start gap-8">
        <Image
          src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
          width={100}
          height={200}
          priority
          alt={"product"}
          className="object-contain"
        />

        <div className="flex flex-col">
          {/* product name and category */}
          <p className="mb-1 line-clamp-1">
            {"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
          </p>
          <p className="mb-2 text-xs text-gray-400 capitalize">
            {"Men's Clothing"}
          </p>

          <div className="flex flex-col gap-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-4 h-full cursor-pointer sm:w-5 text-primary"
              onClick={() => setshowModal(true)}
            />
            {/* price */}
            <p className="font-semibold text-dark sm:text-lg">$109.95</p>
          </div>

          {/* ratings */}
          <Rating count={120} rating={3.9} />

          {/* move to cart */}
          <button className="btn w-max text-primary">Move to cart</button>
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

export default WishlistItem;
