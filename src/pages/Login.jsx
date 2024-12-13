import React from "react";
const Login = ({ openSignUp }) => {
  return (
    <div className="max-w-md mx-auto p-6  bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 outline-none rounded-lg"
            placeholder="enter an email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
            placeholder="enter password"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700 ">Remember Me</span>
          </label>
          <a href="/" className="text-gray-700">
            Forgot Password?
          </a>
        </div>
        <div className="mb-4 ">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Don't have an account ? </span>
        <button
          className="text-red-600 hover:text-red-700 hover:underline"
          onClick={openSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
