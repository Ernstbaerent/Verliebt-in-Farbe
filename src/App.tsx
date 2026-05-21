/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, ArrowRight, Instagram, Mail, MapPin, X, ChevronLeft, ChevronRight, Moon, Sun, Menu } from 'lucide-react';

import heroImg from './assets/images/Ani1.jpeg';
import ani2 from './assets/images/Ani2.jpeg';
import ani3 from './assets/images/Ani3.jpeg';
import ani4 from './assets/images/Ani4.jpeg';
import vif2 from './assets/images/VIF2.jpeg';
import vif3 from './assets/images/VIF3.jpeg';
import vif4 from './assets/images/VIF4.jpeg';
import vif5 from './assets/images/VIF5.jpeg';
import vif6 from './assets/images/VIF6.jpeg';
import vif7 from './assets/images/VIF7.jpeg';
import vif8 from './assets/images/VIF8.jpeg';
import vif9 from './assets/images/VIF9.jpeg';
import vif10 from './assets/images/VIF10.jpeg';
import vif11 from './assets/images/VIF11.jpeg';
import vif12 from './assets/images/VIF12.jpeg';
import vif13 from './assets/images/VIF13.jpeg';
import vif14 from './assets/images/VIF14.jpeg';
import vif15 from './assets/images/VIF15.jpeg';
import vif16 from './assets/images/VIF16.jpeg';
import vif17 from './assets/images/VIF17.jpeg';
import vif18 from './assets/images/VIF18.jpeg';
import vif19 from './assets/images/VIF19.jpeg';
import vifLogo from './assets/images/vif-logo1.png';

import { LanguageProvider, useLanguage, T } from './i18n';
import ScrollToTop from './ScrollToTop';
import SeoLandingpage from './SeoLandingpage';

