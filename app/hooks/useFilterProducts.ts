import { useMemo } from "react";
import { FilterType } from "@/types";
import useFetchProducts from "./useFetchProducts";

const useFilterProducts = (filterType: FilterType, value: string) => {
  const products = useFetchProducts();

  const filteredProducts = useMemo(() => {
    if (filterType === FilterType.category && value === "all") {
      return products;
    } else if (filterType === FilterType.category) {
      return products.filter((product) => product.category === value);
    } else if (filterType === FilterType.search) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    return products;
  }, [filterType, products, value]);

  return filteredProducts;
};

export default useFilterProducts;
