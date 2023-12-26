import { Order } from "@/types";
import OrderCardHeader from "./OrderCardHeader";
import OrderItem from "./OrderItem";

type OrderCardProps = {
  order: Order;
};

const OrderCard = ({ order }: OrderCardProps) => {
  const { id, amount, products, timestamp } = order;

  return (
    <div className="pb-8 overflow-hidden bg-white rounded-md shadow-sm">
      {/* Card Header */}
      <OrderCardHeader
        id={id}
        amount={amount}
        date={timestamp.toDate()}
        itemsCount={products?.length}
      />

      {/* Card Body */}
      <div className="flex flex-col gap-8 px-4">
        {products?.map((product, index) => (
          <OrderItem
            key={index}
            title={product?.title}
            quantity={product?.quantity}
            price={product?.price}
            image={product?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
