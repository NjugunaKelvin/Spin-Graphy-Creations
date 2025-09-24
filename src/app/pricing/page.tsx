'use client'
import { useState } from 'react'
import Link from 'next/link'

interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
}

interface Service {
  id: string
  name: string
  description: string
  basePrice: string
  deliveryTime: string
  revisions: string
  features: string[]
  addons: Addon[]
}

interface Addon {
  name: string
  price: string
  description: string
}

const PricingPage = () => {
  const [activeService, setActiveService] = useState<string>('graphics')

  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      price: '$499',
      period: '/project',
      features: [
        '1-2 Design Concepts',
        '2 Revisions',
        'Basic Brand Guidelines',
        '5-7 Day Delivery',
        'Source Files Included',
        'Email Support'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'secondary'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$899',
      period: '/project',
      features: [
        '3-4 Design Concepts',
        'Unlimited Revisions',
        'Complete Brand Guidelines',
        '3-5 Day Delivery',
        'Source Files + Assets',
        'Priority Support',
        'Social Media Kit'
      ],
      popular: true,
      buttonText: 'Most Popular',
      buttonVariant: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale brand transformations',
      price: '$1,499',
      period: '/project',
      features: [
        '5+ Design Concepts',
        'Unlimited Revisions',
        'Full Brand System',
        '1-3 Day Rush Delivery',
        'All Source Files',
        'Dedicated Manager',
        'Multi-Platform Assets',
        'Brand Strategy Session'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary'
    }
  ]

  const services: Service[] = [
    {
      id: 'graphics',
      name: 'Graphics Design',
      description: 'Custom graphics for digital and print media',
      basePrice: '$299',
      deliveryTime: '3-5 days',
      revisions: '3 rounds',
      features: [
        'Custom Illustration',
        'Vector Graphics',
        'Print-ready Files',
        'Multiple Formats',
        'Color Variations'
      ],
      addons: [
        { name: 'Social Media Pack', price: '+$99', description: '10+ platform-optimized graphics' },
        { name: 'Animation', price: '+$199', description: 'Basic motion graphics' },
        { name: '3D Elements', price: '+$299', description: '3D modeling and rendering' }
      ]
    },
    {
      id: 'branding',
      name: 'Brand Identity',
      description: 'Complete brand system development',
      basePrice: '$799',
      deliveryTime: '7-10 days',
      revisions: 'Unlimited',
      features: [
        'Logo Design',
        'Color Palette',
        'Typography System',
        'Brand Guidelines',
        'Stationery Design'
      ],
      addons: [
        { name: 'Brand Strategy', price: '+$299', description: 'Market research and positioning' },
        { name: 'Website Design', price: '+$499', description: 'Complete website mockups' },
        { name: 'Packaging Design', price: '+$399', description: 'Product packaging concepts' }
      ]
    },
    {
      id: 'voice',
      name: 'Voice Overs',
      description: 'Professional voice recording services',
      basePrice: '$149',
      deliveryTime: '2-3 days',
      revisions: '2 rounds',
      features: [
        'Professional Recording',
        'Audio Editing',
        'Multiple Takes',
        'Background Music',
        '24hr Rush Delivery'
      ],
      addons: [
        { name: 'Multiple Voices', price: '+$99', description: 'Additional voice actors' },
        { name: 'Sound Design', price: '+$199', description: 'Full audio production' },
        { name: 'Translation', price: '+$149', description: 'Multi-language versions' }
      ]
    },
    {
      id: 'motion',
      name: 'Motion Graphics',
      description: 'Animated videos and visual effects',
      basePrice: '$599',
      deliveryTime: '5-7 days',
      revisions: '4 rounds',
      features: [
        '2D/3D Animation',
        'Sound Design',
        'Visual Effects',
        'Multiple Resolutions',
        'Source Files'
      ],
      addons: [
        { name: '3D Animation', price: '+$399', description: 'Advanced 3D modeling' },
        { name: 'Character Design', price: '+$299', description: 'Custom character creation' },
        { name: 'VR/AR Ready', price: '+$499', description: 'Immersive experience optimization' }
      ]
    }
  ]

  const faqs = [
    {
      question: "How many revisions do I get?",
      answer: "Revision limits vary by package. Starter includes 2 revisions, Professional offers unlimited revisions, and Enterprise includes unlimited revisions with priority handling."
    },
    {
      question: "What's included in the source files?",
      answer: "You receive all editable source files (AI, PSD, etc.), export files (PNG, JPG, PDF), and any additional assets created during the project."
    },
    {
      question: "Can I upgrade my package mid-project?",
      answer: "Yes, you can upgrade at any time. We'll prorate the difference and immediately apply the new package benefits to your ongoing project."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we provide a full refund within the first 48 hours."
    },
    {
      question: "How do I get started?",
      answer: "Simply choose a package, complete the booking form, and we'll schedule a kickoff call within 24 hours to discuss your project details."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f1f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Pricing & Packages
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for exceptional creative work. Choose the package that 
            best fits your needs or customize your own solution.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Project Packages
              </span>
            </h2>
            <p className="text-white/70">All-inclusive packages for complete project solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        {/* Service-based Pricing */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Service Pricing
              </span>
            </h2>
            <p className="text-white/70">Custom pricing based on specific service needs</p>
          </div>

          {/* Service Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-white text-[#0f0f1f] shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`transition-all duration-500 ${
                    activeService === service.id ? 'block' : 'hidden'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-white/70 mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-white">{service.basePrice}</div>
                          <div className="text-white/60 text-sm">Starting Price</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-white">{service.deliveryTime}</div>
                          <div className="text-white/60 text-sm">Delivery</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-white">{service.revisions}</div>
                          <div className="text-white/60 text-sm">Revisions</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Includes:</h4>
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-4">Available Add-ons</h4>
                      <div className="space-y-3">
                        {service.addons.map((addon, index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold text-white">{addon.name}</span>
                              <span className="text-white/80 font-bold">{addon.price}</span>
                            </div>
                            <p className="text-white/60 text-sm">{addon.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Have questions or need a custom quote? Our team is here to help you choose the perfect solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#0f0f1f] rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              Get Custom Quote
            </Link>
            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Pricing Card Component
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
      plan.popular 
        ? 'border-white/20 shadow-2xl shadow-white/10' 
        : 'border-white/10 hover:border-white/20'
    }`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-[#0f0f1f] px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-white/70 text-sm">{plan.description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-black text-white mb-1">{plan.price}</div>
        <div className="text-white/60 text-sm">{plan.period}</div>
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
        plan.buttonVariant === 'primary'
          ? 'bg-white text-[#0f0f1f] hover:shadow-2xl hover:shadow-white/30'
          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
      }`}>
        {plan.buttonText}
      </button>
    </div>
  )
}

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{question}</span>
        <span className={`text-white text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-white/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default PricingPage