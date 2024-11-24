import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

const FuturisticProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-[#0f0f1a]/70 border-[#80cbc4]/30 overflow-hidden backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="relative h-64">
            <Image
              src={product.thumbnail}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
              <Button
                className="w-full bg-gradient-to-r from-[#80cbc4] to-[#26a69a] text-[#0f0f1a] font-semibold hover:from-[#26a69a] hover:to-[#80cbc4] transition-all duration-300"
                variant="secondary"
              >
                Explore
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FuturisticProductCard;
