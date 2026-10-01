/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { ResumePage } from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { AnalyticsTracker } from './components/AnalyticsTracker';

import { ScrollProgress } from './components/UI/ScrollProgress';

export default function App() {
  return (
    <ThemeProvider>
      <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-[var(--bg-body)]">
        <Router>
          <AnalyticsTracker />
          <ScrollProgress />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            {/* Fallback for 404 */}
            <Route path="*" element={
              <div className="min-h-screen bg-[var(--bg-body)] flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">Page Not Found</h2>
                <p className="text-[#A7ADB8] mb-12 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/">
                  <button className="px-10 py-4 bg-[#3B82F6] text-white rounded-lg font-bold tracking-widest uppercase hover:bg-[#2563EB] transition-colors cursor-pointer">
                    Return Home
                  </button>
                </a>
              </div>
            } />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
