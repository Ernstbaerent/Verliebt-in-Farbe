/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-boho-cream text-boho-dark font-sans selection:bg-boho-rose selection:text-boho-dark flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Atmosphere />
                  <GallerySnippet />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
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
    // Check local storage or time of day
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
      // Adjust based on time of day (e.g. dark from 20:00 to 06:00)
      const hour = new Date().getHours();
      if (hour >= 20 || hour < 6) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
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
            <img src={vifLogo} alt="Verliebt in Farbe - Fineline Tattoo Studio Logo" width="64" height="64" className="h-14 md:h-16 w-auto object-contain rounded-full shadow-md dark:bg-white p-[2px] group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-300 ease-out" />
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
          <a href="#" className="hover:text-boho-gold transition-colors"><T i18nKey="nav.booking" /></a>
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
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-boho-dark hover:text-boho-gold transition-colors text-sm uppercase tracking-widest font-light"><T i18nKey="nav.booking" /></a>
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
          <button className="whitespace-nowrap px-6 py-3 bg-boho-gold text-[#2d2d2d] rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors tracking-widest text-sm uppercase">
            <T i18nKey="about.box.btn" />
          </button>
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
            <button className="px-8 py-4 bg-boho-dark text-boho-cream rounded-sm hover:bg-boho-gold hover:text-[#2d2d2d] transition-colors duration-300 tracking-wide font-light flex items-center group">
              <T i18nKey="hero.btn" />
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
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
            src={heroImg} 
            alt="Ani in ihrem Tattoo Studio Verliebt in Farbe" 
            width="600"
            height="750"
            className="w-full h-full object-cover object-center"
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
    { src: vif2, alt: "Filigranes Fineline Tattoo von Ani - Verliebt in Farbe" },
    { src: vif3, alt: "Detailverliebtes Mandala Tattoo - Verliebt in Farbe" },
    { src: vif4, alt: "Zartes Fineline Tattoo " },
    { src: vif5, alt: "Individuelles Tattoo Design " },
    { src: vif6, alt: "Florales Fineline Tattoo " },
    { src: vif7, alt: "Elegantes Mandala Tattoo Design" },
    { src: vif8, alt: "Feines Linien Tattoo Kunstwerk" },
    { src: vif9, alt: "Minimalistisches Tattoo Verliebt in Farbe" },
    { src: vif10, alt: "Fineline Tattoo Studio " },
    { src: vif11, alt: "Sanftes Mandala Tattoo für Frauen" },
    { src: vif12, alt: "Zart gestochenes Wunschmotiv" },
    { src: vif13, alt: "Einzigartiges Fineline Tattoo" },
    { src: vif14, alt: "Tattoo Studio für Frauen " },
    { src: vif15, alt: "Mandala und Fineline Tattoo " },
    { src: vif16, alt: "Filigrane Linienführung " },
    { src: vif17, alt: "Feines Tattoo Motiv" },
    { src: vif18, alt: "Individuelles Mandala Design " },
    { src: vif19, alt: "Zartes Fineline Tattoo Mohlsdorf" },
  ];

  // Für den nahtlosen Marquee-Effekt verdoppeln wir die Bilder
  const marqueeImages = [...images, ...images];

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
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  width="320"
                  height="400"
                  /* object-cover nutzen wir für normale Bilder, falls sie freigestellt sind, hilft object-contain */
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
    { src: vif2, alt: "Filigranes Fineline Tattoo von Ani - Verliebt in Farbe" },
    { src: vif3, alt: "Detailverliebtes Mandala Tattoo - Verliebt in Farbe" },
    { src: vif4, alt: "Zartes Fineline Tattoo " },
    { src: vif5, alt: "Individuelles Tattoo Design " },
    { src: vif6, alt: "Florales Fineline Tattoo " },
    { src: vif7, alt: "Elegantes Mandala Tattoo Design" },
    { src: vif8, alt: "Feines Linien Tattoo Kunstwerk" },
    { src: vif9, alt: "Minimalistisches Tattoo Verliebt in Farbe" },
    { src: vif10, alt: "Fineline Tattoo Studio " },
    { src: vif11, alt: "Sanftes Mandala Tattoo für Frauen" },
    { src: vif12, alt: "Zart gestochenes Wunschmotiv" },
    { src: vif13, alt: "Einzigartiges Fineline Tattoo" },
    { src: vif14, alt: "Tattoo Studio für Frauen " },
    { src: vif15, alt: "Mandala und Fineline Tattoo " },
    { src: vif16, alt: "Filigrane Linienführung " },
    { src: vif17, alt: "Feines Tattoo Motiv" },
    { src: vif18, alt: "Individuelles Mandala Design " },
    { src: vif19, alt: "Zartes Fineline Tattoo Mohlsdorf" },
  ];

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
                src={img.src} 
                alt={img.alt}
                loading="lazy"
                width="400"
                height="500"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 bg-boho-cream min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl mb-12 text-boho-dark">
          <T i18nKey="privacy.title" />
        </h1>
        <div className="space-y-6 font-light text-boho-dark/80 leading-relaxed text-lg">
          <h2 className="text-2xl font-serif text-boho-dark mt-10 mb-4"><T i18nKey="privacy.h2" /></h2>
          <p>
            <T i18nKey="privacy.p1" />
          </p>
          <p className="mt-8 italic text-boho-dark/50">
            <T i18nKey="privacy.p2" />
          </p>
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

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-24 bg-boho-cream min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl mb-12 text-boho-dark">
          <T i18nKey="imprint.title" />
        </h1>
        <div className="space-y-6 font-light text-boho-dark/80 leading-relaxed text-lg">
          <h2 className="text-2xl font-serif text-boho-dark mt-10 mb-4"><T i18nKey="imprint.h2" /></h2>
          <p>
            <T i18nKey="imprint.p1" />
          </p>
          <p className="mt-8">
            <T i18nKey="imprint.p2" />
          </p>
        </div>
      </div>
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
            <button className="px-8 py-4 bg-boho-gold text-[#2d2d2d] rounded-sm hover:bg-boho-cream hover:text-boho-dark transition-colors duration-300 tracking-wide font-medium flex items-center">
              <T i18nKey="footer.btn" />
            </button>
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
                verliebt-in-farbe@web.de
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
          </div>
        </div>
      </div>
    </footer>
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
