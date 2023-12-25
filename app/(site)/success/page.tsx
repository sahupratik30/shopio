import Image from "next/image";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="px-4">
      <div className="container flex flex-col items-center p-4 mx-auto my-8 bg-white rounded-md">
        <h1 className="flex flex-col items-center justify-center gap-1 font-semibold text-center text-gray-600 sm:flex-row lg:text-xl">
          <span>
            <Image
              src="/images/success.svg"
              alt="green tick"
              width={24}
              height={24}
            />
          </span>
          Thank You! Your order has been placed successfully.
        </h1>

        <p className="my-6 text-xs text-justify sm:text-sm sm:text-center">
          Thank you for shopping with us. We&apos;ll send you a confirmation
          once your order has shipped. If you would like to check the status of
          your order(s) please click the link below.
        </p>

        <Link href={"/orders"} className="btn bg-primary">
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
