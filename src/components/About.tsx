interface AboutProps {
  onNavigate: (page: 'home' | 'aboutUs' | 'services' | 'products') => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-accent-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
             Celeris Autocomp is an innovation-driven automotive engineering startup specializing in high-precision manufacturing. We develop components and tooling solutions including dies, fixtures, and robotics automation for passenger cars, commercial vehicles, two-wheelers, tractors, and heavy engineering sectors. Our focus is delivering reliable, high-quality solutions that boost performance and manufacturing efficiency for the industries of tomorrow.
            </p>
            <button 
              onClick={() => onNavigate('aboutUs')}
              className="inline-flex items-center gap-2 bg-white text-accent-blue-500 px-8 py-4 rounded-sm font-semibold border-2 border-accent-blue-500 hover:bg-accent-blue-500 hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Know more about us
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="relative h-96 rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/9242856/pexels-photo-9242856.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="manufacturing team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}