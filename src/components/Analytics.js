import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sends a page view to GoatCounter on every route change.
// The GoatCounter script (in public/index.html) is configured with
// `no_onload: true`, so this component is the single source of page views —
// every HashRouter route (/, /about, /skills, ...) is counted with its own path.
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const send = () => {
      if (window.goatcounter && typeof window.goatcounter.count === 'function') {
        window.goatcounter.count({
          path: location.pathname + location.search,
          title: document.title,
        });
        return true;
      }
      return false;
    };

    // count.js loads asynchronously; if it isn't ready yet, retry briefly so
    // the first page view isn't lost.
    if (send()) return;
    const interval = setInterval(() => {
      if (send()) clearInterval(interval);
    }, 300);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [location]);

  return null;
};

export default Analytics;
