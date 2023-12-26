"use client";

import { formatPrice } from "@/helpers";
import { OrderItem } from "@/types";
import Image from "next/image";

const OrderItem = ({ title, quantity, price, image }: OrderItem) => {
  const formattedPrice = formatPrice(price, "usd");

  return (
    <div className="flex items-start gap-8">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain"
      />

      <div className="flex flex-col items-start gap-1">
        {/* Name */}
        <p className="text-sm text-gray-700 sm:text-base">{title}</p>
        {/* Price */}
        <p className="text-sm font-semibold sm:text-base">{formattedPrice}</p>
        {/* Quanity */}
        <p className="text-sm sm:text-base">QTY:{quantity}</p>
      </div>
    </div>
  );
};

export default OrderItem;
