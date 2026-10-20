import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import SpecularButton from './SpecularButton'

const projects = [
  {
    title: 'S Kumar Decor',
    tagline: 'Business Web Platform',
    description:
      'Production website for a real wedding and decoration client, with responsive layouts, animations and complete technical SEO (JSON-LD, sitemap, Google Search Console).',
    differentiator: 'Real client project with production SEO — not a tutorial clone.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JSON-LD', 'SEO'],
    liveUrl: 'https://skumar-decor.vercel.app',
  },
  {
    title: 'HomeBudget',
    tagline: 'Housewives Expense Tracker',
    description:
      'Household expense tracker with budgets and analytics, Google OAuth 2.0 sign-in, email OTP (Nodemailer), JWT-protected APIs, backend deployed on a self-configured AWS EC2 Ubuntu server.',
    differentiator: 'Self-deployed on AWS EC2 with real auth — not a Firebase shortcut.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'Google OAuth', 'JWT', 'Nodemailer'],
    liveUrl: 'https://home-exp.vercel.app',
  },
  {
    title: 'Real Estate Platform',
    tagline: 'Full Stack Property Marketplace',
    description:
      'List, browse, search and filter properties, image uploads, role-gated admin panel, buy and sell workflows. Built with the full MERN stack.',
    differentiator: 'Complete buy/sell workflow with role-based admin — not just a listing page.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT'],
    liveUrl: 'https://nitin-real-state.vercel.app',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-section-mobile md:py-section">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've designed, built, and deployed."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card p-6 md:p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/80 mt-1">
                    {project.tagline}
                  </p>
                </div>
                <SpecularButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 self-start"
                  size="sm"
                  aria-label={`View ${project.title} live site`}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  View Live Site
                </SpecularButton>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Differentiator */}
              <p className="text-xs text-accent/90 font-medium mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                {project.differentiator}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-muted text-xs border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
