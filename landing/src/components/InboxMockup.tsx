import { motion } from 'framer-motion'
import { Star, Archive, Clock, Inbox, Send, FileText, Tag, Search } from 'lucide-react'

const SIDEBAR_ITEMS = [
  { icon: Inbox, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3 },
  { icon: Send, label: 'Sent' },
  { icon: FileText, label: 'Drafts', count: 1 },
  { icon: Archive, label: 'Archive' },
  { icon: Clock, label: 'Snoozed' },
]

const EMAILS = [
  {
    from: 'Sarah Chen',
    subject: 'Q1 Product Roadmap — Final Review',
    preview: 'Hey team, I\'ve attached the final version of our Q1 roadmap. Please review the...',
    time: '2m ago',
    unread: true,
    starred: true,
    labels: ['Product'],
  },
  {
    from: 'GitHub',
    subject: '[velo-app] Pull request #247: Add smart reply suggestions',
    preview: 'mergeable — All checks have passed. 3 files changed, 142 additions...',
    time: '15m ago',
    unread: true,
    labels: ['Dev'],
  },
  {
    from: 'Alex Rivera',
    subject: 'Re: Design System Updates',
    preview: 'The new component library looks great! I especially like the glass card...',
    time: '1h ago',
    unread: false,
    labels: ['Design'],
  },
  {
    from: 'Stripe',
    subject: 'Your January invoice is ready',
    preview: 'Your invoice for January 2026 is available. Total amount: $49.00...',
    time: '3h ago',
    unread: false,
  },
  {
    from: 'Maria Gonzalez',
    subject: 'Meeting Notes: Sprint Planning',
    preview: 'Hi all, here are the notes from today\'s sprint planning session. Key...',
    time: '5h ago',
    unread: false,
  },
]

const CATEGORY_TABS = [
  { label: 'Primary', active: true },
  { label: 'Updates', count: 4 },
  { label: 'Promotions', count: 8 },
  { label: 'Social', count: 2 },
]

export function InboxMockup() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Glow behind mockup */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-2xl blur-3xl scale-105" />

      {/* Main mockup container */}
      <div className="relative glass-card overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center h-10 px-4 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 text-center text-xs text-text-muted font-medium">Velo Mail</div>
        </div>

        <div className="flex min-h-[400px] md:min-h-[480px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-52 border-r border-white/[0.06] bg-white/[0.01] py-3 px-2">
            {/* Search */}
            <div className="flex items-center gap-2 mx-2 mb-3 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              <Search size={14} className="text-text-muted" />
              <span className="text-xs text-text-muted">Search...</span>
              <span className="kbd !h-5 !min-w-0 !px-1.5 !text-[10px] ml-auto">/</span>
            </div>

            {SIDEBAR_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-default transition-colors ${
                  item.active
                    ? 'bg-accent/10 text-accent-light'
                    : 'text-text-secondary hover:bg-white/[0.04]'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.05 }}
              >
                <item.icon size={16} />
                <span className="flex-1">{item.label}</span>
                {item.count && (
                  <span className={`text-xs ${item.active ? 'text-accent-light' : 'text-text-muted'}`}>
                    {item.count}
                  </span>
                )}
              </motion.div>
            ))}

            {/* Labels */}
            <div className="mt-4 mx-2">
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2 px-1">Labels</div>
              {[
                { label: 'Product', color: 'bg-indigo-400' },
                { label: 'Design', color: 'bg-violet-400' },
                { label: 'Dev', color: 'bg-emerald-400' },
              ].map((l, i) => (
                <motion.div
                  key={l.label}
                  className="flex items-center gap-2 px-1 py-1.5 text-sm text-text-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                >
                  <Tag size={12} />
                  <div className={`w-2 h-2 rounded-full ${l.color}`} />
                  <span className="text-xs">{l.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Email List */}
          <div className="flex-1 flex flex-col">
            {/* Category Tabs */}
            <div className="flex items-center gap-0 border-b border-white/[0.06] px-4">
              {CATEGORY_TABS.map((tab) => (
                <div
                  key={tab.label}
                  className={`px-4 py-3 text-xs font-medium cursor-default transition-colors border-b-2 ${
                    tab.active
                      ? 'text-accent-light border-accent-light'
                      : 'text-text-muted border-transparent hover:text-text-secondary'
                  }`}
                >
                  {tab.label}
                  {tab.count && (
                    <span className="ml-1.5 text-[10px] text-text-muted">({tab.count})</span>
                  )}
                </div>
              ))}
            </div>

            {/* Emails */}
            <div className="flex-1">
              {EMAILS.map((email, i) => (
                <motion.div
                  key={i}
                  className={`flex items-start gap-3 px-4 py-3 border-b border-white/[0.04] cursor-default transition-colors hover:bg-white/[0.02] ${
                    i === 0 ? 'bg-accent/[0.04]' : ''
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                >
                  {/* Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-accent-violet/30 flex items-center justify-center text-xs font-semibold text-accent-light flex-shrink-0 mt-0.5">
                    {email.from[0]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-sm truncate ${email.unread ? 'font-semibold text-text-primary' : 'text-text-secondary'}`}>
                        {email.from}
                      </span>
                      {email.labels?.map((l) => (
                        <span key={l} className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent-light font-medium">
                          {l}
                        </span>
                      ))}
                      <span className="ml-auto text-[11px] text-text-muted flex-shrink-0">{email.time}</span>
                    </div>
                    <div className={`text-sm truncate mb-0.5 ${email.unread ? 'font-medium text-text-primary' : 'text-text-secondary'}`}>
                      {email.subject}
                    </div>
                    <div className="text-xs text-text-muted truncate">{email.preview}</div>
                  </div>

                  {/* Star */}
                  <div className="flex-shrink-0 mt-1">
                    <Star size={14} className={email.starred ? 'text-warning fill-warning' : 'text-white/10'} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
