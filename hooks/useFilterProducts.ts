import { FilterType, Product } from "@/types";
import { useCallback, useEffect, useState } from "react";

const useFilterProducts = (
  filterType: FilterType,
  value: string,
  hasProductsLoaded?: boolean
) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (hasProductsLoaded || filterType === FilterType.search) {
      const products: Product[] = JSON.parse(
        localStorage.getItem("products") as string
      );

      const filterProducts = (products: Product[]): Product[] => {
        if (value.trim() === "") return [];
        if (filterType === FilterType.category && value === "all") {
          return products;
        } else if (filterType === FilterType.category) {
          return products.filter((product) => product.category === value);
        } else if (filterType === FilterType.search) {
          return products.filter((product) =>
            product.title
              .trim()
              .toLowerCase()
              .includes(value.trim().toLowerCase())
          );
        }
        return products;
      };

      const newProducts = filterProducts(products);
      setFilteredProducts(newProducts);
    }
  }, [filterType, hasProductsLoaded, value]);

  return { filteredProducts };
};

export default useFilterProducts;
