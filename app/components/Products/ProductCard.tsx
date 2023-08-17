import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "../UI/Button";
import { ButtonType, Product } from "@/types";
import useFormatPrice from "@/app/hooks/useFormatPrice";

const ProductCard = ({ product }: { product: Product }) => {
  const formatPrice = useFormatPrice();
  const { id, title, price, category, description, image, rating } = product;

  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center justify-center h-44">
        <Image
          src={image}
          height={300}
          width={110}
          alt={title}
          className="object-contain"
        />
      </div>

      <p className="mt-4 text-sm sm:text-base line-clamp-1" title={title}>
        {title}
      </p>
      <p className="mb-1 text-[10px] text-gray-400 capitalize">{category}</p>

      <p className="flex items-center gap-2 font-semibold text-dark sm:text-lg">
        {formatPrice(price, "usd")}
      </p>

      {/* ratings */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-1">
          {Array(Math.round(rating?.rate))
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-green-700"
              />
            ))}
        </div>

        <p className="text-xs text-gray-400">{rating?.count} ratings</p>
      </div>

      <p className="mt-4 mb-8 text-sm text-justify text-gray-600 line-clamp-3 md:line-clamp-2">
        {description}
      </p>

      {/* product actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button text="View" variant={ButtonType.secondary} onClick={() => {}} />
        <Button text="Add" variant={ButtonType.primary} onClick={() => {}} />
      </div>
    </div>
  );
};

export default ProductCard;
