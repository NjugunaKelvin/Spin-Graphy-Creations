/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Debounced scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const debouncedScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  // Mount animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Body overflow control
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },

  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'shadow-2xl bg-gray-900/95 backdrop-blur-xl border border-gray-800/50' 
            : 'shadow-lg bg-gray-900/90 backdrop-blur-lg border border-gray-800/30'
        }`}
        style={{
          borderRadius: '9999px',
          width: '95%',
          maxWidth: '1200px'
        }}
      >
        <div className="flex justify-between items-center py-3 px-8">
          {/* Enhanced Logo */}
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={hoverVariants}
          >
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Spingraphy Creations
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover="hover"
                whileTap="tap"
                variants={hoverVariants}
                custom={index}
              >
                <Link
                  href={item.path}
                  className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 group ${
                    pathname === item.path 
                      ? 'text-orange-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  {pathname === item.path && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/10 border border-orange-500/30"
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover effect */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-full blur-md"></span>
                  </span>

                  {/* Subtle background on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-gradient-to-r from-orange-500 to-red-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
              isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}></span>
            <span className={`bg-gradient-to-r from-orange-500 to-red-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full my-1.5 ${
              isOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
            }`}></span>
            <span className={`bg-gradient-to-r from-orange-500 to-red-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
              isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}></span>
            
            {/* Button glow effect */}
            <span className="absolute inset-0 rounded-full bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(26,26,26,0.98) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full space-y-6 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="overflow-hidden w-full text-center"
                  custom={index}
                >
                  <Link
                    href={item.path}
                    className={`block text-3xl font-bold py-4 relative transition-all duration-300 ${
                      pathname === item.path 
                        ? 'text-orange-500' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.span
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-orange-500/10 rounded-full blur-xl"
                        layoutId="mobileActive"
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Close hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
            >
              Click anywhere to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default Navbar;