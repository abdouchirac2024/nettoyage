import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import testimonials from '../data/testimonials';

function TestimonialCard({ testimonial, index }) {
  const { lang } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();
  const isAlt = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-8 shadow-md transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isAlt ? 'bg-primary-50' : 'bg-white'}`}
    >
      <Quote className="w-10 h-10 text-primary-300 mb-4" />
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{lang === 'fr' ? testimonial.textFr : testimonial.textEn}"
      </p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-primary-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

const beforeAfterItems = [
  {
    labelFr: 'Bureau commercial',
    labelEn: 'Commercial Office',
  },
  {
    labelFr: 'Cuisine de restaurant',
    labelEn: 'Restaurant Kitchen',
  },
  {
    labelFr: 'Hall d\'hôtel',
    labelEn: 'Hotel Lobby',
  },
];

function TestimonialsPage() {
  const { lang, t } = useLanguage();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.testimonials.title}
          </h1>
          <nav className="flex justify-center items-center gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">
              {lang === 'fr' ? 'Témoignages' : 'Testimonials'}
            </span>
          </nav>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={lang === 'fr' ? 'Avant / Après' : 'Before / After'}
            subtitle={
              lang === 'fr'
                ? 'Voyez la différence par vous-même. Nos résultats parlent d\'eux-mêmes.'
                : 'See the difference for yourself. Our results speak for themselves.'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {beforeAfterItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <p className="text-center font-semibold text-primary-800 py-3 bg-gray-100">
                  {lang === 'fr' ? item.labelFr : item.labelEn}
                </p>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="h-48 bg-gray-300" />
                    <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {lang === 'fr' ? 'Avant' : 'Before'}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-48 bg-green-100" />
                    <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {lang === 'fr' ? 'Après' : 'After'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            {lang === 'fr'
              ? 'Rejoignez nos clients satisfaits'
              : 'Join our satisfied clients'}
          </h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Demandez votre soumission gratuite dès aujourd\'hui et découvrez la différence ÉclatNet Pro.'
              : 'Request your free quote today and discover the ÉclatNet Pro difference.'}
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            {lang === 'fr' ? 'Demander un devis' : 'Request a quote'}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default TestimonialsPage;
