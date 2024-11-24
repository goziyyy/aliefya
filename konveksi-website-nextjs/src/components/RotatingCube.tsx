import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RotatingCube = ({ images }: { images: string[] }) => {
  return (
    <div className="perspective-1000 w-64 h-64 mx-auto my-12">
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-full h-full backface-hidden"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(32px)`,
            }}
          >
            <Image
              src={src}
              alt={`Cube face ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingCube;

