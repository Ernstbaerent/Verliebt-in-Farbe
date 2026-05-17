/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, ArrowRight, Instagram, Mail, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-boho-cream text-boho-dark font-sans selection:bg-boho-rose selection:text-boho-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Atmosphere />
        <GallerySnippet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-boho-cream/90 backdrop-blur-md border-b border-boho-beige py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Social */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-boho-dark decoration-transparent hover:text-boho-gold transition-colors">
            Verliebt in Farbe.
          </a>
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
          <a href="#" className="hover:text-boho-gold transition-colors">Home</a>
          <a href="#" className="hover:text-boho-gold transition-colors">Über mich</a>
          <a href="#" className="hover:text-boho-gold transition-colors">Galerie</a>
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
            Sanfte Kunst,<br /> <span className="italic text-boho-gold">die unter die Haut geht.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-boho-dark/80 mb-10 leading-relaxed">
            Feine Linien, florale Mandalas und ein liebevoll gestalteter Raum, in dem du dich rundum wohlfühlen kannst. Dein Körper, deine Geschichte, verewigt in zarter Farbe.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-boho-dark text-white rounded-sm hover:bg-boho-gold transition-colors duration-300 tracking-wide font-light flex items-center group">
              Jetzt Termin anfragen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#" className="text-sm uppercase tracking-widest text-boho-dark/60 hover:text-boho-dark transition-colors border-b border-transparent hover:border-boho-dark pb-1">
              Galerie ansehen
            </a>
          </div>
        </motion.div>

        {/* Hero Abstract Image / Aesthetic visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px] w-full rounded-t-full overflow-hidden shadow-2xl shadow-boho-dark/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5b5bb00eb06c?auto=format&fit=crop&q=80&w=1000" 
            alt="Tattoo Kunst" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-boho-dark/10 mix-blend-overlay"></div>
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
  // Diese Platzhalter können durch eigene Bilder ersetzt werden
  const images = [
    { src: "https://images.unsplash.com/photo-1611501271618-918968f9a2de?auto=format&fit=crop&q=80&w=600", alt: "Fineline Blumen Tattoo" },
    { src: "https://images.unsplash.com/photo-1590246814883-587b1c313a1a?auto=format&fit=crop&q=80&w=600", alt: "Boho Mandala Detail" },
    { src: "https://images.unsplash.com/photo-1550236520-216dc7b5fb99?auto=format&fit=crop&q=80&w=600", alt: "Zartes Fineline Tattoo" },
    { src: "https://images.unsplash.com/photo-1560707854-fb9a10efa0b3?auto=format&fit=crop&q=80&w=600", alt: "Detail Tattoo Arbeit" },
  ];

  return (
    <section className="py-24 bg-boho-rose/20 rounded-t-[3rem] lg:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl mb-4 flex items-center gap-3">
              <Instagram className="w-8 h-8 text-boho-dark" />
              Auf Instagram
            </h2>
            <p className="text-boho-dark/70 font-light">
              Während du darauf wartest, dass hier deine eigenen Bilder eingefügt werden, findest du meine neuesten Fineline- & Mandala-Projekte direkt unter <a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-boho-gold transition-colors">@verliebtinfarbe</a>.
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative group/feed">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="aspect-square overflow-hidden rounded-xl bg-boho-beige relative cursor-pointer"
            >
              <a href="https://www.instagram.com/verliebtinfarbe/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover/feed:opacity-80 hover:!opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a 
            href="https://www.instagram.com/verliebtinfarbe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-boho-dark text-boho-dark text-sm uppercase tracking-widest rounded-sm bg-transparent hover:bg-boho-dark hover:text-boho-cream transition-colors"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Zur Galerie
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-boho-dark text-boho-cream py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-b border-white/10 pb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Lass uns gemeinsam <br/><span className="text-boho-gold italic">etwas Schönes</span> erschaffen.</h2>
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
                Musterstraße 12, 12345 Traumstadt
              </p>
              <p className="flex items-center md:justify-end gap-3">
                <Mail className="w-4 h-4 text-boho-gold" />
                hallo@verliebtinfarbe.de
              </p>
              <a href="#" className="flex items-center md:justify-end gap-3 hover:text-boho-gold transition-colors">
                <Instagram className="w-4 h-4 text-boho-gold" />
                @verliebtinfarbe_tattoo
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-light tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Verliebt in Farbe. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
