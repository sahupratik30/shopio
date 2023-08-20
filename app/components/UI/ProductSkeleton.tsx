import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col justify-center max-w-screen-md gap-8 p-2 mx-auto my-8 md:gap-16 md: md:flex-row md:items-start md:my-16">
      <div className="flex justify-center">
        <Skeleton height={350} width={250} />
      </div>
      <div className="flex flex-col space-y-2">
        <Skeleton width={300} />
        <Skeleton width={100} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
