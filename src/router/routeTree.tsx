import {
  createRootRoute,
  createRoute,
  redirect,
} from "@tanstack/react-router";
import App from "@/App";
import { MailLayout } from "@/components/layout/MailLayout";
import { SettingsPage } from "@/components/settings/SettingsPage";
import { CalendarPage } from "@/components/calendar/CalendarPage";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// ---------- Search param validation ----------
const VALID_CATEGORIES = ["Primary", "Updates", "Promotions", "Social", "Newsletters"] as const;

type MailSearch = {
  q?: string;
  category?: (typeof VALID_CATEGORIES)[number];
};

function validateMailSearch(search: Record<string, unknown>): MailSearch {
  const result: MailSearch = {};
  if (typeof search["q"] === "string" && search["q"]) {
    result.q = search["q"];
  }
  const cat = search["category"];
  if (typeof cat === "string" && (VALID_CATEGORIES as readonly string[]).includes(cat)) {
    result.category = cat as MailSearch["category"];
  }
  return result;
}

// ---------- Root (shell: TitleBar, Sidebar, overlays) ----------
export const rootRoute = createRootRoute({
  component: App,
});

// ---------- / (index) → redirect to /mail/inbox ----------
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/mail/$label", params: { label: "inbox" } });
  },
});

// ---------- Mail routes: render MailLayout for all mail views ----------
function MailPage() {
  return (
    <ErrorBoundary name="MailLayout">
      <MailLayout />
    </ErrorBoundary>
  );
}

function SettingsTabPage() {
  return (
    <ErrorBoundary name="SettingsPage">
      <SettingsPage />
    </ErrorBoundary>
  );
}

function CalendarPageWrapper() {
  return (
    <ErrorBoundary name="CalendarPage">
      <CalendarPage />
    </ErrorBoundary>
  );
}

// ---------- /mail/$label ----------
export const mailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "mail/$label",
  validateSearch: validateMailSearch,
  component: MailPage,
});

// ---------- /mail/$label/thread/$threadId ----------
export const mailThreadRoute = createRoute({
  getParentRoute: () => mailRoute,
  path: "thread/$threadId",
});

// ---------- /label/$labelId ----------
export const labelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "label/$labelId",
  validateSearch: validateMailSearch,
  component: MailPage,
});

// ---------- /label/$labelId/thread/$threadId ----------
export const labelThreadRoute = createRoute({
  getParentRoute: () => labelRoute,
  path: "thread/$threadId",
});

// ---------- /smart-folder/$folderId ----------
export const smartFolderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "smart-folder/$folderId",
  validateSearch: validateMailSearch,
  component: MailPage,
});

// ---------- /smart-folder/$folderId/thread/$threadId ----------
export const smartFolderThreadRoute = createRoute({
  getParentRoute: () => smartFolderRoute,
  path: "thread/$threadId",
});

// ---------- /settings (redirect to /settings/general) ----------
const settingsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "settings",
  beforeLoad: () => {
    throw redirect({ to: "/settings/$tab", params: { tab: "general" } });
  },
});

// ---------- /settings/$tab ----------
export const settingsTabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "settings/$tab",
  component: SettingsTabPage,
});

// ---------- /calendar ----------
export const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "calendar",
  component: CalendarPageWrapper,
});

// ---------- Route tree ----------
export const routeTree = rootRoute.addChildren([
  indexRoute,
  mailRoute.addChildren([mailThreadRoute]),
  labelRoute.addChildren([labelThreadRoute]),
  smartFolderRoute.addChildren([smartFolderThreadRoute]),
  settingsIndexRoute,
  settingsTabRoute,
  calendarRoute,
]);
