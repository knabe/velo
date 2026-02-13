import type { LucideIcon } from "lucide-react";
import {
  Mail,
  PenLine,
  Search,
  Tag,
  Clock,
  Sparkles,
  Newspaper,
  Bell,
  Shield,
  Calendar,
  Palette,
  UserCircle,
  BookOpen,
  Eye,
  Layout,
  Undo2,
  CalendarClock,
  Archive,
  FileSignature,
  FileText,
  Users,
  Save,
  Keyboard,
  Command,
  FolderSearch,
  Filter,
  Zap,
  Star,
  Trash2,
  MousePointer,
  GripVertical,
  BellRing,
  MessageSquare,
  Wand2,
  Brain,
  MailQuestion,
  MailMinus,
  Monitor,
  Sun,
  Type,
  Columns2,
  Globe,
  Minimize2,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  ImageOff,
  LinkIcon,
  MailPlus,
} from "lucide-react";

// ---------- Types ----------

export interface HelpTip {
  text: string;
  shortcut?: string;
}

export interface HelpCard {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tips?: HelpTip[];
  relatedSettingsTab?: string;
}

export interface HelpCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  cards: HelpCard[];
}

export interface ContextualTip {
  title: string;
  body: string;
  helpTopic: string;
}

// ---------- Valid settings tabs (for type-safe references) ----------

const VALID_SETTINGS_TABS = [
  "general", "composing", "labels", "filters", "smart-folders",
  "quickSteps", "contacts", "accounts", "sync", "shortcuts", "ai",
  "subscriptions", "developer",
] as const;

export type SettingsTabId = (typeof VALID_SETTINGS_TABS)[number];

