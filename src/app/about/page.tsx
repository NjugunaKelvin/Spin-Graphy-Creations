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
      position: "Founder & CEOr",
      image: "/images/p1.jpg",
      email: "sarah@creativestudio.com",
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
            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Contact Us
            </button>
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
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-white/60 text-sm mb-3">{member.position}</p>
        <p className="text-white/70 text-xs mb-4 line-clamp-2">{member.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {member.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-white/5 rounded text-white/60 text-xs">
              {skill}
            </span>
          ))}
        </div>

        {/* Contact Links */}
        <div className="flex space-x-3">
          <a 
            href={`mailto:${member.email}`}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-3 rounded-lg text-center transition-all duration-300 border border-white/10"
          >
            Email
          </a>
          <a 
            href={`https://wa.me/${member.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 text-xs font-medium py-2 px-3 rounded-lg text-center transition-all duration-300 border border-green-500/20"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  )
}

export default AboutPage    