 /* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-const */
'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface InspirationItem {
  id: number
  type: 'color' | 'texture' | 'pattern' | 'art'
  src: string
  title: string
  category: string
}

const Wall = () => {
  const [activeItem, setActiveItem] = useState<InspirationItem | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const inspirationItems: InspirationItem[] = [
    {
      id: 1,
      type: 'color',
      src: '/designs/g1.jpg',
      title: 'Simplix Design',
      category: 'Color Palette'
    },
    {
      id: 2,
      type: 'texture',
      src: '/designs/g2.jpg',
      title: 'Neatworks',
      category: 'Texture'
    },
    {
      id: 3,
      type: 'pattern',
      src: '/designs/g3.jpg',
      title: 'Line + Layer',
      category: 'Pattern'
    },
    {
      id: 4,
      type: 'art',
      src: '/designs/g4.jpg',
      title: 'Urban Architecture',
      category: 'Inspiration'
    },
    {
      id: 5,
      type: 'color',
      src: '/images/card2.jpg',
      title: 'Ocean Blues',
      category: 'Color Palette'
    },
    {
      id: 6,
      type: 'texture',
      src: '/images/card6.jpg',
      title: 'Paper Texture',
      category: 'Texture'
    },
    {
      id: 7,
      type: 'pattern',
      src: '/images/work3.jpg',
      title: 'Organic Shapes',
      category: 'Pattern'
    },
    {
      id: 8,
      type: 'art',
      src: '/images/work9.jpg',
      title: 'Digital Art',
      category: 'Inspiration'
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollSpeed = 0.3
    let animationId: number
    let isPaused = false

    const autoScroll = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(autoScroll)
        return
      }

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    const handleMouseEnter = () => { isPaused = true }
    const handleMouseLeave = () => { isPaused = false }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    animationId = requestAnimationFrame(autoScroll)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'color': return 'from-purple-500/20 to-pink-500/20'
      case 'texture': return 'from-blue-500/20 to-cyan-500/20'
      case 'pattern': return 'from-green-500/20 to-emerald-500/20'
      case 'art': return 'from-orange-500/20 to-red-500/20'
      default: return 'from-gray-500/20 to-gray-500/20'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'color':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      case 'texture':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'pattern':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
    }
  }

  return (
    <section className="relative py-20 bg-[#0f0f1f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Creative Inspiration Wall
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A living moodboard of colors, textures, and patterns that fuel our creative process and inspire exceptional design.
          </p>
        </div>

        {/* Main Inspiration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {inspirationItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-white/20 rounded-full">
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="text-xs text-white/80 font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Inspiration Bar */}
        <div className="mb-12">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing"
          >
            {inspirationItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-48 h-32 relative group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => setActiveItem(item)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium truncate">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Inspiration Detail Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-square">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-white/20 rounded-full">
                  {getTypeIcon(activeItem.type)}
                </div>
                <span className="text-sm font-medium text-white/80">{activeItem.category}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{activeItem.title}</h3>
              
              <p className="text-white/70 mb-6">
                This {activeItem.type} represents the kind of creative inspiration we bring to every project. 
                It's these elements that help us craft unique and memorable experiences for our clients.
              </p>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-white text-[#0f0f1f] rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Use This Style
                </button>
                <button 
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Wall