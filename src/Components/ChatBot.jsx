import { useState } from "react";
import { chatbot } from "../assets/chatbotData";
import { MessageCircle } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="fixed bottom-8 left-8 z-60">
      {!isOpen ? (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center 
            shadow-[0_0_15px_3px_rgba(192,132,252,0.8)] 
            transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            aria-label="Open chatbot"
            title="Ask Chatbot"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 
            bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Ask Chatbot
          </div>
        </div>
      ) : (
        <div className="relative w-80 max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
              💬 Chatbot
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-red-500 hover:text-red-700 font-bold focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded"
              aria-label="Close chatbot"
            >
              ✖
            </button>
          </div>

          <div className="space-y-2">
            {chatbot.map(({ question, answer }, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left bg-gray-100 dark:bg-gray-800 text-high-contrast p-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-800 transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                  aria-expanded={openIndex === idx}
                  aria-controls={`answer-${idx}`}
                >
                  {question}
                </button>
                {openIndex === idx && (
                  <div id={`answer-${idx}`} className="mt-2 ml-2 text-sm bg-purple-50 dark:bg-purple-900 p-2 rounded text-high-contrast">
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;