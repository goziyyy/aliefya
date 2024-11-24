import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold text-tosc-700">Shopping Cart</h2>
      <ul>
        {/* Example cart item */}
        <li className="flex justify-between items-center mb-2">
          <span>Product Name</span>
          <span>$20.00</span>
        </li>
        {/* Repeat for more items */}
      </ul>
      <div className="text-right">
        <span className="text-gray-600">Total: $40.00</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
