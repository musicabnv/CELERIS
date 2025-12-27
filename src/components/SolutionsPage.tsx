import { Settings, Wrench, Grid3x3, Bot, Cpu, Cog } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface SolutionsPageProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'products' | 'services' | 'capabilities') => void;
  onContactClick?: () => void;
}

const products = [
  {
    title: 'Automotive Components',
    description: 'Built for durability, reliability, and performance across all vehicle sectors.',
    icon: Settings,
    items: [
      'BIW Parts',
      'Engine brackets',
      'Suspension parts',
      'Transmission components',
      'Chassis components',
      'Precision machined parts',
      'Electric Vehicle Components'
    ],
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1763994255/components_cinefp.webp'
  },
  {
    title: 'Dies and Tools',
    description: 'Each tool is engineered for longevity and high accuracy.',
    icon: Wrench,
    items: [
      'Sheet metal dies',
      'Injection molds',
      'Trim dies',
      'Casting dies'
    ],
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765875663/1765874631919_1_jora3d.webp'
  },
  {
    title: 'Fixtures',
    description: 'All fixtures are custom-engineered for client-specific requirements.',
    icon: Grid3x3,
    items: [
      'Assembly fixtures for accurate joining',
      'Inspection fixtures for dimensional validation',
      'Process fixtures to simplify manufacturing',
      'Robotic fixtures for automation systems'
    ],
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1765875664/1765874641124_1_ql0xbq.webp'
  },
  {
    title: 'Robotics & Automation Solutions',
    description: 'Designed to improve safety, speed, and production consistency.',
    icon: Bot,
    items: [
      'Robotic welding cells',
      'Automated testing stations',
      'Conveyor and handling systems',
      'End-of-arm tooling (EOAT)'
    ],
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

const services = [
  {
    title: 'Engineering & Design',
    description: 'We transform concepts into manufacturable, high-performance solutions through CAD/CAM design, product development, reverse engineering, and simulation & analysis.',
    icon: Cpu,
  },
  {
    title: 'Automotive Component Manufacturing',
    description: 'We supply robust and reliable components for multi-vehicle segments including machined components, fabricated assemblies, sheet metal parts, and plastic & polymer components.',
    icon: Settings,
  },
  {
    title: 'Tools & Dies',
    description: 'We design and manufacture durable tools and dies that ensure long-term productivity and precision, including progressive dies, stamping dies, injection molds, and casting dies.',
    icon: Wrench,
  },
  {
    title: 'Fixtures & Tooling Solutions',
    description: 'Custom-built fixtures designed to improve speed, accuracy, and production efficiency including process fixtures, assembly fixtures, inspection fixtures, and welding fixtures.',
    icon: Grid3x3,
  },
  {
    title: 'Robotics & Industrial Automation',
    description: 'We build intelligent, automated systems that reduce human error and increase output through robotic welding cells, pick & place automation, material handling automation, and customized robotic workstations.',
    icon: Bot,
  },
  {
    title: 'Manufacturing Support Services',
    description: 'We support your entire production lifecycle through prototyping, low-volume & mass production, quality inspection & validation, and maintenance & refurbishment of tooling.',
    icon: Cog,
  }
];

export default function SolutionsPage({ onNavigate, onContactClick }: SolutionsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Arrow */}
      <div className="fixed top-24 left-4 z-50">
        <button
          onClick={() => onNavigate('home')}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-accent-blue-50 border border-gray-200"
          aria-label="Back to home"
        >
          <ArrowLeft size={24} className="text-accent-blue-700" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-accent-blue-700">Our Solutions</h1>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl">
          Comprehensive engineering and manufacturing solutions tailored for the automotive and industrial sectors
        </p>
      </div>

      <section id="products-section" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-accent-blue-700 mb-4">Our Products</h2>
            <p className="text-base md:text-lg text-gray-700">
              High-quality automotive components and engineering solutions for diverse industrial applications
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-stretch bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 aspect-[4/3]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-accent-blue-700">
                          {product.title}
                        </h3>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-2">
                        {product.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services-section" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-accent-blue-700 mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              End-to-end engineering and manufacturing support for your entire production lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="text-center p-6 bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300">
                    <Icon size={36} className="mx-auto mb-4 text-accent-blue-500" />
                    <h3 className="text-xl font-bold text-accent-blue-500 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <RevealOnScroll delay={600}>
        <section className="py-12 bg-gradient-to-r from-accent-blue-600 to-accent-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Let us help you bring your engineering and manufacturing projects to life with our comprehensive solutions and expertise.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-accent-blue-50 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
              <span className="text-xl">→</span>
            </button>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
