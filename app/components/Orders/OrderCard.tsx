import OrderCardHeader from "./OrderCardHeader";
import OrderItem from "./OrderItem";

const OrderCard = () => {
  return (
    <div className="pb-8 overflow-hidden bg-white rounded-md shadow-sm">
      {/* Card Header */}
      <OrderCardHeader />

      {/* Card Body */}
      <div className="flex flex-col gap-8 px-4">
        <OrderItem />
      </div>
    </div>
  );
};

export default OrderCard;
