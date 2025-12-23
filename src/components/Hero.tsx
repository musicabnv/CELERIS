import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
  onNavigate?: (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => void;
}

const slides = [
  {
    url: 'https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'assembly line technicians manufacturing'
  },
  {
    url: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765874317/1765873689312_1_ybattw.webp',
    alt: 'assembly line technicians manufacturing'
  },
  {
    url: 'https://res.cloudinary.com/doalvffjs/image/upload/v1763994255/components_cinefp.webp',
    alt: 'assembly line technicians manufacturing'
  },
  {
    url: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765874317/1765821766892_hiqktk.webp',
    alt: 'assembly line technicians manufacturing'
  }
];

export default function Hero({ onContactClick, onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full aspect-[2/3] md:aspect-[2/1] overflow-hidden bg-black">
      {/* Desktop Carousel */}
      <div className="hidden md:block">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover filter contrast-125 saturate-75"
            />
          </div>
        ))}
      </div>

      {/* Mobile Static Image */}
      <div className="block md:hidden absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        <img
          src="https://res.cloudinary.com/doalvffjs/image/upload/v1765874317/file_00000000dc54720988fead059a178eb5_1_pzvzub.webp"
          alt="assembly line technicians manufacturing"
          className="w-full h-full object-cover filter contrast-125 saturate-75"
        />
      </div>

      {/* Heading Overlay */}
      <div className="absolute inset-0 z-20 items-center flex">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        
        {/* Heading Text */}
        <div className="relative z-10 p-8 md:p-12 text-white animate-fadeIn md:pt-36">
          {/* Desktop View */}
          <div className="hidden md:block">
            <p className="text-sm uppercase tracking-widest mb-4 text-gray-300">
              AUTOMOTIVE ENGENEERING
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Manufacturing Automotive <span className="text-white">Systems</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mt-2">
              Built For <span className="text-blue-500">World Class Production</span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mt-6 mb-4 text-gray-200 leading-relaxed">
              Precision components, tooling, and automation for automotive programs.
            </p>
            <p className="text-base md:text-lg max-w-xl mb-8 text-gray-300">
              From concept validation to full scale production support.
            </p>
            
            {/* Desktop CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onContactClick}
                className="bg-accent-blue-500 text-white px-6 py-3 rounded-sm font-normal hover:bg-accent-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Talk to Our Engineering Team
              </button>
              <button
                onClick={() => onNavigate?.('capabilities')}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-sm font-normal hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Capabilities
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <p className="text-sm text-gray-300 mt-8 max-w-2xl">
              Supporting automotive OEMs and Tier suppliers across multiple vehicle platforms.
            </p>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden text-center">
            <p className="text-[0.5625rem] uppercase tracking-widest mb-2 text-gray-300">
              AUTOMOTIVE ENGINEERING 
            </p>
            <h2 className="text-3xl font-semibold leading-tight">
              Built for <span className="text-accent-blue-400">Production.</span>
            </h2>
            <h2 className="text-3xl font-semibold leading-tight mt-1">
              Engineered to Last.
            </h2>
            <p className="text-xs max-w-md mx-auto mt-4 mb-6 text-gray-200 leading-relaxed">
              Precision components, tooling, and automation for automotive programs.
            </p>
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mb-6 items-center">
              <button
                onClick={onContactClick}
                className="bg-accent-blue-500 text-white px-4 py-2 rounded-sm font-normal hover:bg-accent-blue-600 transition-all shadow-lg text-xs"
              >
                START A CONVERSATION
              </button>
              <button
                onClick={() => onNavigate?.('capabilities')}
                className="bg-transparent border-2 border-gray-400 text-gray-200 px-2 py-1 rounded-sm font-normal hover:bg-white hover:text-gray-900 transition-all shadow-lg text-xs"
              >
                VIEW CAPABILITIES
              </button>
            </div>
            
            {/* Mobile Keywords */}
            <div className="mt-6 space-y-2">
              <p className="text-xs text-gray-300 tracking-wider">
              </p>
              <p className="text-gray-300 tracking-wider" style={{ fontSize: '0.5625rem' }}>
                COMPONENTS • TOOLING • DIES • FIXTURES • ROBOTICS • CARS • TRUCKS • TWO-WHEELERS • HEAVY ENGINEERING
              </p>
              <p className="text-xs hidden text-gray-300 tracking-wider">
                CARS • TRUCKS • TWO-WHEELERS • HEAVY ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-40 hover:bg-opacity-50 p-3 rounded-full transition-all shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-gray-900" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-40 hover:bg-opacity-50 p-3 rounded-full transition-all shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-gray-900" />
      </button>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white bg-opacity-75 w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
