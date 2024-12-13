import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const FilterData = () => {
  const filterProducts = useSelector((state) => state.products.filterData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center">not found</h1>
      )}
    </div>
  );
};

export default FilterData;
