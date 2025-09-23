/* eslint-disable react/jsx-no-duplicate-props */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative" style={{ backgroundColor: '#2a0b36' }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 40, 200, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(200, 40, 120, 0.2) 0%, transparent 50%)`,
          backgroundSize: '50vw 50vh',
        }} />
      </div>

      {/* Strategic Image Placement - Not Full Cover */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/3 md:h-full opacity-20 md:opacity-30">
        <Image
          src="/images/bg.jpg"
          alt="Creative Studio"
          fill
          className="object-cover object-left md:object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-#2a0b36 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 min-h-screen flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          
          {/* Pre-Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-purple-300 font-semibold text-lg md:text-xl tracking-widest uppercase">
              Premium Creative Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none mb-6"
            style={{ 
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)',
              fontFamily: 'Arial Black, sans-serif'
            }}
          >
            SPINGRAPHY
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-purple-200"
            >
              CREATIONS
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Where <span className="text-purple-300">Vision</span> Meets 
              <span className="text-pink-300"> Execution</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            We are a premier creative agency specializing in transformative brand experiences, 
            cutting-edge visual design, and compelling digital storytelling that drives results.
          </motion.p>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { title: "BRANDING", color: "from-purple-400 to-purple-600" },
              { title: "DESIGN", color: "from-pink-400 to-pink-600" },
              { title: "MOTION", color: "from-blue-400 to-blue-600" },
              { title: "AUDIO", color: "from-green-400 to-green-600" },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${service.color} rounded-lg p-4 text-center transition-all duration-300 group-hover:shadow-2xl`}>
                  <div className="text-white font-bold text-sm md:text-base tracking-widest">
                    {service.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-#2a0b36 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl"
            >
              START YOUR PROJECT
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-#2a0b36 transition-all duration-300"
            >
              VIEW PORTFOLIO
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8"
          >
            {[
              { number: '250+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Global Clients' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  className="text-2xl md:text-3xl font-black text-white mb-1"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-purple-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="text-sm mb-2">SCROLL TO EXPLORE</div>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;