import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 123");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 border-b space-y-4 md:space-y-0"
                  >
                    {/* Product Details */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div>
                        <h3 className="text-md font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* Responsive Details */}
                    <div className="flex flex-col md:flex-row md:space-x-12 items-start md:items-center w-full md:w-auto space-y-4 md:space-y-0">
                      {/* Price */}
                      <div className="md:hidden font-bold">Price:</div>
                      <p>${product.price}</p>

                      {/* Quantity */}
                      <div className="flex items-center">
                        <div className="md:hidden font-bold mr-2">
                          Quantity:
                        </div>
                        <div className="flex items-center border">
                          <button
                            className="text-xl font-bold px-1.5 border-r"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          >
                            -
                          </button>
                          <p className="text-sm px-2">{product.quantity}</p>
                          <button
                            className="text-xl px-1 border-1"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div>
                        <div className="md:hidden font-bold">Subtotal:</div>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                      </div>

                      {/* Remove */}
                      <div>
                        <div className="md:hidden font-bold">Remove:</div>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border ">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items: </span>
                <span>{cart.totalQuantity} </span>
              </div>
              <div className="mb-4 border-b pb-2">
                {/* <p>Shipping:</p> */}
                <p>Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt=""
            className="h-96 my-5"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
