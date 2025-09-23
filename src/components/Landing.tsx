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
    <div className="min-h-screen overflow-hidden relative" style={{ backgroundColor: '#0f0f1f' }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 40, 200, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(200, 40, 120, 0.1) 0%, transparent 50%)`,
          backgroundSize: '50vw 50vh',
        }} />
      </div>

      {/* Floating Images Container - Right Side Only */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        
        {/* Large Center Image */}
        <motion.div
          className="absolute top-1/4 right-1/2 w-64 h-96 md:w-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/work1.jpg"
            alt="Project 1"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Top Right Image */}
        <motion.div
          className="absolute top-20 right-10 w-48 h-64 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: -100, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src="/images/work2.jpg"
            alt="Project 2"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Right Image */}
        <motion.div
          className="absolute bottom-20 right-20 w-56 h-72 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 100, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Image
            src="/images/work3.jpg"
            alt="Project 3"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Middle Right Image */}
        <motion.div
          className="absolute top-1/2 right-40 w-52 h-68 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, rotateY: 90, x: 100 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Image
            src="/images/work4.jpg"
            alt="Project 4"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Center Small Image */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-40 h-52 md:w-52 md:h-64 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <Image
            src="/images/work5.jpg"
            alt="Project 5"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Center Image */}
        <motion.div
          className="absolute bottom-32 right-32 w-44 h-56 md:w-56 md:h-72 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 80, x: 80 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <Image
            src="/images/work6.jpg"
            alt="Project 6"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Top Small Image */}
        <motion.div
          className="absolute top-30 right-68 w-36 h-44 md:w-44 md:h-56 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <Image
            src="/images/work7.jpg"
            alt="Project 7"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Far Right Image */}
        <motion.div
          className="absolute top-40 right-5 w-32 h-40 md:w-40 md:h-52 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
        >
          <Image
            src="/images/work8.jpg"
            alt="Project 8"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Floating Small Image */}
        <motion.div
          className="absolute bottom-40 right-60 w-28 h-36 md:w-36 md:h-44 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.9 }}
        >
          <Image
            src="/images/work9.jpg"
            alt="Project 9"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Additional Small Image */}
        <motion.div
          className="absolute top-60 right-16 w-24 h-32 md:w-32 md:h-40 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <Image
            src="/images/work10.jpg"
            alt="Project 10"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Edge Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-#0f0f1f via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-#0f0f1f via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-#0f0f1f via-transparent to-#0f0f1f opacity-20" />
        
        {/* Left Edge Sharp Cutoff */}
        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-#0f0f1f to-transparent opacity-90" />
      </div>

      {/* Main Content - Left Side */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 min-h-screen flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          
          {/* Pre-Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gray-300 font-semibold text-lg md:text-xl tracking-widest uppercase">
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
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: 'Arial Black, sans-serif'
            }}
          >
            SPINGRAPHY
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-300"
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
              Bold <span className="text-gray-300">Ideas,</span> Beautifully
              <span className="text-gray-400"> Made</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
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
              { title: "BRANDING", color: "from-gray-600 to-gray-800" },
              { title: "DESIGN", color: "from-gray-500 to-gray-700" },
              { title: "MOTION", color: "from-gray-400 to-gray-600" },
              { title: "AUDIO", color: "from-gray-300 to-gray-500" },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${service.color} rounded-lg p-4 text-center transition-all duration-300 group-hover:shadow-xl border border-gray-700`}>
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
              className="relative px-8 py-4 bg-transparent text-white font-bold text-lg rounded-lg overflow-hidden group border-2 border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
                   style={{ 
                     backgroundSize: '200% 100%',
                     animation: 'gradientShift 3s ease infinite'
                   }} />
              <div className="absolute inset-0 bg-gray-900/80 rounded-lg backdrop-blur-sm" />
              <span className="relative z-10">TALK TO US</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-transparent text-white font-bold text-lg rounded-lg overflow-hidden group border-2 border-gray-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                   style={{ 
                     backgroundSize: '200% 100%',
                     animation: 'gradientShift 3s ease infinite'
                   }} />
              <div className="absolute inset-0 bg-transparent rounded-lg backdrop-blur-sm" />
              <span className="relative z-10">OUR PORTFOLIO</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-600 pt-8"
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
                <div className="text-gray-300 text-sm font-medium">
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
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-300 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2],
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

   
      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Landing;