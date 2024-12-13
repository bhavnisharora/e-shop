import React from "react";
const Register = ({ openLogin }) => {
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white  rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Register</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="block text-gray-700 mb-1">Name</label>
            <input
              type="name"
              className="w-full px-4 py-2 border border=gray-300 rounded-lg outline-none"
              placeholder="enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1 ">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
              outline-none"
              placeholder="enter an email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
              outline-none"
              placeholder="enter a password"
            />
          </div>

          <div className="mb-4 ">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700
            transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center">
          <span className="text-gray-700">Already have an account ? </span>
          <button
            className="text-red-600 hover:underline focus:outline-none"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
