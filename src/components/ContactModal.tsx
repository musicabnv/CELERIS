import { X, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handlePhoneClick = () => {
    // On mobile devices, initiate call. On desktop, copy to clipboard
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      window.location.href = 'tel:+918551962684';
    } else {
      // Copy to clipboard on desktop
      navigator.clipboard.writeText('+91 8551962684').then(() => {
        // You could add a toast notification here if desired
        console.log('Phone number copied to clipboard');
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-sm shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close contact modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to discuss your project? We'd love to hear from you.
            </p>
          </div>

          {/* Email Contact */}
          <a
            href="mailto:contact@celerisautocomp.com"
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-accent-blue-50 to-accent-blue-100 rounded-lg hover:from-accent-blue-100 hover:to-accent-blue-200 transition-all duration-300 hover:shadow-md group"
            aria-label="Send us an email"
          >
            <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <Mail size={24} className="text-accent-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Email us at
              </p>
              <p className="text-accent-blue-600 font-medium hover:text-accent-blue-700 transition-colors">
                contact@celerisautocomp.com
              </p>
            </div>
          </a>

          {/* Phone Contact */}
          <button
            onClick={handlePhoneClick}
            className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:shadow-md group"
            aria-label="Call us or copy phone number"
          >
            <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
              <Phone size={24} className="text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Give us a call at
              </p>
              <p className="text-green-600 font-medium hover:text-green-700 transition-colors">
                +91 8551962684
              </p>
            </div>
          </button>

          {/* Additional Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>
              <p className="text-sm text-gray-600">
                We respond within 24 hours
              </p>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nanekarwadi, Chakan, Pune - 410501<br />
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}