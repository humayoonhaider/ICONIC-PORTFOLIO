import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const hasTarget = hash || search.includes("section=");
    if (!hasTarget) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search, hash]);

  return null;
}
