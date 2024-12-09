import React, { useEffect } from "react";
import Hero from "../assets/images/hero-banner.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { categories, mockData } from "../assets/mockData";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-4">
        {/* Categories Section */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-sm font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                <div>{category}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-9/12 relative">
          <div className="w-full">
            <img
              src={Hero}
              alt="Hero Banner"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
            <p className="text-sm">Bhavnish Arora | e-shop</p>
            <h2 className="text-2xl md:text-4xl font-bold">
              WELCOME TO E-SHOP
            </h2>
            <p className="text-base md:text-lg">MILLIONS + PRODUCTS</p>
            <button
              className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700  transform
            transition-transform duration-300 hover:scale-105"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div>
        <h2>Top Products</h2>
        <div>
          {products?.slice(0, 5).map((product) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;