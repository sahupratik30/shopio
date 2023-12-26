const OrderCardHeader = () => {
  return (
    <div className="flex flex-col gap-1 px-4 py-2 mb-8 lg:flex-row lg:justify-between lg:gap-0 bg-slate-100">
      {/* Order Date */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Order Date:</h2>
        <p className="text-sm">25 Dec 2023</p>
      </div>

      {/* Order ID */}
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-gray-700">Order ID:</h2>
        <p className="w-full text-sm break-words">
          cs_test_a1RI86N8gdBntfft36tlzsspq5UwVWTjhrJgpTKHr4fssetMZEQ864Fb3p
        </p>
      </div>

      {/* Order Items */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Total Items:</h2>
        <p className="text-sm">2</p>
      </div>

      {/* Order Total */}
      <div className="flex flex-row items-center gap-2 lg:gap-0 lg:flex-col lg:items-start">
        <h2 className="font-semibold text-gray-700">Order Total:</h2>
        <p className="text-sm font-semibold">$195.23</p>
      </div>
    </div>
  );
};

export default OrderCardHeader;
