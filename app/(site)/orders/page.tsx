import OrderCard from "@/app/components/Orders/OrderCard";
import Fallback from "@/app/components/UI/Fallback";
import db from "@/firebase";
import { authConfig } from "@/lib/auth";
import { Order } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";

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
      <Fallback
        text="You haven't ordered anything yet!"
        btnText="Explore Products"
        redirectUrl="/"
      />
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
