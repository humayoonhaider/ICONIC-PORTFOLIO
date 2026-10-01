/**
 * Privacy-friendly, lightweight event tracking utility for portfolio performance monitoring.
 * - Zero PII (Personally Identifiable Information) collected
 * - No third-party cookies or tracking scripts
 * - Respects Do Not Track (DNT) browser settings
 * - Stores lightweight aggregated event counts and recent actions in local session/storage
 */

export interface TrackedEvent {
  id: string;
  name: string;
  properties?: Record<string, string | number | boolean>;
  path: string;
  timestamp: number;
}

export interface PageViewEvent {
  path: string;
  referrer?: string;
  timestamp: number;
}

const STORAGE_KEY = 'portfolio_analytics_v1';
const MAX_STORED_EVENTS = 100;

// Check if user has enabled "Do Not Track" in their browser
const isDoNotTrackEnabled = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    navigator.doNotTrack === '1' ||
    // @ts-expect-error - vendor-specific DNT
    window.doNotTrack === '1' ||
    // @ts-expect-error - legacy msDoNotTrack
    navigator.msDoNotTrack === '1'
  );
};

// Retrieve stored events safely
const getStoredEvents = (): TrackedEvent[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Persist events with bounds check
const saveEvents = (events: TrackedEvent[]) => {
  if (typeof window === 'undefined') return;
  try {
    // Keep only the most recent MAX_STORED_EVENTS to preserve quota
    const truncated = events.slice(-MAX_STORED_EVENTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(truncated));
  } catch (err) {
    console.warn('Analytics storage quota exceeded or unavailable:', err);
  }
};

/**
 * Log a user action or milestone (e.g. 'resume_download', 'project_clicked', 'theme_switched')
 */
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined') return;

  if (isDoNotTrackEnabled()) {
    // Respect user privacy preference silently
    return;
  }

  const newEvent: TrackedEvent = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: eventName,
    properties,
    path: window.location.pathname + window.location.hash,
    timestamp: Date.now(),
  };

  const existing = getStoredEvents();
  existing.push(newEvent);
  saveEvents(existing);

  // Dispatch custom window event for external listeners or debugging
  try {
    window.dispatchEvent(
      new CustomEvent('portfolio:analytics', {
        detail: newEvent,
      })
    );
  } catch {
    // Ignore in non-supporting environments
  }
};

/**
 * Log a page view or route change
 */
export const trackPageView = (path: string, properties?: Record<string, string | number | boolean>) => {
  trackEvent('page_view', {
    path,
    referrer: typeof document !== 'undefined' ? document.referrer || 'direct' : 'direct',
    ...properties,
  });
};

/**
 * Retrieve performance and interaction stats for debugging or monitoring
 */
export const getAnalyticsSummary = () => {
  const events = getStoredEvents();
  const eventCounts: Record<string, number> = {};
  const pageViewCounts: Record<string, number> = {};

  events.forEach((ev) => {
    eventCounts[ev.name] = (eventCounts[ev.name] || 0) + 1;
    if (ev.name === 'page_view' && ev.properties?.path) {
      const p = String(ev.properties.path);
      pageViewCounts[p] = (pageViewCounts[p] || 0) + 1;
    }
  });

  return {
    totalEvents: events.length,
    eventCounts,
    pageViewCounts,
    recentEvents: events.slice(-10),
  };
};

/**
 * Reset local analytics data
 */
export const clearAnalyticsData = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
};
