import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import Navbar from '../navbar';

const FormsPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Access cart items passed from Cart component or localStorage
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (location.state && location.state.cartItems) {
      setCartItems(location.state.cartItems);
    } else if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="forms-page">
        <Navbar/>
      <h1 className="text-2xl font-bold text-center my-4">Forms Page</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        {/* Other form fields (email, password) */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal for Review Order */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Review Order</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Password:</strong> {formData.password}</p>

            <h3 className="mt-4 font-semibold">Selected Items:</h3>
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormsPage;
