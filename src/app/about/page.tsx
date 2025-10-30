/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  email: string
  whatsapp: string
  bio: string
  skills: string[]
}

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'values'>('story')

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Brian Njenga",
      position: "Founder & CEO",
      image: "/images/p1.jpg",
      email: "brian@creativestudio.com",
      whatsapp: "+1234567890",
      bio: "10+ years experience in brand strategy and visual design. Passionate about creating meaningful brand experiences.",
      skills: ["Brand Strategy", "Art Direction", "UI/UX Design"]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      position: "Lead Designer",
      image: "/images/p2.jpg",
      email: "marcus@creativestudio.com",
      whatsapp: "+1234567891",
      bio: "Specialized in motion graphics and 3D animation. Loves pushing the boundaries of digital storytelling.",
      skills: ["Motion Graphics", "3D Animation", "Visual Effects"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Voice Artist",
      image: "/images/p3.jpg",
      email: "elena@creativestudio.com",
      whatsapp: "+1234567892",
      bio: "Award-winning voice artist with a passion for bringing stories to life through authentic narration.",
      skills: ["Voice Acting", "Audio Production", "Script Writing"]
    },
    {
      id: 4,
      name: "Alex Thompson",
      position: "Brand Strategist",
      image: "/images/p4.jpg",
      email: "alex@creativestudio.com",
      whatsapp: "+1234567893",
      bio: "Expert in brand development and market positioning. Helps brands find their unique voice.",
      skills: ["Brand Development", "Market Research", "Content Strategy"]
    }
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "89", label: "Happy Clients" },
    { number: "27", label: "Awards Won" },
    { number: "10+", label: "Years Experience" }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f1f] relative overflow-hidden mt-8">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              About Our Studio
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of creatives dedicated to transforming ideas into 
            extraordinary visual experiences that captivate and inspire.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story/Mission/Values Tabs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex space-x-4 mb-8 justify-center">
            {[
              { id: 'story' as const, label: 'Our Story' },
              { id: 'mission' as const, label: 'Our Mission' },
              { id: 'values' as const, label: 'Our Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-[#0f0f1f] shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            {activeTab === 'story' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">From Passion to Profession</h3>
                <p className="text-white/70 leading-relaxed">
                  Founded in 2014, our studio began as a small collective of designers and artists 
                  passionate about pushing creative boundaries. What started as a shared workspace 
                  has evolved into a full-service creative agency serving clients worldwide.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Over the years, we've had the privilege of working with startups, established brands, 
                  and everything in between. Our journey has been marked by continuous learning, 
                  innovation, and a commitment to excellence in every project we undertake.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Our Purpose</h3>
                <p className="text-white/70 leading-relaxed">
                  Our mission is to empower brands through exceptional design and strategic thinking. 
                  We believe that great design isn't just about aesthetics—it's about creating 
                  meaningful connections between brands and their audiences.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We strive to be more than just a service provider; we aim to be creative partners 
                  who understand your vision and help bring it to life in ways that exceed expectations.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">What We Stand For</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Innovation", desc: "Constantly exploring new techniques and technologies" },
                    { title: "Quality", desc: "Never compromising on excellence and attention to detail" },
                    { title: "Collaboration", desc: "Working together to achieve extraordinary results" },
                    { title: "Integrity", desc: "Honest communication and transparent processes" }
                  ].map((value, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-white/70 text-sm">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The creative minds behind every project. Each member brings unique skills 
              and perspectives to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing" 
              className="px-8 py-4 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              View Pricing
            </Link>
            <a href="/contact">
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Team Member Card Component
const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Full Card */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Contact Icons - Positioned at edges */}
        <div className={`absolute top-4 right-4 flex flex-col gap-3 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          {/* Email Icon */}
          <a 
            href={`mailto:${member.email}`}
            className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          {/* WhatsApp Icon */}
          <a 
            href={`https://wa.me/${member.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.464"/>
            </svg>
          </a>
        </div>

        {/* Name and Position - Bottom of card */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-white/80 text-sm">{member.position}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage