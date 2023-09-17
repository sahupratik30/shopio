import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import Button from "./UI/Button";
import { ButtonType } from "@/types";
import CartCount from "./CartCount";
import WishlistCount from "./WishlistCount";

const Navbar = async () => {
  const session = await getServerSession(authConfig);
  console.log(session);
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
          {session ? (
            <div className="flex flex-col">
              <p className="-mb-1 text-xs">Hello,</p>
              <p className="text-sm md:text-base text-primary">
                {session?.user?.name?.split(" ")?.[0]}
              </p>
            </div>
          ) : null}

          {/* wishlist */}
          <Link href="/wishlist" className="relative">
            <FontAwesomeIcon
              icon={faHeart}
              className="w-6 h-full cursor-pointer sm:w-7 text-primary"
              title="Wishlist"
            />
            <WishlistCount />
          </Link>

          {/* cart */}
          <Link href="/cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-6 h-full sm:w-7 text-dark"
              title="Cart"
            />
            <CartCount />
          </Link>

          {/* login and logout */}
          {!session ? (
            <Link href="/login" className="btn bg-primary">
              Login
            </Link>
          ) : (
            <Button
              text="Logout"
              variant={ButtonType.secondary}
              action="logout"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
