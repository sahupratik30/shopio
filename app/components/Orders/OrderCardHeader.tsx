"use client";

import { formatPrice } from "@/helpers";
import moment from "moment";

type OrderCardHeaderProps = {
  id: string;
  amount: number;
  date: Date;
  itemsCount: number;
};

const OrderCardHeader = ({
  id,
  amount,
  date,
  itemsCount,
}: OrderCardHeaderProps) => {
  const formattedDate = moment(new Date(date)).format("ll");
  const formattedPrice = formatPrice(amount, "usd");

  return (
    <div className="flex flex-col gap-1 px-4 py-2 mb-8 lg:flex-row lg:justify-between lg:gap-0 bg-slate-100">
      {/* Order Date */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Order Date:</h2>
        <p className="text-sm">{formattedDate}</p>
      </div>

      {/* Order ID */}
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-gray-700">Order ID:</h2>
        <p className="w-full text-sm break-words">{id}</p>
      </div>

      {/* Order Items */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Total Items:</h2>
        <p className="text-sm">{itemsCount}</p>
      </div>

      {/* Order Total */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Order Total:</h2>
        <p className="text-sm font-semibold">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default OrderCardHeader;