function Home() {
  return (
    <>
      <Hero />
      <Atmosphere />
      <GallerySnippet />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-boho-cream text-boho-dark font-sans selection:bg-boho-rose selection:text-boho-dark flex flex-col transition-colors duration-500">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/termin-buchen" element={<Booking />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/:slug" element={<SeoLandingpage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieSettings');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieSettings', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieSettings', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-[999] bg-boho-cream border-t border-boho-dark/10 shadow-2xl p-6"
      role="dialog"
      aria-label="Cookie-Richtlinien Banner"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-light text-boho-dark/80 max-w-3xl">
          <T i18nKey="cookie.text" />
          <Link to="/datenschutz" className="underline hover:text-boho-gold"><T i18nKey="cookie.privacy" /></Link>
          <T i18nKey="cookie.and" />
          <Link to="/impressum" className="underline hover:text-boho-gold"><T i18nKey="cookie.imprint" /></Link>.
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <button 
            onClick={handleReject}
            className="flex-1 md:flex-none px-6 py-3 border border-boho-dark text-boho-dark rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors duration-300 tracking-wide font-medium text-sm whitespace-nowrap"
          >
            <T i18nKey="cookie.reject" />
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-3 border border-boho-dark text-boho-dark rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors duration-300 tracking-wide font-medium text-sm whitespace-nowrap"
          >
            <T i18nKey="cookie.accept" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference) {
      if (storedPreference === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else if (storedPreference === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Adjust based on system preference (prefers-color-scheme)
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const showSun = isHovered ? isDark : !isDark;

  return (
            <button 
          onClick={toggleTheme}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="text-boho-dark hover:text-boho-gold transition-colors duration-300 border border-boho-dark/20 hover:border-boho-gold rounded-full w-8 h-8 flex items-center justify-center relative overflow-hidden"
          aria-label={isDark ? "Lichtmodus einschalten" : "Dunkelmodus einschalten"}
          aria-live="polite"
        >
      <AnimatePresence mode="wait" initial={false}>
        {showSun ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const displayLang = isHovered ? (lang === 'de' ? 'EN' : 'DE') : (lang === 'de' ? 'DE' : 'EN');

  return (
            <button 
      onClick={toggleLang}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="text-boho-dark text-xs font-semibold tracking-wider hover:text-boho-gold transition-colors duration-300 border border-boho-dark/20 hover:border-boho-gold rounded-full w-8 h-8 flex items-center justify-center relative overflow-hidden"
      aria-label={lang === 'de' ? "Switch to English" : "Auf Deutsch wechseln"}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={displayLang}
          initial={{ opacity: 0, y: isHovered ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isHovered ? -10 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {displayLang}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
  <header className="sticky top-0 z-50 bg-boho-cream/90 backdrop-blur-md border-b border-boho-beige">
    <nav className="py-4 px-6 md:px-12" aria-label="Hauptnavigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo & Social */}
        <div className="flex items-center space-x-4 md:space-x-4">
          <Link to="/" className="group" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
              src={vifLogo} 
              alt="Verliebt in Farbe - Fineline Tattoo Studio Logo" 
              width="64" 
              height="64" 
              className="h-14 md:h-16 w-auto object-contain rounded-full shadow-md dark:bg-white p-[2px] group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-700 ease-out opacity-0" 
            />
          </Link>
          <a 
            href="https://www.instagram.com/verliebtinfarbe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-boho-dark hover:text-boho-gold transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-boho-dark/20 hover:border-boho-gold"
            aria-label="Instagram Profil"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <LanguageToggle />
          <DarkModeToggle />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-light text-boho-dark/80">
          <Link to="/" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.home" /></Link>
          <Link to="/about" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.about" /></Link>
          <Link to="/gallery" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.gallery" /></Link>
          <Link to="/blog" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.blog" /></Link>
          <Link to="/kontakt" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.contact" /></Link>
          <Link to="/termin-buchen" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.booking" /></Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-boho-dark hover:text-boho-gold transition-colors"
          aria-label="Menü öffnen/schließen"
        >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
    
            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-boho-cream border border-boho-beige shadow-xl rounded-xl p-6 flex flex-col space-y-6 md:hidden z-50 text-center"
                  role="menu"
                  aria-label="Mobile Navigation"
                >
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.home" /></Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.about" /></Link>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.gallery" /></Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.blog" /></Link>
              <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.contact" /></Link>
              <Link to="/termin-buchen" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.booking" /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </nav>
    </header>
  );
}

function About() {
  const aniImages = [heroImg, ani2, ani3, ani4];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % aniImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [aniImages.length]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        <div className="relative w-full md:w-1/2 md:sticky md:top-32 aspect-[4/5] max-w-md mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-boho-rose/30 rounded-t-full translate-x-4 translate-y-4 -z-10"></div>
          <div className="relative w-full h-full rounded-t-full border-8 border-white shadow-xl shadow-boho-dark/5 overflow-hidden bg-boho-beige/20">
            <AnimatePresence>
              <motion.img 
                key={currentIdx}
                src={aniImages[currentIdx]} 
                alt="Filigrane Fineline Tattoo Kunst von Ani - Verliebt in Farbe" 
                loading="lazy"
                width="400"
                height="500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-t-full"
              />
            </AnimatePresence>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.3] mb-6 text-boho-dark">
            <T i18nKey="about.title.1" /> <br/><span className="italic text-rainbow"><T i18nKey="about.title.2" /></span>
          </h2>
          
          <div className="space-y-6 text-boho-dark/80 font-light leading-relaxed">
            <p>
              <T i18nKey="about.p1" />
            </p>
            <p>
              <T i18nKey="about.p2" />
            </p>
            <p>
              <T i18nKey="about.p3" />
            </p>
            <p className="font-medium text-boho-dark pt-4">
              <T i18nKey="about.p4" />
            </p>
          </div>
          
          <div className="mt-10">
            <Link to="/" className="inline-flex items-center px-8 py-4 bg-boho-dark text-boho-cream rounded-sm hover:bg-boho-gold hover:text-white transition-colors duration-300 tracking-wide font-light group">
              <T i18nKey="about.back" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mini Info-Box unten */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-white/60 border border-boho-beige p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left justify-between shadow-sm">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-boho-dark"><T i18nKey="about.box.title" /></h3>
            <p className="text-boho-dark/70 font-light text-sm md:text-base max-w-lg">
              <T i18nKey="about.box.desc" />
            </p>
          </div>
          <Link to="/termin-buchen" className="whitespace-nowrap px-6 py-3 bg-boho-gold text-[#2d2d2d] rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors tracking-widest text-sm uppercase">
            <T i18nKey="about.box.btn" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden flex items-center bg-boho-beige/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-boho-rose/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-boho-cream to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 rounded-full border border-boho-gold/30 bg-boho-cream text-xs uppercase tracking-widest text-boho-dark/70">
            <Sparkles className="w-3 h-3 text-boho-gold" />
            <span><T i18nKey="hero.badge" /></span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.3] mb-6 text-rainbow">
            <T i18nKey="hero.title.1" /><br /> <span className="italic"><T i18nKey="hero.title.2" /></span>
          </h1>
          <p className="text-lg md:text-xl font-light text-boho-dark/80 mb-10 leading-relaxed">
            <T i18nKey="hero.desc" />
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/termin-buchen" className="px-8 py-4 bg-boho-dark text-boho-cream rounded-sm hover:bg-boho-gold hover:text-[#2d2d2d] transition-colors duration-300 tracking-wide font-light flex items-center group">
              <T i18nKey="hero.btn" />
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/gallery" className="text-sm uppercase tracking-widest text-boho-dark/60 hover:text-boho-dark transition-colors border-b border-transparent hover:border-boho-dark pb-1">
              <T i18nKey="hero.gallery" />
            </Link>
          </div>
        </motion.div>

        {/* Hero Abstract Image / Ani Tattooing visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px] w-full rounded-t-full overflow-hidden shadow-2xl shadow-boho-dark/5 border-[8px] border-boho-cream"
        >
          {/* Hero Image: Ani */}
          <img 
            loading="lazy"
            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            src={heroImg} 
            alt="Ani in ihrem Tattoo Studio Verliebt in Farbe" 
            width="600"
            height="750"
            className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-out opacity-0"
          />
          <div className="absolute inset-0 bg-boho-gold/10 mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}

function Atmosphere() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-boho-gold" />,
      title: <T i18nKey="values.1.title" />,
      description: <T i18nKey="values.1.desc" />
    },
    {
      icon: <Sparkles className="w-6 h-6 text-boho-gold" />,
      title: <T i18nKey="values.2.title" />,
      description: <T i18nKey="values.2.desc" />
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-boho-gold" />,
      title: <T i18nKey="values.3.title" />,
      description: <T i18nKey="values.3.desc" />
    }
  ];

  return (
    <section className="py-24 bg-boho-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4"><T i18nKey="values.main.title" /></h2>
          <p className="text-boho-dark/70 font-light">
            <T i18nKey="values.main.desc" />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-8 bg-white/50 border border-boho-beige rounded-2xl hover:bg-white transition-colors shadow-sm shadow-boho-beige/50"
            >
              <div className="w-14 h-14 rounded-full bg-boho-rose/30 flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{val.title}</h3>
              <p className="text-sm font-light text-boho-dark/70 leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySnippet() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Echte Bilder aus dem Upload
  const images = [
    { src: vif2, alt: "Handgelenk-Tattoo mit fein gestochenen floralen Elementen und zarten Blättern" },
    { src: vif3, alt: "Großflächiges, detailreiches Mandala-Tattoo auf dem Oberschenkel mit geometrischen Mustern" },
    { src: vif4, alt: "Kleines, minimalistisches Fineline-Tattoo eines Halbmondes mit Sternen" },
    { src: vif5, alt: "Elegantes Schriftzug-Tattoo in feiner Schreibschrift auf dem Unterarm" },
    { src: vif6, alt: "Zartes Wildblumen-Bouquet Fineline-Tattoo auf der Schulter" },
    { src: vif7, alt: "Ornamentales Mandala-Tattoo mit Lotusblüten-Details auf dem Rücken" },
    { src: vif8, alt: "Feines Linien-Tattoo zweier sich berührender Hände im minimalistischen Stil" },
    { src: vif9, alt: "Symmetrisches, florales Mandala-Motiv auf dem Unterarm" },
    { src: vif10, alt: "Minimalistisches Tierportrait im Fineline-Stil" },
    { src: vif11, alt: "Zierliches Knöchel-Tattoo mit kleinen Ranken und Punkten" },
    { src: vif12, alt: "Fein schattiertes Rosen-Tattoo mit detaillierten Blättern" },
    { src: vif13, alt: "Abstraktes, fließendes Fineline-Tattoo auf dem Rippenbogen" },
    { src: vif14, alt: "Zartes Schmetterling-Tattoo mit dünnen Linien und Dotwork" },
    { src: vif15, alt: "Kombination aus ornamentalem Mandala und feiner Linienführung" },
    { src: vif16, alt: "Filigranes Ast-Tattoo mit feinen Details" },
    { src: vif17, alt: "Kleines Symbol-Tattoo im zarten Dotwork-Stil" },
    { src: vif18, alt: "Verspieltes Mandala-Design mit feinen Schmuck-Details" },
    { src: vif19, alt: "Detailverliebte Fineline-Blüten auf heller Haut" },
  ];

  // Für den nahtlosen Marquee-Effekt verdoppeln wir die Bilder
  const marqueeImages = [...images, ...images];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((selectedIdx + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <section className="py-24 bg-boho-rose/20 rounded-t-[3rem] lg:rounded-t-[5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl mb-4 flex items-center gap-3">
              <Instagram className="w-8 h-8 text-boho-dark" />
              <T i18nKey="works.title" />
            </h2>
            <p className="text-boho-dark/70 font-light">
              <T i18nKey="works.desc" /><a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-boho-gold transition-colors">@verliebtinfarbe</a>.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/verliebtinfarbe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-boho-dark hover:text-boho-gold transition-colors mt-6 md:mt-0 pb-1 border-b border-boho-dark/20 hover:border-boho-gold"
          >
            <T i18nKey="works.follow" /> <ArrowRight className="w-3 h-3 ml-2" />
          </a>
        </div>
      </div>
      
      {/* Smooth Marquee Galerie */}
      {/* Die Container stellen sicher, dass alle Bilder dieselbe Größe/Hintergrund ("den selben Hintergrund") haben */}
      <div className="relative w-full flex overflow-hidden py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {marqueeImages.map((img, idx) => (
            <button 
              key={idx}
              className="w-[260px] md:w-[320px] aspect-[4/5] mx-4 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-md shadow-boho-dark/5 p-3 flex-shrink-0 relative group cursor-pointer text-left"
              onClick={() => setSelectedIdx(idx % images.length)}
              aria-label={`Bild öffnen: ${img.alt}`}
            >
              {/* Innerer Rahmen, um jedem Bild denselben Hintergrund zu geben (z.B. object-contain für Freisteller) */}
              <div className="w-full h-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 relative bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center">
                <img 
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                  src={img.src} 
                  alt={img.alt}
                  aria-label={img.alt}
                  width="320"
                  height="400"
                  /* object-cover nutzen wir für normale Bilder, falls sie freigestellt sind, hilft object-contain */
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-0"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#2d2d2d] px-4 py-2 text-sm uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm scale-90 group-hover:scale-100 transition-transform"><T i18nKey="works.view" /></span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center md:hidden px-6">
        <a 
          href="https://www.instagram.com/verliebtinfarbe/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-boho-dark text-boho-dark text-sm uppercase tracking-widest rounded-sm bg-transparent hover:bg-boho-dark hover:text-boho-cream transition-colors"
        >
          <Instagram className="w-4 h-4 mr-2" />
          <T i18nKey="works.btn" />
        </a>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/95 backdrop-blur-md p-4"
            onClick={() => setSelectedIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Bildergalerie Lightbox"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white hover:text-boho-gold transition-colors p-2 z-10"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-12 text-white hover:text-boho-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full z-10 backdrop-blur-sm border border-white/10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>
            
            <div 
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIdx].src} 
                alt={images[selectedIdx].alt} 
                aria-label={images[selectedIdx].alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-white/50 text-sm font-light tracking-widest">
                {selectedIdx + 1} / {images.length}
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx + 1) % images.length);
              }}
              className="absolute right-4 md:right-12 text-white hover:text-boho-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full z-10 backdrop-blur-sm border border-white/10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Echte Bilder aus dem Upload
  const images = [
    { src: vif2, alt: "Handgelenk-Tattoo mit fein gestochenen floralen Elementen und zarten Blättern" },
    { src: vif3, alt: "Großflächiges, detailreiches Mandala-Tattoo auf dem Oberschenkel mit geometrischen Mustern" },
    { src: vif4, alt: "Kleines, minimalistisches Fineline-Tattoo eines Halbmondes mit Sternen" },
    { src: vif5, alt: "Elegantes Schriftzug-Tattoo in feiner Schreibschrift auf dem Unterarm" },
    { src: vif6, alt: "Zartes Wildblumen-Bouquet Fineline-Tattoo auf der Schulter" },
    { src: vif7, alt: "Ornamentales Mandala-Tattoo mit Lotusblüten-Details auf dem Rücken" },
    { src: vif8, alt: "Feines Linien-Tattoo zweier sich berührender Hände im minimalistischen Stil" },
    { src: vif9, alt: "Symmetrisches, florales Mandala-Motiv auf dem Unterarm" },
    { src: vif10, alt: "Minimalistisches Tierportrait im Fineline-Stil" },
    { src: vif11, alt: "Zierliches Knöchel-Tattoo mit kleinen Ranken und Punkten" },
    { src: vif12, alt: "Fein schattiertes Rosen-Tattoo mit detaillierten Blättern" },
    { src: vif13, alt: "Abstraktes, fließendes Fineline-Tattoo auf dem Rippenbogen" },
    { src: vif14, alt: "Zartes Schmetterling-Tattoo mit dünnen Linien und Dotwork" },
    { src: vif15, alt: "Kombination aus ornamentalem Mandala und feiner Linienführung" },
    { src: vif16, alt: "Filigranes Ast-Tattoo mit feinen Details" },
    { src: vif17, alt: "Kleines Symbol-Tattoo im zarten Dotwork-Stil" },
    { src: vif18, alt: "Verspieltes Mandala-Design mit feinen Schmuck-Details" },
    { src: vif19, alt: "Detailverliebte Fineline-Blüten auf heller Haut" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((selectedIdx + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, images.length]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 bg-boho-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-[1.3] mb-6 text-boho-dark">
            <T i18nKey="gallery.title.1" /><span className="italic text-rainbow"><T i18nKey="gallery.title.2" /></span><T i18nKey="gallery.title.dot" />
          </h2>
          <p className="text-boho-dark/70 font-light max-w-lg mx-auto mb-8">
            <T i18nKey="gallery.desc" />
          </p>
          <a
            href="https://www.instagram.com/verliebtinfarbe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-boho-dark text-boho-cream px-6 py-3 rounded-full hover:bg-boho-gold hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-medium">Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.button 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-boho-beige dark:bg-zinc-800 shadow-sm cursor-pointer group text-left"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`Bild öffnen: ${img.alt}`}
            >
              <img 
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                src={img.src} 
                alt={img.alt}
                aria-label={img.alt}
                width="400"
                height="500"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-0"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-[#2d2d2d] px-4 py-2 text-sm uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm scale-90 group-hover:scale-100 transition-transform"><T i18nKey="works.view" /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/95 backdrop-blur-md p-4"
            onClick={() => setSelectedIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Bildergalerie Lightbox"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white hover:text-boho-gold transition-colors p-2 z-10"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-12 text-white hover:text-boho-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full z-10 backdrop-blur-sm border border-white/10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>
            
            <div 
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIdx].src} 
                alt={images[selectedIdx].alt} 
                aria-label={images[selectedIdx].alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-white/50 text-sm font-light tracking-widest">
                {selectedIdx + 1} / {images.length}
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx + 1) % images.length);
              }}
              className="absolute right-4 md:right-12 text-white hover:text-boho-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full z-10 backdrop-blur-sm border border-white/10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function Datenschutz() {
  // Always scroll to top when page is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading2 = "font-serif text-2xl md:text-3xl text-boho-dark mt-12 mb-6";
  const heading3 = "font-serif text-xl md:text-2xl text-boho-dark mt-8 mb-4";
  const heading4 = "font-semibold text-lg text-boho-dark mt-6 mb-3";
  const paragraph = "font-light text-boho-dark/80 leading-relaxed mb-4";

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 bg-boho-cream min-h-screen transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl mb-12 text-boho-dark">
          Datenschutzerklärung
        </h1>
        <div className="text-lg">
          <h2 className={heading2}>1. Datenschutz auf einen Blick</h2>
          <h3 className={heading3}>Allgemeine Hinweise</h3>
          <p className={paragraph}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
          
          <h3 className={heading3}>Datenerfassung auf dieser Website</h3>
          <h4 className={heading4}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className={paragraph}>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
          
          <h4 className={heading4}>Wie erfassen wir Ihre Daten?</h4>
          <p className={paragraph}>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.  Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
          <p className={paragraph}>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
          
          <h4 className={heading4}>Wofür nutzen wir Ihre Daten?</h4>
          <p className={paragraph}>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
          
          <h4 className={heading4}>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className={paragraph}>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
          <p className={paragraph}>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
          
          <h3 className={heading3}>Analyse-Tools und Tools von Drittanbietern</h3>
          <p className={paragraph}>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
          <p className={paragraph}>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>

          <h2 className={heading2}>2. Hosting</h2>
          <p className={paragraph}>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3 className={heading3}>Externes Hosting</h3>
          <p className={paragraph}>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).  Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar. Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
          <p className={paragraph}>Wir setzen folgende(n) Hoster ein: Google Cloud/ Firebase</p>
          <h3 className={heading3}>Auftragsverarbeitung</h3>
          <p className={paragraph}>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>

          <h2 className={heading2}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className={heading3}>Datenschutz</h3>
          <p className={paragraph}>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
          
          <h3 className={heading3}>Hinweis zur verantwortlichen Stelle</h3>
          <p className={paragraph}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
            Anika Daßler<br/>
            Friedhofstraße 7<br/>
            07987 Mohlsdorf-Teichwolfrahmsdorf<br/>
            Telefon: [Telefonnummer der verantwortlichen Stelle]<br/>
            E-Mail: ani@verliebtinfarbe.de
          </p>
          <p className={paragraph}>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
          
          <h3 className={heading3}>Speicherdauer</h3>
          <p className={paragraph}>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
          
          <h3 className={heading3}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
          <p className={paragraph}>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
          
          <h3 className={heading3}>Empfänger von personenbezogenen Daten</h3>
          <p className={paragraph}>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
          
          <h3 className={heading3}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className={paragraph}>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          
          <h3 className={heading3}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
          <p className={`${paragraph} uppercase`}>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</p>
          <p className={`${paragraph} uppercase`}>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</p>
          
          <h3 className={heading3}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className={paragraph}>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

          <h3 className={heading3}>Recht auf Datenübertragbarkeit</h3>
          <p className={paragraph}>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

          <h3 className={heading3}>Auskunft, Berichtigung und Löschung</h3>
          <p className={paragraph}>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

          <h3 className={heading3}>Recht auf Einschränkung der Verarbeitung</h3>
          <p className={paragraph}>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-boho-dark/80 font-light leading-relaxed">
            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
            <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          </ul>
          <p className={paragraph}>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>

          <h3 className={heading3}>SSL- bzw. TLS-Verschlüsselung</h3>
          <p className={paragraph}>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

          <h3 className={heading3}>Widerspruch gegen Werbe-E-Mails</h3>
          <p className={paragraph}>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

          <h2 className={heading2}>4. Datenerfassung auf dieser Website</h2>
          <h3 className={heading3}>Cookies</h3>
          <p className={paragraph}>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt. Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen). Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden. Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen und das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies dieser Datenschutzerklärung entnehmen.</p>
          
          <h3 className={heading3}>Kontaktformular</h3>
          <p className={paragraph}>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.</p>

          <h3 className={heading3}>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className={paragraph}>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar. Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.</p>

          <h2 className={heading2}>5. Soziale Medien</h2>
          <h3 className={heading3}>Instagram</h3>
          <p className={paragraph}>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie. Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten. Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: https://www.facebook.com/legal/controller_addendum. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: https://www.facebook.com/legal/EU_data_transfer_addendum, https://privacycenter.instagram.com/policy/ und https://de-de.facebook.com/help/566994660333381. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: https://privacycenter.instagram.com/policy/. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/participant/4452.</p>
          
          <h3 className={heading3}>Pinterest</h3>
          <p className={paragraph}>Auf dieser Website verwenden wir Elemente des sozialen Netzwerkes Pinterest, das von der Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Irland betrieben wird. Wenn Sie eine Seite aufrufen, die ein solches Element enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest her. Dieses Social-Media-Element übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest-Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest sowie Cookies. Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen von Pinterest: https://policy.pinterest.com/de/privacy-policy. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/participant/4203.</p>

          <h2 className={heading2}>6. Plugins und Tools</h2>
          <h3 className={heading3}>Google Maps</h3>
          <p className={paragraph}>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf unserer Website einbinden. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: https://privacy.google.com/businesses/gdprcontrollerterms/ und https://privacy.google.com/businesses/gdprcontrollerterms/sccs/. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/participant/5780.</p>

          <h2 className={heading2}>7. Eigene Dienste</h2>
          <h3 className={heading3}>Google Drive</h3>
          <p className={paragraph}>Wir haben Google Drive auf dieser Website eingebunden. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google Drive ermöglicht es uns, einen Uploadbereich auf unserer Website einzubinden, in dem Sie Inhalte hochladen können. Wenn Sie Inhalte hochladen, werden diese auf den Servern von Google Drive gespeichert. Wenn Sie unsere Website betreten, wird außerdem eine Verbindung zu Google Drive aufgebaut, sodass Google Drive feststellen kann, dass Sie unsere Website besucht haben. Die Verwendung von Google Drive erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einem zuverlässigen Uploadbereich auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/participant/5780.</p>
          
          <h3 className={heading3}>Auftragsverarbeitung</h3>
          <p className={paragraph}>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>

          <p className={`${paragraph} mt-10`}>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-boho-gold transition-colors">https://www.e-recht24.de</a></p>
        </div>
      </div>
    </motion.section>
  );
}

