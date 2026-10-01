import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Headless analytics tracker that listens to router location changes.
 * Does not render anything to the DOM, preserving the clean UI aesthetic.
 */
export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + (location.hash ? location.hash : '');
    trackPageView(fullPath, {
      search: location.search || '',
    });
  }, [location.pathname, location.hash, location.search]);

  return null;
};
