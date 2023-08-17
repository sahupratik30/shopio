"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="items-center hidden h-10 overflow-hidden border rounded-full lg:flex w-96">
      <input
        className="flex-1 px-4 py-2 bg-transparent outline-none"
        type="text"
        placeholder="Search any product..."
      />

      <div className="flex items-center justify-center w-12 h-full text-white cursor-pointer bg-primary">
        <FontAwesomeIcon icon={faSearch} className="w-4" />
      </div>
    </div>
  );
};

export default SearchBar;
