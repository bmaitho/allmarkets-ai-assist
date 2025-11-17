
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';

const SokoBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-5 right-5 bg-brand-blue p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green'
      >
        <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/2f1e0508-73eb-4974-80c0-f11b7eb0a5e7/sokobot-logo-67510rt-1763380766583.webp' alt='SokoBot Logo' className='w-8 h-8' />
      </button>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default SokoBot;
