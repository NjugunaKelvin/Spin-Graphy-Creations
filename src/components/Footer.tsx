// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a1a1a] border-t border-[#2a2a2a]">
      {/* Neuromorphic container */}
      <div className="neuromorphic-footer py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Spingraphy Creations</h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                Transforming visions into stunning visual experiences through innovative design and creativity.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
                  { icon: <FaBehance size={20} />, href: "#", label: "Behance" },
                  { icon: <FaDribbble size={20} />, href: "#", label: "Dribbble" },
                  { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="neuromorphic-icon p-3 rounded-full"
                    whileHover={{ scale: 1.1, color: "#ff6f3c" }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-[#ff6f3c] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>hello@spingraphy.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Design Street</p>
                <p>Creative City, CC 10101</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom divider */}
          <motion.div 
            className="border-t border-[#2a2a2a] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Spingraphy Creations. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-[#ff6f3c] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#ff6f3c] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .neuromorphic-footer {
          background: linear-gradient(145deg, #1a1a1a, #151515);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .neuromorphic-icon {
          background: linear-gradient(145deg, #1a1a1a, #151515);
          box-shadow: 
            4px 4px 8px rgba(0, 0, 0, 0.25),
            -4px -4px 8px rgba(255, 255, 255, 0.03);
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .neuromorphic-icon:hover {
          box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.25),
            inset -4px -4px 8px rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </footer>
  );
};

export default Footer;