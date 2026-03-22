import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

function WhatsAppButton() {
  const { lang } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const tooltip = lang === 'fr' ? 'Chattez avec nous' : 'Chat with us';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {hovered && (
        <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          {tooltip}
        </span>
      )}
      <a
        href="https://wa.me/15145550123"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-pulse flex items-center justify-center"
        aria-label={tooltip}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
