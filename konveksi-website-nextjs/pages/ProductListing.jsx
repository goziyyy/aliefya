import React from 'react';
import { Card, CardHeader, CardTitle, CardFooter, CardDescription, Button } from '@shadcn/ui';

const ProductListing = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jeans', price: 30.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Hoodie', price: 40.00, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jacket', price: 50.00, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-tosc-700">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            </CardHeader>
            <div>
              <CardTitle className="text-2xl font-semibold text-tosc-700 mb-2">{product.name}</CardTitle>
              <CardDescription className="text-gray-600 mb-4">${product.price.toFixed(2)}</CardDescription>
              <Button className="bg-tosc-500 text-white px-4 py-2 rounded-full hover:bg-tosc-600 transition-colors">Add to Cart</Button>
            </div>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
