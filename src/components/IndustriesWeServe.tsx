import { Car, Truck, Bike, Tractor, Factory } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface IndustriesWeServeProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => void;
}

const industries = [
  {
    title: 'Cars',
    icon: Car
  },
  {
    title: 'Trucks',
    icon: Truck
  },
  {
    title: 'Two-wheelers',
    icon: Bike
  },
  {
    title: 'Tractors',
    icon: Tractor
  },
  {
    title: 'Heavy Engineering',
    icon: Factory
  }
];

export default function IndustriesWeServe({ onNavigate }: IndustriesWeServeProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-accent-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div>
            <h3 className="text-4xl font-bold text-left text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl text-left italic mb-12">
              Delivering precision solutions across diverse automotive and industrial sectors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4"
                  >
                    <Icon size={48} className="mx-auto mb-4 text-gray-600" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {industry.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-left mt-12">
            <button 
              onClick={() => onNavigate('capabilities')}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-500 px-8 py-4 rounded-sm font-semibold border-2 border-accent-blue-500 hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Know our capabilities
              <span className="text-xl">→</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}