function Impressum() {
  // Always scroll to top when page is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading2 = "font-serif text-2xl md:text-3xl text-boho-dark mt-12 mb-6";
  const paragraph = "font-light text-boho-dark/80 leading-relaxed mb-4";

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 bg-boho-cream min-h-screen transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl mb-12 text-boho-dark">
          Impressum
        </h1>
        <div className="text-lg">
          <h2 className={heading2}>Angaben gemäß § 5 TMG</h2>
          <p className={paragraph}>
            Anika Daßler<br />
            Verliebt in Farbe<br />
            Friedhofstraße 7<br />
            07987 Mohlsdorf-Teichwolframsdorf
          </p>

          <h2 className={heading2}>Kontakt</h2>
          <p className={paragraph}>
            Telefon: [TRAGE HIER ANIS TELEFONNUMMER EIN]<br />
            E-Mail: ani@verliebtinfarbe.de
          </p>

          <h2 className={heading2}>Redaktionell verantwortlich</h2>
          <p className={paragraph}>
            Anika Daßler<br />
            Friedhofstraße 7<br />
            07987 Mohlsdorf-Teichwolframsdorf
          </p>

          <h2 className={heading2}>EU-Streitschlichtung</h2>
          <p className={paragraph}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline hover:text-boho-gold transition-colors">https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className={heading2}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p className={paragraph}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Placeholder Formspree Endpoint, replace with real ID
      const response = await fetch('https://formspree.io/f/xredpvol', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        setIsSuccessModalOpen(true);
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 min-h-[70vh] bg-boho-cream transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-boho-dark">
            <T i18nKey="contact.title" />
          </h2>
          <p className="text-boho-dark/70 font-light text-lg">
            <T i18nKey="contact.desc" />
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-boho-dark/80 mb-2 uppercase tracking-widest"><T i18nKey="contact.name" /></label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required 
                className="w-full bg-boho-cream border border-boho-dark/10 rounded-sm px-4 py-3 text-boho-dark focus:border-boho-sage transition-colors duration-300"
                aria-label="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light text-boho-dark/80 mb-2 uppercase tracking-widest"><T i18nKey="contact.email" /></label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required 
                className="w-full bg-boho-cream border border-boho-dark/10 rounded-sm px-4 py-3 text-boho-dark focus:border-boho-sage transition-colors duration-300"
                aria-label="Email"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-light text-boho-dark/80 mb-2 uppercase tracking-widest"><T i18nKey="contact.message" /></label>
            <textarea 
              id="message" 
              name="message"
              required 
              rows={5}
              className="w-full bg-boho-cream border border-boho-dark/10 rounded-sm px-4 py-3 text-boho-dark focus:border-boho-sage transition-colors duration-300 resize-y"
              aria-label="Nachricht"
            ></textarea>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="flex items-center h-5 mt-1">
              <input 
                id="privacy" 
                type="checkbox" 
                required
                className="w-4 h-4 rounded-sm border-boho-dark/20 text-boho-sage focus:ring-boho-sage bg-boho-cream cursor-pointer"
                aria-label="Datenschutzerklärung zustimmen"
              />
            </div>
            <label htmlFor="privacy" className="text-sm font-light text-boho-dark/70 leading-relaxed cursor-pointer">
              <T i18nKey="contact.privacy" />
              <Link to="/datenschutz" className="underline hover:text-boho-gold transition-colors"><T i18nKey="contact.privacyLink" /></Link>
              <T i18nKey="contact.privacyEnd" />
            </label>
          </div>
          
          <div className="pt-6 text-center flex flex-col items-center">
            {status === 'error' && (
              <div className="mb-4 text-red-500 font-medium bg-red-500/10 px-6 py-3 rounded-sm">
                Es gab einen Fehler beim Senden. Bitte versuche es später noch einmal.
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center px-10 py-4 bg-boho-sage text-boho-dark rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors duration-300 tracking-widest font-medium uppercase text-sm group w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Wird gesendet...' : <T i18nKey="contact.submit" />}
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-boho-dark/40 backdrop-blur-md"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-boho-cream w-full max-w-lg rounded-2xl p-8 md:p-12 relative shadow-2xl text-center border border-boho-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsSuccessModalOpen(false)}
                className="absolute top-6 right-6 text-boho-dark/50 hover:text-boho-dark transition-colors p-2"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-20 h-20 bg-boho-sage/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-boho-sage">
                <Heart className="w-8 h-8 text-boho-sage" />
              </div>
              
              <h3 className="font-serif text-3xl md:text-3xl lg:text-4xl text-boho-dark mb-4 leading-tight">
                <T i18nKey="contact.success.title" />
              </h3>
              
              <p className="text-boho-dark/70 font-light text-lg mb-10 leading-relaxed">
                <T i18nKey="contact.success.desc" />
              </p>
              
              <button 
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-boho-dark text-boho-cream rounded-sm hover:bg-boho-gold hover:text-boho-dark transition-colors duration-300 tracking-widest font-medium uppercase text-sm"
              >
                <T i18nKey="contact.success.close" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="bg-boho-dark text-boho-cream py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-b border-boho-cream/20 pb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.3] mb-6"><T i18nKey="footer.title.1" /> <br/><span className="text-rainbow italic"><T i18nKey="footer.title.2" /></span> <T i18nKey="footer.title.3" /></h2>
            <p className="font-light text-boho-cream/70 max-w-md mb-8">
              <T i18nKey="footer.desc" />
            </p>
            <Link to="/termin-buchen" className="px-8 py-4 bg-boho-gold text-[#2d2d2d] rounded-sm hover:bg-boho-cream hover:text-boho-dark transition-colors duration-300 tracking-wide font-medium flex items-center w-fit">
              <T i18nKey="footer.btn" />
            </Link>
          </div>
          
          <div className="flex flex-col md:items-end space-y-6">
            <p className="font-serif text-2xl">Verliebt in Farbe.</p>
            <div className="space-y-4 font-light text-boho-cream/70 text-sm md:text-right">
              <p className="flex items-center md:justify-end gap-3">
                <MapPin className="w-4 h-4 text-boho-cream" />
                Friedhofstraße 7, 07987 Mohlsdorf-Teichwolfrahmsdorf
              </p>
              <p className="flex items-center md:justify-end gap-3">
                <Mail className="w-4 h-4 text-boho-cream" />
                ani@verliebtinfarbe.de
              </p>
              <a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 hover:text-boho-cream transition-colors group">
                <Instagram className="w-4 h-4 text-boho-cream group-hover:scale-110 transition-transform" />
                @verliebtinfarbe
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-boho-cream/50 font-light tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} <T i18nKey="footer.rights" /></p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-boho-cream transition-colors"><T i18nKey="footer.imprint" /></Link>
            <Link to="/datenschutz" className="hover:text-boho-cream transition-colors"><T i18nKey="footer.privacy" /></Link>
            <Link to="/kontakt" className="hover:text-boho-cream transition-colors"><T i18nKey="footer.contact" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const blogPosts = [
  {
    id: 1,
    title: 'Die Bedeutung von Fineline Tattoos',
    date: '15. Mai 2024',
    excerpt: 'Warum Fineline Tattoos mehr als nur ein Trend sind und wie sie deine Persönlichkeit sanft unterstreichen...',
    content: 'Fineline Tattoos zeichnen sich durch ihre unglaubliche Zartheit aus. Anders als traditionelle Tattoos verwenden wir hier dünnere Nadeln, was zu einem filigranen und oft sehr eleganten Look führt. \n\nViele meiner Kundinnen wählen diesen Stil, weil er nicht aufdringlich ist und sich wunderschön an die natürlichen Linien des Körpers anpasst...',
    image: vif17
  },
  {
    id: 2,
    title: 'Vorbereitung auf deinen ersten Tattoo-Termin',
    date: '02. Juni 2024',
    excerpt: 'Du hast deinen ersten Termin bei mir? So bereitest du dich perfekt darauf vor und nimmst dir die Aufregung.',
    content: 'Der erste Tattoo-Termin ist immer etwas ganz Besonderes. Die Aufregung ist meist groß, aber keine Sorge: Ich nehme mir viel Zeit für dich. \n\nWichtig ist, dass du gut ausgeschlafen bist und vorher ausreichend gegessen hast. Bring dir gerne einen kleinen Snack mit und vermeide Alkohol oder blutverdünnende Medikamente in den Tagen davor...',
    image: vif18
  },
  {
    id: 3,
    title: 'Pflege danach: So bleibt die Farbe schön',
    date: '20. Juni 2024',
    excerpt: 'Die richtige Pflege in den ersten Wochen entscheidet über das Endergebnis deines Tattoos. Meine besten Tipps.',
    content: 'Dein neues Tattoo ist wie eine kleine Wunde, die gut versorgt werden möchte. Nach dem Termin bekommst du von mir eine spezielle Folie und eine Pflegeanleitung. \n\nIn den ersten Tagen heißt es: Finger weg, nicht kratzen! Zweimal täglich sanft waschen und dünn eincremen reicht völlig aus, damit dein Tattoo perfekt abheilt...',
    image: vif19
  }
];

function Blog() {
  return (
    <div className="py-24 px-6 md:px-12 bg-boho-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            <T i18nKey="nav.blog" />
          </h2>
          <div className="w-16 h-px bg-boho-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-boho-dark/5 overflow-hidden group hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-0"
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm text-boho-dark/50 mb-3 tracking-widest uppercase">{post.date}</p>
                  <h3 className="text-xl font-medium mb-4 group-hover:text-boho-gold transition-colors">{post.title}</h3>
                  <p className="text-boho-dark/70 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm uppercase tracking-widest text-boho-dark group-hover:text-boho-gold transition-colors">
                    Weiterlesen <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="py-24 px-6 md:px-12 bg-boho-cream min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/blog" className="inline-flex items-center text-sm uppercase tracking-widest text-boho-dark/60 hover:text-boho-dark transition-colors mb-8">
            <ChevronLeft className="w-4 h-4 mr-2" /> Zurück zum Blog
          </Link>
          <p className="text-sm text-boho-gold mb-4 tracking-widest uppercase">{post.date}</p>
          <h1 className="text-3xl md:text-5xl font-light mb-8 tracking-wide leading-tight">
            {post.title}
          </h1>
          <img 
            loading="lazy"
            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-[21/9] object-cover rounded-2xl shadow-sm mb-12 transition-opacity duration-1000 ease-out opacity-0"
          />
          <div className="prose prose-lg prose-boho max-w-none text-boho-dark/80 font-light leading-loose whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Booking() {
  return (
    <div className="py-24 px-6 md:px-12 bg-boho-cream min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            <T i18nKey="nav.booking" />
          </h2>
          <div className="w-16 h-px bg-boho-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light text-boho-dark/80 leading-relaxed max-w-2xl mx-auto">
            Dein Weg zum Wunsch-Tattoo. Wähle unten deinen passenden Termin aus. Um den Prozess so einfach wie möglich zu machen, läuft die Terminvergabe direkt über unseren Kalender. Bitte beschreibe dein Motiv direkt bei der Buchung. Deine Referenzbilder kannst du uns danach ganz bequem schicken, indem du einfach auf die automatische Terminbestätigung in deinem E-Mail-Postfach antwortest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-4xl mx-auto h-[750px] rounded-xl shadow-md overflow-hidden bg-white"
        >
          <iframe 
            src="https://calendar.app.google/XFroCF3YMjrh5LRd7"
            className="w-full h-full border-0"
            title="Terminbuchung"
          />
        </motion.div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="font-serif text-8xl md:text-9xl text-boho-dark mb-6 opacity-90"><T i18nKey="notfound.title" /></h1>
      <p className="text-lg md:text-xl font-light text-boho-dark/80 max-w-lg mb-10 leading-relaxed">
        <T i18nKey="notfound.desc" />
      </p>
      <Link to="/" className="px-8 py-4 bg-boho-dark text-boho-cream rounded-sm hover:bg-boho-gold hover:text-[#2d2d2d] transition-colors duration-300 tracking-wide font-light flex items-center justify-center group">
        <T i18nKey="notfound.btn" />
      </Link>
    </div>
  );
}
