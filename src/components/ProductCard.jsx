import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform cursor-pointer duration-300 hover:scale-105 animate-pulse">
        <div className="w-full h-48 bg-gray-300 mb-4 rounded-lg"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded w-1/2"></div>

        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-gray-300" />
          ))}
        </div>

        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-gray-300 text-white text-sm rounded-full"></div>
      </div>
    );
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform cursor-pointer duration-300 hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>

        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>

        <div
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 duration-300 transition-all"
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden"> + </span>
          <span className="hidden group-hover:block"> Add to cart </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
