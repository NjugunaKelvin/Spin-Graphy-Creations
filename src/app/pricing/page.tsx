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
  paymentTerms: string
}

interface Service {
  id: string
  name: string
  description: string
  basePrice: string
  priceRange?: string
  deliveryTime: string
  revisions: string
  features: string[]
  addons: Addon[]
  paymentTerms: string
}

interface Addon {
  name: string
  price: string
  description: string
}

const PricingPage = () => {
  const [activeService, setActiveService] = useState<string>('quick-jobs')

  const pricingPlans: PricingPlan[] = [
    {
      id: 'quick-jobs',
      name: 'Quick Jobs',
      description: 'Budget Clients & One-offs - Fast turnaround for individual projects',
      price: 'From Ksh 1,500',
      period: '/project',
      features: [
        '1-2 Design Concepts',
        '1-2 Revisions',
        '24-48 Hour Delivery',
        'Source Files Included',
        'Perfect for one-time designs'
      ],
      buttonText: 'Start Quick Project',
      buttonVariant: 'secondary',
      paymentTerms: '100% upfront payment'
    },
    {
      id: 'small-business',
      name: 'Small Business',
      description: 'Ideal for SMEs needing consistent branding & ongoing designs',
      price: 'Ksh 25,000',
      period: '/package',
      features: [
        '2-3 Logo Concepts',
        'Unlimited Revisions',
        'Full Brand Guidelines',
        'Social Media Starter Pack',
        'Stationery Templates',
        'Priority Support'
      ],
      popular: true,
      buttonText: 'Choose Package',
      buttonVariant: 'primary',
      paymentTerms: '50% upfront, 50% on completion'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      description: 'For established businesses needing brand transformation',
      price: 'Ksh 120,000',
      period: '/package',
      features: [
        '4-6 Logo Concepts',
        'Unlimited Revisions',
        'Full Corporate Brand Book',
        'Multi-platform Assets',
        'Dedicated Project Manager',
        'Strategy Sessions',
        'Presentation Design'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
      paymentTerms: '40% upfront, 30% mid-way, 30% on delivery'
    }
  ]

  const services: Service[] = [
    {
      id: 'quick-jobs',
      name: 'Quick Jobs',
      description: 'Fast turnaround designs for budget clients and one-off projects',
      basePrice: 'From Ksh 1,500',
      deliveryTime: '24-48 hours',
      revisions: '1-2 rounds',
      paymentTerms: '100% upfront',
      features: [
        'Poster/Flyer Design - Ksh 2,000-3,500',
        'Social Media Post - Ksh 1,500-2,500',
        'Business Card Design - Ksh 3,000-5,000',
        'Brochure (2-4 pages) - Ksh 6,000-12,000',
        'Certificate/Invitation - Ksh 1,500-3,000',
        'Event Branding Pack - From Ksh 12,000'
      ],
      addons: [
        { name: 'Rush Delivery (24hr)', price: '+50%', description: 'Priority turnaround' },
        { name: 'Additional Revisions', price: '+Ksh 1,000', description: 'Extra revision rounds' },
        { name: 'Multiple Formats', price: '+Ksh 500', description: 'Extra file formats' }
      ]
    },
    {
      id: 'retainers',
      name: 'Monthly Retainers',
      description: 'Ongoing design support with predictable monthly pricing',
      basePrice: 'Ksh 30,000',
      priceRange: 'Ksh 30,000 - 100,000+',
      deliveryTime: '1-3 days',
      revisions: 'Unlimited',
      paymentTerms: 'Monthly in advance',
      features: [
        'Starter Retainer - Ksh 30,000/month (10 design tasks)',
        'Pro Retainer - Ksh 50,000/month (20 design tasks + priority)',
        'Dedicated Designer - Ksh 80,000-100,000/month (unlimited requests)',
        'Creative Support Retainer - Ksh 150,000+/month',
        'Communication Design - Ksh 200,000+/month'
      ],
      addons: [
        { name: 'Additional Tasks', price: '+Ksh 3,000', description: 'Extra design tasks per month' },
        { name: 'Priority Queue', price: '+Ksh 10,000', description: 'Jump to front of line' },
        { name: 'Video Editing', price: '+Ksh 20,000', description: 'Monthly video content' }
      ]
    },
    {
      id: 'specialized',
      name: 'Specialized Services',
      description: 'Advanced creative services and add-ons',
      basePrice: 'From Ksh 7,500',
      deliveryTime: '3-7 days',
      revisions: '2-3 rounds',
      paymentTerms: '50% upfront',
      features: [
        'Motion Graphics - From Ksh 7,500-20,000',
        'Explainer Video (60-90sec) - Ksh 35,000-60,000',
        'Voiceovers - From Ksh 10,000/min',
        '3D Design/Rendering - Ksh 25,000-60,000',
        'Social Media Marketing Pack - From Ksh 15,000',
        'Website Design - Ksh 50,000-120,000'
      ],
      addons: [
        { name: 'Multiple Revisions', price: '+Ksh 5,000', description: 'Additional revision rounds' },
        { name: 'Commercial License', price: '+Ksh 10,000', description: 'Full commercial usage rights' },
        { name: 'Source Files', price: 'Included', description: 'All editable source files' }
      ]
    },
    {
      id: 'partnerships',
      name: 'Partnerships',
      description: 'Agency and corporate partnership programs',
      basePrice: 'Custom Pricing',
      deliveryTime: 'Flexible',
      revisions: 'Unlimited',
      paymentTerms: 'Negotiable',
      features: [
        'Bulk Poster Design - Ksh 1,500/poster (min. 10/month)',
        'White-label Branding - 20% discount on packages',
        'Dedicated Designer - Ksh 80,000-120,000/month',
        'NGO Contracts - Ksh 1M for 12 months support',
        'Corporate Agreements - 6-12 month discounted pricing'
      ],
      addons: [
        { name: 'SLA Agreement', price: 'Custom', description: 'Service Level Agreement' },
        { name: 'White-label Reporting', price: '+Ksh 5,000', description: 'Branded client reports' },
        { name: 'Dedicated Support', price: '+Ksh 15,000', description: 'Priority account management' }
      ]
    }
  ]

  const faqs = [
    {
      question: "What payment plans do you offer?",
      answer: "Quick Jobs: 100% upfront • Mid-Tier Projects: 50% upfront, 50% on completion • Large Projects (100K+): 40% upfront, 30% mid-way, 30% final delivery • Retainers: Monthly in advance • Corporate: Negotiable (quarterly invoicing available)"
    },
    {
      question: "How many revisions are included?",
      answer: "Quick Jobs: 1-2 revisions • Small Business Packages: Unlimited revisions • Corporate Packages: Unlimited revisions with priority handling • Retainers: Unlimited revisions within monthly scope"
    },
    {
      question: "What's your delivery timeline?",
      answer: "Quick Jobs: 24-48 hours • Small Business Packages: 3-5 days • Corporate Packages: 7-10 days • Retainers: 1-3 days per task • Rush delivery available for additional fee"
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we provide a full refund within the first 48 hours. For retainers, you can cancel anytime with 30 days notice."
    },
    {
      question: "Can I upgrade my package mid-project?",
      answer: "Yes, you can upgrade at any time. We'll prorate the difference and immediately apply the new package benefits to your ongoing project. Retainer upgrades take effect in the next billing cycle."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f1f] relative overflow-hidden mt-8">
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
              Spingraphy Pricings
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
                Pricing Plans
              </span>
            </h2>
            <p className="text-white/70">Choose the perfect plan for your creative needs</p>
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
                Service Details
              </span>
            </h2>
            <p className="text-white/70">Detailed pricing and options for each service category</p>
          </div>

          {/* Service Tabs */}
          <div className="max-w-6xl mx-auto">
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
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-white/70 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-white">{service.basePrice}</div>
                          <div className="text-white/60 text-sm">Starting Price</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-white">{service.paymentTerms}</div>
                          <div className="text-white/60 text-sm">Payment Terms</div>
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
                        <h4 className="font-semibold text-white">Service Includes:</h4>
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
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
        <div className="text-white/50 text-xs mt-2">{plan.paymentTerms}</div>
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
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
        <span className="font-semibold text-white text-left pr-4">{question}</span>
        <span className={`text-white text-xl transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
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