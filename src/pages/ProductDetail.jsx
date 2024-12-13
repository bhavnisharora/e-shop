import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaQuestion } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <Helmet>
        <title>{product.name} - Product Description</title>

        <meta
          name="description"
          content={`Details about ${product.name}`}
        ></meta>
      </Helmet>

      <div className="flex flex-col md:flex-row gap-x-16">
        {/* product image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        {/* product information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2"> {product.name} </h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          <div className="flex flex-wrap items-center justify-center mb-4 gap-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-xl font-bold text-white w-10 h-10
              rounded-full"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <input
              type="text"
              id="quantity"
              value={quantity}
              className="border border-gray-300 text-center text-lg font-semibold rounded-md p-2 w-14"
            />
            <button
              className="bg-red-600 hover:bg-red-700 text-xl font-bold text-white w-10 h-10
              rounded-full"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

            <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>

            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product Description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
