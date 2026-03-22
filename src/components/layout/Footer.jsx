import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

function Footer() {
  const { lang, t } = useLanguage();

  const serviceLinks = [
    { id: 'surfaces-commerciales', fr: 'Surfaces Commerciales', en: 'Commercial Surfaces' },
    { id: 'restaurants', fr: 'Restaurants', en: 'Restaurants' },
    { id: 'hotels', fr: 'Hôtels', en: 'Hotels' },
    { id: 'airbnb-location-courte-duree', fr: 'Airbnb / Location Courte Durée', en: 'Airbnb / Short-Term Rentals' },
    { id: 'bureaux-espaces-travail', fr: 'Bureaux & Espaces de Travail', en: 'Offices & Workspaces' },
    { id: 'nettoyage-specialise-commercial', fr: 'Nettoyage Spécialisé', en: 'Specialized Cleaning' },
    { id: 'nettoyage-residentiel', fr: 'Nettoyage Résidentiel', en: 'Residential Cleaning' },
  ];

  const usefulLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/pricing', label: t.nav.pricing },
    { to: '/testimonials', label: t.nav.testimonials },
    { to: '/blog', label: t.nav.blog },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
    { to: '/quote', label: t.nav.quote },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo, slogan, social */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-300" />
              <span className="text-2xl font-display font-bold text-white">
                ÉclatNet
              </span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              {lang === 'fr'
                ? 'La propreté, notre passion. Votre satisfaction, notre priorité.'
                : 'Cleanliness, our passion. Your satisfaction, our priority.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {lang === 'fr' ? service.fr : service.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {lang === 'fr' ? 'Liens Utiles' : 'Useful Links'}
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {lang === 'fr' ? 'Nous joindre' : 'Contact Us'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span className="text-primary-200 text-sm">
                  1234 Rue Principale, Montréal, QC H2X 1K4
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-300 shrink-0" />
                <a
                  href="tel:+15145550123"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  (514) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-300 shrink-0" />
                <a
                  href="mailto:info@eclatnetpro.ca"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
                >
                  info@eclatnetpro.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <span className="text-primary-200 text-sm">
                  {lang === 'fr'
                    ? 'Lun - Ven : 8h à 18h\nUrgences : 24h/7j'
                    : 'Mon - Fri: 8 AM to 6 PM\nEmergencies: 24/7'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-300 text-sm">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-primary-300 hover:text-white transition-colors text-sm"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/terms"
              className="text-primary-300 hover:text-white transition-colors text-sm"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
