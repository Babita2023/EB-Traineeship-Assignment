import React from "react";
import Logo from "../../assets/image/logo.png"
function Header() {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-purple-600">
            <img
              src={Logo} // <-- Replace with your image path
              alt="Logo"
              className="h-6 w-auto"
            />
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="products" className="hover:text-blue-600">
              Products
            </a>
            <a href="solutions" className="hover:text-blue-600">
              Solutions
            </a>
            <a href="helpCenter" className="hover:text-blue-600">
              Help Center
            </a>
            <a href="getStarted" className="hover:text-blue-600">
              Get Started
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="space-x-4">
            <button className="text-blue-600 font-medium hover:underline">
              Login
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-purple-700">
              Request Demo
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
