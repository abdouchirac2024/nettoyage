import { useLanguage } from '../hooks/useLanguage';
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Send, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';
import services from '../data/services';

function QuotePage() {
  const { lang, t } = useLanguage();
  const isFr = lang === 'fr';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    frequency: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      isFr
        ? 'Merci! Votre demande de soumission a été envoyée. Nous vous contacterons sous 24h.'
        : 'Thank you! Your quote request has been sent. We will contact you within 24 hours.'
    );
  };

  const pricingPlans = [
    {
      name: isFr ? 'Essentiel' : 'Essential',
      price: isFr ? '150$ - 300$' : '$150 - $300',
      period: isFr ? '/ intervention' : '/ session',
      features: isFr
        ? [
            'Nettoyage de base des surfaces',
            'Aspiration et lavage des planchers',
            'Nettoyage des salles de bain',
            'Dépoussiérage général',
            'Vidage des poubelles',
          ]
        : [
            'Basic surface cleaning',
            'Vacuuming and floor washing',
            'Bathroom cleaning',
            'General dusting',
            'Trash removal',
          ],
      popular: false,
    },
    {
      name: isFr ? 'Professionnel' : 'Professional',
      price: isFr ? '300$ - 600$' : '$300 - $600',
      period: isFr ? '/ intervention' : '/ session',
      features: isFr
        ? [
            'Tout du forfait Essentiel',
            'Désinfection des surfaces',
            'Nettoyage des vitres intérieures',
            'Nettoyage de la cuisine',
            'Produits écologiques certifiés',
            'Rapport d\'intervention',
          ]
        : [
            'Everything in Essential',
            'Surface disinfection',
            'Interior window cleaning',
            'Kitchen cleaning',
            'Certified eco-friendly products',
            'Intervention report',
          ],
      popular: true,
    },
    {
      name: 'Premium',
      price: isFr ? '600$ - 1200$' : '$600 - $1,200',
      period: isFr ? '/ intervention' : '/ session',
      features: isFr
        ? [
            'Tout du forfait Professionnel',
            'Nettoyage en profondeur complet',
            'Traitement et polissage des sols',
            'Nettoyage des tapis et moquettes',
            'Gestionnaire de compte dédié',
            'Service prioritaire 24h/7j',
            'Garantie satisfaction 100%',
          ]
        : [
            'Everything in Professional',
            'Complete deep cleaning',
            'Floor treatment and polishing',
            'Carpet and rug cleaning',
            'Dedicated account manager',
            'Priority 24/7 service',
            '100% satisfaction guarantee',
          ],
      popular: false,
    },
  ];

  const frequencyOptions = isFr
    ? [
        { value: '', label: '-- Sélectionner --' },
        { value: 'once', label: 'Une seule fois' },
        { value: 'weekly', label: 'Hebdomadaire' },
        { value: 'biweekly', label: 'Aux deux semaines' },
        { value: 'monthly', label: 'Mensuel' },
      ]
    : [
        { value: '', label: '-- Select --' },
        { value: 'once', label: 'One-time' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'biweekly', label: 'Bi-weekly' },
        { value: 'monthly', label: 'Monthly' },
      ];

  const trustIndicators = [
    {
      icon: DollarSign,
      title: isFr ? 'Soumission gratuite' : 'Free Quote',
      desc: isFr
        ? 'Estimation détaillée sans aucun engagement ni frais cachés.'
        : 'Detailed estimate with no commitment or hidden fees.',
    },
    {
      icon: Clock,
      title: isFr ? 'Réponse rapide' : 'Fast Response',
      desc: isFr
        ? 'Recevez votre soumission personnalisée en moins de 24 heures.'
        : 'Receive your personalized quote within 24 hours.',
    },
    {
      icon: Shield,
      title: isFr ? 'Satisfaction garantie' : 'Satisfaction Guaranteed',
      desc: isFr
        ? 'Si le résultat ne vous satisfait pas, nous revenons gratuitement.'
        : 'If you are not satisfied, we come back free of charge.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.quote.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            {t.quote.subtitle}
          </p>
          <nav className="text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">
              {isFr ? 'Accueil' : 'Home'}
            </span>
            <span className="mx-2">/</span>
            <span className="text-green-400">
              {isFr ? 'Soumission' : 'Quote'}
            </span>
          </nav>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={isFr ? 'Nos forfaits indicatifs' : 'Our Indicative Packages'}
            subtitle={
              isFr
                ? 'Des tarifs transparents adaptés à vos besoins. Chaque soumission est personnalisée selon votre situation.'
                : 'Transparent pricing tailored to your needs. Every quote is customized to your situation.'
            }
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-2 border-green-500 ring-2 ring-green-100'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {isFr ? 'Populaire' : 'Popular'}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote-form"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                  }`}
                >
                  {t.quote.formSubmit}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.quote.title}
            subtitle={t.quote.subtitle}
          />

          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isFr ? 'Nom complet' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.formName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isFr ? 'Courriel' : 'Email'} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.formEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isFr ? 'Téléphone' : 'Phone'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.formPhone}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.quote.formService} *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors bg-white"
                >
                  <option value="">
                    {isFr ? '-- Sélectionner un service --' : '-- Select a service --'}
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {isFr ? service.titleFr : service.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.quote.formArea}
                </label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder={isFr ? 'Ex: 500' : 'Ex: 500'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.quote.formFrequency}
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors bg-white"
                >
                  {frequencyOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.quote.formDate}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isFr ? 'Heure préférée' : 'Preferred Time'}
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isFr ? 'Message / Détails supplémentaires' : 'Message / Additional Details'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t.contact.formMessage}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                {t.quote.formSubmit}
              </button>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-5 h-5 text-green-500" />
                <span>
                  {isFr
                    ? 'Devis gratuit sous 24h'
                    : 'Free quote within 24h'}
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuotePage;
