
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OfferBanner from './components/OfferBanner';
import Home from './pages/Home';
import Locations from './pages/Locations';
import BookNow from './pages/BookNow';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import CookieConsent from './components/CookieConsent';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple ScrollToTop utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder pages for quick implementation
const UnderConstruction = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 text-center container mx-auto px-6">
    <h1 className="text-5xl font-serif font-bold mb-6">{title}</h1>
    <p className="text-slate-600 text-lg">Detailed page coming soon. Please check back later or contact us for more info.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <OfferBanner />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/eco" element={<UnderConstruction title="Sustainability at Harpers" />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Button */}
        <Link
          to="/book"
          className="fixed bottom-6 right-6 z-40 bg-emerald-600 text-white w-16 h-16 md:w-auto md:px-6 md:py-4 rounded-full shadow-2xl flex items-center justify-center space-x-2 hover:bg-emerald-700 hover:scale-105 transition-all group"
        >
          <Calendar size={24} />
          <span className="hidden md:block font-bold">Schedule Pickup</span>
        </Link>
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
