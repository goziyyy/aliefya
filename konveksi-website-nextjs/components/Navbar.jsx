import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-tosc-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Konveksi</div>
        <div className="flex space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/products" className="text-white">Products</a>
          <a href="/cart" className="text-white">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
