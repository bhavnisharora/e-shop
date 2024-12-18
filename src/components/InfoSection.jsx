import { useEffect, useState } from "react";
import { FaHeadset, FaLock, FaShoppingCart, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
const InfoSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  });
  const infoItems = [
    {
      icon: <FaShoppingCart className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied ",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "your payment information is safe with us",
    },

    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on your products",
    },
  ];

  if (loading) {
    return (
      <div className="bg-white shadow rounded mb-8 mt-12 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoItems.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4  border rounded-lg shadow-md animate-pulse h-48
          "
            >
              <div className="bg-gray-300 w-12 h-12 mb-4 rounded-full"></div>
              <h3 className="w-3/4 bg-gray-300 h-5 rounded mb-4"></h3>
              <p className="bg-gray-300 rounded h-3 w-full mb-2"></p>
              <p className="bg-gray-300 rounded h-3 w-full "></p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white mb-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4  border rounded-lg shadow-md
            transform transition-transform duration-300 hover:scale-105 cursor-pointer "
          >
            {item.icon}
            <h3 className="mt-4 text-lg font-serif font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
