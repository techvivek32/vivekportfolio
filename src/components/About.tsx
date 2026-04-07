import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Vivek</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="/906bd643-bf77-45e7-ac53-937505bd920d.jpg"
              alt="Vivek Vora - Vision Tech"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              VISION TECH - RAJKOT / INDIA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Vivek Vora is a full-stack developer and technology entrepreneur specializing in building scalable SaaS platforms, ERP systems, and AI-driven solutions. With a strong foundation in software development and business strategy, he focuses on creating intelligent digital products that help businesses grow, automate operations, and stay ahead in a rapidly evolving tech landscape.
              <br /><br />
              Through Vision Tech, he delivers modern, high-performance solutions designed for real-world impact and long-term scalability.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-tight tracking-tight text-gray-300">
            "TRUSTED BY BUSINESSES<br />
            <span className="text-white underline decoration-2 underline-offset-[0.3em] md:underline-offset-8">FOR DELIVERING SCALABLE</span><br />
            SAAS, ERP & AI SOLUTIONS<br />
            ACROSS INDUSTRIES."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            GLOBAL TECHNOLOGY<br />
            SOLUTIONS EXPERTISE
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Vivek has worked with startups, enterprises, and growing businesses across multiple industries, 
              delivering scalable SaaS platforms, ERP systems, and AI-driven solutions. 
              <br /><br />
              He has collaborated with skilled developers, designers, and teams to build high-performance digital products focused on efficiency, automation, and long-term growth. 
              <br /><br />
              From concept to deployment, he ensures every solution is designed for real-world impact and scalability.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="/1ee331bc-0828-4925-8357-5d51100ad476.png"
              alt="Vision Tech Team"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              VISION TECH - RAJKOT / INDIA
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="/650024b8-1aff-4476-8976-50f7257ad83f.png"
              alt="Vision Tech Workspace"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              VISION TECH - RAJKOT / INDIA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Vivek expanded his work globally by collaborating with startups and businesses across different industries, focusing on building scalable SaaS platforms, advanced ERP systems, and AI-driven solutions.
              <br /><br />
              Over the years, he has delivered high-performance digital products designed to improve efficiency, automate operations, and support business growth.
              <br /><br />
              His work continues to evolve around creating modern, reliable, and scalable technology solutions for real-world business challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
