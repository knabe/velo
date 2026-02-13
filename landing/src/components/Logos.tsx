import { motion } from 'framer-motion'

const STATS = [
  { value: '100%', label: 'Open Source' },
  { value: '122+', label: 'Features' },
  { value: '30+', label: 'Keyboard Shortcuts' },
  { value: '3', label: 'AI Providers' },
]

export function Logos() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-center text-sm text-text-muted uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Free & open source — built for power users who demand more
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
