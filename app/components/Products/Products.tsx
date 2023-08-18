"use client";

import { FilterType } from "@/types";
import { useState } from "react";
import ProductCard from "./ProductCard";
import categories from "@/app/config/product-categories";
import useFilterProducts from "@/app/hooks/useFilterProducts";
import ProductSkeleton from "../UI/ProductSkeleton";

const Products = () => {
  const [category, setCategory] = useState("all");
  const { filteredProducts: products, loading } = useFilterProducts(
    FilterType.category,
    category
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
        <ProductSkeleton />
      ) : (
        <div className="grid gap-4 px-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
