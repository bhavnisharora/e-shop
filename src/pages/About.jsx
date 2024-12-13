import React from "react";
import { FaCarSide } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className=" bg-black bg-opacity-50 z-10"></div>
        <div className="flex justify-center items-center">
          <img
            src="https://pujabhandar-1.web.app/assets/1-S31Ps3IF.jpg"
            alt="About Us"
            className="w-90 h-72 md:h-66 text-center object-cover"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          At <span className="text-red-600 font-semibold">E-Shop</span>, our
          mission is to provide an exceptional online shopping experience by
          offering a wide range of high-quality products, seamless customer
          service, and a commitment to your satisfaction.
        </p>
      </div>

      {/* Company Highlights */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-red-100 text-red-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
            <FaCartShopping className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Quality Products
          </h3>
          <p className="text-gray-600 mt-2">
            We offer a curated selection of top-quality products for all your
            needs.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-red-100 text-red-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
            <FaCarSide className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">
            We ensure quick and reliable shipping to your doorstep.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-red-100 text-red-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
            <IoIosPricetags className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Affordable Prices
          </h3>
          <p className="text-gray-600 mt-2">
            Get the best value for your money with our competitive pricing.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              img: "https://static.vecteezy.com/system/resources/previews/024/183/538/non_2x/male-avatar-portrait-of-a-business-man-in-a-suit-illustration-of-male-character-in-modern-color-style-vector.jpg",
            },
            {
              name: "Jane Smith",
              role: "Chief Marketing Officer",
              img: "https://static.vecteezy.com/system/resources/previews/024/183/538/non_2x/male-avatar-portrait-of-a-business-man-in-a-suit-illustration-of-male-character-in-modern-color-style-vector.jpg",
            },
            {
              name: "Emily Johnson",
              role: "Product Manager",
              img: "https://static.vecteezy.com/system/resources/previews/024/183/538/non_2x/male-avatar-portrait-of-a-business-man-in-a-suit-illustration-of-male-character-in-modern-color-style-vector.jpg",
            },
            {
              name: "Michael Brown",
              role: "Lead Developer",
              img: "https://static.vecteezy.com/system/resources/previews/024/183/538/non_2x/male-avatar-portrait-of-a-business-man-in-a-suit-illustration-of-male-character-in-modern-color-style-vector.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
