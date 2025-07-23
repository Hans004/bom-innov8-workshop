import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HeroSection from './HeroSection';
import FocusAreas from './FocusAreas';
import Schedule from './Schedule';
import Deliverables from './Deliverables';
import CTASection from './CTASection';
import Footer from './Footer';
import SurveyInsightsDashboard from './SurveyInsightsDashboard'; // Import your dashboard

const WorkshopPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <style>{`
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }

      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out;
      }

      .delay-300 {
        animation-delay: 0.3s;
      }

      .delay-500 {
        animation-delay: 0.5s;
      }

      .delay-1000 {
        animation-delay: 1s;
      }

      .hover\\:scale-102:hover {
        transform: scale(1.02);
      }
    `}</style>

        {/* Navigation Button to Dashboard */}
        <div className="fixed top-4 right-4 z-50">
            <Link
                to="/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                View Survey Dashboard
            </Link>
        </div>

        <HeroSection />
        <FocusAreas />
        <Schedule />
        <Deliverables />
        <CTASection />
        <Footer />
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WorkshopPage />} />
                <Route path="/dashboard" element={<SurveyInsightsDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