// ---------- Help Categories & Cards ----------

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: BookOpen,
    cards: [
      {
        id: "add-account",
        icon: MailPlus,
        title: "Add your email account",
        description:
          "Connect your Gmail account to start receiving and sending email. You can add multiple accounts and switch between them from the sidebar.",
        tips: [
          { text: "Click the account switcher at the top of the sidebar to add a new account." },
          { text: "Each account syncs independently, so you can manage separate inboxes side by side." },
        ],
        relatedSettingsTab: "accounts",
      },
      {
        id: "initial-sync",
        icon: Clock,
        title: "Initial sync",
        description:
          "When you first add an account, the app downloads your last year of email. This may take a few minutes depending on your inbox size.",
        tips: [
          { text: "You can change the sync period (e.g., 30 days or 1 year) in Sync settings." },
          { text: "The app works while syncing — you can read and send email immediately." },
        ],
        relatedSettingsTab: "sync",
      },
      {
        id: "client-id-setup",
        icon: Globe,
        title: "Google Client ID setup",
        description:
          "To connect your Gmail account, you need a Google Cloud project with OAuth credentials. The app walks you through this process when you first add an account.",
        tips: [
          { text: "Your Client ID stays on your device — it's never sent to any external server." },
          { text: "You can update your Client ID later in Developer settings." },
        ],
        relatedSettingsTab: "developer",
      },
    ],
  },
  {
    id: "reading-email",
    label: "Reading Email",
    icon: Eye,
    cards: [
      {
        id: "thread-view",
        icon: Mail,
        title: "Thread view",
        description:
          "Emails are grouped into conversation threads. Click a thread to see all messages in the conversation, with the most recent message at the bottom.",
        tips: [
          { text: "Open a thread", shortcut: "o" },
          { text: "Navigate between threads", shortcut: "j / k" },
          { text: "Go back to the list", shortcut: "Escape" },
        ],
      },
      {
        id: "reading-pane",
        icon: Layout,
        title: "Reading pane positions",
        description:
          "Choose where to display the reading pane: to the right of the email list, below it, or hidden entirely. Pick the layout that fits your screen best.",
        tips: [
          { text: "Right pane works best on wide screens, bottom pane on narrow ones." },
        ],
        relatedSettingsTab: "general",
      },
      {
        id: "mark-as-read",
        icon: Eye,
        title: "Mark-as-read behavior",
        description:
          "Control when messages are marked as read — instantly when you open them, after a short delay, or only when you manually mark them.",
        relatedSettingsTab: "general",
      },
    ],
  },
  {
    id: "composing",
    label: "Composing & Sending",
    icon: PenLine,
    cards: [
      {
        id: "new-email",
        icon: PenLine,
        title: "Compose a new email",
        description:
          "Start a fresh email with the rich text editor. Format text, add attachments, and insert signatures — all from one place.",
        tips: [
          { text: "Open the composer", shortcut: "c" },
          { text: "Send the email", shortcut: "Ctrl+Enter" },
        ],
      },
      {
        id: "reply-forward",
        icon: MessageSquare,
        title: "Reply, Reply All & Forward",
        description:
          "Reply to the sender, reply to everyone on the thread, or forward the email to someone new. You can set your default reply mode in settings.",
        tips: [
          { text: "Reply", shortcut: "r" },
          { text: "Reply All", shortcut: "a" },
          { text: "Forward", shortcut: "f" },
        ],
        relatedSettingsTab: "composing",
      },
      {
        id: "undo-send",
        icon: Undo2,
        title: "Undo send",
        description:
          "After sending an email, a brief window lets you undo it before it's actually delivered. You can set how long this window lasts (up to 30 seconds).",
        relatedSettingsTab: "composing",
      },
      {
        id: "schedule-send",
        icon: CalendarClock,
        title: "Schedule send",
        description:
          "Write an email now and schedule it to be sent at a future date and time. Great for composing after hours without disturbing recipients immediately.",
      },
      {
        id: "send-archive",
        icon: Archive,
        title: "Send & Archive",
        description:
          "When enabled, sending a reply also archives the thread, keeping your inbox clean. Toggle this in Composing settings.",
        relatedSettingsTab: "composing",
      },
      {
        id: "signatures",
        icon: FileSignature,
        title: "Signatures",
        description:
          "Create multiple email signatures (e.g., one for work, one personal) and choose which to use when composing. Signatures support rich text formatting.",
        relatedSettingsTab: "composing",
      },
      {
        id: "templates",
        icon: FileText,
        title: "Templates",
        description:
          "Save frequently-used email body text as templates. Insert a template with one click when composing to save time on repetitive emails.",
        relatedSettingsTab: "composing",
      },
      {
        id: "from-aliases",
        icon: Users,
        title: "From aliases",
        description:
          "If your Gmail account has send-as aliases configured, you can choose which address to send from directly in the composer.",
        relatedSettingsTab: "accounts",
      },
      {
        id: "draft-autosave",
        icon: Save,
        title: "Draft auto-save",
        description:
          "Your drafts are automatically saved every few seconds so you never lose work. Drafts are synced with Gmail and accessible from any device.",
      },
    ],
  },
  {
    id: "search-navigation",
    label: "Search & Navigation",
    icon: Search,
    cards: [
      {
        id: "search-operators",
        icon: Search,
        title: "Search operators",
        description:
          "Use Gmail-style operators to narrow your search. Combine operators like from:, to:, subject:, has:attachment, is:unread, before:, after:, and label: to find exactly what you need.",
        tips: [
          { text: "Example: from:jane subject:report has:attachment" },
          { text: "Use is:unread or is:starred to filter by status." },
          { text: "Combine date filters: after:2024-01-01 before:2024-06-01" },
        ],
      },
      {
        id: "command-palette",
        icon: Command,
        title: "Command palette",
        description:
          "Quickly search your email, jump to any label or folder, and access actions — all from a single keyboard-driven palette.",
        tips: [
          { text: "Open the command palette", shortcut: "Ctrl+K" },
          { text: "You can also press /", shortcut: "/" },
        ],
      },
      {
        id: "keyboard-shortcuts",
        icon: Keyboard,
        title: "Keyboard shortcuts",
        description:
          "Navigate and act on emails without touching the mouse. Almost every action has a keyboard shortcut, and you can customize them all.",
        tips: [
          { text: "View all shortcuts", shortcut: "?" },
          { text: "Two-key sequences: press g then i for Inbox, g then s for Starred, etc." },
        ],
        relatedSettingsTab: "shortcuts",
      },
    ],
  },
  {
    id: "organization",
    label: "Organization",
    icon: Tag,
    cards: [
      {
        id: "labels",
        icon: Tag,
        title: "Labels",
        description:
          "Organize your email with color-coded labels. Apply multiple labels to a single thread, create nested labels, and quickly filter by label in the sidebar.",
        tips: [
          { text: "Drag and drop threads onto sidebar labels to apply them." },
          { text: "Right-click a label in the sidebar to edit or delete it." },
        ],
        relatedSettingsTab: "labels",
      },
      {
        id: "smart-folders",
        icon: FolderSearch,
        title: "Smart folders",
        description:
          "Create saved searches that appear as folders in your sidebar. Smart folders update dynamically — they always show the latest matching threads.",
        tips: [
          { text: "Use search operators in smart folder queries (e.g., is:unread from:boss)." },
          { text: "Dynamic date tokens like __LAST_7_DAYS__ keep your results current." },
        ],
        relatedSettingsTab: "smart-folders",
      },
      {
        id: "filters",
        icon: Filter,
        title: "Filters & rules",
        description:
          "Automatically sort incoming email with filter rules. Match messages by sender, subject, or content, then apply actions like labeling, archiving, starring, or marking as read.",
        tips: [
          { text: "Filters run automatically on new messages during sync." },
          { text: "When multiple filters match, their actions are merged together." },
        ],
        relatedSettingsTab: "filters",
      },
      {
        id: "quick-steps",
        icon: Zap,
        title: "Quick steps",
        description:
          "Bundle multiple actions into a single click. For example, create a quick step that labels, archives, and marks a thread as read all at once.",
        tips: [
          { text: "Quick steps support 18 different action types." },
          { text: "Access quick steps from the thread action bar." },
        ],
        relatedSettingsTab: "quickSteps",
      },
      {
        id: "star-pin-mute",
        icon: Star,
        title: "Star, Pin & Mute",
        description:
          "Star emails to flag them for follow-up. Pin threads to keep them at the top of your list. Mute threads to automatically archive future replies.",
        tips: [
          { text: "Star / unstar", shortcut: "s" },
          { text: "Pin / unpin", shortcut: "p" },
          { text: "Mute / unmute", shortcut: "m" },
        ],
      },
      {
        id: "archive-trash",
        icon: Trash2,
        title: "Archive & Trash",
        description:
          "Archive emails to remove them from your inbox without deleting. Trash sends emails to the trash folder — deleting from trash permanently removes them.",
        tips: [
          { text: "Archive", shortcut: "e" },
          { text: "Trash", shortcut: "#" },
          { text: "Deleting a thread already in trash permanently removes it." },
        ],
      },
      {
        id: "multi-select",
        icon: MousePointer,
        title: "Multi-select & batch actions",
        description:
          "Select multiple threads to apply actions in bulk. Click to toggle selection, or Shift+click to select a range. All keyboard actions work on your selection.",
        tips: [
          { text: "Select all threads", shortcut: "Ctrl+A" },
          { text: "Select range from current position", shortcut: "Ctrl+Shift+A" },
        ],
      },
      {
        id: "drag-drop",
        icon: GripVertical,
        title: "Drag & drop",
        description:
          "Drag threads from the email list and drop them onto sidebar labels to apply labels quickly. Works with single threads or multi-selected threads.",
      },
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    icon: Clock,
    cards: [
      {
        id: "snooze",
        icon: Clock,
        title: "Snooze",
        description:
          "Snooze a thread to temporarily hide it from your inbox. It will reappear at the date and time you choose, so you can deal with it when you're ready.",
      },
      {
        id: "follow-up-reminders",
        icon: BellRing,
        title: "Follow-up reminders",
        description:
          "Set a reminder to follow up on a thread if you don't receive a reply within a certain time. You'll get a notification when the follow-up is due.",
      },
      {
        id: "split-inbox",
        icon: Columns2,
        title: "Split inbox",
        description:
          "Organize your inbox into categories: Primary, Updates, Promotions, Social, and Newsletters. Each category gets its own tab so you can focus on what matters most.",
        tips: [
          { text: "Toggle split inbox from the Inbox item in the sidebar." },
          { text: "AI categorization sorts new emails automatically." },
        ],
        relatedSettingsTab: "general",
      },
      {
        id: "spam",
        icon: AlertTriangle,
        title: "Spam",
        description:
          "Report unwanted emails as spam, or rescue legitimate emails from your spam folder. The action is context-aware: in the spam folder it shows 'Not spam'.",
        tips: [
          { text: "Report spam / Not spam", shortcut: "!" },
        ],
      },
    ],
  },
  {
    id: "ai-features",
    label: "AI Features",
    icon: Sparkles,
    cards: [
      {
        id: "ai-overview",
        icon: Brain,
        title: "AI overview",
        description:
          "The app integrates with Claude, OpenAI, and Gemini to power smart email features. Choose your preferred provider and bring your own API key — your data stays private.",
        relatedSettingsTab: "ai",
      },
      {
        id: "thread-summaries",
        icon: FileText,
        title: "Thread summaries",
        description:
          "Get a concise AI-generated summary of long email threads. Saves you from reading through dozens of messages to understand the conversation.",
      },
      {
        id: "smart-replies",
        icon: MessageSquare,
        title: "Smart replies",
        description:
          "AI suggests short reply options based on the email content. Click a suggestion to insert it into your reply and edit it before sending.",
      },
      {
        id: "ai-compose",
        icon: Wand2,
        title: "AI compose & transform",
        description:
          "Let AI help you draft emails or transform existing text — change the tone, fix grammar, translate, shorten, or expand your message.",
      },
      {
        id: "ask-inbox",
        icon: MailQuestion,
        title: "Ask Inbox",
        description:
          "Ask natural language questions about your email, like 'What did John say about the deadline?' or 'Show me receipts from last month.' AI searches and summarizes the results.",
      },
    ],
  },
  {
    id: "newsletters",
    label: "Newsletters & Subscriptions",
    icon: Newspaper,
    cards: [
      {
        id: "newsletter-bundles",
        icon: Newspaper,
        title: "Newsletter bundles",
        description:
          "Group newsletters from the same sender into bundles that deliver on a schedule you choose. Instead of getting distracted throughout the day, read them all at once.",
        relatedSettingsTab: "subscriptions",
      },
      {
        id: "unsubscribe",
        icon: MailMinus,
        title: "Unsubscribe",
        description:
          "One-click unsubscribe from mailing lists. The app detects the List-Unsubscribe header and handles the unsubscribe process for you automatically.",
        tips: [
          { text: "Unsubscribe from the current thread", shortcut: "u" },
        ],
        relatedSettingsTab: "subscriptions",
      },
    ],
  },
  {
    id: "notifications-contacts",
    label: "Notifications & Contacts",
    icon: Bell,
    cards: [
      {
        id: "notifications-vip",
        icon: Bell,
        title: "Notifications & VIP senders",
        description:
          "Get desktop notifications for new email. Use smart notifications to only be notified for specific categories, or add VIP senders who always trigger a notification.",
        relatedSettingsTab: "general",
      },
      {
        id: "contact-sidebar",
        icon: Users,
        title: "Contact sidebar",
        description:
          "Click on a sender's name to open the contact sidebar, showing their profile photo, recent conversations, shared attachments, and quick actions like composing a new email to them.",
        relatedSettingsTab: "contacts",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Privacy",
    icon: Shield,
    cards: [
      {
        id: "phishing-detection",
        icon: AlertTriangle,
        title: "Phishing detection",
        description:
          "The app scans links in emails for signs of phishing — suspicious URLs, brand impersonation, homograph attacks, and more. A warning banner appears on risky emails.",
        tips: [
          { text: "Adjust sensitivity (low / default / high) in Settings." },
          { text: "You can allowlist trusted senders to suppress warnings." },
        ],
        relatedSettingsTab: "general",
      },
      {
        id: "auth-badges",
        icon: CheckCircle,
        title: "Authentication badges (SPF/DKIM/DMARC)",
        description:
          "Each email shows an authentication badge indicating whether the sender passed SPF, DKIM, and DMARC checks. This helps you spot spoofed or forged emails at a glance.",
      },
      {
        id: "remote-image-blocking",
        icon: ImageOff,
        title: "Remote image blocking",
        description:
          "Remote images are blocked by default to protect your privacy and prevent tracking pixels. You can allow images per-sender or globally in settings.",
        relatedSettingsTab: "general",
      },
      {
        id: "link-confirmation",
        icon: LinkIcon,
        title: "Link confirmation",
        description:
          "When you click a link in an email, a confirmation dialog shows you the actual URL before opening it in your browser. This prevents you from accidentally visiting malicious sites.",
      },
    ],
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
    cards: [
      {
        id: "calendar-integration",
        icon: Calendar,
        title: "Google Calendar integration",
        description:
          "View your Google Calendar events alongside your email. Switch between day, week, and month views, and create new events directly from the app.",
        tips: [
          { text: "Navigate to Calendar from the sidebar." },
          { text: "Calendar uses the same Google account as your email." },
        ],
      },
    ],
  },
  {
    id: "appearance",
    label: "Appearance & Layout",
    icon: Palette,
    cards: [
      {
        id: "theme",
        icon: Sun,
        title: "Light & dark mode",
        description:
          "Switch between light, dark, or system-matched theme. Dark mode is designed for comfortable reading in low-light environments.",
        relatedSettingsTab: "general",
      },
      {
        id: "accent-colors",
        icon: Palette,
        title: "Accent colors",
        description:
          "Personalize the app with one of 8 accent color presets — Indigo, Rose, Emerald, Amber, Sky, Violet, Orange, or Slate. Each has light and dark variants.",
        relatedSettingsTab: "general",
      },
      {
        id: "font-density",
        icon: Type,
        title: "Font size & email density",
        description:
          "Adjust the overall font size (small, default, large, or extra-large) and email list density (compact, default, or comfortable) to your preference.",
        relatedSettingsTab: "general",
      },
      {
        id: "layout-customization",
        icon: Columns2,
        title: "Layout customization",
        description:
          "Customize your workspace: choose reading pane position, toggle the sidebar, adjust the email list width, and collapse sections to fit your workflow.",
        relatedSettingsTab: "general",
      },
    ],
  },
  {
    id: "accounts-system",
    label: "Accounts & System",
    icon: UserCircle,
    cards: [
      {
        id: "multi-account",
        icon: Users,
        title: "Multiple accounts",
        description:
          "Add and switch between multiple Gmail accounts. Each account has its own inbox, labels, and settings. The account switcher is always accessible from the sidebar.",
        relatedSettingsTab: "accounts",
      },
      {
        id: "system-tray",
        icon: Minimize2,
        title: "System tray & autostart",
        description:
          "The app minimizes to the system tray when you close the window, staying ready in the background. Enable autostart to launch the app automatically when your computer starts.",
        relatedSettingsTab: "general",
      },
      {
        id: "global-compose",
        icon: Monitor,
        title: "Global compose shortcut",
        description:
          "Compose a new email from anywhere on your computer with a system-wide keyboard shortcut — even when the app is minimized to the tray.",
        relatedSettingsTab: "shortcuts",
      },
      {
        id: "pop-out-windows",
        icon: ExternalLink,
        title: "Pop-out windows",
        description:
          "Open a thread in its own window for side-by-side reading or reference. Pop-out windows are independent of the main app window.",
      },
    ],
  },
];

// ---------- Contextual Tips ----------

export const CONTEXTUAL_TIPS: Record<string, ContextualTip> = {
  "reading-pane": {
    title: "Reading pane",
    body: "Choose where to display the reading pane — right, bottom, or hidden. Right works best on wide screens.",
    helpTopic: "reading-email",
  },
  "split-inbox": {
    title: "Split inbox",
    body: "Divide your inbox into categories (Primary, Updates, Promotions, Social, Newsletters) so you can focus on what matters most.",
    helpTopic: "productivity",
  },
  "undo-send": {
    title: "Undo send",
    body: "Set how many seconds you have to undo a sent email. You can choose up to 30 seconds.",
    helpTopic: "composing",
  },
  "smart-notifications": {
    title: "Smart notifications",
    body: "Only get notified for the categories you care about. Add VIP senders who always trigger notifications regardless of category.",
    helpTopic: "notifications-contacts",
  },
  "phishing-sensitivity": {
    title: "Phishing sensitivity",
    body: "Low catches only obvious threats. Default is balanced. High flags more aggressively but may have false positives.",
    helpTopic: "security",
  },
  "ai-provider": {
    title: "AI provider",
    body: "Choose between Claude, OpenAI, or Gemini. Bring your own API key — your data is sent directly to the provider, never through a middleman.",
    helpTopic: "ai-features",
  },
  "search-operators": {
    title: "Search operators",
    body: "Use from:, to:, subject:, has:attachment, is:unread, before:, after:, and label: to narrow your search.",
    helpTopic: "search-navigation",
  },
  "filters": {
    title: "Automatic filters",
    body: "Filters run on every new message during sync. Criteria use AND logic, and when multiple filters match, their actions are merged.",
    helpTopic: "organization",
  },
};

// ---------- Helpers ----------

/** Get all cards across all categories (for search) */
export function getAllCards(): (HelpCard & { categoryId: string; categoryLabel: string })[] {
  return HELP_CATEGORIES.flatMap((cat) =>
    cat.cards.map((card) => ({
      ...card,
      categoryId: cat.id,
      categoryLabel: cat.label,
    })),
  );
}

/** Find a category by its ID */
export function getCategoryById(id: string): HelpCategory | undefined {
  return HELP_CATEGORIES.find((cat) => cat.id === id);
}
