import { MessageCircle, Instagram, Facebook } from "lucide-react";

const FloatingWhatsApp = () => {
  const scrollToForm = () => {
    const element = document.getElementById('cotacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-2 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3 max-w-[60px] md:max-w-none">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/miketur_"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-floating transition-all duration-300 hover:scale-110 group"
        aria-label="Instagram"
      >
        <Instagram className="w-6 h-6" />
        <span className="sr-only">Siga no Instagram</span>
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={scrollToForm}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-floating transition-all duration-300 hover:scale-110 group"
        aria-label="Solicitar cotação"
      >
        <MessageCircle className="w-7 h-7" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Solicitar cotação
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;