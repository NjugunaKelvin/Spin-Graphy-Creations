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
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout>();
  const modalRef = useRef<HTMLDivElement>(null);

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
      image: '/images/work1.jpg',
      description: 'Futuristic graphic series blending neon aesthetics with cyberpunk influences. This campaign explores the boundaries between digital and physical art forms.',
      year: '2024',
      tags: ['Poster', 'Digital', 'Minimalist', 'Cyberpunk']
    },
    {
      id: 2,
      title: 'Quantum Brand Identity',
      category: 'branding',
      image: '/images/work2.jpg',
      description: 'Complete brand system for innovative tech startup focusing on quantum computing solutions. Includes logo, color palette, and brand guidelines.',
      year: '2024',
      tags: ['Logo', 'Brand Guide', 'Typography', 'Color Theory']
    },
    {
      id: 3,
      title: 'Cosmic Animation',
      category: 'motion',
      image: '/images/work3.jpg',
      description: '3D motion graphics exploring cosmic themes and interstellar journeys. Created using advanced particle systems and lighting techniques.',
      year: '2023',
      tags: ['3D', 'Animation', 'VFX', 'Cinematic']
    },
    {
      id: 4,
      title: 'Ethereal Voice Narrative',
      category: 'voice',
      image: '/images/work4.jpg',
      description: 'Immersive voice over for documentary series about deep space exploration. Features atmospheric sound design and professional narration.',
      year: '2023',
      tags: ['Narration', 'Audio', 'Sound Design', 'Documentary']
    },
    {
      id: 5,
      title: 'Urban Brand Revival',
      category: 'branding',
      image: '/images/work5.jpg',
      description: 'Complete rebranding of established streetwear company. Modernized their identity while maintaining street credibility and heritage.',
      year: '2024',
      tags: ['Rebrand', 'Identity', 'Streetwear', 'Modern']
    },
    {
      id: 6,
      title: 'Holographic Visuals',
      category: 'graphics',
      image: '/images/work6.jpg',
      description: 'Experimental graphics series featuring holographic effects and light refraction studies. Pushing the boundaries of digital art techniques.',
      year: '2024',
      tags: ['Experimental', 'Digital Art', 'Holographic', 'Innovation']
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

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companySlides.length) % companySlides.length);
  };

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <div className="min-h-screen bg-[#0f0f1f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
          <div 
            ref={modalRef}
            className="relative bg-[#0f0f1f] rounded-3xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-hidden transform scale-95 animate-in fade-in-90 zoom-in-95"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-2xl font-light transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-[90vh]">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full min-h-[400px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
                
                {/* Mobile Header */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent lg:hidden">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-white/80 text-sm">{selectedProject.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold mb-4 border border-white/20">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                    <div className="flex items-center space-x-4 text-white/60">
                      <span className="text-sm">{selectedProject.year}</span>
                      <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                      <span className="text-sm">{selectedProject.tags.length} elements</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                    <p className="text-white/70 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-2 bg-white/5 rounded-lg text-white/80 text-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-white/60 text-sm mb-1">Category</div>
                      <div className="text-white font-semibold capitalize">{selectedProject.category}</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-white/60 text-sm mb-1">Year</div>
                      <div className="text-white font-semibold">{selectedProject.year}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex-1 py-3 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-center">
                      Download Assets
                    </button>
                    <button className="flex-1 py-3 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                      Share Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover our creative journey through innovative design solutions and brand transformations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Company Info & Slideshow */}
          <div className="lg:col-span-1 space-y-8">
            {/* Category Navigation */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Categories
              </h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-500 text-lg font-semibold group relative overflow-hidden ${
                      activeCategory === category.id
                        ? 'bg-white/10 text-white shadow-2xl border border-white/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">{category.label}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                      activeCategory === category.id ? 'scale-x-100' : ''
                    }`} />
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
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <div className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        {slide.stat}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{slide.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-3 mt-6">
                {companySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/10 hover:scale-110"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/10 hover:scale-110"
              >
                →
              </button>
            </div>

            {/* Company Stats */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Premium Quality Designs</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Unlimited Revisions</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-3 h-3 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-lg font-bold text-white mb-3">Start Your Project</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">Ready to bring your vision to life?</p>
              <button className="w-full py-4 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-500 transform hover:scale-105">
                Get Quote
              </button>
            </div>
          </div>

          {/* Right Column - Portfolio Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems.map((item, index) => (
                <PortfolioCard 
                  key={item.id} 
                  item={item} 
                  index={index}
                  onViewProject={openModal}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-24">
                <div className="text-7xl mb-6 opacity-50">🎨</div>
                <h3 className="text-2xl font-bold text-white/80 mb-3">No projects found</h3>
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
interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  onViewProject: (project: PortfolioItem) => void;
}

const PortfolioCard = ({ item, index, onViewProject }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-transparent rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-1000 hover:scale-105"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative h-80 overflow-hidden rounded-3xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-all duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Slow Motion Depth Effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-1000 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        />
        
        {/* Floating Elements */}
        <div className={`absolute top-4 left-4 transition-all duration-500 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold uppercase border border-white/30">
            {item.category}
          </span>
        </div>

        <div className={`absolute top-4 right-4 transition-all duration-500 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <span className="px-3 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
            {item.year}
          </span>
        </div>

        {/* Content Overlay - Appears on Hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-t from-black/90 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {item.title}
            </h3>
            
            <p className="text-white/80 text-sm mb-4 leading-relaxed line-clamp-2">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(0, 3).map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/60 text-xs border border-white/20">
                  +{item.tags.length - 3}
                </span>
              )}
            </div>

            {/* View Button */}
            <button 
              onClick={() => onViewProject(item)}
              className="w-full py-3 bg-white/20 backdrop-blur-md rounded-xl text-white text-sm font-semibold border border-white/20 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105"
            >
              View Project Details
            </button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-xl -z-10`} />
      </div>

      {/* Minimal Always-Visible Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-white font-semibold text-lg drop-shadow-2xl">
          {item.title}
        </h3>
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
    </div>
  );
};

export default PortfolioPage;