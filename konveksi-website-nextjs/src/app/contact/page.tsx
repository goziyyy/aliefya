"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate";
import { FloatingNavbar } from "@/components/ui/aceternity/floating-navbar";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";
import { WavyBackground } from "@/components/ui/aceternity/wavy-background";
import { MessageCircle } from 'lucide-react'; // Updated import

const ContactPage = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+6281234567890", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <div className="min-h-screen bg-[#1a2e35] text-[#e0f2f1] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-20" />
      
      <FloatingNavbar 
        className="fixed top-0 w-full z-50"
        navItems={[
          { name: 'Home', link: '/' },
          { name: 'Products', link: '/products' },
          { name: 'Contact', link: '/contact' }
        ]}
      />

      <WavyBackground className="absolute inset-0" colors={["#1a2e35", "#213b44", "#26A69A"]} />

      <TracingBeam>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto z-10"
          >
            <TextGenerateEffect
              words="Get in Touch With Us"
              className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#4db6ac]"
            />

            <div className="space-y-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <div 
                  onClick={openWhatsApp}
                  className="cursor-pointer transform-gpu transition-all duration-300 hover:scale-105"
                >
                  <div className="relative p-10 bg-[#213b44]/80 backdrop-blur-sm rounded-2xl border border-[#80cbc4]/20 shadow-lg hover:shadow-[#80cbc4]/20 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#80cbc4]/10 to-[#4db6ac]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative flex flex-col items-center space-y-4">
                      <MessageCircle className="w-16 h-16 text-[#80cbc4] animate-pulse" /> {/* Updated icon */}
                      <h3 className="text-2xl font-semibold text-[#e0f2f1]">WhatsApp Us</h3>
                      <p className="text-lg text-[#80cbc4]">+62 812-3456-7890</p>
                      <p className="text-sm text-[#b2dfdb]">Available Monday - Friday, 9AM - 5PM</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#80cbc4] to-[#4db6ac] rounded-full font-medium text-[#1a2e35]"
                      >
                        Chat Now
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default ContactPage;

