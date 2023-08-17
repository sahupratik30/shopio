import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 px-2 py-4 bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-10">
          {/* logo */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Rye text-primary">
            SHOPIO
          </h1>
          {/* search bar */}
          <SearchBar />
        </div>

        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {/* user details */}
          <div className="flex flex-col">
            <p className="-mb-1 text-xs">Hello,</p>
            <p className="text-sm md:text-base text-primary">Pratik</p>
          </div>
          {/* cart */}
          <Link href="/cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-6 h-full sm:w-7 text-dark"
            />
            <div className="absolute flex items-center justify-center px-1 text-sm text-white rounded-md bg-primary -right-2 -top-3 full w-max">
              0
            </div>
          </Link>
          {/* login and logout */}
          <Link href="/login" className="btn bg-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
