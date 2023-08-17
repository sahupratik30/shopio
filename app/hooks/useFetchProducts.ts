import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { Product } from "@/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const _fetchProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products!");
    }
  };

  useEffect(() => {
    _fetchProducts();
  }, []);

  return products;
};

export default useFetchProducts;
