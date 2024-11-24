"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { BackgroundBeams } from '../components/ui/aceternity/background-beams';
import { TextGenerateEffect } from '../components/ui/aceternity/text-generate';
import { FloatingNavbar } from '../components/ui/aceternity/floating-navbar';
import { HeroParallax } from '../components/ui/aceternity/hero-parallax';
import { TracingBeam } from '../components/ui/aceternity/tracing-beam';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Sparkles } from 'lucide-react';
import FuturisticProductCard from '../components/FuturisticProductCard';
import ContactForm from '../components/ContactForm';
import FuturisticStats from '../components/FuturisticStats';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    { title: 'Neon Fusion Jacket', link: '/product1', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Quantum Shift Dress', link: '/product2', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Cyber Chic Boots', link: '/product3', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Holographic Denim', link: '/product4', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Nebula Knit Sweater', link: '/product5', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Laser Cut Leggings', link: '/product6', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Augmented Reality Scarf', link: '/product7', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Biometric Blazer', link: '/product8', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Nano-tech Trench Coat', link: '/product9', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Gravity Defying Heels', link: '/product10', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Shape-shifting Shirt', link: '/product11', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Eco-Luminescent Gown', link: '/product12', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Thermo-Adaptive Suit', link: '/product13', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Neurofashion Headpiece', link: '/product14', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' },
    { title: 'Metamorphic Accessories', link: '/product15', thumbnail: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/10/62d3eb2a-7b18-4976-b15e-06cc4c71da7a.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-[#e2e8f0] overflow-hidden">
      <BackgroundBeams className="fixed inset-0 opacity-30" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <FloatingNavbar
        className="fixed top-0 w-full z-50"
        navItems={[
          { name: 'Home', link: '/' },
          { name: 'Products', link: '/products' },
          { name: 'About', link: '/about' },
          { name: 'Contact', link: '/contact' }
        ]}
      />

      <HeroParallax products={products} />

      <TracingBeam>
        <main className="relative pt-20 px-4 md:px-8">
          <motion.section
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextGenerateEffect
              words="Aliefya Konveksi - Redefining Fashion's Future"
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] via-[#4db6ac] to-[#26a69a]"
            />
            <p className="text-xl md:text-2xl text-[#a0aec0] mb-8 max-w-3xl mx-auto">
              Where cutting-edge technology meets timeless elegance, crafting tomorrow's fashion today.
            </p>
            <Button className="bg-gradient-to-r from-[#80cbc4] to-[#26a69a] text-[#0f0f1a] font-bold text-lg py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#80cbc4]/50 transition-all duration-300">
              Explore Collection
            </Button>
          </motion.section>

          <FuturisticStats />

          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#26a69a]">
              Featured Innovations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <FuturisticProductCard key={index} product={product} />
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-[#1a1a2e]/50 border-[#80cbc4]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Tabs defaultValue="new" className="w-full">
                  <TabsList className="bg-[#0f0f1a]/50 mb-6">
                    <TabsTrigger value="new">New Arrivals</TabsTrigger>
                    <TabsTrigger value="best">Best Sellers</TabsTrigger>
                    <TabsTrigger value="sale">On Sale</TabsTrigger>
                  </TabsList>
                  {['new', 'best', 'sale'].map((tab) => (
                    <TabsContent key={tab} value={tab}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.slice(0, 6).map((product, index) => (
                          <motion.div
                            key={index}
                            className="bg-[#0f0f1a]/50 p-4 rounded-lg hover:shadow-lg hover:shadow-[#80cbc4]/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              src={product.thumbnail}
                              alt={product.title}
                              width={400}
                              height={300}
                              className="rounded-lg mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-[#80cbc4]">$100.00</span>
                              <Badge className="bg-[#26a69a] text-[#0f0f1a]">
                                {tab === 'new' ? 'New' : tab === 'best' ? 'Best Seller' : 'Sale'}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#26a69a]">
              Get in Touch
            </h2>
            <ContactForm />
          </motion.section>
        </main>
      </TracingBeam>

      <footer className="relative bg-[#0f0f1a]/80 backdrop-blur-sm text-[#e0f2f1] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#26a69a]">Aliefya Konveksi</h3>
            <p className="text-sm">Crafting the Future of Fashion</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#80cbc4] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#80cbc4] transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-[#80cbc4] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#80cbc4] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="hover:text-[#80cbc4] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1a1a2e] border border-[#80cbc4]/30 rounded-l-md px-4 py-2 focus:outline-none focus:border-[#80cbc4]"
              />
              <button
                type="submit"
                className="bg-[#80cbc4] text-[#0f0f1a] px-4 py-2 rounded-r-md hover:bg-[#26a69a] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Aliefya Konveksi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
