/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  image: string
  content: string
  videoThumbnail: string
  projectType: string
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mary Njeri",
      company: "NexTech Solutions",
      role: "Marketing Director",
      image: "/images/p1.jpg",
      videoThumbnail: "/thumbnails/1.png",
      content: "SPingrapy didn't just design a logo—they crafted an experience. The motion graphics and interactive elements they created have become the talk of our industry.",
      projectType: "Logo & Motion"
    },
    {
      id: 2,
      name: "Martin Luther",
      company: "Urban Brew Co.",
      role: "Founder",
      image: "/images/p2.jpg",
      videoThumbnail: "/thumbnails/2.png",
      content: "The brand film SPingrapy produced captured our essence perfectly. Every frame tells our story with such emotional depth and visual sophistication.",
      projectType: "Brand Film & Identity"
    },
    {
      id: 3,
      name: "David Omondi",
      company: "Lumina Fashion",
      role: "Creative Director",
      image: "/images/p3.jpg",
      videoThumbnail: "/thumbnails/3.png",
      content: "Working with SPingrapy felt like collaborating with artistic partners. They transformed our seasonal campaign into a visual masterpiece that trended globally.",
      projectType: "Fashion Campaign"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 bg-[#0f0f1f] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Visual Excellence, 
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Verified Impact
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Where creative vision meets measurable results. See how our media creations drive real impact.
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Video Thumbnail Side */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md">
              {/* Video Thumbnail with Play Button */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={testimonials[activeIndex].videoThumbnail}
                  alt={`${testimonials[activeIndex].company} Project`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20">
                    {testimonials[activeIndex].projectType}
                  </span>
                </div>
              </div>

              {/* Client Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/60 text-xs">
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm animate-pulse" />
          </div>

          {/* Testimonial Content Side */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full">
              {/* Quote Icon */}
              <div className="text-4xl text-white/20 mb-6">"</div>
              
              {/* Testimonial Text */}
              <blockquote className="text-2xl text-white/90 leading-relaxed mb-8 font-light">
                {testimonials[activeIndex].content}
              </blockquote>

              {/* Client Details */}
              <div className="border-t border-white/10 pt-6">
                <div className="text-white font-bold text-lg mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-white/60 text-sm mb-2">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </div>
                <div className="text-purple-400 text-sm font-medium">
                  {testimonials[activeIndex].projectType}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="relative">
          <div className="flex space-x-12 overflow-hidden py-4">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap">
              {['Birthdays', 'Weddinga', 'Shabaha', 'Concerts', 'Corporates','Job Posters', 'Call for Applications', 'Graduations'].map((logo, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-white/40 text-lg font-bold hover:text-white/60 transition-colors duration-300">
                    {logo}
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full mx-6" />
                </div>
              ))}
            </div>
            <div className="flex space-x-12 animate-marquee2 whitespace-nowrap">
              {['TechFlow', 'Nova Studios', 'Urban Brew', 'Lumina', 'NexTech', 'GreenLeaf'].map((logo, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-white/40 text-lg font-bold hover:text-white/60 transition-colors duration-300">
                    {logo}
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full mx-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials