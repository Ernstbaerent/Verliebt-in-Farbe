import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import AniAvatar from '../assets/images/Ani3.jpeg';

type Message = {
  id: string;
  sender: 'user' | 'ani';
  text: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowHint(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://anichatbotproxy.clemens-f91.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: userText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ani',
        text: data.reply || "Oh, mein digitales Gehirn klemmt gerade etwas. Versuch es bitte gleich nochmal! 🌿",
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ani',
        text: "Oh, mein digitales Gehirn klemmt gerade etwas. Versuch es bitte gleich nochmal! 🌿",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] bg-boho-cream border border-boho-dark/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 120px)', height: '550px' }}
          >
            {/* Header */}
            <div className="bg-boho-dark text-boho-cream p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={AniAvatar}
                  alt="Ani"
                  className="w-10 h-10 rounded-full object-cover border border-boho-cream/20"
                />
                <div>
                  <h3 className="font-serif text-lg leading-none mb-1">Chatte mit Ani</h3>
                  <p className="text-xs font-light text-boho-cream/70">Digitale Assistenz</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-boho-cream/70 hover:text-boho-cream transition-colors p-1"
                aria-label="Chat schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-boho-cream font-light text-sm">
              <div className="text-center text-xs text-boho-dark/40 my-4 uppercase tracking-widest">
                Heute
              </div>
              
              <div className="flex items-end gap-2">
                <img src={AniAvatar} alt="Ani" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                <div className="bg-white border border-boho-dark/5 text-boho-dark rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%] shadow-sm">
                  Hey! Hast du Fragen zu meinen Tattoos oder möchtest du einen Termin anfragen?
                </div>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender === 'ani' && (
                    <img src={AniAvatar} alt="Ani" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  )}
                  <div
                    className={`px-4 py-3 max-w-[80%] shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-boho-sage text-boho-dark rounded-2xl rounded-br-sm'
                        : 'bg-white border border-boho-dark/5 text-boho-dark rounded-2xl rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-end gap-2">
                  <img src={AniAvatar} alt="Ani" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  <div className="bg-white border border-boho-dark/5 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1 items-center h-10">
                    <motion.div
                      className="w-1.5 h-1.5 bg-boho-dark/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-boho-dark/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-boho-dark/40 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-boho-dark/5">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 bg-boho-cream rounded-full px-4 py-2 border border-boho-dark/10 focus-within:border-boho-sage transition-colors"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Schreibe eine Nachricht..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-boho-dark placeholder:text-boho-dark/40 py-1"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="text-boho-sage hover:text-boho-dark transition-colors disabled:opacity-50 disabled:hover:text-boho-sage"
                  aria-label="Senden"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button and Hint */}
      <AnimatePresence>
        {!isOpen && (
          <div className="relative">
            {/* Hint Bubble */}
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full right-0 mb-4 w-[180px] bg-boho-cream rounded-2xl shadow-xl border border-boho-dark/10 p-3 cursor-pointer group/hint"
                  onClick={() => {
                    setIsOpen(true);
                    setShowHint(false);
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowHint(false);
                    }}
                    className="absolute top-2 right-2 text-boho-dark/40 hover:text-boho-dark transition-colors p-1"
                    aria-label="Hinweis schließen"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <p className="text-sm text-boho-dark font-light pr-4 text-center mt-1">Hast du eine Frage? ✨</p>
                  
                  {/* Triangle Arrow pointing down */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-boho-cream border-b border-r border-boho-dark/10 transform rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(true);
                setShowHint(false);
              }}
              className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 relative group bg-transparent"
              aria-label="Chat öffnen"
            >
              <img src={AniAvatar} alt="Ani" className="w-full h-full object-cover rounded-full" />
              
              {/* Notification Badge */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-boho-sage border-2 border-boho-cream rounded-full"></div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
