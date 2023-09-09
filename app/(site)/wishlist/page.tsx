import Link from "next/link";
import WishlistItem from "../../components/wishlist/WishlistItem";

const WishlistPage = () => {
  let wishlist = ["Item 1", "Item 2"]; // just for demo, will be changed later

  // wishlist fallback
  if (!wishlist.length) {
    return (
      <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
        <h1 className="text-xl font-semibold text-gray-500">
          No products added to wishlist!
        </h1>

        <Link href="/" className="btn bg-primary w-max">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="max-w-screen-md mx-auto mt-8 mb-24">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          You have <span className="text-primary">&quot;2&quot;</span> items in
          your wishlist
        </h1>

        {/* Wishlist Items */}
        <div className="flex flex-col gap-12 p-4 bg-white rounded-md">
          {/* Single wishlist item */}
          <WishlistItem />
          <WishlistItem />
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
