import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge: string
  title: string
  highlight?: string
  description: string
}

export function SectionHeader({ badge, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium uppercase tracking-wider mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {badge}
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>

      <motion.p
        className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  )
}
