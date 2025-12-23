import RevealOnScroll from './RevealOnScroll';

interface WelcomeProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => void;
}

export default function Welcome({ onNavigate }: WelcomeProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-accent-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-5xl font-bold text-accent-blue-700 mb-4">
                Next-Gen Automotive Manufacturing 
              </h2>
              <p className="text-base italic md:text-2xl text-accent-blue-500 font-semibold mb-8">
                Engineering Precision. Driving Innovation.
              </p>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                Celeris Autocomp is a next-generation engineering and manufacturing company dedicated to delivering high-quality automotive components and advanced tooling solutions. We support a wide range of industries including cars, trucks, two-wheelers, tractors, and heavy engineering sectors.
              </p>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                With expertise in precision components, tooling, dies, fixtures, and robotics automation, we help our customers build products that are stronger, smarter, and future-ready.
              </p>
              <button 
                onClick={() => onNavigate('aboutUs')}
                className="inline-flex items-center gap-2 bg-white text-accent-blue-500 px-4 md:px-8 py-2 md:py-4 rounded-sm font-normal md:font-semibold border-2 border-accent-blue-500 hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                Know more about us
                <span className="text-xl">→</span>
              </button>
            </div>

            <div className="relative h-96 rounded-sm overflow-hidden shadow-xl">
              <img               src="https://res.cloudinary.com/doalvffjs/image/upload/v1764592799/Gemini_Generated_Image_n4kv40n4kv40n4kv_hwd8md.webp"
                alt="manufacturing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}