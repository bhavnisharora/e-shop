import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-red-600 text-white p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

            <p className="mb-6">
              Have any questions? We'd love to hear from you. Feel free to reach
              out to us!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <IoLocationSharp className="text-xl mr-2" />
                <p>123 Street Name, City, State, ZIP</p>
              </div>

              <div className="flex items-center">
                <IoMdMail className="text-xl mr-2" />
                <p>contact@example.com</p>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-xl mr-2" />

                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl uppercase font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 outline-none border border-gray-300 rounded-md shadow-sm"
                  placeholder="your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 outline-none border border-gray-300 rounded-md shadow-sm"
                  placeholder="enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block  text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 outline-none border border-gray-300 rounded-md shadow-sm"
                  placeholder="enter your message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-600 text-white font-bold
                rounded-md hover:bg-red-700 mt-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
