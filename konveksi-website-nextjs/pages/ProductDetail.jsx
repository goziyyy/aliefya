import React from 'react';
import { Card, CardHeader, CardTitle, CardFooter, CardContent, CardDescription, Button } from '@shadcn/ui';

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-80 object-cover mb-6 rounded-md" />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold mb-4 text-tosc-700">Product Name</CardTitle>
          <CardDescription className="text-gray-600 mb-6">$20.00</CardDescription>
          <CardDescription className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardDescription>
          <Button className="bg-tosc-500 text-white px-4 py-2 rounded-full hover:bg-tosc-600 transition-colors">Add to Cart</Button>
        </CardContent>
        <CardFooter>
          <Button>View Similar Products</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetail;
