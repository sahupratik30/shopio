"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const CartItem = () => {
  return (
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
        <p className="mb-4 text-xs text-gray-400 capitalize">
          {"Men's Clothing"}
        </p>

        {/* price */}
        <p className="font-semibold text-dark sm:text-lg">{"$109.95"}</p>

        {/* increase/decrease item count */}
        <div className="flex items-center gap-4 my-2">
          <FontAwesomeIcon className="w-4 cursor-pointer" icon={faMinus} />
          <p className="text-lg font-medium select-none">1</p>
          <FontAwesomeIcon className="w-4 cursor-pointer" icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
