import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="grid gap-4 px-2 my-8 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:my-16">
      <Skeleton height={450} />
      <Skeleton height={450} />
      <Skeleton height={450} />
      <Skeleton height={450} />
    </div>
  );
};

export default ProductCardSkeleton;
