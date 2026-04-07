import { motion } from 'framer-motion'

const contacts = [
  { label: 'PHONE (INDIA)', type: 'phone', link: 'tel:+919601176051', display: '+91 96011 76051' },
  { label: 'PHONE (CANADA)', type: 'phone', link: 'tel:+18259070036', display: '+1 (825) 907-0036' },
  { label: 'WHATSAPP', type: 'whatsapp', link: 'https://wa.me/18259070036', display: '+1 (825) 907-0036' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Informal Text */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            LET'S BUILD<br />
            SOMETHING<br />
            AMAZING TOGETHER
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            READY TO SCALE YOUR BUSINESS WITH MODERN TECHNOLOGY?
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-0 max-w-2xl">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target={contact.type === 'whatsapp' ? '_blank' : undefined}
              rel={contact.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 tracking-widest mb-1">
                  {contact.label}
                </span>
                <span className="text-base text-gray-300">
                  {contact.display}
                </span>
              </div>
              <span className="text-gray-500 group-hover:text-white transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Or reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:info@madvision.tech"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              info@madvision.tech
            </a>
            <a
              href="https://www.instagram.com/madvision_tech?igsh=MWh6MTBhcTdoNGsxbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-h-vora-0613b13b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Vision Tech. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Rajkot, Gujarat, India
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
