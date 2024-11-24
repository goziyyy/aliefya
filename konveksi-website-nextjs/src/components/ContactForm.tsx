import React from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ContactForm = () => {
  return (
    <Card className="bg-[#0f0f1a]/70 border-[#80cbc4]/30 backdrop-blur-sm max-w-2xl mx-auto">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#80cbc4] to-[#26a69a]">
            Contact Us
          </h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" className="bg-[#1a1a2e]/50 border-[#80cbc4]/30 text-[#e0f2f1] focus:border-[#80cbc4] focus:ring-[#80cbc4] transition-all duration-300" />
            <Input type="email" placeholder="Email" className="bg-[#1a1a2e]/50 border-[#80cbc4]/30 text-[#e0f2f1] focus:border-[#80cbc4] focus:ring-[#80cbc4] transition-all duration-300" />
            <Textarea placeholder="Message" className="bg-[#1a1a2e]/50 border-[#80cbc4]/30 text-[#e0f2f1] focus:border-[#80cbc4] focus:ring-[#80cbc4] transition-all duration-300" />
            <Button className="w-full bg-gradient-to-r from-[#80cbc4] to-[#26a69a] text-[#0f0f1a] font-bold hover:shadow-lg hover:shadow-[#80cbc4]/30 transition-all duration-300">
              Send Message
            </Button>
          </form>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
