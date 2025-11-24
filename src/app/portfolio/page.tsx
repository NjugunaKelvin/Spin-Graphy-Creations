/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useRef, useEffect, useCallback } from 'react';
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

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Neon Dreams Campaign',
    category: 'graphics',
    image: '/projects/g1.jpg',
    description: 'Futuristic graphic series blending neon aesthetics with cyberpunk influences.',
    year: '2024',
    tags: ['Poster', 'Digital', 'Minimalist', 'Cyberpunk']
  },
  {
    id: 2,
    title: 'Quantum Brand Identity',
    category: 'branding',
    image: '/projects/g2.jpg',
    description: 'Complete brand system for innovative tech startup focusing on quantum computing.',
    year: '2024',
    tags: ['Logo', 'Brand Guide', 'Typography', 'Color Theory']
  },
  {
    id: 3,
    title: 'Cosmic Animation',
    category: 'motion',
    image: '/projects/g3.jpg',
    description: '3D motion graphics exploring cosmic themes and interstellar journeys.',
    year: '2023',
    tags: ['3D', 'Animation', 'VFX', 'Cinematic']
  },
  {
    id: 4,
    title: 'Ethereal Voice Narrative',
    category: 'voice',
    image: '/projects/g4.jpg',
    description: 'Immersive voice over for documentary series about deep space exploration.',
    year: '2023',
    tags: ['Narration', 'Audio', 'Sound Design', 'Documentary']
  },
  {
    id: 5,
    title: 'Urban Brand Revival',
    category: 'branding',
    image: '/projects/g5.jpg',
    description: 'Complete rebranding of established streetwear company.',
    year: '2024',
    tags: ['Rebrand', 'Identity', 'Streetwear', 'Modern']
  },
  {
    id: 6,
    title: 'Holographic Visuals',
    category: 'graphics',
    image: '/projects/g6.jpg',
    description: 'Experimental graphics series featuring holographic effects.',
    year: '2024',
    tags: ['Experimental', 'Digital Art', 'Holographic', 'Innovation']
  },
  {
    id: 7,
    title: 'Deep Space Logo',
    category: 'branding',
    image: '/projects/l1.jpg',
    description: 'Minimalist logo design for an interstellar travel agency.',
    year: '2024',
    tags: ['Minimalist', 'Logo', 'Space', 'Travel']
  },
  {
    id: 8,
    title: 'Future Music Poster',
    category: 'graphics',
    image: '/projects/g2.jpg',
    description: 'Event poster for an electronic music festival.',
    year: '2024',
    tags: ['Poster', 'Glitch Art', 'Festival', 'Vibrant']
  },
  {
    id: 9,
    title: 'Sci-Fi Voice Promo',
    category: 'voice',
    image: '/projects/l1.jpg',
    description: 'Trailer voice over for a new sci-fi series.',
    year: '2024',
    tags: ['Trailer', 'Deep Voice', 'Sci-Fi', 'Audio Mix']
  },
  {
    id: 10,
    title: 'Animated Brand Reveal',
    category: 'motion',
    image: '/projects/g1.jpg',
    description: 'Smooth motion graphic for brand logo reveal.',
    year: '2024',
    tags: ['Logo Reveal', 'Abstract', 'Fluid', 'After Effects']
  },
];

const categories: { id: 'all' | 'graphics' | 'branding' | 'voice' | 'motion'; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'graphics', label: 'Graphics Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'voice', label: 'Voice Overs' },
  { id: 'motion', label: 'Motion Graphics' },
];

// Featured Carousel Component
interface FeaturedCarouselProps {
  items: PortfolioItem[];
  onViewProject: (project: PortfolioItem) => void;
}

const FeaturedCarousel = ({ items, onViewProject }: FeaturedCarouselProps) => {
  const featured = items.slice(0, 3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % featured.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featured.length]);

  if (featured.length === 0) return null;

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] rounded-3xl overflow-hidden mb-20">
      {featured.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40 transition-all duration-1000" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                  Featured Project
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
                  {item.title}
                </h2>
                <p className="text-white/80 text-lg max-w-xl hidden sm:block">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => onViewProject(item)}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shrink-0"
              >
                View Project →
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Portfolio Card Component
interface PortfolioCardProps {
  item: PortfolioItem;
  onViewProject: (project: PortfolioItem) => void;
}

const PortfolioCard = ({ item, onViewProject }: PortfolioCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
      onClick={() => onViewProject(item)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800/50 mb-4">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        {/* View Button */}
        <div className="absolute top-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-all duration-200 shadow-lg">
            →
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="font-medium uppercase tracking-wide">{item.category}</span>
          <span>•</span>
          <span>{item.year}</span>
        </div>
        <h3 className="text-xl font-semibold text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, closeModal }: { project: PortfolioItem, closeModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all duration-300">
      <div 
        ref={modalRef}
        className="relative bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white text-lg hover:bg-black/70 transition-all duration-200 backdrop-blur-sm border border-gray-600"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-[90vh]">
          {/* Image Section */}
          <div className="relative h-80 lg:h-full min-h-[400px] bg-gray-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium border border-gray-600">
                  {project.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Category</div>
                  <div className="text-white font-medium text-sm capitalize">{project.category}</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Year</div>
                  <div className="text-white font-medium text-sm">{project.year}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-300">Key Elements</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-gray-800/50 rounded-lg text-gray-300 text-sm border border-gray-700 hover:bg-gray-700/50 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <button className="py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 text-center">
                  View Live Project
                </button>
                <button className="py-3 bg-transparent text-white rounded-xl font-semibold border border-gray-600 hover:bg-gray-800/50 transition-all duration-200">
                  Request Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'graphics' | 'branding' | 'voice' | 'motion'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems.slice(3)
    : portfolioItems.filter(item => item.category === activeCategory);
  
  const featuredItems = portfolioItems.slice(0, 3);

  const openModal = useCallback((project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-base text-gray-400 uppercase tracking-wider font-medium">
            Our Creative Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of creative projects and design solutions
          </p>
        </div>

        {/* Featured Carousel */}
        <FeaturedCarousel items={featuredItems} onViewProject={openModal} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1 space-y-8">
            {/* Desktop Category Navigation */}
            <div className="hidden lg:block space-y-6 sticky top-24">
              <h2 className="text-lg font-semibold text-white mb-4">
                Filter by Category
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium ${
                      activeCategory === category.id
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4 border border-gray-800">
                <h2 className="text-lg font-semibold text-white">
                  Filter Categories
                </h2>
                <button
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white border border-gray-700"
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </button>
              </div>
              
              {isMobileMenuOpen && (
                <div className="mt-4 bg-white/5 rounded-2xl p-4 border border-gray-800 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium ${
                        activeCategory === category.id
                          ? 'bg-white/10 text-white border border-gray-600'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Start Your Project
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ready to bring your creative vision to life?
              </p>
              <a href="/contact">
                <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  onViewProject={openModal}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-gray-900/50 rounded-2xl border border-gray-800 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  No projects found
                </h3>
                <p className="text-gray-400">
                  We're working on new amazing projects in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;