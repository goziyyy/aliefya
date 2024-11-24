"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallaxAdvanced = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateY = useSpring(
    useTransform(scrollY, [0, 1000], [0, 1000]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(scrollY, [0, 1000], [0, 100]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollY, [0, 1000], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollY, [0, 1000], [1, 0.2]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          opacity,
          translateY,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translateY={translateY}
            />
          ))}
        </motion.div>
        <motion.div
          style={{ translateX }}
          className="flex flex-row  mb-20 space-x-20 "
        >
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translateY={translateY}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translateY={translateY}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Fashion Experience
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Discover a world where technology meets style, and innovation shapes every thread. Welcome to Aliefya Konveksi, where we're redefining the future of fashion.
      </p>
    </div>
  );
};

export const ProductCard = ({
  title,
  link,
  thumbnail,
  translateY,
}: {
  title: string;
  link: string;
  thumbnail: string;
  translateY: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        translateY,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
};

