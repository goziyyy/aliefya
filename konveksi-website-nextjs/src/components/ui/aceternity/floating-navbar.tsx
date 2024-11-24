

// components/ui/aceternity/floating-navbar.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

export const FloatingNavbar = ({
  className,
  navItems,
}: {
  className?: string;
  navItems: NavItem[];
}) => {
  const [activeItem, setActiveItem] = useState<string>(navItems[0].name);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 20 }}
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <nav className="relative px-4 py-3 bg-[#213b44]/80 backdrop-blur-md rounded-full">
        <ul className="flex items-center justify-center space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setActiveItem(item.name)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeItem === item.name
                    ? "text-[#80CBC4]"
                    : "text-[#e0f2f1] hover:text-[#80CBC4]"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
