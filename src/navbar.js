import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div id='navbar' className="myNav navbar top-0 opacity-3 p-1 z-50">
      <nav className="bg-white rounded-full m-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link className="text-green-800 font-medium hover:bg-brown hover:text-white px-3 py-2 rounded-full text-sm font-medium" to="/media">Audio</Link>
              <Link className="text-green-800 font-medium hover:bg-brown hover:text-white px-3 py-2 rounded-full text-sm font-medium" to="/kalaamoftheday">Kalaam Of The Day</Link>
              <Link className="text-green-800 font-medium hover:bg-brown hover:text-white px-3 py-2 rounded-full text-sm font-medium" to="/gallery">Gallery</Link>
            </div>
            
              <div className="flex-1 flex justify-center align-center items-center">
              <Link className="text-green-800 text-orange-800 text-1xl " to="/">The Leafy Spoon</Link>
 
            </div>
            <div className="flex items-center space-x-4">
              <Link className="text-green-800 font-medium hover:bg-brown hover:text-white px-3 py-2 rounded-full text-sm font-medium" to="/search">About</Link>
              <Link className="text-green-800 font-black hover:bg-green-900 hover:text-white px-3 py-2 rounded-full text-sm font-medium" to="/favorites">Search</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
