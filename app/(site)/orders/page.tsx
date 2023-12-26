import OrderCard from "@/app/components/Orders/OrderCard";
import Link from "next/link";

const OrdersPage = () => {
  // orders fallback
  //   if () {
  //     return (
  //       <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
  //         <h1 className="text-xl font-semibold text-gray-500">
  //           You haven&apos;t ordered anything yet!
  //         </h1>

  //         <Link href="/" className="btn bg-primary w-max">
  //           Explore Products
  //         </Link>
  //       </div>
  //     );
  //   }

  return (
    <div className="px-4">
      <div className="flex flex-col max-w-5xl gap-6 mx-auto my-8">
        <OrderCard />
      </div>
    </div>
  );
};

export default OrdersPage;
