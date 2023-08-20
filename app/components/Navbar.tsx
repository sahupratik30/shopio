import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 p-4 bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-10">
          {/* logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl lg:text-4xl font-Rye text-primary"
          >
            SHOPIO
          </Link>
          {/* search bar */}
          <SearchBar />
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* user details */}
          {/* <div className="flex flex-col">
            <p className="-mb-1 text-xs">Hello,</p>
            <p className="text-sm md:text-base text-primary">Pratik</p>
          </div> */}

          {/* wishlist */}
          <Link href="/wishlist">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-6 h-full cursor-pointer sm:w-7 text-primary"
              title="Wishlist"
            />
          </Link>

          {/* cart */}
          <Link href="/cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-6 h-full sm:w-7 text-dark"
              title="Cart"
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
