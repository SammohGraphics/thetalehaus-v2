'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Rss,
  Zap,
  Send
} from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-600/10 animate-float-slow"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-600/10 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/5 to-emerald-500/5 blur-3xl dark:from-teal-500/10 dark:to-emerald-500/10 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16"
        >
          {/* Company Info Column */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="The Tale Haus Logo"
                width={80}
                height={80}
                className="h-20 w-auto transition-transform duration-300 hover:rotate-[15deg]"
                priority={false}
              />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Crafting immersive media experiences that captivate and inspire audiences worldwide.
            </p>
            <div className="flex items-center gap-4">
              {[
                { name: 'twitter', url: '#' },
                { name: 'instagram', url: '#' },
                { name: 'linkedin', url: '#' },
                { name: 'youtube', url: '#' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="relative">
                    <SocialIcon 
                      name={social.name} 
                      className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" 
                    />
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-7 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Work', href: '#work' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#blog' },
              ].map((item) => (
                <motion.li 
                  key={item.name}
                  onHoverStart={() => setHoveredLink(item.name)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <a 
                    href={item.href} 
                    className="relative text-lg text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors pl-5"
                  >
                    <motion.span
                      animate={{
                        opacity: hoveredLink === item.name ? 1 : 0.7,
                        x: hoveredLink === item.name ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-teal-500"
                    >
                      →
                    </motion.span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-7 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Live Streaming',
                'Video Production',
                'Content Creation',
                'Media Consulting',
                'Event Coverage',
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href="#services" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                      <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-7 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></span>
            </h3>
            <address className="not-italic space-y-5">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Our Studio</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Mikocheni B, Dar es Salaam<br />Tanzania
                  </p>
                </div>
              </motion.div>
              
              <motion.a
                href="mailto:inquiries@thetale.haus"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                  <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    inquiries@thetale.haus
                  </p>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+255123456789"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                  <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    +255 123 456 789
                  </p>
                </div>
              </motion.a>
            </address>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-6">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-400 flex items-center gap-2">
                <Rss className="w-4 h-4" />
                Stay Updated
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Creative Community
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to receive exclusive content, industry insights, and special offers.
            </p>
            
            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl shadow-inner"
              >
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Thank you for subscribing!
                  </h4>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  You&apos;ll receive our next update soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all pr-12"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Subscribe
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} The Tale Haus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-500 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors relative group"
            >
              Terms of Service
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating dots */}
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-teal-400/20 animate-float-slow"></div>
      <div className="absolute top-20 right-16 w-6 h-6 rounded-full bg-emerald-400/20 animate-float-delay"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-teal-400/15 animate-float"></div>
    </footer>
  );
};