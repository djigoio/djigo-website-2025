import React from 'react';

interface ItemProps {
  text: string;
  highlightedWords?: string[];
  className?: string;
}

const Item: React.FC<ItemProps> = ({ text, className = '' }) => {
  return (
    <p className={className} style={{marginBottom: '40px', fontSize:'18px'}}>
      {text}
    </p>
  );
};

export default Item;