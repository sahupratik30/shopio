import OrderCard from "@/app/components/Orders/OrderCard";
import db from "@/firebase";
import { authConfig } from "@/lib/auth";
import { Order } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import Link from "next/link";

const OrdersPage = async () => {
  const session = await getServerSession(authConfig);

  // fetch orders from database
  const ordersRef = collection(
    db,
    "users",
    session?.user?.email as string,
    "orders"
  );
  const orders = (await getDocs(ordersRef)).docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Order)
  );

  // orders fallback
  if (!orders?.length) {
    return (
      <div className="flex flex-col items-center gap-6 mx-auto my-24 w-max">
        <h1 className="text-xl font-semibold text-gray-500">
          You haven&apos;t ordered anything yet!
        </h1>

        <Link href="/" className="btn bg-primary w-max">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="flex flex-col max-w-5xl gap-6 mx-auto my-8">
        {orders?.map((order) => (
          <OrderCard key={order?.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
