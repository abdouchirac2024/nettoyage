import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  UtensilsCrossed,
  Hotel,
  Home,
  Building2,
  Wrench,
  House,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import services from '../data/services';

const iconMap = {
  Store,
  UtensilsCrossed,
  Hotel,
  Home,
  Building2,
  Wrench,
  House,
};

function ServiceSection({ service, index }) {
  const { lang } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();
  const isEven = index % 2 === 0;
  const IconComponent = iconMap[service.icon];

  const title = lang === 'fr' ? service.titleFr : service.titleEn;
  const longDesc = lang === 'fr' ? service.longDescFr : service.longDescEn;

  return (
    <>
      <section
        id={service.id}
        ref={ref}
        className={`py-16 md:py-24 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col ${
              isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={title}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-6">
                {IconComponent && <IconComponent className="w-7 h-7" />}
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-6">
                {title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">{longDesc}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {lang === 'fr' ? feature.fr : feature.en}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Frequency badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.frequency.map((freq, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    <Clock className="w-4 h-4 text-primary-500" />
                    {lang === 'fr' ? freq.fr : freq.en}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/devis"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {lang === 'fr' ? 'Demander un devis' : 'Request a quote'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      {index < services.length - 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>
      )}
    </>
  );
}

function ServicesPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el)
        setTimeout(
          () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          100
        );
    }
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {lang === 'fr' ? 'Nos Services' : 'Our Services'}
          </h1>
          <nav className="flex justify-center items-center gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">
              {lang === 'fr' ? 'Services' : 'Services'}
            </span>
          </nav>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Bottom CTA */}
      <section className="bg-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            {lang === 'fr'
              ? 'Besoin d\u2019un service personnalis\u00e9 ?'
              : 'Need a customized service?'}
          </h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Contactez-nous pour un devis gratuit adapt\u00e9 \u00e0 vos besoins sp\u00e9cifiques.'
              : 'Contact us for a free quote tailored to your specific needs.'}
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            {lang === 'fr' ? 'Demander un devis' : 'Request a quote'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
