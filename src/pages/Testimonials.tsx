/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-const */
'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  image: string
  content: string
  rating: number
  project: string
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "NexTech Solutions",
      role: "Marketing Director",
      image: "/images/p1.jpg",
      content: "SPingrapy transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The website they delivered increased our conversion rate by 45%.",
      rating: 5,
      project: "Brand Identity & Website"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      company: "Urban Brew Co.",
      role: "Founder",
      image: "/images/p2.jpg",
      content: "Working with SPingrapy was a game-changer for our startup. They understood our vision and created a stunning visual identity that perfectly captures our brand's essence.",
      rating: 5,
      project: "Complete Brand Package"
    },
    {
      id: 3,
      name: "Elena Petrova",
      company: "Lumina Fashion",
      role: "Creative Director",
      image: "/images/p3.jpg",
      content: "The motion graphics and visual storytelling SPingrapy created for our campaign were absolutely breathtaking. They brought our collection to life in ways we never imagined.",
      rating: 5,
      project: "Campaign Motion Graphics"
    },
    {
      id: 4,
      name: "David Kim",
      company: "TechFlow Inc.",
      role: "Product Manager",
      image: "/images/p1.jpg",
      content: "SPingrapy's UI/UX design transformed our product. The intuitive interface and stunning visuals they created significantly improved user engagement and satisfaction.",
      rating: 5,
      project: "UI/UX Design"
    },
    {
      id: 5,
      name: "Amanda Johnson",
      company: "GreenLeaf Organics",
      role: "CEO",
      image: "/images/p2.jpg",
      content: "From concept to execution, SPingrapy delivered exceptional work. Their strategic approach to our packaging design resulted in a 30% increase in shelf appeal.",
      rating: 5,
      project: "Packaging Design"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  // Auto-scroll for cards
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollSpeed = 0.4

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    animationId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-white/20'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="relative py-20 bg-[#0f0f1f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Client Stories
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover how SPingrapy creations have transformed brands and delivered exceptional results for our valued clients.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className="relative max-w-4xl mx-auto mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-2xl md:text-3xl text-center text-white/90 font-light leading-relaxed mb-8">
              "{testimonials[activeTestimonial].content}"
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium">
                {testimonials[activeTestimonial].project}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrolling Testimonial Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Success Stories
          </h3>
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveTestimonial(index)}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-3 px-3 py-1 bg-white/5 rounded-full text-white/60 text-xs font-medium inline-block">
                  {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '150+', label: 'Projects Delivered' },
            { number: '89%', label: 'Return Clients' },
            { number: '4.9/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-3xl font-black mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their vision into stunning reality with SPingrapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-40 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" />
    </section>
  )
}

export default Testimonials