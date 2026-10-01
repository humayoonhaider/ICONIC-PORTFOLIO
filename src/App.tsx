/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
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
      <div className="w-full min-h-screen bg-white text-slate-900 flex flex-col pb-16 sm:pb-0">
        <Router>
          <AnalyticsTracker />
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          
          <div className="flex-1 w-full">
            <Routes>
              {/* Primary Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />

              {/* Smart Aliases & Section Redirects to prevent any 404 */}
              <Route path="/cv" element={<Navigate to="/resume" replace />} />
              <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
              <Route path="/skills" element={<Navigate to="/?section=skills" replace />} />
              <Route path="/experience" element={<Navigate to="/?section=experience" replace />} />
              <Route path="/services" element={<Navigate to="/?section=services" replace />} />
              <Route path="/process" element={<Navigate to="/?section=process" replace />} />
              <Route path="/contact" element={<Navigate to="/?section=contact" replace />} />

              {/* Fallback for any unknown route */}
              <Route path="*" element={
                <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center pt-24">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-2xl mb-6 shadow-xs border border-blue-100">
                    404
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-3">Page Not Found</h1>
                  <p className="text-slate-600 mb-8 max-w-md text-sm leading-relaxed">
                    The page or section you requested is not available. Click below to return to the main portfolio.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link to="/">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold tracking-wider text-xs uppercase transition-all shadow-md cursor-pointer">
                        Return to Home
                      </button>
                    </Link>
                    <Link to="/resume">
                      <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full font-bold tracking-wider text-xs uppercase transition-all cursor-pointer">
                        View Resume
                      </button>
                    </Link>
                  </div>
                </div>
              } />
            </Routes>
          </div>

          {/* Dedicated thumb-friendly Mobile Bottom Dock */}
          <MobileBottomNav />
        </Router>
      </div>
    </ThemeProvider>
  );
}
