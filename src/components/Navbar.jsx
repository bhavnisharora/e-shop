import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Modal from "./Model";
import { setSearchTerm } from "../redux/productSlice";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const disptach = useDispatch();
  const navigate = useNavigate("/");

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    disptach(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">
            <span className="font-serif font-bold">E-Shop</span>
          </Link>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search product"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border py-2 px-4 outline-none rounded-full"
            />
            <FaSearch className="top-3 absolute right-3 text-red-500" />
          </form>
        </div>
        <div className="flex item-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <div className="flex items-center gap-2">
            <button
              className="hidden md:block hover:underline"
              onClick={openLogin}
            >
              Login
            </button>
            <span> | </span>

            <button
              className="hidden md:block hover:underline"
              onClick={openSignUp}
            >
              Register
            </button>
          </div>
          <button className="block md:hidden ">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>
      <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
