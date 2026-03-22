import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

function WelcomePopup() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('welcomePopupShown');
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('welcomePopupShown', 'true');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t.popup.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sparkles decoration */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Sparkles className="w-8 h-8 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-display font-bold text-primary-800 mb-2">
          {t.popup.title}
        </h2>

        {/* Offer description */}
        <p className="text-gray-600 mb-6">
          {t.popup.desc}
        </p>

        {/* CTA */}
        <Link
          to="/devis"
          onClick={() => setIsVisible(false)}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          {t.popup.cta}
        </Link>

        {/* Close text link */}
        <button
          onClick={() => setIsVisible(false)}
          className="block mx-auto mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          {t.popup.close}
        </button>
      </div>
    </div>
  );
}

export default WelcomePopup;
