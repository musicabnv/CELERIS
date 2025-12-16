import { Wrench, Hammer, Grid3x3, Bot } from 'lucide-react';

const services = [
  {
    title: 'Stamping',
    subtitle: '',
    description: 'High-volume & precision stamping for automotive components.',
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'sheet metal stamping press',
    icon: Hammer
  },
  {
    title: 'Dyes & Tools',
    subtitle: '',
    description: 'In-house die design, CNC tooling and maintenance.',
    image: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'tool and die workshop',
    icon: Wrench
  },
  {
    title: 'Jigs & Fixtures',
    subtitle: '',
    description: 'Custom jigs, gauges and BIW fixtures for repeatable assembly.',
    image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'jigs and fixtures',
    icon: Grid3x3
  },
  {
    title: 'Robotics',
    subtitle: '',
    description: 'Robotic cells for welding, material handling and inspection.',
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'robotic welding cell',
    icon: Bot
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-accent-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                    <p className="flex-1 text-sm text-gray-700">
                      {service.description}
                    </p>
                    <div className="flex-shrink-0 p-2 bg-accent-blue-50 rounded">
                      <Icon size={20} className="text-accent-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-white text-accent-blue-500 px-8 py-4 rounded-lg font-semibold border-2 border-accent-blue-500 hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg">
            All services
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
