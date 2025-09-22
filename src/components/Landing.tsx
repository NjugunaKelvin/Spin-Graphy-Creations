/* eslint-disable react/jsx-no-duplicate-props */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const TextPressure = ({
  text = 'Spingraphy Creations',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  flex = true,
  textColor = '#FFFFFF',
  minFontSize = 36
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);

  const chars = text.split('');

  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW } = containerRef.current.getBoundingClientRect();
    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);
    setFontSize(newFontSize);
  };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, [text]);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };

          const d = dist(mouseRef.current, charCenter);
          const getAttr = (distance: number, minVal: number, maxVal: number) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : '0';

          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, chars.length]);

  return (
    <div ref={containerRef} className="relative w-full h-32 overflow-hidden bg-transparent">
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`${flex ? 'flex justify-center' : ''} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight: 1.1,
          margin: 0,
          fontWeight: 100,
          color: textColor
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => { spansRef.current[i] = el; }}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden relative">
      
      {/* Optimized Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image Background */}
        <Image
          src="/images/bg.jpg"
          alt="Creative Studio"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        
        {/* Enhanced Gradient Overlay - Better Content Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 via-gray-900/60 to-gray-950/70" />
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Floating Abstract Shapes - Reduced on Mobile */}
      {!isMobile && (
        <div className="absolute inset-0 z-1">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.1, 0.2],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
    

        {/* TextPressure Animated Headline - Responsive */}
        <motion.div
          className="w-full max-w-6xl mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <TextPressure 
            text="Spingraphy Creations"
            minFontSize={isMobile ? 32 : 48}
            textColor="#ffffff"
            weight={!isMobile} // Disable weight animation on mobile
            width={!isMobile} // Disable width animation on mobile
            italic={!isMobile} // Disable italic animation on mobile
          />
        </motion.div>

        {/* Animated Tagline - Responsive Text Sizes */}
        <motion.div
          className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.span
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            We specialize in{' '}
          </motion.span>
          <motion.span
            className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {isMobile ? 'Design • Branding • Video • Audio' : 'Graphic Design • Brand Identity • Video Reels • Voice-overs'}
          </motion.span>
        </motion.div>

        {/* Enhanced Tagline - Responsive */}
        <motion.p 
          className="text-base md:text-xl text-gray-300 max-w-2xl mb-8 md:mb-12 leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Transforming your ideas into captivating visuals, compelling stories, 
          and memorable brand experiences that connect with your audience.
        </motion.p>

        {/* Enhanced CTA Buttons with Glass Morphism and Animated Borders */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-20 w-full max-w-md px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Primary Button */}
          <motion.button 
            className="px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-base md:text-lg relative overflow-hidden group backdrop-blur-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            whileHover={{ 
              scale: isMobile ? 1 : 1.05,
              y: isMobile ? 0 : -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px]">
              <motion.div 
                className="w-full h-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </div>
            
            {/* Glass Background */}
            <div className="absolute inset-[1px] rounded-2xl backdrop-blur-lg bg-gray-900/80" />
            
            {/* Content */}
            <span className="relative z-10 text-white">Get a Quote</span>
            
            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          {/* Secondary Button */}
          <motion.button 
            className="px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-base md:text-lg relative overflow-hidden group backdrop-blur-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            whileHover={{ 
              scale: isMobile ? 1 : 1.05,
              y: isMobile ? 0 : -2,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Subtle Animated Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px]">
              <motion.div 
                className="w-full h-full rounded-2xl bg-gradient-to-r from-gray-400/30 via-gray-300/30 to-gray-400/30"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </div>
            
            {/* Glass Background */}
            <div className="absolute inset-[1px] rounded-2xl backdrop-blur-lg bg-gray-900/60" />
            
            {/* Content */}
            <span className="relative z-10 text-white">View Portfolio</span>
            
            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-white/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Enhanced Stats Grid with Glass Morphism */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { number: '250+', label: 'Projects' },
            { number: '98%', label: 'Satisfaction' },
            { number: '50+', label: 'Clients' },
            { number: '5★', label: 'Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl relative overflow-hidden group backdrop-blur-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              whileHover={{ 
                scale: isMobile ? 1 : 1.05,
                y: isMobile ? 0 : -5,
                background: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Subtle Animated Border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div 
                  className="w-full h-full rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
              </div>
              
              {/* Glass Background */}
              <div className="absolute inset-[1px] rounded-2xl backdrop-blur-lg bg-gray-900/40 group-hover:bg-gray-900/60 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Mouse Follow Light - Desktop Only */}
      {!isMobile && (
        <motion.div 
          className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default Landing;