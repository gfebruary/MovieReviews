import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent p-4 z-10">
      <nav className="flex justify-center items-center space-x-6">
        <Link to="/">
          <img src={logo} alt="My App Logo" className="h-8" />
        </Link>
        <button
          onClick={togglePopup}
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Sign In
        </button>
        <Link
          to="/create-account"
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Create Account
        </Link>
        <Link
          to="/films"
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Films
        </Link>
        <Link
          to="/lists"
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Lists
        </Link>
        <Link
          to="/members"
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Members
        </Link>
        <Link
          to="/journal"
          className="text-white uppercase hover:text-orange-500 transition duration-300">
          Journal
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded-full text-black"
        />
      </nav>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm">
            <h2 className="text-lg font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border rounded text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded text-black"
                />
              </div>
              <a href="#" className="text-green-500 hover:text-green-700">
                Forgot your password?
              </a>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
