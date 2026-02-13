import { motion } from 'framer-motion'
import {
  Monitor, Sun, Moon, Palette, Type, LayoutGrid,
  Columns, PanelRight, ExternalLink, Minimize2,
  AppWindow, Paintbrush,
} from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const THEMES = [
  { name: 'Indigo', color: '#4F46E5' },
  { name: 'Rose', color: '#E11D48' },
  { name: 'Emerald', color: '#059669' },
  { name: 'Amber', color: '#D97706' },
  { name: 'Sky', color: '#0284C7' },
  { name: 'Violet', color: '#7C3AED' },
  { name: 'Orange', color: '#EA580C' },
  { name: 'Slate', color: '#475569' },
]

const EXPERIENCE_FEATURES = [
  {
    icon: Sun,
    title: 'Light & Dark Mode',
    description: 'Beautiful in both. Animated gradient backgrounds adapt automatically.',
  },
  {
    icon: Type,
    title: 'Font Scaling',
    description: 'Small, Default, Large, or Extra Large. Readable at any distance.',
  },
  {
    icon: LayoutGrid,
    title: 'Email Density',
    description: 'Compact, Default, or Spacious. See more or breathe more.',
  },
  {
    icon: PanelRight,
    title: 'Reading Pane',
    description: 'Right, bottom, or hidden layout. Plus resizable email list width.',
  },
  {
    icon: ExternalLink,
    title: 'Pop-Out Windows',
    description: 'Open threads in independent windows for side-by-side work.',
  },
  {
    icon: Minimize2,
    title: 'System Tray',
    description: 'Minimize to tray. Background sync continues. Tray badge for unread count.',
  },
  {
    icon: AppWindow,
    title: 'Cross-Platform',
    description: 'Native performance on Windows, macOS, and Linux via Tauri.',
  },
  {
    icon: Paintbrush,
    title: 'Glass Morphism',
    description: 'Frosted glass panels, animated blobs, and hover-lift effects throughout.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Experience"
          title="Pixel-perfect"
          highlight="craftsmanship"
          description="Obsessive attention to every detail. Smooth animations, glass morphism, and 8 accent themes that make your inbox feel like home."
        />

        {/* Theme Selector Visual */}
        <motion.div
          className="glass-card p-6 md:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette size={20} className="text-accent-light" />
            <h3 className="text-lg font-semibold text-text-primary">8 Accent Color Themes</h3>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {THEMES.map((theme, i) => (
              <motion.div
                key={theme.name}
                className="flex flex-col items-center gap-2 group cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="w-10 h-10 rounded-xl border-2 border-transparent group-hover:border-white/20 transition-all group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: theme.color,
                    boxShadow: `0 4px 14px ${theme.color}40`,
                  }}
                />
                <span className="text-[10px] text-text-muted group-hover:text-text-secondary transition-colors">{theme.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Light/Dark Toggle Visual */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04]">
              <Sun size={14} className="text-warning" />
              <span className="text-xs text-text-secondary">Light</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
              <Moon size={14} className="text-accent-light" />
              <span className="text-xs text-accent-light">Dark</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04]">
              <Monitor size={14} className="text-text-secondary" />
              <span className="text-xs text-text-secondary">System</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERIENCE_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card p-5 group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="feature-icon mb-3 !w-10 !h-10">
                <feature.icon size={18} />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-text-primary">{feature.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Settings preview */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-text-muted">
            <Columns size={14} className="inline mr-1.5 align-text-bottom" />
            13 settings tabs — General, Composing, Labels, Filters, Smart Folders, Quick Steps, Contacts, Accounts, Sync, Shortcuts, AI, Subscriptions, and Developer
          </p>
        </motion.div>
      </div>
    </section>
  )
}
