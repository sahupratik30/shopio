import { useEffect, useState } from "react";
import { BASE_URL } from "../app/config";

const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);

  const _fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      if (data) localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching products >>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products") as string);
    if (!products) _fetchProducts();
  }, []);

  return { loading };
};

export default useFetchProducts;
