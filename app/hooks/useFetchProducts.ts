import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { Product } from "@/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const _fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      if (data) setProducts(data);
    } catch (error) {
      console.log("Error fetching products >>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;
