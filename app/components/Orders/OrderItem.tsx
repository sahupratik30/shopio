import Image from "next/image";

const OrderItem = () => {
  return (
    <div className="flex items-start gap-8">
      <Image
        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        alt="product"
        width={80}
        height={80}
        className="object-contain w-auto h-auto"
      />

      <div className="flex flex-col items-start gap-1">
        {/* Name */}
        <p className="text-sm text-gray-700 sm:text-base">Mens Cotton Jacket</p>
        {/* Price */}
        <p className="text-sm font-semibold sm:text-base">$55.99</p>
        {/* Quanity */}
        <p className="text-sm sm:text-base">QTY: 1</p>
      </div>
    </div>
  );
};

export default OrderItem;
