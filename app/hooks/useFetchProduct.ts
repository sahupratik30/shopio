import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../config";
import { Product } from "@/types";

const useFetchProduct = (productId: number) => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [loading, setLoading] = useState(false);

  const _fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/products/${productId}`);
      const data = await res.json();
      if (data) setProduct(data);
    } catch (error) {
      console.log("Error fetching product >>", error);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    _fetchProduct();
  }, [_fetchProduct]);

  return {
    product,
    loading,
  };
};

export default useFetchProduct;
