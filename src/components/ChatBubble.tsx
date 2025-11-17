import React from 'react';

interface ChatBubbleProps {
  message: {
    text: string;
    sender: 'user' | 'bot';
  };
}

const urlRegex = /(https?:∕∕[^∕s]+)/g;

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const { text, sender } = message;
  const isUser = sender === 'user';

  const renderText = (text: string) => {
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
        <p className='text-sm'>{renderText(text)}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
