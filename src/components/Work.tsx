import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Founder & Tech Lead',
    company: 'Vision Tech',
    location: 'Rajkot, India',
    period: '2024 — 2025',
    description: 'Focused on building enterprise-grade solutions and scaling products globally. Led high-performance system design and delivered robust digital solutions for modern businesses.',
    skills: ['Enterprise Solutions', 'System Architecture', 'Cloud & DevOps', 'Product Scaling', 'Project Management'],
  },
  {
    title: 'Founder & Lead Engineer',
    company: 'Vision Tech',
    location: 'Rajkot, India',
    period: '2023 — 2024',
    description: 'Scaled Vision Tech by delivering advanced SaaS and AI-driven solutions. Improved system performance, expanded client base, and introduced automation-focused products.',
    skills: ['AI Solutions', 'Scalable Systems', 'Performance Optimization', 'Cloud Integration', 'Team Leadership'],
  },
  {
    title: 'Founder & Full-Stack Developer',
    company: 'Vision Tech',
    location: 'Rajkot, India',
    period: '2022 — 2023',
    description: 'Founded Vision Tech with a focus on building scalable SaaS platforms and ERP systems. Led initial product development, client acquisition, and system architecture.',
    skills: ['SaaS Development', 'ERP Systems', 'Product Development', 'Client Solutions', 'System Architecture'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Technova Technologies',
    location: 'Ahmedabad, India',
    period: '2020 — 2021',
    description: 'Worked on scalable web applications and enterprise systems, focusing on backend development, API integrations, and building efficient solutions for business use cases.',
    skills: ['Full-Stack Development', 'API Development', 'Database Management', 'System Design', 'Team Collaboration'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
