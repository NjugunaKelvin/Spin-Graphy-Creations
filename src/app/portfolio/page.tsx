'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type PortfolioItem = {
  id: number;
  title: string;
  category: 'graphics' | 'branding' | 'voice' | 'motion';
  image: string;
  description: string;
  year: string;
  tags: string[];
};

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'graphics' | 'branding' | 'voice' | 'motion'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout>();

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'graphics', label: 'Graphics Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'voice', label: 'Voice Overs' },
    { id: 'motion', label: 'Motion Graphics' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Neon Dreams Campaign',
      category: 'graphics',
      image: '/images/graphics/neon-dreams.jpg',
      description: 'Futuristic graphic series blending neon aesthetics',
      year: '2024',
      tags: ['Poster', 'Digital', 'Minimalist']
    },
    {
      id: 2,
      title: 'Quantum Brand Identity',
      category: 'branding',
      image: '/images/branding/quantum.jpg',
      description: 'Complete brand system for tech startup',
      year: '2024',
      tags: ['Logo', 'Brand Guide']
    },
    {
      id: 3,
      title: 'Cosmic Animation',
      category: 'motion',
      image: '/images/motion/cosmic.jpg',
      description: '3D motion graphics exploring cosmic themes',
      year: '2023',
      tags: ['3D', 'Animation']
    },
    {
      id: 4,
      title: 'Ethereal Voice Narrative',
      category: 'voice',
      image: '/images/voice/ethereal.jpg',
      description: 'Immersive voice over for documentary',
      year: '2023',
      tags: ['Narration', 'Audio']
    },
    {
      id: 5,
      title: 'Urban Brand Revival',
      category: 'branding',
      image: '/images/branding/urban.jpg',
      description: 'Rebranding streetwear company',
      year: '2024',
      tags: ['Rebrand', 'Identity']
    },
    {
      id: 6,
      title: 'Holographic Visuals',
      category: 'graphics',
      image: '/images/graphics/holographic.jpg',
      description: 'Experimental graphics with holographic effects',
      year: '2024',
      tags: ['Experimental', 'Digital Art']
    },
  ];

  const companySlides = [
    {
      title: "Creative Excellence",
      description: "10+ years of delivering exceptional design solutions that transform brands and captivate audiences.",
      stat: "150+ Projects"
    },
    {
      title: "Innovation Driven",
      description: "We blend cutting-edge technology with artistic vision to create memorable experiences.",
      stat: "89 Clients"
    },
    {
      title: "Award Winning",
      description: "Recognized globally for our innovative approach and outstanding creative work.",
      stat: "27 Awards"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Auto-slide effect
  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companySlides.length);
    }, 5000);

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companySlides.length) % companySlides.length);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1f] relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover our creative journey through innovative design solutions and brand transformations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Company Info & Slideshow */}
          <div className="lg:col-span-1 space-y-8">
            {/* Category Navigation */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-lg font-semibold ${
                      activeCategory === category.id
                        ? 'bg-white/10 text-white shadow-lg border border-white/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Slideshow */}
            <div className="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative overflow-hidden">
              <div className="relative h-64">
                {companySlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <div className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        {slide.stat}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{slide.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {companySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                →
              </button>
            </div>

            {/* Company Stats */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80 text-sm">Premium Quality Designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80 text-sm">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80 text-sm">Unlimited Revisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80 text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-3">Start Your Project</h3>
              <p className="text-white/70 text-sm mb-4">Ready to bring your vision to life?</p>
              <button className="w-full py-3 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>

          {/* Right Column - Portfolio Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-white/80 mb-2">No projects found</h3>
                <p className="text-white/60">We're working on new amazing projects in this category!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Card Component
const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${isHovered ? 'opacity-100' : ''}`} />
      
      <div className="relative z-10">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase">
              {item.category}
            </span>
          </div>

          {/* Year */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-black/50 rounded text-white text-xs">
              {item.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
            {item.title}
          </h3>
          
          <p className="text-white/70 text-sm mb-3 leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/5 rounded text-white/60 text-xs border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Button */}
          <button className="w-full mt-4 py-2 bg-white/10 rounded-lg text-white text-sm font-semibold border border-white/10 backdrop-blur-md hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
            View Project
          </button>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md" />
    </div>
  );
};

export default PortfolioPage;