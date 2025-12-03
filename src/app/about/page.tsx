/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Brian Njenga",
    role: "Founder & Visionary",
    image: "/images/p1.jpg",
    bio: "Redefining the digital landscape through strategic design."
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Lead Creative",
    image: "/images/p2.jpg",
    bio: "Pushing pixels and boundaries in equal measure."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Sonic Architect",
    image: "/images/p3.jpg",
    bio: "Crafting immersive audio narratives that resonate."
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Brand Strategist",
    image: "/images/p4.jpg",
    bio: "Building brands that speak louder than words."
  }
]

const manifestoItems = [
  {
    title: "Defy Convention",
    desc: "We don't follow trends. We set them.",
    image: "/projects/g1.jpg"
  },
  {
    title: "Pixel Perfection",
    desc: "Every detail matters. No compromises.",
    image: "/projects/g2.jpg"
  },
  {
    title: "Human First",
    desc: "Technology serves people, not the other way around.",
    image: "/projects/g3.jpg"
  },
  {
    title: "Radical Honesty",
    desc: "Transparency is the foundation of trust.",
    image: "/projects/g5.jpg"
  }
]

const AboutPage = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember>(teamMembers[0])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white font-sans">

      {/* Hero Section - Cinematic Background */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/g6.jpg" // Using a project image for texture
            alt="Background"
            fill
            className="object-cover opacity-40 scale-110 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="z-10 space-y-4 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-purple-500" />
            <p className="text-sm md:text-base font-medium tracking-[0.3em] text-purple-400 uppercase">
              Est. 2014 — Nairobi, KE
            </p>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mix-blend-screen">
            WE CRAFT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-white animate-gradient-x">
              DIGITAL
            </span> <br />
            REALITIES
          </h1>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 01: The Studio (Sticky Layout) */}
      <section className="relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between bg-black z-10">
            <div className="relative overflow-hidden group">
              <span className="text-xs font-bold tracking-widest text-gray-600 border border-gray-800 px-3 py-1 rounded-full relative z-10">01</span>
              <h2 className="text-4xl font-bold mt-6 relative z-10">The Studio</h2>
              {/* Subtle background glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 blur-3xl -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </div>
            <p className="hidden lg:block text-gray-500 text-sm max-w-[200px]">
              Where creativity meets technology to solve complex problems.
            </p>
          </div>

          {/* Scrolling Content */}
          <div className="lg:w-2/3 p-6 md:p-12 lg:p-24 space-y-24 bg-black/50 backdrop-blur-sm relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <p className="text-2xl md:text-4xl font-light leading-tight text-gray-300">
                We are not just a design agency. We are a collective of dreamers, thinkers, and doers who believe that <span className="text-white font-bold border-b-2 border-purple-500">design has the power to change the world.</span>
              </p>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                From our humble beginnings as a shared workspace to a global creative powerhouse, our mission has remained the same: to create work that matters. Work that moves people. Work that stands the test of time.
              </p>
            </div>

            {/* Integrated Stats */}
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10 relative z-10">
              <div className="group">
                <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">150+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">27</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Global Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: The Visionaries (Interactive Team) */}
      <section className="relative border-t border-white/5">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between bg-black z-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-600 border border-gray-800 px-3 py-1 rounded-full">02</span>
              <h2 className="text-4xl font-bold mt-6">The Visionaries</h2>
            </div>

            {/* Dynamic Image Reveal for Desktop */}
            <div className="hidden lg:block relative w-full aspect-[3/4] mt-12 overflow-hidden rounded-lg bg-gray-900 border border-white/10">
              <Image
                key={activeTeamMember.id}
                src={activeTeamMember.image}
                alt={activeTeamMember.name}
                fill
                className="object-cover animate-fadeIn"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl">{activeTeamMember.name}</p>
                <p className="text-purple-400 text-sm tracking-widest uppercase">{activeTeamMember.role}</p>
              </div>
            </div>
          </div>

          {/* Scrolling List */}
          <div className="lg:w-2/3 p-6 md:p-12 lg:p-24 flex flex-col justify-center min-h-screen bg-black relative">
            <div className="space-y-0 relative z-10">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onMouseEnter={() => setActiveTeamMember(member)}
                  className="group relative py-12 border-b border-white/10 cursor-pointer transition-all duration-500 hover:pl-8"
                >
                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-baseline justify-between relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="text-sm text-gray-700 group-hover:text-purple-400 transition-colors duration-300 uppercase tracking-widest">
                      {member.role}
                    </span>
                  </div>
                  <p className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 text-gray-400 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 max-w-xl">
                    {member.bio}
                  </p>

                  {/* Mobile Image Fallback */}
                  <div className="lg:hidden mt-6 relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Manifesto (Dark Image Grid) */}
      <section className="relative border-t border-white/5 bg-black">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Header */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between bg-black z-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-600 border border-gray-800 px-3 py-1 rounded-full">03</span>
              <h2 className="text-4xl font-bold mt-6">Manifesto</h2>
            </div>
            <p className="hidden lg:block text-gray-500 text-sm">
              Our core beliefs that drive every pixel we push.
            </p>
          </div>

          {/* Grid Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {manifestoItems.map((item, idx) => (
                <div key={idx} className={`relative h-[400px] border-b border-white/5 ${idx % 2 === 0 ? 'border-r' : ''} group overflow-hidden`}>
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-12 w-full z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-white leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center bg-black text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/projects/g8.png"
            alt="Footer BG"
            fill
            className="object-cover blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              BREAK THE MOLD?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default AboutPage