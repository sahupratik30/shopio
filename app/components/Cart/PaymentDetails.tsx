import { ButtonType } from "@/types";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { formatPrice } from "@/helpers";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

const stripePromise = loadStripe(process.env.stripe_public_key as string);

const PaymentDetails = () => {
  const [loading, setLoading] = useState(false);

  const { totalAmount, items } = useSelector((state: RootState) => state.cart);
  const { data } = useSession();

  const formattedAmount = formatPrice(totalAmount, "usd");

  const _createCheckoutSession = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;

      // call backend to create the checkout session
      const checkoutSession: any = await axios.post(
        "/api/create-checkout-session",
        {
          items,
          email: data?.user?.email,
        }
      );

      // redirect to stripe checkout
      const res = await stripe?.redirectToCheckout({
        sessionId: checkoutSession?.data?.id,
      });

      if (res?.error) throw new Error(res?.error?.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-md flex-[0.3] sticky top-20">
      <h2 className="mb-1 font-medium text-gray-500">Payment Details</h2>
      <hr className="mb-4" />
      <div className="flex items-center justify-between mb-6 text-sm">
        <span className="font-medium">Total Amount</span>
        <span className="font-medium">{formattedAmount}</span>
      </div>

      <Button
        onClick={_createCheckoutSession}
        text={loading ? "Redirecting..." : "Proceed to checkout"}
        variant={ButtonType.primary}
        disabled={loading}
        className={loading ? "opacity-75 hover:opacity-75" : ""}
      />
    </div>
  );
};

export default PaymentDetails;
