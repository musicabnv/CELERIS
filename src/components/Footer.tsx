import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'aboutUs' | 'solutions' | 'capabilities') => void;
}

export default function Footer({ onContactClick, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about', action: () => onNavigate('aboutUs') },
    { label: 'Solutions', href: '#solutions', action: () => onNavigate('solutions') },
    { label: 'Capabilities', href: '#capabilities', action: () => onNavigate('capabilities') },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/doalvffjs/image/upload/v1765883863/Celeris_AutoComp_20251214_221328_0000-removebg-preview_vocxg4.png" 
                alt="Celeris Autocomp Logo" 
                className="h-12 md:h-16"
              />
            </div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-blue-300 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Head Office: Nanekarwadi, Chakan, Pune - 410501, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent-blue-300 flex-shrink-0" />
                <p className="text-gray-300">+91 8551962684</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent-blue-300 flex-shrink-0" />
                <a
                  href="mailto:contact@celerisautocomp.com"
                  className="text-gray-300 hover:text-accent-blue-300 transition-colors"
                >
                  contact@celerisautocomp.com
                </a>
              </div>
            </div>
            <button
              onClick={onContactClick}
              className="mt-6 bg-accent-blue-500 text-white px-6 py-3 rounded-sm font-semibold hover:bg-accent-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              Get in touch
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-accent-blue-300 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent-blue-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} CELERIS AUTOCOMP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
