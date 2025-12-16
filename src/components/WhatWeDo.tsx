import { Wrench, Hammer, Grid3x3, Bot, Settings } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface WhatWeDoProps {
  onNavigate: (page: string) => void;
}

const whatWeDoItems = [
  {
    title: 'Component Manufacturing',
    description: '',
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1763994256/components-home_flknnp.webp',
    alt: 'automotive component manufacturing',
    icon: Settings
  },
  {
    title: 'Dies and Tools',
    description: '',
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765875663/1765874631919_1_jora3d.webp',
    alt: 'tools and dies',
    icon: Wrench
  },
  {
    title: 'Assembly & Inspection Fixtures',
    description: '',
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765875664/1765874641124_1_ql0xbq.webp',
    alt: 'fixtures and jigs',
    icon: Grid3x3
  },
  {
    title: 'Robotics Automation',
    description: '',
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'robotics automation',
    icon: Bot
  },
  {
    title: 'End-to-End Engineering',
    description: '',
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765874317/1765873656551_bxfpkg.webp',
    alt: 'engineering services',
    icon: Hammer
  }
];

export default function WhatWeDo({ onNavigate }: WhatWeDoProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-accent-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-left text-gray-900 mb-4">
              Our Solutions
              </h3>
            <p className="text-xl text-gray-700 max-w-3xl text-left italic mb-12">
              Delivering precision solutions across diverse automotive and industrial sectors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {whatWeDoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 space-y-2 p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-left mt-12">
            <button 
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-500 px-8 py-4 rounded-sm font-semibold border-2 border-accent-blue-500 hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Know our solutions
              <span className="text-xl">→</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}