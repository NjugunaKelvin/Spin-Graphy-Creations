'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';

interface Card {
  image: string;
  title: string;
  subtitle: string;
  accentColor?: string;
}

interface CardsProps {
  cards?: Card[];
}

const defaultCards: Card[] = [
  { 
    image: "/images/l1.jpg", 
    title: "Brand Identity", 
    subtitle: "Logo design, visual systems, and brand guidelines",
    accentColor: "#FF6B6B"
  },
  { 
    image: "/images/v1.jpg", 
    title: "Motion Graphics", 
    subtitle: "Animated logos, explainer videos, and social media reels",
    accentColor: "#4ECDC4"
  },
  { 
    image: "/images/card3.jpg", 
    title: "Voice Overs", 
    subtitle: "Professional narration for ads, videos, and presentations",
    accentColor: "#45B7D1"
  },
  { 
    image: "/images/g1.jpg", 
    title: "Graphics Design", 
    subtitle: "User-centered digital experiences and interfaces",
    accentColor: "#96CEB4"
  },
  { 
    image: "/images/pp1.jpg", 
    title: "Print & Packaging", 
    subtitle: "Business cards, brochures, and product packaging",
    accentColor: "#FFEAA7"
  },
  { 
    image: "/images/cs1.jpg", 
    title: "Creative Strategy", 
    subtitle: "End-to-end creative solutions for your brand",
    accentColor: "#DDA0DD"
  },
];

const Cards: React.FC<CardsProps> = ({ cards = defaultCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardsWidth, setCardsWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const controls = useAnimation();

  // Duplicate cards for seamless looping
  const duplicatedCards = [...cards, ...cards, ...cards];

  // Calculate dimensions
  const calculateDimensions = useCallback(() => {
    if (containerRef.current && cardsContainerRef.current) {
      const container = containerRef.current;
      const cardsContainer = cardsContainerRef.current;
      
      setContainerWidth(container.offsetWidth);
      setCardsWidth(cardsContainer.scrollWidth / 3); // Divide by 3 since we duplicated
    }
  }, []);

  useEffect(() => {
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);

    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, [calculateDimensions]);

  // Auto-scroll animation
  useEffect(() => {
    if (!isAutoPlaying || cardsWidth === 0) return;

    const animation = controls.start({
      x: [-cardsWidth, -cardsWidth * 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    });

    return () => {
      controls.stop();
    };
  }, [controls, cardsWidth, isAutoPlaying]);

  // Use scroll within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Apply spring for smooth animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Manual scroll with buttons
  const scrollToIndex = (index: number) => {
    if (cardsWidth === 0) return;
    
    setIsAutoPlaying(false);
    const newIndex = (index + cards.length) % cards.length;
    setCurrentIndex(newIndex);

    const targetX = -newIndex * (cardsWidth / cards.length) * (cards.length / 3);
    
    controls.start({
      x: targetX,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    });

    // Resume auto-play after 5 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Handle manual scroll
  const handleScroll = (direction: 'left' | 'right') => {
    scrollToIndex(currentIndex + (direction === 'right' ? 1 : -1));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{
        height: '100vh',
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Section title */}
        <div className="absolute top-10 left-10 z-20 text-white">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Navigation buttons */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
          <motion.button
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('left')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('right')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        {/* Horizontal scrolling cards container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-hidden w-full"
        >
          <motion.div
            ref={cardsContainerRef}
            className="flex items-center gap-8 px-16 md:px-12 lg:px-16"
            animate={controls}
          >
            {duplicatedCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                style={{
                  width: 'clamp(300px, 50vw, 500px)',
                  height: '70vh',
                  minHeight: '500px',
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  } 
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % cards.length) * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setIsAutoPlaying(false)}
                onHoverEnd={() => setIsAutoPlaying(true)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${card.image})`,
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Animated Accent Border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    boxShadow: `0 0 0 2px ${card.accentColor}40, 0 0 30px ${card.accentColor}20`,
                  }}
                />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index % cards.length) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="w-12 h-1 mb-4 rounded-full"
                      style={{ backgroundColor: card.accentColor }}
                    />
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-xl opacity-90 font-light mb-4 leading-relaxed">
                      {card.subtitle}
                    </p>
                    
                    {/* CTA Button */}
                    <motion.button
                      className="px-6 py-2 rounded-full font-medium text-sm backdrop-blur-sm border transition-all duration-300"
                      style={{
                        backgroundColor: `${card.accentColor}20`,
                        borderColor: card.accentColor,
                        color: card.accentColor
                      }}
                      whileHover={{
                        backgroundColor: card.accentColor,
                        color: 'white',
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Project
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Effect Layer */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Cards;