import { useLanguage } from '../hooks/useLanguage';
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

function ContactPage() {
  const { lang, t } = useLanguage();
  const isFr = lang === 'fr';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      isFr
        ? 'Merci! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.'
        : 'Thank you! Your message has been sent. We will get back to you as soon as possible.'
    );
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            {isFr
              ? 'Nous sommes à votre écoute. Contactez-nous pour toute question ou demande de service.'
              : 'We are here for you. Contact us for any questions or service requests.'}
          </p>
          <nav className="text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">
              {isFr ? 'Accueil' : 'Home'}
            </span>
            <span className="mx-2">/</span>
            <span className="text-green-400">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Details */}
            <div>
              <SectionTitle
                title={isFr ? 'Nos coordonnées' : 'Our Contact Details'}
                centered={false}
              />

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      {isFr ? 'Adresse' : 'Address'}
                    </h3>
                    <p className="text-gray-600">
                      1234 Rue Principale, Montréal, QC H2X 1K4
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      {isFr ? 'Téléphone' : 'Phone'}
                    </h3>
                    <a
                      href="tel:+15145550123"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      (514) 555-0123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      {isFr ? 'Courriel' : 'Email'}
                    </h3>
                    <a
                      href="mailto:info@eclatnetpro.ca"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      info@eclatnetpro.ca
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      {isFr ? 'Heures d\'ouverture' : 'Business Hours'}
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        {isFr ? 'Lun - Ven : 7h - 19h' : 'Mon - Fri: 7 AM - 7 PM'}
                      </p>
                      <p>
                        {isFr ? 'Sam : 8h - 17h' : 'Sat: 8 AM - 5 PM'}
                      </p>
                      <p>
                        {isFr ? 'Dim : Sur demande' : 'Sun: On request'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/15145550123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {isFr ? 'Écrivez-nous sur WhatsApp' : 'Message us on WhatsApp'}
                    </a>
                  </div>
                </div>
              </div>

              {/* Call Now Button */}
              <div className="mt-8">
                <a
                  href="tel:+15145550123"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  {isFr ? 'Appelez maintenant' : 'Call Now'}
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <SectionTitle
                title={isFr ? 'Envoyez-nous un message' : 'Send Us a Message'}
                centered={false}
              />

              <form
                onSubmit={handleSubmit}
                className="mt-8 bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                {/* Name */}
                <div className="mb-5">
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
                <div className="mb-5">
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
                <div className="mb-5">
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

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t.contact.formMessage}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full">
        <div className="w-full">
          <iframe
            title={isFr ? 'Notre emplacement' : 'Our Location'}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2!2d-73.5673!3d45.5017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzA2LjEiTiA3M8KwMzQnMDIuMyJX!5e0!3m2!1sfr!2sca!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] md:h-[450px]"
          />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
