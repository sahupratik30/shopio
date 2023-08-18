"use client";

import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFilterProducts from "../hooks/useFilterProducts";
import { FilterType } from "@/types";
import Link from "next/link";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filteredProducts: products } = useFilterProducts(
    FilterType.search,
    searchValue
  );

  const _handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      {/* search bar */}
      <div className="items-center hidden h-10 overflow-hidden border rounded-full lg:flex w-96">
        <input
          className="flex-1 px-4 py-2 bg-transparent outline-none"
          type="text"
          value={searchValue}
          placeholder="Search any product..."
          onChange={(e) => _handleSearch(e)}
        />

        <div className="flex items-center justify-center w-12 h-full text-white cursor-pointer bg-primary hover:opacity-90">
          <FontAwesomeIcon icon={faSearch} className="w-4" />
        </div>
      </div>

      {/* searched products list */}
      {searchValue?.trim()?.length ? (
        <div className="absolute z-20 w-full bg-white rounded-md shadow-md top-[120%] max-h-80 overflow-auto">
          {products?.length ? (
            products?.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="flex flex-col p-2 hover:bg-gray-100">
                  <p>{product.title}</p>
                  <p className="text-[10px] text-gray-400 capitalize">
                    {product.category}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="p-2 text-sm text-center text-grey-400">
              No product found!
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
