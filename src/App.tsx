import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import WhatWeDo from './components/WhatWeDo';
import IndustriesWeServe from './components/IndustriesWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUsPage from './components/AboutUsPage';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import RevealOnScroll from './components/RevealOnScroll';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import SolutionsPage from './components/SolutionsPage';
import CapabilitiesPage from './components/CapabilitiesPage';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'aboutUs' | 'solutions' | 'capabilities'>('home');

  const handleNavigate = (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onContactClick={() => setIsContactModalOpen(true)}
        onNavigate={handleNavigate}
      />
      {currentPage === 'home' ? (
        <div key="home" className="animate-pageTransition">
          <RevealOnScroll>
            <Hero 
              onContactClick={() => setIsContactModalOpen(true)}
              onNavigate={handleNavigate}
            />
          </RevealOnScroll>
          <Welcome onNavigate={handleNavigate} />
          <WhatWeDo onNavigate={handleNavigate} />
          <IndustriesWeServe onNavigate={handleNavigate} />
          <WhyChooseUs />
          <RevealOnScroll delay={100}>
            <Footer 
              onContactClick={() => setIsContactModalOpen(true)}
              onNavigate={handleNavigate}
            />
          </RevealOnScroll>
        </div>
      ) : currentPage === 'aboutUs' ? (
        <div key="aboutUs" className="animate-pageTransition">
          <AboutUsPage onNavigate={handleNavigate} />
        </div>
      ) : currentPage === 'solutions' ? (
        <div key="solutions" className="animate-pageTransition">
          <SolutionsPage onNavigate={handleNavigate} />
        </div>
      ) : (
        <div key="capabilities" className="animate-pageTransition">
          <CapabilitiesPage onNavigate={handleNavigate} />
        </div>
      )}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
