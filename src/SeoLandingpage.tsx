import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Heart } from 'lucide-react';
import { formatSeoText, seoKeywords, seoLocations } from './seoConfig';
import heroImg from './assets/images/Ani1.jpeg';

export default function SeoLandingpage() {
  const { slug } = useParams();
  
  let keyword = "";
  let location = "";
  
  for (const kw of seoKeywords) {
    if (slug?.startsWith(`${kw}-`)) {
      keyword = kw;
      location = slug.replace(`${kw}-`, '');
      break;
    }
  }

  const isValid = keyword && seoLocations.includes(location);

  const readableKeyword = formatSeoText(keyword);
  const readableLocation = formatSeoText(location);

  const getVariationIndex = (str: string, max: number) => { 
    return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % max; 
  };

  const h2Variations = [
    `Deine Tätowiererin in der Nähe von ${readableLocation}`,
    `Professionelles Tattoostudio für ${readableLocation}`,
    `Dein Fineline Tattoo Artist nah bei ${readableLocation}`,
    `Dein Studio für Fineline Tattoos nahe ${readableLocation}`,
    `Individuelle Tattoo Kunst unweit von ${readableLocation}`
  ];

  const textVariations = [
    `Du suchst einen kreativen Tätowierer oder eine spezialisierte Tattoo Artist in der Nähe von ${readableLocation}? Das Tattoostudio 'Verliebt in Farbe' in Greiz ist dein Ansprechpartner für feine Linien und individuelle Designs. Nur einen kurzen Weg von ${readableLocation} entfernt, bietet dir Ani einen Raum für kunstvolle Tattoos in einer entspannten Umgebung.`,
    `Aus ${readableLocation} auf der Suche nach dem passenden Tattoostudio? Bei 'Verliebt in Farbe' in Greiz erwartet dich eine erfahrene Tätowiererin für minimalistische Kunst und florale Motive. Komm aus ${readableLocation} vorbei und lass uns gemeinsam dein nächstes Fineline Tattoo planen.`,
    `Als Tattoo Artist nahe ${readableLocation} habe ich mich voll und ganz feinen Linien, sanften Schatten und individuellen Designs verschrieben. Im Tattoostudio 'Verliebt in Farbe' unweit von ${readableLocation} stehst du und dein Wunsch immer im Mittelpunkt – für ein Tattoo, das so einzigartig ist wie du.`,
    `Wenn du aus ${readableLocation} kommst und auf der Suche nach einem Tattoostudio bist, das auf Fineline spezialisiert ist, bist du hier richtig. Dein Tattoostudio in der Nähe von ${readableLocation}, in dem deine Ideen mit höchster Präzision und viel Liebe zum Detail als Tattoo verewigt werden.`
  ];

  const h2Index = isValid ? getVariationIndex(slug || '', h2Variations.length) : 0;
  const textIndex = isValid ? getVariationIndex((slug || '') + "_text", textVariations.length) : 0;

  const dynamicH2 = h2Variations[h2Index];
  const dynamicText = textVariations[textIndex];

  useEffect(() => {
    if (isValid) {
      document.title = `${readableKeyword} in ${readableLocation} | Verliebt in Farbe`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', `Du suchst ein ${readableKeyword} in ${readableLocation}? Entdecke Anis Fineline & Farb-Tattoostudio in der Nähe. Jetzt Termin vereinbaren!`);
    }
  }, [isValid, readableKeyword, readableLocation]);

  if (!isValid) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-boho-cream">
        <h2 className="text-4xl font-light mb-4 text-boho-dark tracking-wide">404 - Seite nicht gefunden</h2>
        <p className="text-boho-dark/70 mb-8 max-w-md">Die gewünschte Seite existiert leider nicht. Entdecke unsere Galerie oder buche direkt einen Termin.</p>
        <Link to="/" className="inline-flex items-center px-8 py-4 bg-boho-dark text-white rounded-full hover:bg-boho-gold transition-all duration-300 shadow-md">
          Zurück zur Startseite <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-boho-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Tattoo Studio Verliebt in Farbe" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-boho-cream/70 via-boho-cream/90 to-boho-cream"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-boho-rose/30 px-6 py-2 rounded-full mb-8"
          >
            <MapPin className="w-5 h-5 text-boho-dark" />
            <span className="text-boho-dark font-medium tracking-wider uppercase text-sm">
              In deiner Nähe: {readableLocation}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-boho-dark leading-tight mb-6 tracking-wide"
          >
            Dein <span className="font-medium">{readableKeyword}</span> in {readableLocation} und Umgebung
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-boho-dark/80 max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            Du suchst nach einem kreativen und professionellen Tattoo-Studio unweit von {readableLocation}? 
            Verliebt in Farbe ist dein Rückzugsort für filigrane Kunstwerke, die unter die Haut gehen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/termin-buchen" 
              className="inline-flex items-center px-8 py-4 bg-boho-dark text-white rounded-full hover:bg-boho-gold transition-all duration-300 shadow-md text-lg tracking-wider"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dynamic SEO Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-boho-dark tracking-wide">
            {dynamicH2}
          </h2>
          <p className="text-lg md:text-xl text-boho-dark/80 font-light leading-relaxed">
            {dynamicText}
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-boho-cream">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-px bg-boho-gold mx-auto mb-12"></div>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-wide">
            Warum Verliebt in Farbe?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-8 h-8 text-boho-gold mb-6" />
              <h3 className="text-xl font-medium mb-4">Fineline Expertise</h3>
              <p className="text-boho-dark/70 leading-relaxed font-light">
                Unsere Spezialität sind hochdetaillierte, feine Linien. Ob kleine florale Motive, filigrane Schriftzüge oder minimalistische Designs – wir bringen deine Vision mit höchster Präzision unter die Haut.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-8 h-8 text-boho-gold mb-6" />
              <h3 className="text-xl font-medium mb-4">Wohlfühlatmosphäre</h3>
              <p className="text-boho-dark/70 leading-relaxed font-light">
                Für Kunden aus {readableLocation} bieten wir nicht nur exzellentes Handwerk, sondern auch einen sicheren Ort. Hygiene, Empathie und eine ausführliche Beratung stehen bei uns an erster Stelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
