import Image from "next/image";
import Button from "../UI/Button";
import { ButtonType, Product } from "@/types";
import { useRouter } from "next/navigation";
import Rating from "../Rating";
import { formatPrice } from "@/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { id, title, price, category, description, image, rating } = product;
  const formattedPrice = formatPrice(price, "usd");

  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex items-center justify-center h-44">
        <Image
          src={image}
          height={300}
          width={90}
          alt={title}
          style={{ width: "auto", height: "auto" }}
          className="object-contain"
        />
      </div>

      <p className="mt-4 text-sm sm:text-base line-clamp-1" title={title}>
        {title}
      </p>
      <p className="mb-1 text-[10px] text-gray-400 capitalize">{category}</p>

      <div className="flex items-center justify-between">
        <p className="font-semibold text-dark sm:text-lg">{formattedPrice}</p>

        <FontAwesomeIcon
          icon={faHeart}
          className="w-5 h-full cursor-pointer sm:w-6 text-primary"
          title="Wishlist"
        />
      </div>

      {/* ratings */}
      <Rating count={rating?.count} rating={rating?.rate} />

      <p className="mt-4 mb-8 text-sm text-justify text-gray-600 line-clamp-3 md:line-clamp-2 first-letter:uppercase">
        {description}
      </p>

      {/* product actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          text="View"
          variant={ButtonType.secondary}
          onClick={() => router.push(`/product/${product.id}`)}
        />
        <Button text="Add" variant={ButtonType.primary} onClick={() => {}} />
      </div>
    </div>
  );
};

export default ProductCard;
