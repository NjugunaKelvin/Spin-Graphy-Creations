// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Subtle divider */}
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          {/* Compact but functional layout */}
          <div className="flex flex-col items-center space-y-6">
            {/* Brand + navigation row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full justify-between"
            >
              {/* Brand */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-light text-gray-300 tracking-wide">Spingraphy</h3>
              </div>

              {/* Micro navigation */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                {['Work', 'About', 'Contact'].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#ff6f3c] transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff6f3c] group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* Scroll to top - compact */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-[#ff6f3c] transition-colors duration-300 hidden sm:flex flex-col items-center space-y-1"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-px h-3 bg-current transition-colors duration-300" />
                <span className="text-xs">Top</span>
              </motion.button>
            </motion.div>

            {/* Copyright + mobile scroll to top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between text-xs text-gray-500"
            >
              <p>© {currentYear} Spingraphy Creations</p>
              
              {/* Mobile scroll to top */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="sm:hidden text-gray-400 hover:text-[#ff6f3c] transition-colors duration-300 flex items-center gap-1"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to top</span>
                <div className="w-px h-3 bg-current" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;