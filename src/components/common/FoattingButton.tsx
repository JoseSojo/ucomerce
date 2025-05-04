import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleWhatsAppClick = () => {
    if(!window) return;
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div className="fixed bottom-24 left-4 md:bottom-8 z-40 flex flex-col space-y-4">
      {/* Chat Window */}
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-lg w-72 md:w-80 overflow-hidden animate-slide-up">
          <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Live Chat Support</h3>
            <button onClick={toggleChat} className="text-white">
              <X size={18} />
            </button>
          </div>
          <div className="p-4 h-72 bg-gray-50 overflow-y-auto">
            <div className="bg-indigo-100 p-3 rounded-lg mb-3 max-w-[80%]">
              <p className="text-sm">Hello! How can we help you today?</p>
              <span className="text-xs text-gray-500 mt-1 block">Support Team, 2:30 PM</span>
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.468-2.419-1.491-.896-.795-1.497-1.77-1.676-2.07-.173-.3-.018-.465.13-.614.134-.135.301-.347.451-.52.146-.174.194-.3.295-.498.1-.2.049-.374-.025-.524-.075-.15-.672-1.62-.922-2.217-.24-.579-.487-.5-.672-.51-.173-.008-.371-.01-.571-.01-.2 0-.523.074-.796.375-.273.3-1.045 1.02-1.045 2.483 0 1.463 1.069 2.876 1.22 3.075.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.25-.694.25-1.289.175-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButtons;