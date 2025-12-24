import { Factory, Wrench, Grid3x3, Bot, Cpu, Lightbulb, Award, Users, Zap, Car, Truck, Bike, Tractor } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface CapabilitiesPageProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'products' | 'services' | 'capabilities') => void;
  onContactClick?: () => void;
}

const capabilitiesGlance = [
  { title: 'Precision Manufacturing', icon: Factory },
  { title: 'Tooling & Die Engineering', icon: Wrench },
  { title: 'Fixture Design & Build', icon: Grid3x3 },
  { title: 'Robotics & Automation', icon: Bot },
  { title: 'Engineering Services', icon: Cpu }
];

const industries = [
  { title: 'Passenger Cars', icon: Car },
  { title: 'Commercial Vehicles', icon: Truck },
  { title: 'Two-Wheelers', icon: Bike },
  { title: 'Tractors', icon: Tractor },
  { title: 'Heavy Engineering', icon: Factory },
  { title: 'Industrial Automation', icon: Bot }
];

const strengths = [
  {
    title: 'Technology',
    description: 'Use of cutting-edge CAD/CAM systems and simulation tools.',
    icon: Cpu
  },
  {
    title: 'Quality',
    description: 'Commitment to high precision and consistent quality control.',
    icon: Award
  },
  {
    title: 'Agility',
    description: 'Rapid development cycles suitable for prototyping, low-volume, and mass production.',
    icon: Zap
  },
  {
    title: 'Customer Collaboration',
    description: 'A focused approach on understanding and meeting client-specific requirements.',
    icon: Users
  }
];

export default function CapabilitiesPage({ onNavigate, onContactClick }: CapabilitiesPageProps) {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-accent-blue-700">Our Capabilities</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Delivering advanced engineering and manufacturing excellence across the entire product lifecycle.
        </p>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-blue-700 mb-8">Capabilities at a Glance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {capabilitiesGlance.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="text-center p-4">
                    <div className="inline-flex p-4 rounded-full border-2 border-gray-50 mb-4">
                      <Icon size={48} className="text-accent-blue-700" />
                    </div>
                    <h3 className="text-base font-semibold text-accent-blue-700">
                      {capability.title}
                    </h3>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-sm shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2">
                <img        src="https://res.cloudinary.com/doalvffjs/image/upload/v1764595081/ChatGPT_Image_Dec_1_2025_06_28_19_PM_ltkyxp.webp"
                  alt="Precision Component Manufacturing"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-accent-blue-700 mb-4">
                  Precision Component Manufacturing
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  High-accuracy machining and fabrication solutions for complex automotive components.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Focus:</h4>
                    <p className="text-gray-700">Automotive components across multiple vehicle categories</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {['BIW Parts', 'Engine brackets', 'Suspension parts', 'Transmission components', 'Chassis components', 'Precision machined parts', 'Electric Vehicle Components'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Materials Expertise:</h4>
                    <p className="text-gray-700">Sheet metal, machined metals, plastics & polymer components</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Production Capabilities:</h4>
                    <p className="text-gray-700">Prototyping, low volume → Full-scale mass production</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white rounded-sm shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2">
                <img                  src="https://res.cloudinary.com/doalvffjs/image/upload/v1765875663/file_00000000f38871fd9d3be25497dcc954_cefilw.webp"
                  alt="Advanced Tooling & Die Solutions"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-accent-blue-700 mb-4">
                  Advanced Tooling & Die Solutions
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  High-precision tooling engineered for durability, repeatability, and high-volume productivity.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Specialization:</h4>
                    <p className="text-gray-700">Design & manufacturing of high-precision tools and dies</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {['Progressive dies', 'Stamping dies', 'Injection molds', 'Casting dies', 'Trim dies'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Engineered for:</h4>
                    <ul className="space-y-1">
                      {['Longevity', 'Accuracy', 'High productivity', 'Quality Enhancement Engineering'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-sm shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2">
                <img              src="https://res.cloudinary.com/doalvffjs/image/upload/v1765875663/file_00000000f71c71f8b32937a9517c0969_ivhznv.webp"
                  alt="Custom Fixture Design & Build"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-accent-blue-700 mb-4">
                  Custom Fixtures & Workholding
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Engineered fixtures that streamline production, ensure accuracy, and validate part quality.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Types:</h4>
                    <ul className="space-y-1">
                      {['Process fixtures', 'Assembly fixtures', 'Inspection fixtures', 'Welding fixtures'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Purpose:</h4>
                    <ul className="space-y-1">
                      {['Streamline production', 'Ensure assembly accuracy', 'Validate dimensional quality', 'Support joining & welding processes'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white rounded-sm shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Robotics & Automation Systems"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-accent-blue-700 mb-4">
                  Robotics & Automation Systems
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Industry 4.0-ready automation for safer, faster, and more consistent production.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Services:</h4>
                    <ul className="space-y-1">
                      {['Robotic welding cells', 'Pick-and-place systems', 'Material handling automation', 'Custom robotic workstations'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {['Reduces human error', 'Increases output & consistency', 'Enhances workplace safety', 'Supports digital transformation & Industry 4.0'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-sm shadow-lg overflow-hidden">
              <div className="w-full lg:w-1/2">
                <img
                  src="https://res.cloudinary.com/doalvffjs/image/upload/v1765874317/1765873656551_bxfpkg.webp"
                  alt="End-to-End Engineering Services"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-accent-blue-700 mb-4">
                  End-to-End Engineering Services
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Comprehensive design-to-manufacturing support for optimized performance and faster development.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {['CAD/CAM design', 'CAE & simulations', 'Reverse engineering', 'Product development', 'Simulation analysis', 'Rapid prototyping', 'PPAP compliance'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-blue-700 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-accent-blue-700 mb-2">Goal:</h4>
                    <p className="text-gray-700">Transform concepts into manufacturable, high-performance solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll delay={500}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold text-accent-blue-700 mb-4">Industries Served</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Tailored engineering for diverse mobility and industrial sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-sm shadow-sm">
                    <Icon size={28} className="mx-auto mb-3 text-accent-blue-500" />
                    <h3 className="text-sm font-semibold text-accent-blue-500">
                      {industry.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-accent-blue-700 mb-4">Adaptability:</h3>
              <ul className="space-y-2">
                {['Tailored for durability', 'Precision tolerance requirements', 'Sector-specific volume needs'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={600}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold text-accent-blue-700 mb-8">Core Strengths & Differentiators</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-sm">
                    <Icon size={36} className="mx-auto mb-4 text-accent-blue-500" />
                    <h3 className="text-xl font-bold text-accent-blue-500 mb-3">
                      {strength.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                In essence, Celeris AutoComp positions itself as a one-stop shop for automotive and industrial engineering needs—from design and tooling to manufacturing and automation—all underpinned by a strong emphasis on precision, innovation, and reliability.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={700}>
        <section className="py-20 bg-gradient-to-r from-accent-blue-600 to-accent-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Ready to build with precision?</h2>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-600 px-8 py-4 rounded-sm font-semibold hover:bg-accent-blue-50 transition-all shadow-md hover:shadow-lg"
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
