import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const projects = [
  {
    id: 'dsatguru',
    title: 'Smart Digital SAT Platform',
    url: 'dsatguru.com',
    image: '/WhatsApp Image 2026-04-07 at 12.22.02 AM.jpg',
    description: 'We designed and developed DSATGuru as a scalable, high-performance platform for DSAT & SAT preparation, focused on delivering a seamless and data-driven learning experience.',
    built: [
      'Complete SAT preparation platform',
      'Personalized dashboard with analytics',
      'Scalable SaaS architecture',
      'High-performance question system'
    ],
    features: [
      '4000+ practice questions',
      'Real-time progress tracking',
      'Adaptive learning system',
      'Clean, responsive UI'
    ],
    outcome: 'A modern, scalable digital product that helps students improve performance and achieve better results.'
  },
  {
    id: 'retailians',
    title: 'Retailians POS System',
    url: 'RETAILIANS POS - VISION TECH',
    image: '/WhatsApp Image 2026-04-07 at 2.15.10 AM.jpeg',
    description: 'A comprehensive Point of Sale solution designed for retail businesses, offering real-time inventory management, sales tracking, and seamless payment processing.',
    built: [
      'Complete POS system',
      'Inventory management module',
      'Multi-store support',
      'Payment gateway integration'
    ],
    features: [
      'Real-time sales tracking',
      'Barcode scanning & billing',
      'Customer management',
      'Detailed analytics & reports'
    ],
    outcome: 'A powerful retail management system helping businesses streamline operations and boost efficiency.'
  },
  {
    id: '911wrap',
    title: '911 Wrap ERP Solution',
    url: '911 WRAP ERP - VISION TECH',
    image: '/Dashboard1.png',
    description: 'An enterprise resource planning system built for vehicle wrap businesses, managing projects, inventory, client relationships, and financial operations in one unified platform.',
    built: [
      'Full ERP system',
      'Project management module',
      'CRM & client portal',
      'Financial & invoicing system'
    ],
    features: [
      'End-to-end project tracking',
      'Automated workflow management',
      'Inventory & material tracking',
      'Custom reporting dashboard'
    ],
    outcome: 'A complete business management solution enabling wrap shops to scale operations and improve profitability.'
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Business Analytics Platform',
    url: 'ENTERPRISE AI SOLUTION',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    description: 'An enterprise-grade analytics platform leveraging AI and machine learning to provide real-time business insights, predictive analytics, and automated reporting for data-driven decision making.',
    built: [
      'AI-powered analytics engine',
      'Real-time data processing pipeline',
      'Custom ML models for predictions',
      'Interactive visualization dashboard'
    ],
    features: [
      'Predictive analytics & forecasting',
      'Natural language query interface',
      'Automated anomaly detection',
      'Multi-source data integration'
    ],
    outcome: 'Empowering enterprises to make faster, smarter decisions with AI-driven insights and reducing analysis time by 70%.'
  },
  {
    id: 'healthcare-saas',
    title: 'Healthcare Management SaaS',
    url: 'HEALTHCARE PLATFORM',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description: 'A comprehensive healthcare management system for hospitals and clinics, streamlining patient records, appointments, billing, and telemedicine services with HIPAA compliance.',
    built: [
      'Patient management system',
      'Telemedicine video platform',
      'Electronic health records (EHR)',
      'Billing & insurance integration'
    ],
    features: [
      'Secure patient portal',
      'Appointment scheduling & reminders',
      'Prescription management',
      'HIPAA-compliant data storage'
    ],
    outcome: 'Transforming healthcare delivery with digital solutions, serving 50+ clinics and improving patient care efficiency by 60%.'
  },
  {
    id: 'fintech-platform',
    title: 'Digital Banking & Payment Gateway',
    url: 'FINTECH SOLUTION',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    description: 'A secure fintech platform providing digital banking services, payment processing, and financial management tools with advanced fraud detection and compliance features.',
    built: [
      'Core banking system',
      'Payment gateway integration',
      'Fraud detection AI system',
      'KYC & compliance automation'
    ],
    features: [
      'Real-time transaction processing',
      'Multi-currency support',
      'Advanced security & encryption',
      'Regulatory compliance tools'
    ],
    outcome: 'Processing $10M+ in transactions monthly with 99.99% uptime and zero security breaches.'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Management Platform',
    url: 'LOGISTICS & SCM',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    description: 'An end-to-end supply chain management solution with real-time tracking, inventory optimization, and automated logistics coordination for global operations.',
    built: [
      'Supply chain orchestration system',
      'Real-time GPS tracking',
      'Inventory optimization engine',
      'Vendor management portal'
    ],
    features: [
      'Multi-warehouse management',
      'Automated order fulfillment',
      'Predictive demand forecasting',
      'Route optimization algorithms'
    ],
    outcome: 'Reducing logistics costs by 35% and improving delivery times for enterprise clients across 15+ countries.'
  },
  {
    id: 'elearning-platform',
    title: 'Enterprise Learning Management System',
    url: 'E-LEARNING PLATFORM',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
    description: 'A scalable LMS platform for corporate training and education, featuring AI-powered personalized learning paths, live classes, assessments, and certification management.',
    built: [
      'Learning management system',
      'Live video streaming platform',
      'AI-based learning recommendations',
      'Assessment & certification engine'
    ],
    features: [
      'Personalized learning paths',
      'Interactive course builder',
      'Progress tracking & analytics',
      'Mobile learning apps'
    ],
    outcome: 'Enabling 100,000+ learners across enterprises to upskill with 95% course completion rates and measurable ROI.'
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y,
        scale,
        position: 'sticky',
        top: `${80 + index * 20}px`,
        zIndex: projects.length - index
      }}
      className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-gray-800 min-h-[85vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12 h-full">
        <div className="flex flex-col justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded"
          />
          <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
            {project.url}
          </p>
        </div>

        <div className="flex items-center">
          <div>
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
              {project.description}
            </p>
            <div className="mb-6">
              <p className="text-sm text-gray-500 font-semibold mb-3">What We Built</p>
              <ul className="text-sm text-gray-400 space-y-2">
                {project.built.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 font-semibold mb-3">Key Features</p>
              <ul className="text-sm text-gray-400 space-y-2">
                {project.features.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500 italic">
              Outcome: {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Education() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="education" className="section-padding bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WHAT WE BUILD
        </motion.h2>

        {/* Stacking Projects */}
        <div className="space-y-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 px-8 py-4 text-sm text-gray-400 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>Load More Projects</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
