import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shippingInfo, setShippingInfo] = useState({
    address: " ",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
    console.log("button clicked");
  };

  return (
    <div>
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="border md:w-2/3 p-5 ">
            {/* Billing Information */}
            <div>
              <div
                className="flex items-center justify-between"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Billing Information
                </h3>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`${billingToggle ? "" : "hidden"}`}>
                <div>
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="enter name"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="enter email"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="" className="block text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="enter phone"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* shipping Information */}
            <div className="mt-5">
              <div
                className="flex items-center justify-between"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Shipping Information
                </h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <div>
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      placeholder="enter address"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700" htmlFor="">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="enter city name"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="" className="block text-gray-700">
                      Zipcode
                    </label>
                    <input
                      type="text"
                      placeholder="enter zip code"
                      className="w-full px-3 py-2 border mb-4 rounded outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          zip: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* payment Information */}
            <div className="mt-5">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div className={`${paymentToggle ? "" : "hidden"}`}>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash on Delivery
                  </label>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="enter card number"
                        className="border p-2 w-full rounded outline-none"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="enter card holder name"
                        className="border p-2 w-full rounded outline-none"
                        required
                      />
                    </div>
                    <div className="flex justify-between mb-4">
                      <div className="w-1/2 mr-2">
                        <label
                          htmlFor=""
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Expire Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="p-2 border w-full rounded outline-none"
                        />
                      </div>

                      <div className="w-1/2 ml-2">
                        <label
                          htmlFor=""
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="border p-2 w-full rounded outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-md font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                        ${product.price} X {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-800">
                    ${product.price}
                    {/* * {product.quantity} */}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Total Price: </span>
                <span className="font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
