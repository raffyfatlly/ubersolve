import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BusinessTypes from './components/BusinessTypes';
import AnnouncementSection from './components/AnnouncementSection';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import AIStudio from './pages/AIStudio';

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/studio" element={<AIStudio />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-dark text-gray-100 font-sans">
            <Header onShowContactForm={() => setShowContactForm(true)} />
            <main className="pt-16">
              <Hero />
              <Features />
              <BusinessTypes />
              <AnnouncementSection onShowContactForm={() => setShowContactForm(true)} />
              <Pricing onShowContactForm={() => setShowContactForm(true)} />
              <CTA onShowContactForm={() => setShowContactForm(true)} />
            </main>
            
            <footer className="bg-dark-lighter/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-400">
                <p className="font-medium">© 2024 agentif.co by Ubersolve. All rights reserved.</p>
              </div>
            </footer>

            {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
          </div>
        } />
      </Routes>
    </Router>
  );
}