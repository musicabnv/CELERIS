import { ArrowLeft, Lightbulb, Award, Users, ShieldCheck, Zap, Target, Eye } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface AboutUsPageProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'services' | 'products') => void;
  onContactClick?: () => void;
}

export default function AboutUsPage({ onNavigate, onContactClick }: AboutUsPageProps) {
  const mission = {
    title: 'Our Mission',
    description: 'To deliver world-class automotive and industrial engineering solutions by combining precision manufacturing, cutting-edge technology, and reliable craftsmanship.',
    icon: Target,
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1766825389/1766825044273_lr26q4.webp'
  };

  const vision = {
    title: 'Our Vision',
    description: 'To become a globally trusted engineering and manufacturing partner, recognized for innovation, quality, and customer-centric solutions across the automotive and heavy engineering ecosystem.',
    icon: Eye,
    image: 'https://res.cloudinary.com/doalvffjs/image/upload/v1766825389/1766765833644_lvdqqj.webp'
  };

  const coreValues = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to develop smarter, more efficient solutions for modern engineering challenges.',
      icon: Lightbulb,
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Quality First',
      description: 'Every product we create reflects our commitment to precision, durability, and performance.',
      icon: Award,
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Customer Focus',
      description: 'We collaborate closely with clients to understand their needs and deliver solutions that add real value.',
      icon: Users,
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Integrity & Reliability',
      description: 'We believe in doing things the right way — with transparency, responsibility, and long-term trust.',
      icon: ShieldCheck,
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Agility',
      description: 'As a startup, we move fast, adapt quickly, and respond proactively to changing industry demands.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

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

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-700">About <span className="italic"> Celeris</span> </h1>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl italic">
          Engineering excellence through precision manufacturing and innovation
        </p>
      </div>

      {/* Company Overview */}
      <RevealOnScroll>
        <section id="company-overview" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-6">
                    Forward-Thinking Automotive Engineering
                  </h2>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                    Celeris AutoComp is a forward-thinking startup in the automotive domain, dedicated to engineering excellence and high-precision manufacturing. We serve a wide spectrum of industries including passenger cars, commercial trucks, two-wheelers, tractors, and heavy engineering sectors.
                  </p>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                    Built on innovation, agility, and deep technical expertise, Celeris Autocomp specializes in the development and manufacturing of automotive components, along with tooling solutions, including dies, process fixtures, assembly fixtures, inspection fixtures, and advanced robotics automation systems.
                  </p>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                    Our goal is to create reliable, high-quality engineering solutions that enhance performance, improve manufacturing efficiency, and meet the evolving needs of modern mobility and industrial production.
                  </p>
                </div>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                  <img                  src="https://res.cloudinary.com/doalvffjs/image/upload/v1764592799/Gemini_Generated_Image_n4kv40n4kv40n4kv_hwd8md.webp"
                    alt="Advanced manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent-blue-500 text-white p-6 rounded-sm shadow-lg">
                  <p className="text-sm font-semibold">Cutting-edge Technology</p>
                  <p className="text-xs opacity-90">Precision Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Mission & Vision */}
      <RevealOnScroll delay={100}>
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12">
              <div id="mission" className="relative rounded-sm overflow-hidden shadow-lg p-10 text-white flex flex-col justify-end w-full max-w-4xl mx-auto">
                <img
                  src={mission.image}
                  alt="Mission background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                <div className="relative z-20">
                  <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{mission.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>

              <div id="vision" className="relative rounded-sm overflow-hidden shadow-lg p-10 text-white flex flex-col justify-end w-full max-w-4xl mx-auto">
                <img
                  src={vision.image}
                  alt="Vision background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                <div className="relative z-20">
                  <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{vision.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {vision.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Core Values */}
      <RevealOnScroll delay={200}>
        <section id="core-values" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-blue-700 mb-4">Our Core Values</h2>
              <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto italic">
                Excellence in every detail, commitment in every promise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4"
                  >
                    <Icon size={36} className="mx-auto mb-4 text-accent-blue-500" />
                    <h3 className="text-xl font-bold text-accent-blue-500 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Our Story */}
      <RevealOnScroll delay={300}>
        <section id="our-story" className="py-12 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-blue-700 mb-8 text-left">Our Story</h2>
              
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p className="text-base md:text-xl font-medium text-gray-800 text-left mb-8">
                  Celeris AutoComp was born with a simple belief:
                </p>
                
                <p className="text-left italic text-gray-800 text-base md:text-xl mb-8">
                  The future of mobility and engineering belongs to companies that build with precision, innovate fearlessly, and deliver without compromise.
                </p>
                
                <p>
                  With that vision, a team of passionate engineers and manufacturing specialists came together to create a company that redefines how automotive and industrial components are designed and built.
                </p>
                
                <p>
                  From day one, we focused on solving real challenges — improving productivity, enhancing quality, and enabling smart automation for manufacturers across India and beyond.
                </p>
                
                <p>
                  Every component we create, every die we build, every fixture we engineer, and every robotic solution we deploy reflects our commitment to excellence, precision, and reliability.
                </p>
                
                <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-200 my-12">
                  <h3 className="text-2xl font-bold text-accent-blue-700 mb-4">A Startup with Big Ambition</h3>
                  <p className="mb-4">
                    We may be a young company, but our ideas and capabilities are built on years of engineering experience. At Celeris AutoComp, speed and agility meet deep technical knowledge — allowing us to deliver solutions faster, better, and smarter.
                  </p>
                  <p>
                    We embrace innovation, adapt quickly to evolving industry needs, and continuously upgrade our technology to stay ahead in a competitive world.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-200 my-12">
                  <h3 className="text-2xl font-bold text-accent-blue-700 mb-4">Built for the Next Generation</h3>
                  <p className="mb-4">
                    As the automotive and heavy engineering sectors transform with electrification, automation, and intelligent manufacturing, Celeris AutoComp is positioned to lead this change.
                  </p>
                  <p className="mb-4">Our work is driven by a belief that the future requires:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">Smarter tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">Precise components</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">Intelligent fixtures</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">Automated processes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-blue-700 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">Reliable engineering partners</span>
                    </li>
                  </ul>
                  <p className="mt-4 font-medium">And that is exactly what we deliver.</p>
                </div>
                
                <div className="bg-white text-gray-900 border shadow-lg border-gray-200 p-8 rounded-sm my-12">
                  <h3 className="text-accent-blue-700 text-2xl font-bold mb-4">Our Promise</h3>
                  <p className="mb-4">
                    We are more than a manufacturer — we are a team of creators, problem-solvers, and innovators dedicated to helping our customers build stronger, safer, and more efficient products.
                  </p>
                  <p className="text-accent-blue-700 text-xl font-medium text-center">
                    Celeris Autocomp exists to create engineering solutions that move the world forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Commitment Statement */}
      <RevealOnScroll delay={400}>
        <section className="py-12 bg-gradient-to-r from-accent-blue-600 to-accent-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Our Commitment</h2>
            <p className="text-base md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              At Celeris Autocomp, we combine cutting-edge technology with a commitment to precision, delivering solutions that help our customers build the vehicles and machines of tomorrow.
            </p>
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-600 px-8 py-4 rounded-sm font-semibold hover:bg-accent-blue-50 transition-all shadow-md hover:shadow-lg"
            >
              Explore Our Solutions
              <span className="text-xl">→</span>
            </button>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
