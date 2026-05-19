import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'de' | 'en';

interface TranslationDictionary {
  [key: string]: {
    de: string;
    en: string;
  };
}

export const translations: TranslationDictionary = {
  'nav.home': { de: 'Home', en: 'Home' },
  'nav.about': { de: 'Über mich', en: 'About me' },
  'nav.gallery': { de: 'Galerie', en: 'Gallery' },
  'nav.blog': { de: 'Blog', en: 'Blog' },
  'nav.contact': { de: 'Kontakt', en: 'Contact' },
  'nav.booking': { de: 'Termin buchen', en: 'Book an appointment' },
  
  'cookie.text': { 
    de: 'Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Einige von ihnen sind essenziell, während andere uns helfen, diese Website zu verbessern. Weitere Informationen findest du in unserer ', 
    en: 'We use cookies to give you the best experience on our website. Some of them are essential, while others help us improve this website. You can find more information in our ' 
  },
  'cookie.privacy': { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
  'cookie.and': { de: ' und im ', en: ' and the ' },
  'cookie.imprint': { de: 'Impressum', en: 'Imprint' },
  'cookie.reject': { de: 'Alle ablehnen', en: 'Reject all' },
  'cookie.accept': { de: 'Alle akzeptieren', en: 'Accept all' },
  
  'hero.badge': { de: 'Fineline & Mandalas', en: 'Fineline & Mandalas' },
  'hero.title.1': { de: 'Sanfte Kunst,', en: 'Gentle art,' },
  'hero.title.2': { de: 'die unter die Haut geht.', en: 'beneath your skin.' },
  'hero.desc': { 
    de: 'Feine Linien, florale Mandalas und ein liebevoll gestalteter Raum, in dem du dich rundum wohlfühlen kannst. Dein Körper, deine Geschichte, verewigt in zarter Farbe.', 
    en: 'Fine lines, floral mandalas and a lovingly designed space where you can feel completely comfortable. Your body, your story, immortalized in delicate color.' 
  },
  'hero.btn': { de: 'Jetzt Termin anfragen', en: 'Request an appointment' },
  'hero.gallery': { de: 'Galerie ansehen', en: 'View gallery' },

  'about.title.1': { de: 'Schön, dass', en: 'So nice' },
  'about.title.2': { de: 'du da bist.', en: 'to have you here.' },
  'about.p1': { 
    de: 'Hey, ich bin Ani! Das Gesicht und die Seele hinter "Verliebt in Farbe". Seit über 15 Jahren ist das Tätowieren für mich nicht nur ein Handwerk, sondern meine absolute Herzensangelegenheit und größte Leidenschaft.', 
    en: 'Hey, I\'m Ani! The face and soul behind "Verliebt in Farbe". For over 15 years, tattooing has not only been a craft for me, but my absolute heart\'s desire and greatest passion.' 
  },
  'about.p2': { 
    de: 'Mein Fokus liegt auf zarten Fineline-Arbeiten und detailverliebten Mandalas, die sanft deine natürlichen Kurven betonen. Es ist mir besonders wichtig, Kunstwerke zu erschaffen, die weiblich, fein und absolut einzigartig auf dich abgestimmt sind.', 
    en: 'My focus is on delicate fineline work and highly detailed mandalas that gently accentuate your natural curves. It is especially important to me to create artworks that are feminine, delicate and absolutely uniquely tailored to you.' 
  },
  'about.p3': { 
    de: 'In meinem Studio in Mohlsdorf habe ich einen echten "Safe Space" geschaffen – einen Raum, in dem du dich vollkommen fallen lassen darfst. Mir ist ein liebevoller, rücksichtsvoller und einfühlsamer Umgang extrem wichtig. Egal, ob es dein allererstes Tattoo ist oder du schon lange sammelst: Bei mir kommst du an, darfst entspannen und dich einfach wohlfühlen. Niemand wird gehetzt, und wir nehmen uns immer die Zeit, die du brauchst, damit du dich absolut sicher und verstanden fühlst.', 
    en: 'In my studio in Mohlsdorf I have created a true "Safe Space" - a room where you can completely let go. A loving, considerate and empathetic approach is extremely important to me. No matter if it\'s your very first tattoo or you have been collecting for a long time: with me you can arrive, relax and simply feel comfortable. Nobody is rushed, and we always take the time you need so that you feel absolutely safe and understood.' 
  },
  'about.p4': { 
    de: 'Ich freue mich von Herzen darauf, deine Geschichte unter die Haut zu bringen!', 
    en: 'I can\'t wait to bring your story to life, right beneath your skin!' 
  },
  'about.back': { de: 'Zurück zur Startseite', en: 'Back to home' },
  'about.box.title': { de: 'Lass uns kreativ werden', en: 'Let\'s get creative' },
  'about.box.desc': { 
    de: 'Dein Körper ist einzigartig und genau so sollte auch dein Tattoo sein. Falls du Fragen oder schon eine grobe Idee hast, schreib mir einfach!', 
    en: 'Your body is unique and so should your tattoo be. If you have questions or already a rough idea, just drop me a line!' 
  },
  'about.box.btn': { de: 'Termin anfragen', en: 'Request appointment' },

  'values.main.title': { de: 'Dein Safespace für Tattoos', en: 'Your safe space for tattoos' },
  'values.main.desc': { de: 'Mir ist wichtig, dass du nicht nur mit einem wunderschönen Tattoo nach Hause gehst, sondern auch mit einem guten Gefühl.', en: 'It\'s important to me that you not only go home with a beautiful tattoo, but also feeling good.' },
  'values.1.title': { de: 'Herzlich & Weiblich', en: 'Warm & Feminine' },
  'values.1.desc': { de: 'Ein Safe Space, in dem du genau so sein darfst, wie du bist. Behutsame Beratung auf Augenhöhe.', en: 'A safe space where you can be exactly as you are. Gentle consultation on equal footing.' },
  'values.2.title': { de: 'Präzision & Kunst', en: 'Precision & Art' },
  'values.2.desc': { de: 'Hauchzarte Linien und kunstvolle Mandalas. Jedes Design wird individuell und einzigartig für dich entworfen.', en: 'Wafer-thin lines and artistic mandalas. Each design is created individually and uniquely for you.' },
  'values.3.title': { de: 'Höchste Hygiene', en: 'Highest Hygiene' },
  'values.3.desc': { de: 'Sicherheit und Sauberkeit stehen an erster Stelle. Modernes Equipment und sterile Arbeitsweise.', en: 'Safety and cleanliness come first. Modern equipment and sterile working methods.' },

  'works.title': { de: 'Meine Arbeiten', en: 'My works' },
  'works.desc': { de: 'Lass dich von meinen neuesten Fineline- & Mandala-Projekten inspirieren. Jedes Design ist einzigartig und wird individuell angefertigt. Mehr Entwürfe und fertige Arbeiten findest du auf ', en: 'Let yourself be inspired by my latest Fineline & Mandala projects. Each design is unique and created individually. You can find more sketches and finished works on ' },
  'works.follow': { de: 'Folgen auf Instagram', en: 'Follow on Instagram' },
  'works.view': { de: 'Ansehen', en: 'View' },
  'works.btn': { de: 'Zur Instagram Galerie', en: 'To the Instagram Gallery' },

  'gallery.title.1': { de: 'Meine ', en: 'My ' },
  'gallery.title.2': { de: 'Galerie', en: 'Gallery' },
  'gallery.title.dot': { de: '.', en: '.' },
  'gallery.desc': { de: 'Ein kleiner Einblick in meine bisherigen Arbeiten. Jedes Tattoo ist einzigartig und mit Liebe gestochen. Für mehr Eindrücke besuche gerne meinen Instagram-Kanal.', en: 'A small insight into my previous work. Every tattoo is unique and inked with love. For more impressions, feel free to visit my Instagram channel.' },

  'footer.title.1': { de: 'Lass uns gemeinsam', en: 'Let\'s create something' },
  'footer.title.2': { de: 'etwas Schönes', en: 'beautiful' },
  'footer.title.3': { de: 'erschaffen.', en: 'together.' },
  'footer.desc': { de: 'Bist du bereit für dein nächstes (oder erstes) Meisterwerk? Hast du Fragen zu einem Motiv? Ich freue mich von dir zu hören.', en: 'Are you ready for your next (or first) masterpiece? Do you have questions about a design? I\'m looking forward to hearing from you.' },
  'footer.btn': { de: 'Jetzt Termin anfragen', en: 'Request appointment now' },
  'footer.rights': { de: 'Verliebt in Farbe. Alle Rechte vorbehalten.', en: 'Verliebt in Farbe. All rights reserved.' },
  'footer.imprint': { de: 'Impressum', en: 'Imprint' },
  'footer.privacy': { de: 'Datenschutz', en: 'Privacy' },
  'footer.contact': { de: 'Kontakt', en: 'Contact' },

  'privacy.title': { de: 'Datenschutz', en: 'Privacy Policy' },
  'privacy.h2': { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
  'privacy.p1': { de: '[HIER DATENSCHUTZTEXT EINFÜGEN]', en: '[INSERT PRIVACY POLICY TEXT HERE]' },
  'privacy.p2': { de: 'Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften...', en: 'We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations...' },

  'imprint.title': { de: 'Impressum', en: 'Imprint' },
  'imprint.h2': { de: 'Angaben gemäß § 5 TMG', en: 'Information according to § 5 TMG' },
  'imprint.p1': { de: '[HIER RECHTSSICHEREN IMPRESSUMSTEXT FÜR VERLIEBTINFARBE.DE EINFÜGEN]', en: '[INSERT LEGALLY COMPLIANT IMPRINT TEXT FOR VERLIEBTINFARBE.DE HERE]' },
  'imprint.p2': { de: 'Kontakt: ani@verliebtinfarbe.de', en: 'Contact: ani@verliebtinfarbe.de' },

  'contact.title': { de: 'Schreib mir deine Tattoo-Idee', en: 'Tell me your tattoo idea' },
  'contact.desc': { de: 'Du hast Fragen zu einem Motiv, den Platzierungen oder möchtest mir deine Inspirationen schicken? Schreib mir ganz unverbindlich. Deine Daten werden sicher und verschlüsselt übertragen.', en: 'Do you have questions about a design, the placement or want to send me your inspirations? Write me without any obligation. Your data will be transmitted securely and encrypted.' },
  'contact.name': { de: 'Dein Name', en: 'Your Name' },
  'contact.email': { de: 'Deine E-Mail-Adresse', en: 'Your Email Address' },
  'contact.message': { de: 'Deine Nachricht', en: 'Your Message' },
  'contact.upload': { de: 'Ziehe deine Wunsch-Motive hierher oder klicke zum Auswählen (JPG, PNG, max. 10 MB)', en: 'Drag your desired motives here or click to select (JPG, PNG, max. 10 MB)' },
  'contact.privacy': { de: 'Ich willige ein, dass meine Daten und hochgeladenen Bildvorlagen ausschließlich zur Bearbeitung der Anfrage und Tattoo-Vorbereitung verarbeitet werden (Siehe ', en: 'I agree that my data and uploaded image templates will be processed exclusively for the processing of the request and tattoo preparation (See ' },
  'contact.privacyLink': { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
  'contact.privacyEnd': { de: ').', en: ').' },
  'contact.submit': { de: 'Anfrage senden', en: 'Send Request' },

  'notfound.title': { de: '404', en: '404' },
  'notfound.desc': { de: 'Hoppla, hier ist uns wohl die Farbe ausgegangen... Dieses Mandala wurde noch nicht gezeichnet oder die Seite existiert nicht mehr.', en: 'Oops, it seems we ran out of ink here... This mandala hasn\'t been drawn yet or the page no longer exists.' },
  'notfound.btn': { de: 'Zurück zur Startseite', en: 'Back to home' },
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('de');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'de' || storedLang === 'en')) {
      setLang(storedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'de' ? 'en' : 'de';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string) => {
    if (translations[key]) {
      return translations[key][lang];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function T({ i18nKey }: { i18nKey: string }) {
  const { lang, t } = useLanguage();
  return (
    <span key={lang} className="animate-fade-in inline-block">
      {t(i18nKey)}
    </span>
  );
}
