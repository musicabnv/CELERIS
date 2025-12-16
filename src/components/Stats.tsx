import { MapPin, Users, Globe } from 'lucide-react';

const stats = [
  {
    value: '5+',
    label: 'plants',
    icon: MapPin
  },
  {
    value: '2000+',
    label: 'employees',
    icon: Users
  },
  {
    value: '2+',
    label: 'countries',
    icon: Globe
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 bg-white bg-opacity-100 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Icon size={40} className="mx-auto text-accent-blue-500" />
                <div className="text-5xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-700 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
