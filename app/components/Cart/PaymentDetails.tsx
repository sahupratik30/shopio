import { ButtonType } from "@/types";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { formatPrice } from "@/helpers";

const PaymentDetails = () => {
  const { totalAmount } = useSelector((state: RootState) => state.cart);
  const formattedAmount = formatPrice(totalAmount, "usd");

  return (
    <div className="flex flex-col p-4 bg-white rounded-md flex-[0.3] sticky top-20">
      <h2 className="mb-1 font-medium text-gray-500">Payment Details</h2>
      <hr className="mb-4" />
      <div className="flex items-center justify-between mb-6 text-sm">
        <span className="font-medium">Total Amount</span>
        <span className="font-medium">{formattedAmount}</span>
      </div>

      <Button
        onClick={() => {}}
        text="Proceed to checkout"
        variant={ButtonType.primary}
      />
    </div>
  );
};

export default PaymentDetails;
