// components/Landing.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('DESIGN • INNOVATION • CREATIVITY •');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate tilt based on mouse position
  const calculateTilt = (elementX: number, elementY: number) => {
    const tiltX = (mousePosition.y - elementY) / 20;
    const tiltY = (mousePosition.x - elementX) / 20;
    return { tiltX, tiltY };
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff6f3c] opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Circular text */}
        <div className="relative w-64 h-64 mb-16">
          <svg viewBox="0 0 100 100" className="w-full h-full circular-text-path">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[5px] fill-[#ff6f3c] font-bold">
              <textPath href="#circlePath">
                DESIGN • INNOVATION • CREATIVITY • EXCELLENCE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-32 rounded-full border-4 border-[#ff6f3c] border-opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Hero text with pressure effect */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Craft <span className="text-gradient">Digital</span>
          <br />
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 text-center max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming visions into stunning visual experiences through innovative design, 
          branding, and motion graphics.
        </motion.p>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-[#ff6f3c] rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            View Our Work
          </button>
          <button className="px-8 py-3 border border-white border-opacity-20 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full bg-[#ff6f3c] opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white opacity-10"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/3 w-8 h-8 rounded-full bg-[#ff6f3c] opacity-30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />

        {/* Text pressure effect */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '50+', label: 'Happy Clients' },
            { value: '12+', label: 'Awards Won' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 111, 60, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mouse follower gradient light */}
      <div 
        className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,111,60,0.4) 0%, rgba(0,0,0,0) 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default Landing;