import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ResumeViewer } from '../components/ResumeViewer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ResumePage = () => {
  return (
    <main className="bg-slate-100/60 w-full max-w-full overflow-x-hidden min-h-screen text-slate-900">
      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-4">
          <Link 
            to="/" 
            className="cursor-pointer inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors font-bold"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <ResumeViewer />
      </div>

      <Footer />
    </main>
  );
};
