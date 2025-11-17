import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { Send, X } from 'lucide-react';

interface ChatWindowProps {
  onClose: () => void;
}

const initialMessages = [
  {
    sender: 'bot',
    text: 'Welcome to Allfather. I am ready to assist with high-level market data, supply chain analysis, and strategic insights. How may I be of service?',
  },
  {
    sender: 'user',
    text: 'Can you provide a summary of the current market trends for Q4?',
  },
  {
    sender: 'bot',
    text: 'Accessing Q4 market data. Key trends indicate a 15% increase in demand for renewable energy resources and a 5% decrease in traditional retail. Would you like a detailed report on a specific sector? Check details at https://allmarkets.org',
  },
  {
    sender: 'user',
    text: 'Yes, focus on renewable energy.',
  },
  {
    sender: 'bot',
    text: 'Generating report. The primary drivers are new government incentives and a surge in private investment. Key players are showing significant growth. I can provide a full breakdown of the competitive landscape. Do you wish to proceed?',
  },
];

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' as const };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      // Mock expert-level bot response
      setTimeout(() => {
        let botResponse = 'Thank you for your inquiry. Your request is being processed by our team of specialists. We will get back to you shortly.';

        if (inputValue.toLowerCase().includes('market data')) {
          botResponse = 'Processing your request for market data. I can provide real-time analytics, historical trends, and predictive modeling. What specific dataset are you interested in?';
        } else if (inputValue.toLowerCase().includes('supply chain')) {
          botResponse = 'I can analyze supply chain logistics, identify bottlenecks, and suggest optimizations. Please specify the product line or region you are interested in.';
        } else if (inputValue.toLowerCase().includes('report')) {
          botResponse = 'I can generate comprehensive reports on market performance, competitive analysis, and risk assessment. Please specify the parameters for your report.';
        }

        const newBotMessage = { text: botResponse, sender: 'bot' as const };
        setMessages((prev) => [...prev, newBotMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='fixed bottom-5 right-5 w-[calc(100vw-2.5rem)] h-[calc(100vh-2.5rem)] sm:w-96 sm:h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50'>
      <header className='bg-brand-blue text-white p-4 flex justify-between items-center rounded-t-lg'>
        <h3 className='font-bold text-lg'>Allfather Chatbot</h3>
        <button onClick={onClose} className='text-white hover:text-gray-200'>
          <X size={20} />
        </button>
      </header>
      <main className='flex-1 p-4 overflow-y-auto bg-gray-50'>
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
        {isTyping && (
          <ChatBubble message={{ text: '...', sender: 'bot' }} />
        )}
        <div ref={chatEndRef} />
      </main>
      <footer className='p-2 border-t border-gray-200 bg-white'>
        <form onSubmit={handleSendMessage} className='flex items-center'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Ask a question...'
            className='w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue'
            disabled={isTyping}
          />
          <button type="submit" className='ml-2 p-3 rounded-full bg-brand-blue text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-brand-blue' disabled={isTyping || !inputValue.trim()}>
            <Send size={20} />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatWindow;
