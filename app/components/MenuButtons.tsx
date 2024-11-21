// MenuButtons.tsx
import React from 'react';

interface MenuButtonsProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButtons: React.FC<MenuButtonsProps> = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-end justify-end">
      <button
        className="w-full border-b-2 text-right border-white py-4 hover:bg-yellow-500 hover:text-black hover:bg-yellow-500 hover:text-black software"
        style={{fontSize: '20px', paddingRight: '20px'}}
        onClick={handleClick}>
        Software Engineer.
      </button>
      <button 
        className="w-full text-right border-b-2 border-white py-4 hover:bg-yellow-500 hover:text-black hover:bg-yellow-500 hover:text-black product"
        style={{fontSize: '20px', paddingRight: '20px'}}
        onClick={handleClick}>
        Product Manager.
      </button>
      <button 
        className="w-full border-b-2 text-right border-white py-4 hover:bg-yellow-500 hover:text-black hover:bg-yellow-500 hover:text-black customer"
        style={{fontSize: '20px', paddingRight: '20px'}}
        onClick={handleClick}>
        Customer Success.
      </button>
    </div>
  );
};

export default MenuButtons;