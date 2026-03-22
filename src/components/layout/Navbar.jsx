import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'pricing', path: '/devis' },
  { key: 'testimonials', path: '/temoignages' },
  { key: 'contact', path: '/contact' },
  { key: 'blog', path: '/blog' },
  { key: 'faq', path: '/faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-white/95 shadow-lg'
          : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary-600 transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold font-display text-primary-600">
              ÉclatNet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>{lang === 'fr' ? 'Obtenir un devis' : 'Get a Quote'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              <span className="text-lg font-bold font-display text-primary-600">
                ÉclatNet
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Panel Links */}
          <div className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-10rem)]">
            {navLinks.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-5 border-t border-gray-100 bg-gray-50 space-y-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-white transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'fr' ? 'English' : 'Français'}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/devis"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold shadow-md hover:bg-primary-700 transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>{lang === 'fr' ? 'Obtenir un devis' : 'Get a Quote'}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
