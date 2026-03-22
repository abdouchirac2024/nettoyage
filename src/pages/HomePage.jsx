import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  Leaf,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import services from '../data/services';
import testimonials from '../data/testimonials';

const whyUsIcons = [Shield, Leaf, Clock, Users];

function HomePage() {
  const { lang, t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [whyUsRef1, whyUsVisible1] = useScrollAnimation();
  const [whyUsRef2, whyUsVisible2] = useScrollAnimation();
  const [whyUsRef3, whyUsVisible3] = useScrollAnimation();
  const [whyUsRef4, whyUsVisible4] = useScrollAnimation();
  const whyUsRefs = [whyUsRef1, whyUsRef2, whyUsRef3, whyUsRef4];
  const whyUsVisibles = [whyUsVisible1, whyUsVisible2, whyUsVisible3, whyUsVisible4];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/devis"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {lang === 'fr' ? 'Obtenir un devis gratuit' : 'Get a Free Quote'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors duration-300"
                >
                  {lang === 'fr' ? 'Nos services' : 'Our Services'}
                </Link>
              </div>
            </div>

            {/* Right side - placeholder image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden bg-primary-700/50 aspect-[4/3] flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-white/30" />
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-white font-medium">
                {t.hero.stats.clients}
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-white font-medium">
                {t.hero.stats.certified}
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-white font-medium">
                {t.hero.stats.available}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES PREVIEW ========== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
            >
              {lang === 'fr'
                ? 'Voir tous nos services'
                : 'View all services'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.whyUs.title} />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyUs.reasons.map((reason, index) => {
              const IconComponent = whyUsIcons[index];
              return (
                <div
                  key={index}
                  ref={whyUsRefs[index]}
                  className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-500 ${
                    whyUsVisibles[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-fit mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS CAROUSEL ========== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md">
              {/* Quote */}
              <div className="text-center">
                {/* Avatar */}
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-md"
                />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  "{lang === 'fr' ? current.textFr : current.textEn}"
                </blockquote>

                {/* Name & role */}
                <p className="font-display font-bold text-primary-800">
                  {current.name}
                </p>
                <p className="text-gray-500 text-sm">{current.role}</p>
              </div>

              {/* Prev/Next buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-primary-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-primary-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-green-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== QUICK CONTACT CTA ========== */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {lang === 'fr'
              ? 'Pr\u00eat \u00e0 transformer vos espaces ?'
              : 'Ready to transform your spaces?'}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Obtenez une soumission gratuite en quelques minutes et d\u00e9couvrez comment \u00c9clatNet Pro peut faire briller vos espaces.'
              : 'Get a free quote in minutes and discover how \u00c9clatNet Pro can make your spaces shine.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            >
              <CheckCircle className="w-5 h-5" />
              {lang === 'fr' ? 'Demander un devis' : 'Request a Quote'}
            </Link>
            <a
              href="tel:+15145550199"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              {lang === 'fr' ? 'Appelez-nous' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
