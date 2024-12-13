import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {loading ? (
          <div className="h-8 w-32 mx-auto mb-6 bg-gray-300 rounded-xl animate-pulse"></div>
        ) : (
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products?.products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
