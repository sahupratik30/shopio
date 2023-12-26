"use client";

import { FilterType } from "@/types";
import { useState } from "react";
import ProductCard from "./ProductCard";
import categories from "@/app/config/product-categories";
import useFilterProducts from "@/hooks/useFilterProducts";
import ProductCardSkeleton from "../UI/ProductCardSkeleton";
import useFetchProducts from "@/hooks/useFetchProducts";

const Products = () => {
  const [category, setCategory] = useState("all");
  const { loading } = useFetchProducts();
  const { filteredProducts } = useFilterProducts(
    FilterType.category,
    category,
    !loading
  );

  return (
    <section className="my-8 md:my-16">
      {/* filter section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
        {categories.map((item, index) => (
          <p
            key={index}
            className={`capitalize text-sm sm:text-base  border-t-0 border-l-0 border-r-0 cursor-pointer ${
              category === item ? "border-2 border-b-primary" : ""
            }`}
            onClick={() => setCategory(item)}
          >
            {item}
          </p>
        ))}
      </div>

      {/* products container */}
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <div className="grid gap-4 px-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
