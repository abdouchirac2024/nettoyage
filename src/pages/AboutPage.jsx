import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import {
  Target,
  Eye,
  Heart,
  Award,
  Shield,
  Leaf,
  Users,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

function AboutPage() {
  const { lang, t } = useLanguage();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();

  const teamMembers = [
    {
      name: 'Marie Dubois',
      role: lang === 'fr' ? 'Fondatrice et PDG' : 'Founder & CEO',
      photo: 'https://i.pravatar.cc/300?img=49',
      bio:
        lang === 'fr'
          ? "Passionnée par l'excellence et l'innovation, Marie a fondé ÉclatNet Pro avec la vision de transformer l'industrie du nettoyage au Canada."
          : 'Passionate about excellence and innovation, Marie founded ÉclatNet Pro with a vision to transform the cleaning industry in Canada.',
    },
    {
      name: 'Jean-Pierre Martin',
      role:
        lang === 'fr'
          ? 'Directeur des opérations'
          : 'Operations Director',
      photo: 'https://i.pravatar.cc/300?img=12',
      bio:
        lang === 'fr'
          ? "Fort de 15 ans d'expérience en gestion opérationnelle, Jean-Pierre assure l'efficacité et la qualité de chaque intervention."
          : 'With 15 years of operational management experience, Jean-Pierre ensures the efficiency and quality of every service.',
    },
    {
      name: 'Sophie Chen',
      role:
        lang === 'fr' ? 'Responsable qualité' : 'Quality Manager',
      photo: 'https://i.pravatar.cc/300?img=45',
      bio:
        lang === 'fr'
          ? "Sophie veille au respect des normes les plus strictes et à l'amélioration continue de nos processus de nettoyage."
          : 'Sophie ensures compliance with the strictest standards and continuously improves our cleaning processes.',
    },
    {
      name: 'Ahmed Hassan',
      role: lang === 'fr' ? "Chef d'équipe senior" : 'Senior Team Leader',
      photo: 'https://i.pravatar.cc/300?img=68',
      bio:
        lang === 'fr'
          ? "Ahmed dirige nos équipes terrain avec dévouement et professionnalisme, garantissant la satisfaction de chaque client."
          : 'Ahmed leads our field teams with dedication and professionalism, ensuring every client is satisfied.',
    },
  ];

  const ecoPoints =
    lang === 'fr'
      ? [
          'Produits biodégradables certifiés EcoLogo',
          "Réduction de 40 % de la consommation d'eau",
          'Utilisation de matériaux recyclés et recyclables',
          'Objectif carboneutre d\u2019ici 2027',
        ]
      : [
          'EcoLogo-certified biodegradable products',
          '40% reduction in water consumption',
          'Use of recycled and recyclable materials',
          'Carbon neutral goal by 2027',
        ];

  const certifications = [
    {
      icon: Award,
      title: 'Certifié ISO 9001',
      desc:
        lang === 'fr'
          ? 'Système de gestion de la qualité certifié'
          : 'Certified quality management system',
    },
    {
      icon: Shield,
      title: lang === 'fr' ? 'Membre ISSA' : 'ISSA Member',
      desc:
        lang === 'fr'
          ? "Association internationale de l'industrie du nettoyage"
          : 'International cleaning industry association',
    },
    {
      icon: Leaf,
      title: lang === 'fr' ? 'Produits Écologo' : 'EcoLogo Products',
      desc:
        lang === 'fr'
          ? 'Produits certifiés respectueux de l\u2019environnement'
          : 'Certified environmentally friendly products',
    },
    {
      icon: Shield,
      title: lang === 'fr' ? 'Assuré & Cautionné' : 'Insured & Bonded',
      desc:
        lang === 'fr'
          ? 'Protection complète pour votre tranquillité'
          : 'Full protection for your peace of mind',
    },
  ];

  const stats = [
    {
      value: '500+',
      label: lang === 'fr' ? 'Clients satisfaits' : 'Satisfied Clients',
    },
    {
      value: '8+',
      label:
        lang === 'fr' ? "Années d'expérience" : 'Years of Experience',
    },
    {
      value: '50+',
      label: lang === 'fr' ? 'Employés dévoués' : 'Dedicated Employees',
    },
    {
      value: '99%',
      label:
        lang === 'fr' ? 'Taux de satisfaction' : 'Satisfaction Rate',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.about.title}
          </h1>
          <nav className="text-primary-200 text-sm">
            <span className="hover:text-white cursor-pointer">
              {t.nav.home}
            </span>
            <span className="mx-2">/</span>
            <span className="text-white">{t.nav.about}</span>
          </nav>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={lang === 'fr' ? 'Notre histoire' : 'Our Story'}
            subtitle={
              lang === 'fr'
                ? "Découvrez le parcours d'ÉclatNet Pro depuis sa fondation"
                : 'Discover the journey of ÉclatNet Pro since its founding'
            }
          />
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image placeholder */}
            <div className="bg-primary-100 rounded-2xl h-96 flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-primary-400" />
            </div>

            {/* Right: Story text */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.about.history}
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-primary-800 font-semibold text-lg mb-1">
                  {lang === 'fr' ? 'Fondée en 2015 à Montréal' : 'Founded in 2015 in Montreal'}
                </p>
                <p className="text-gray-600">
                  {lang === 'fr'
                    ? "Depuis notre fondation, nous avons bâti une réputation d'excellence grâce à notre engagement envers la qualité et notre approche écoresponsable. De Montréal, nous avons étendu nos services à travers tout le Canada."
                    : 'Since our founding, we have built a reputation for excellence through our commitment to quality and our eco-responsible approach. From Montreal, we have expanded our services across Canada.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={
              lang === 'fr'
                ? 'Mission, Vision & Valeurs'
                : 'Mission, Vision & Values'
            }
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div
              ref={missionRef}
              className={`bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-700 ${
                missionVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {lang === 'fr' ? 'Notre mission' : 'Our Mission'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.mission}
              </p>
            </div>

            {/* Vision */}
            <div
              ref={visionRef}
              className={`bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-700 delay-150 ${
                visionVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {lang === 'fr' ? 'Notre vision' : 'Our Vision'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.vision}
              </p>
            </div>

            {/* Values */}
            <div
              ref={valuesRef}
              className={`bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-700 delay-300 ${
                valuesVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {lang === 'fr' ? 'Nos valeurs' : 'Our Values'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.values}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-100 text-sm md:text-base uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={lang === 'fr' ? 'Notre équipe' : 'Our Team'}
            subtitle={
              lang === 'fr'
                ? 'Des professionnels passionnés à votre service'
                : 'Passionate professionals at your service'
            }
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-primary-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-500 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Commitment */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800">
                {t.about.ecoTitle}
              </h2>
            </div>
            <div className="w-20 h-1 bg-green-500 rounded-full mx-auto mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
              {t.about.ecoDesc}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {ecoPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={
              lang === 'fr'
                ? 'Nos certifications'
                : 'Our Certifications'
            }
            subtitle={
              lang === 'fr'
                ? "Des accréditations qui témoignent de notre professionnalisme"
                : 'Accreditations that speak to our professionalism'
            }
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="border-2 border-primary-100 rounded-2xl p-6 text-center hover:border-primary-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-primary-800 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
