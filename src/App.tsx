/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, ArrowRight, Instagram, Mail, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
import vifLogo from './assets/images/vif-logo.jpeg';

export default function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
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
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-light text-boho-dark/80 max-w-3xl">
          Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Einige von ihnen sind essenziell, während andere uns helfen, diese Website zu verbessern. 
          Weitere Informationen findest du in unserer <Link to="/datenschutz" className="underline hover:text-boho-gold">Datenschutzerklärung</Link> und im <Link to="/impressum" className="underline hover:text-boho-gold">Impressum</Link>.
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <button 
            onClick={handleReject}
            className="flex-1 md:flex-none px-6 py-3 border border-boho-dark text-boho-dark rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors duration-300 tracking-wide font-medium text-sm whitespace-nowrap"
          >
            Alle ablehnen
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-3 border border-boho-dark text-boho-dark rounded-sm hover:bg-boho-dark hover:text-boho-cream transition-colors duration-300 tracking-wide font-medium text-sm whitespace-nowrap"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-boho-cream/90 backdrop-blur-md border-b border-boho-beige py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Social */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={vifLogo} alt="Verliebt in Farbe Logo" className="h-14 md:h-16 w-auto object-contain rounded-full shadow-md" />
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
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-light text-boho-dark/80">
          <Link to="/" className="hover:text-boho-gold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-boho-gold transition-colors">Über mich</Link>
          <Link to="/gallery" className="hover:text-boho-gold transition-colors">Galerie</Link>
          <a href="#" className="hover:text-boho-gold transition-colors">Termin buchen</a>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden p-2 text-boho-dark hover:text-boho-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
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
                alt={`Ani ${currentIdx + 1}`} 
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-boho-dark">
            Schön, dass <br/><span className="italic text-rainbow">du da bist.</span>
          </h1>
          
          <div className="space-y-6 text-boho-dark/80 font-light leading-relaxed">
            <p>
              Hey, ich bin Ani! Das Gesicht und die Seele hinter "Verliebt in Farbe". Seit über 15 Jahren ist das Tätowieren für mich nicht nur ein Handwerk, sondern meine absolute Herzensangelegenheit und größte Leidenschaft.
            </p>
            <p>
              Mein Fokus liegt auf zarten Fineline-Arbeiten und detailverliebten Mandalas, die sanft deine natürlichen Kurven betonen. Es ist mir besonders wichtig, Kunstwerke zu erschaffen, die weiblich, fein und absolut einzigartig auf dich abgestimmt sind.
            </p>
            <p>
              In meinem Studio in Mohlsdorf habe ich einen echten "Safe Space" geschaffen – einen Raum, in dem du dich vollkommen fallen lassen darfst. Mir ist ein liebevoller, rücksichtsvoller und einfühlsamer Umgang extrem wichtig. Egal, ob es dein allererstes Tattoo ist oder du schon lange sammelst: Bei mir kommst du an, darfst entspannen und dich einfach wohlfühlen. Niemand wird gehetzt, und wir nehmen uns immer die Zeit, die du brauchst, damit du dich absolut sicher und verstanden fühlst.
            </p>
            <p className="font-medium text-boho-dark pt-4">
              Ich freue mich von Herzen darauf, deine Geschichte unter die Haut zu bringen!
            </p>
          </div>
          
          <div className="mt-10">
            <Link to="/" className="inline-flex items-center px-8 py-4 bg-boho-dark text-white rounded-sm hover:bg-boho-gold transition-colors duration-300 tracking-wide font-light group">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mini Info-Box unten */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-white/60 border border-boho-beige p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center text-center md:text-left justify-between shadow-sm">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-boho-dark">Lass uns kreativ werden</h3>
            <p className="text-boho-dark/70 font-light text-sm md:text-base max-w-lg">
              Dein Körper ist einzigartig und genau so sollte auch dein Tattoo sein. Falls du Fragen oder schon eine grobe Idee hast, schreib mir einfach!
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 bg-boho-gold text-boho-dark rounded-sm hover:bg-boho-dark hover:text-white transition-colors tracking-widest text-sm uppercase">
            Termin anfragen
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
            <span>Fineline & Mandalas</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-boho-dark">
            Sanfte Kunst,<br /> <span className="italic text-rainbow">die unter die Haut geht.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-boho-dark/80 mb-10 leading-relaxed">
            Feine Linien, florale Mandalas und ein liebevoll gestalteter Raum, in dem du dich rundum wohlfühlen kannst. Dein Körper, deine Geschichte, verewigt in zarter Farbe.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-boho-dark text-white rounded-sm hover:bg-boho-gold transition-colors duration-300 tracking-wide font-light flex items-center group">
              Jetzt Termin anfragen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/gallery" className="text-sm uppercase tracking-widest text-boho-dark/60 hover:text-boho-dark transition-colors border-b border-transparent hover:border-boho-dark pb-1">
              Galerie ansehen
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
            alt="Ani" 
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
      title: "Herzlich & Weiblich",
      description: "Ein Safe Space, in dem du genau so sein darfst, wie du bist. Behutsame Beratung auf Augenhöhe."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-boho-gold" />,
      title: "Präzision & Kunst",
      description: "Hauchzarte Linien und kunstvolle Mandalas. Jedes Design wird individuell und einzigartig für dich entworfen."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-boho-gold" />,
      title: "Höchste Hygiene",
      description: "Sicherheit und Sauberkeit stehen an erster Stelle. Modernes Equipment und sterile Arbeitsweise."
    }
  ];

  return (
    <section className="py-24 bg-boho-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Dein Safespace für Tattoos</h2>
          <p className="text-boho-dark/70 font-light">
            Mir ist wichtig, dass du nicht nur mit einem wunderschönen Tattoo nach Hause gehst, sondern auch mit einem guten Gefühl.
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
    { src: vif2, alt: "Fineline Tattoo Arbeit" },
    { src: vif3, alt: "Fineline Tattoo Arbeit" },
    { src: vif4, alt: "Fineline Tattoo Arbeit" },
    { src: vif5, alt: "Fineline Tattoo Arbeit" },
    { src: vif6, alt: "Fineline Tattoo Arbeit" },
    { src: vif7, alt: "Fineline Tattoo Arbeit" },
    { src: vif8, alt: "Fineline Tattoo Arbeit" },
    { src: vif9, alt: "Fineline Tattoo Arbeit" },
    { src: vif10, alt: "Fineline Tattoo Arbeit" },
    { src: vif11, alt: "Fineline Tattoo Arbeit" },
    { src: vif12, alt: "Fineline Tattoo Arbeit" },
    { src: vif13, alt: "Fineline Tattoo Arbeit" },
    { src: vif14, alt: "Fineline Tattoo Arbeit" },
    { src: vif15, alt: "Fineline Tattoo Arbeit" },
    { src: vif16, alt: "Fineline Tattoo Arbeit" },
    { src: vif17, alt: "Fineline Tattoo Arbeit" },
    { src: vif18, alt: "Fineline Tattoo Arbeit" },
    { src: vif19, alt: "Fineline Tattoo Arbeit" },
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
              Meine Arbeiten
            </h2>
            <p className="text-boho-dark/70 font-light">
              Lass dich von meinen neuesten Fineline- & Mandala-Projekten inspirieren. Jedes Design ist einzigartig und wird individuell angefertigt. Mehr Entwürfe und fertige Arbeiten findest du auf <a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-boho-gold transition-colors">@verliebtinfarbe</a>.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/verliebtinfarbe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-boho-dark hover:text-boho-gold transition-colors mt-6 md:mt-0 pb-1 border-b border-boho-dark/20 hover:border-boho-gold"
          >
            Folgen auf Instagram <ArrowRight className="w-3 h-3 ml-2" />
          </a>
        </div>
      </div>
      
      {/* Smooth Marquee Galerie */}
      {/* Die Container stellen sicher, dass alle Bilder dieselbe Größe/Hintergrund ("den selben Hintergrund") haben */}
      <div className="relative w-full flex overflow-hidden py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {marqueeImages.map((img, idx) => (
            <div 
              key={idx}
              className="w-[260px] md:w-[320px] aspect-[4/5] mx-4 overflow-hidden rounded-xl bg-boho-cream shadow-md shadow-boho-dark/5 p-3 flex-shrink-0 relative group cursor-pointer"
              onClick={() => setSelectedIdx(idx % images.length)}
            >
              {/* Innerer Rahmen, um jedem Bild denselben Hintergrund zu geben (z.B. object-contain für Freisteller) */}
              <div className="w-full h-full rounded-lg overflow-hidden border border-boho-beige relative bg-white flex items-center justify-center">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  /* object-cover nutzen wir für normale Bilder, falls sie freigestellt sind, hilft object-contain */
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-boho-dark/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-boho-dark px-4 py-2 text-sm uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm scale-90 group-hover:scale-100 transition-transform">Ansehen</span>
                </div>
              </div>
            </div>
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
          Zur Instagram Galerie
        </a>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-boho-dark/95 backdrop-blur-md p-4"
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
    { src: vif2, alt: "Fineline Tattoo Arbeit" },
    { src: vif3, alt: "Fineline Tattoo Arbeit" },
    { src: vif4, alt: "Fineline Tattoo Arbeit" },
    { src: vif5, alt: "Fineline Tattoo Arbeit" },
    { src: vif6, alt: "Fineline Tattoo Arbeit" },
    { src: vif7, alt: "Fineline Tattoo Arbeit" },
    { src: vif8, alt: "Fineline Tattoo Arbeit" },
    { src: vif9, alt: "Fineline Tattoo Arbeit" },
    { src: vif10, alt: "Fineline Tattoo Arbeit" },
    { src: vif11, alt: "Fineline Tattoo Arbeit" },
    { src: vif12, alt: "Fineline Tattoo Arbeit" },
    { src: vif13, alt: "Fineline Tattoo Arbeit" },
    { src: vif14, alt: "Fineline Tattoo Arbeit" },
    { src: vif15, alt: "Fineline Tattoo Arbeit" },
    { src: vif16, alt: "Fineline Tattoo Arbeit" },
    { src: vif17, alt: "Fineline Tattoo Arbeit" },
    { src: vif18, alt: "Fineline Tattoo Arbeit" },
    { src: vif19, alt: "Fineline Tattoo Arbeit" },
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl mb-6 text-boho-dark">
            Meine <span className="italic text-rainbow">Galerie</span>.
          </h1>
          <p className="text-boho-dark/70 font-light max-w-lg mx-auto mb-8">
            Ein kleiner Einblick in meine bisherigen Arbeiten. Jedes Tattoo ist einzigartig und mit Liebe gestochen. Für mehr Eindrücke besuche gerne meinen Instagram-Kanal.
          </p>
          <a
            href="https://www.instagram.com/verliebtinfarbe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-boho-dark text-white px-6 py-3 rounded-full hover:bg-boho-gold transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-medium">Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-boho-beige shadow-sm cursor-pointer group"
              onClick={() => setSelectedIdx(idx)}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-boho-dark/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-boho-dark px-4 py-2 text-sm uppercase tracking-wider rounded-full backdrop-blur-sm shadow-sm scale-90 group-hover:scale-100 transition-transform">Ansehen</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-boho-dark/95 backdrop-blur-md p-4"
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
          Datenschutz
        </h1>
        <div className="space-y-6 font-light text-boho-dark/80 leading-relaxed">
          <h2 className="text-xl font-medium text-boho-dark">1. Datenschutz auf einen Blick</h2>
          <p>
            Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, 
            was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen...
          </p>
          <p className="mt-8 italic text-boho-dark/50">
            (Hier kannst du später den vollständigen Text deiner Datenschutzerklärung einfügen.)
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
          Impressum
        </h1>
        <div className="space-y-6 font-light text-boho-dark/80 leading-relaxed">
          <h2 className="text-xl font-medium text-boho-dark">Angaben gemäß § 5 TMG</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>
          <h2 className="text-xl font-medium text-boho-dark mt-8">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 44 55 66<br />
            E-Mail: info@musteradresse.de
          </p>
          <p className="mt-8 italic text-boho-dark/50">
            (Hier kannst du später deine echten Impressums-Daten eintragen.)
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-b border-white/10 pb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Lass uns gemeinsam <br/><span className="text-rainbow italic">etwas Schönes</span> erschaffen.</h2>
            <p className="font-light text-white/70 max-w-md mb-8">
              Bist du bereit für dein nächstes (oder erstes) Meisterwerk? Hast du Fragen zu einem Motiv? Ich freue mich von dir zu hören.
            </p>
            <button className="px-8 py-4 bg-boho-gold text-boho-dark rounded-sm hover:bg-white transition-colors duration-300 tracking-wide font-medium flex items-center">
              Jetzt Termin anfragen
            </button>
          </div>
          
          <div className="flex flex-col md:items-end space-y-6">
            <p className="font-serif text-2xl">Verliebt in Farbe.</p>
            <div className="space-y-4 font-light text-white/70 text-sm md:text-right">
              <p className="flex items-center md:justify-end gap-3">
                <MapPin className="w-4 h-4 text-boho-gold" />
                Friedhofstraße 7, 07987 Mohlsdorf-Teichwolfrahmsdorf
              </p>
              <p className="flex items-center md:justify-end gap-3">
                <Mail className="w-4 h-4 text-boho-gold" />
                verliebt-in-farbe@web.de
              </p>
              <a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 hover:text-boho-gold transition-colors">
                <Instagram className="w-4 h-4 text-boho-gold" />
                @verliebtinfarbe
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-light tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Verliebt in Farbe. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
