import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';

function FaqPage() {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.faq.title}
          </h1>
          <nav className="flex justify-center items-center gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.faq.title}
            subtitle={
              lang === 'fr'
                ? 'Trouvez rapidement les réponses à vos questions les plus courantes.'
                : 'Quickly find answers to your most common questions.'
            }
          />
          <div className="mt-12 space-y-0 rounded-2xl overflow-hidden shadow-md">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const isAlt = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={isAlt ? 'bg-gray-50' : 'bg-white'}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-100 transition-colors duration-200"
                  >
                    <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="flex-1 font-semibold text-primary-800">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 pl-15 text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4">
            {lang === 'fr'
              ? 'Vous avez d\'autres questions ?'
              : 'Still have questions?'}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {lang === 'fr'
              ? 'Notre équipe se fera un plaisir de vous répondre. N\'hésitez pas à nous contacter.'
              : 'Our team will be happy to help. Do not hesitate to contact us.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            {lang === 'fr' ? 'Nous contacter' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FaqPage;
