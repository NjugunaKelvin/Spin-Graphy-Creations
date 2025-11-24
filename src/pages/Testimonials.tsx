/* eslint-disable react-hooks/exhaustive-deps */
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
      content: "Reliable and excellent in the solutions they deliver. Our poster designs have always exceeded expectations.",
      projectType: "Logo & Motion"
    },
    {
      id: 2,
      name: "Martin Luther",
      company: "Urban Brew Co.",
      role: "Founder",
      image: "/images/p2.jpg",
      videoThumbnail: "/thumbnails/2.png",
      content: "Handled all our branding from logo design to social media presence. Professional and creative throughout.",
      projectType: "Brand Film & Identity"
    },
    {
      id: 3,
      name: "David Omondi",
      company: "Lumina Fashion",
      role: "Creative Director",
      image: "/images/p3.jpg",
      videoThumbnail: "/thumbnails/3.png",
      content: "Transformed our campaign into a visual masterpiece that trended across all social platforms.",
      projectType: "Fashion Campaign"
    }
  ]

  const eventTypes = ['Birthdays', 'Weddings', 'Shabaha', 'Concerts', 'Corporates', 'Job Posters', 'Applications', 'Graduations']
  const clientNames = ['TechFlow', 'Nova Studios', 'Urban Brew', 'Lumina', 'NexTech', 'GreenLeaf']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 bg-[#0f0f1f] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Visual Excellence,
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Verified Impact
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
            Hear what our clients say about our creative solutions and delivery
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video Thumbnail */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={testimonials[activeIndex].videoThumbnail}
                  alt={`${testimonials[activeIndex].company} Project`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/30">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>

                {/* Project Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                    {testimonials[activeIndex].projectType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-5xl text-white/20 mb-6">"</div>
              
              <blockquote className="text-2xl text-white/80 leading-relaxed mb-8 font-light">
                {testimonials[activeIndex].content}
              </blockquote>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Types Marquee */}
        <div className="relative mb-16">
          <div className="flex overflow-hidden py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...eventTypes, ...eventTypes].map((event, index) => (
                <div key={index} className="flex items-center mx-8">
                  <div className="text-white/40 text-lg font-semibold hover:text-white/60 transition-colors duration-300">
                    {event}
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full mx-8" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Names Marquee */}
        <div className="relative mb-12">
          <div className="flex overflow-hidden py-6">
            <div className="flex animate-marquee2 whitespace-nowrap">
              {[...clientNames, ...clientNames].map((client, index) => (
                <div key={index} className="flex items-center mx-8">
                  <div className="text-white/40 text-lg font-semibold hover:text-white/60 transition-colors duration-300">
                    {client}
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full mx-8" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more success stories?
            </h3>
            <p className="text-white/60 mb-6">
              Explore our complete portfolio of client testimonials and case studies
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              View All Testimonials
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials