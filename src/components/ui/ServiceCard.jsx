import { Link } from 'react-router-dom';
import {
  Store,
  UtensilsCrossed,
  Hotel,
  Home,
  Building2,
  Wrench,
  House,
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  Store,
  UtensilsCrossed,
  Hotel,
  Home,
  Building2,
  Wrench,
  House,
};

function ServiceCard({ service, index }) {
  const { lang } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();

  const IconComponent = iconMap[service.icon] || Store;
  const title = lang === 'fr' ? service.titleFr : service.titleEn;
  const description = lang === 'fr' ? service.shortDescFr : service.shortDescEn;
  const learnMore = lang === 'fr' ? 'En savoir plus' : 'Learn more';

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Icon badge */}
          <div className="absolute -bottom-5 left-6 bg-green-600 text-white p-3 rounded-xl shadow-lg">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${service.image ? 'pt-8' : ''}`}>
        {!service.image && (
          <div className="bg-green-100 text-green-600 p-3 rounded-xl w-fit mb-4">
            <IconComponent className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-display font-bold text-primary-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
        >
          {learnMore}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
