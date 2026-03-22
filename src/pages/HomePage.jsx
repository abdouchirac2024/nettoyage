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
      {/* ========== HERO SECTION (Premium Update) ========== */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-600/20 blur-[120px] animate-float" />
          <div className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] rounded-full bg-green-500/10 blur-[100px] animate-float stagger-2" />
          <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-primary-400/10 blur-[80px] animate-float stagger-4" />

          {/* Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" className="animate-grid" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-6 animate-fade-in-up stagger-1 backdrop-blur-md">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'fr' ? 'ÉclatNet Pro - Excellence & Passion' : 'ÉclatNet Pro - Excellence & Passion'}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 animate-fade-in-up stagger-2">
                {t.hero.title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-3">
                    {word}
                  </span>
                ))}
              </h1>

              <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed animate-fade-in-up stagger-3">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-5 animate-fade-in-up stagger-4">
                <Link to="/devis" className="btn-primary group">
                  {lang === 'fr' ? 'Obtenir un devis gratuit' : 'Get a Free Quote'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  {lang === 'fr' ? 'Nos services' : 'Our Services'}
                </Link>
              </div>
            </div>

            {/* Right side - Abstract Visual */}
            <div className="relative hidden lg:block animate-fade-in-up stagger-5">
              <div className="relative z-10 rounded-3xl overflow-hidden glass aspect-square flex items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Sparkles className="w-48 h-48 text-primary-400/20 group-hover:scale-110 transition-transform duration-1000" />

                {/* Floatings items */}
                <div className="absolute top-10 right-10 p-4 glass rounded-2xl animate-float">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute bottom-10 left-10 p-4 glass rounded-2xl animate-float stagger-3">
                  <CheckCircle className="w-8 h-8 text-primary-400" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-green-500/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>

          {/* Trust bar (Glass Style) */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up stagger-5">
            {[
              { icon: Users, label: t.hero.stats.clients, color: 'text-primary-400' },
              { icon: Shield, label: t.hero.stats.certified, color: 'text-green-400' },
              { icon: Clock, label: t.hero.stats.available, color: 'text-primary-300' }
            ].map((stat, i) => (
              <div key={i} className="glass flex items-center gap-5 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <span className="text-white font-semibold text-lg">{stat.label}</span>
              </div>
            ))}
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.whyUs.reasons.map((reason, index) => {
              const IconComponent = whyUsIcons[index];
              return (
                <div
                  key={index}
                  ref={whyUsRefs[index]}
                  className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 border border-slate-100 ${whyUsVisibles[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-primary-50 text-primary-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
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
                      className={`w-5 h-5 ${i < current.rating
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial
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
