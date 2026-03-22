import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import ScrollToTop from './components/ui/ScrollToTop'
import WelcomePopup from './components/ui/WelcomePopup'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import QuotePage from './pages/QuotePage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import FaqPage from './pages/FaqPage'
import CustomCursor from './components/ui/CustomCursor'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/devis" element={<QuotePage />} />
          <Route path="/temoignages" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <WelcomePopup />
    </div>
  )
}

export default App
