import React from "react";
import Navbar from "../navbar";
import { Link } from 'react-router-dom'; 

const Cart = ({ items, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-gray-100 p-6 shadow-lg pt-64">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <span className="font-medium">{item.name}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onDecrease(item.name)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => onIncrease(item.name)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
              >
                +
              </button>
              <button
                onClick={() => onRemove(item.name)}
                className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <Link to={{
          pathname: "/FormsPage",
          state: { cartItems: items }
        }}>
          <button className="w-full mt-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-medium">
            Review Order
          </button>
        </Link>
      )}
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            Nutrition Facts
          </button>
          <button
            onClick={() => onAddToCart(product.name)}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Load cart items from localStorage
  const [cartItems, setCartItems] = React.useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const products = [
    { name: "Beef Salad", description: "Lorem ipsum dolor sit amet.", image: "/api/placeholder/400/320" },
    { name: "Tacos", description: "Delicious soft tacos with a variety of fillings.", image: "/api/placeholder/400/320" },
    { name: "Veggie Wrap", description: "A healthy wrap with fresh veggies.", image: "/api/placeholder/400/320" },
    { name: "Fruit Salad", description: "Fresh and colorful mix of seasonal fruits.", image: "/api/placeholder/400/320" },
  ];

  // Update localStorage when cartItems change
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (itemName) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === itemName);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { name: itemName, quantity: 1 }];
    });
  };

  const handleIncrease = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Cart
        items={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
      <div className="pl-96 pt-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
