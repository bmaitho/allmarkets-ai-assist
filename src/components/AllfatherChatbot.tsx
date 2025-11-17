
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';

const AllfatherChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-5 right-5 bg-brand-blue p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green'
      >
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f1e0508-73eb-4974-80c0-f11b7eb0a5e7/allfather-chatbot-logo-v85ys4w-1763381993314.webp' alt='Allfather Chatbot Logo' className='w-8 h-8' />
      </button>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default AllfatherChatbot;
