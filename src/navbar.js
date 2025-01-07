import React from 'react';
import { Link } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';

function Navbar() {

  return (
    <div id='navbar' className="navbar fixed top-0 left-0 right-0 z-50 bg-aestheticGreen">
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left Links */}
            <div className="flex items-center space-x-4">
              <Link className="font-custom text-textGreen font-medium hover:text-large font-medium transition duration-300 ease-in-out hover:underline transform hover:scale-110" to="/MenuPage">Menu</Link>
              <Link className="font-custom text-textGreen font-medium hover:text-large font-medium transition duration-300 ease-in-out hover:underline transform hover:scale-110" to="/gallery">Catering</Link>
            </div>

            {/* Centered Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link className="font-custom text-textGreen font-medium text-lg transition duration-300 ease-in-out hover:underline transform hover:scale-110" to="/">The Leafy Spoon</Link>
            </div>

            {/* Right Links */}
            <div className="flex items-center space-x-4">
              <Link className="font-custom text-textGreen font-medium hover:text-large font-medium transition duration-300 ease-in-out hover:underline transform hover:scale-110" to="/About">About</Link>
              <Link className="font-custom text-textGreen font-medium hover:text-large font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-900 rounded-full pl-2 pr-2 pt-1 pb-1 hover:text-gray-100" to="/Order">Order Now</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
