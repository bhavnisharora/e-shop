import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-shop</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ex
            animi accusamus consectetur harum. Rem mollitia provident
            consequuntur ducimus exercitationem!
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4  mt-4">
            <a href="/" className="hover:text-gray-400">
              <FaFacebook />
            </a>

            <a href="/" className="hover:text-gray-400">
              <BsTwitter />
            </a>

            <a href="/" className="hover:text-gray-400">
              <FaGithub />
            </a>

            <a href="/" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>

          <form action="" className="flex items-center justify-center mt-8 ">
            <input
              type="email"
              placeholder="enter email"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 outline-none"
            />
            <button className="bg-red-500 px-4 py-2 text-white rounded-md ml-2 hover:bg-red-700">
              Subscibe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t  border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} e-shop All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
