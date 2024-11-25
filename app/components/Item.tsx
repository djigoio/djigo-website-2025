import React from 'react';

interface ItemProps {
  text: string;
  className?: string;
}

const Item: React.FC<ItemProps> = ({ text, className = '' }) => {
  const processText = (input: string) => {
    const parts = input.split(/(\*[^*]+\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        // Remove asterisks and wrap in highlighted span
        const highlightedText = part.slice(1, -1);
        return (
          <span key={index} className="text-yellow-500">
            {highlightedText}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <p className={`mb-10 text-base md:xl:text-xl ${className}`}>
      {processText(text)}
    </p>
  );
};

export default Item;