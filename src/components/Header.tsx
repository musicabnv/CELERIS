import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => void;
}

export default function Header({ onContactClick, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutMenuClick = (action: string) => {
    if (action === 'company') {
      onNavigate('aboutUs');
      setTimeout(() => {
        scrollToSection('company-overview');
      }, 100);
    } else {
      onNavigate('aboutUs');
      setTimeout(() => {
        scrollToSection(action);
      }, 100);
    }
    setIsAboutDropdownOpen(false);
  };

  const handleSolutionsMenuClick = (sectionId: string) => {
    onNavigate('solutions');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
    setIsSolutionsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 header-gradient md:sticky shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0 -ml-1 md:-ml-2">
            <img 
              src="https://res.cloudinary.com/doalvffjs/image/upload/v1766825830/1000102709-removebg-preview_ytzxe3.png" 
              alt="Celeris Autocomp Logo" 
              className="h-11 md:h-14"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 md:ml-24">
            {/* Home Link */}
            <button
              onClick={() => onNavigate('home')}
              className="text-text-gray-light hover:text-white transition-colors font-medium"
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                className="text-text-gray-light hover:text-white transition-colors font-medium flex items-center gap-1"
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                isAboutDropdownOpen
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <button
                  onClick={() => handleAboutMenuClick('company')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Who We Are
                </button>
                <button
                  onClick={() => handleAboutMenuClick('mission')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Our Mission
                </button>
                <button
                  onClick={() => handleAboutMenuClick('vision')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Our Vision
                </button>
                <button
                  onClick={() => handleAboutMenuClick('core-values')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Core Values
                </button>
                <button
                  onClick={() => handleAboutMenuClick('our-story')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Story and Growth
                </button>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            >
              <button
                className="text-text-gray-light hover:text-white transition-colors font-medium flex items-center gap-1"
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                isSolutionsDropdownOpen
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <button
                  onClick={() => handleSolutionsMenuClick('products-section')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Products
                </button>
                <button
                  onClick={() => handleSolutionsMenuClick('services-section')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-white hover:text-accent-blue-600 transition-colors font-medium"
                >
                  Services
                </button>
              </div>
            </div>

            {/* Capabilities Link */}
            <button
              onClick={() => onNavigate('capabilities')}
              className="text-text-gray-light hover:text-white transition-colors font-medium"
            >
              Capabilities
            </button>
          </nav>

          <button
            onClick={onContactClick}
            className="hidden bg-white md:block text-accent-blue-900 px-6 py-3 rounded-sm font-medium hover:gray-700 hover:text-accent-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 md:ml-auto"
          >
            Get in touch
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-100 ml-auto"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-accent-blue-200 animate-slideDown overflow-hidden absolute top-full left-0 right-0 z-40 shadow-lg transition-all duration-200 ease-out">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-accent-blue-500 transition-colors font-medium py-2 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('aboutUs');
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-accent-blue-500 transition-colors font-medium py-2 w-full text-left"
            >
              About Us
            </button>
            <button
              onClick={() => {
                onNavigate('solutions');
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-accent-blue-500 transition-colors font-medium py-2 w-full text-left"
            >
              Solutions
            </button>
            <button
              onClick={() => {
                onNavigate('capabilities');
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-accent-blue-500 transition-colors font-medium py-2 w-full text-left"
            >
              Capabilities
            </button>
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-accent-blue-500 text-white px-6 py-3 rounded-sm font-semibold hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
