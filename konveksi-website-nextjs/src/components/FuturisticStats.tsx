import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Sparkles } from 'lucide-react';

const stats = [
  { label: 'Satisfied Clients', value: '5000+' },
  { label: 'Innovative Designs', value: '1000+' },
  { label: 'Sustainable Materials', value: '100%' },
  { label: 'Global Reach', value: '50+ Countries' },
];

const FuturisticStats = () => {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#0f0f1a]/70 border-[#80cbc4]/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#80cbc4]/10 to-transparent opacity-30" />
              <CardContent className="p-6 relative">
                <Sparkles className="absolute top-2 right-2 text-[#80cbc4] w-6 h-6 animate-pulse" />
                <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#26a69a]">
                  {stat.value}
                </h3>
                <p className="text-[#a0aec0]">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FuturisticStats;
