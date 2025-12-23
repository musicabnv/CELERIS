import { Cpu, Target, Zap, Users, Settings } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const whyChooseUsItems = [
  {
    title: 'Cutting-edge technology',
    description: '',
    icon: Cpu
  },
  {
    title: 'High precision',
    description: '',
    icon: Target
  },
  {
    title: 'Rapid development',
    description: '',
    icon: Zap
  },
  {
    title: 'Customer-focused solutions',
    description: '',
    icon: Users
  },
  {
    title: 'Experienced technical team',
    description: '',
    icon: Settings
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gradient-to-b from-accent-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-left text-accent-blue-700 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-basw md:text-xl text-gtay-700 max-w-3xl text-left italic mb-12">
              Excellence in every detail, commitment in every promise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyChooseUsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4"
                  >
                    <Icon size={48} className="mx-auto mb-4 text-accent-blue-500" />
                    <h4 className="text-xl font-bold text-accent-blue-500 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}