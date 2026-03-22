import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import blogPosts from '../data/blogPosts';

function BlogCard({ post }) {
  const { lang } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();

  const title = lang === 'fr' ? post.titleFr : post.titleEn;
  const excerpt = lang === 'fr' ? post.excerptFr : post.excerptEn;
  const category = lang === 'fr' ? post.categoryFr : post.categoryEn;
  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === 'fr' ? 'fr-CA' : 'en-CA',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div
      ref={ref}
      className={`group rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          <Tag className="w-3.5 h-3.5" />
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-lg font-display font-bold text-primary-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
        >
          {lang === 'fr' ? 'Lire la suite' : 'Read more'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function BlogPage() {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.blog.title}
          </h1>
          <nav className="flex justify-center items-center gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-white">
              {lang === 'fr' ? 'Blogue' : 'Blog'}
            </span>
          </nav>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.blog.title} subtitle={t.blog.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary-800 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {lang === 'fr'
              ? 'Abonnez-vous à notre infolettre'
              : 'Subscribe to our newsletter'}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {lang === 'fr'
              ? 'Recevez nos meilleurs conseils de nettoyage et nos offres exclusives directement dans votre boîte courriel.'
              : 'Receive our best cleaning tips and exclusive offers directly in your inbox.'}
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                lang === 'fr' ? 'Votre adresse courriel' : 'Your email address'
              }
              required
              className="flex-1 px-5 py-3 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              {lang === 'fr' ? "S'abonner" : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
