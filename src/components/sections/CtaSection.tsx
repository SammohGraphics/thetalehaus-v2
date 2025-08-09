'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const CtaSection = () => (
  <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 to-emerald-500 text-white">
    <div className="max-w-7xl mx-auto text-center px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
      >
        Ready to Elevate Your Media Presence?
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto text-teal-100"
      >
        Let's create something extraordinary together. Get in touch with our team today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button 
          size="lg" 
          className="bg-white text-teal-700 hover:bg-teal-50 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Contact Us Now
        </Button>
      </motion.div>
    </div>
  </section>
);