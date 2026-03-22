import { Link } from 'react-router-dom';
import {
  Store,
  UtensilsCrossed,
  Hotel,
  Home,
  Building2,
  Wrench,
  House,
  ArrowRight,
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
      className={`group relative bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image with overlay */}
      {service.image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon badge (Premium Style) */}
          <div className="absolute -bottom-6 left-8 bg-primary-600 text-white p-4 rounded-2xl shadow-xl shadow-primary-600/30 group-hover:scale-110 transition-transform duration-500">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`p-8 ${service.image ? 'pt-10' : ''}`}>
        {!service.image && (
          <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
            <IconComponent className="w-7 h-7" />
          </div>
        )}
        <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-sm transition-all group/link"
        >
          <span className="relative">
            {learnMore}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover/link:w-full" />
          </span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
