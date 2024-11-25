// MenuButtons.tsx
import React from 'react';

interface MenuButtonsProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuButtons: React.FC<MenuButtonsProps> = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-end justify-end">
      <button
        className="w-full border-b-2 text-xl text-right border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 hover:bg-yellow-500 hover:text-slate-950 software"
        style={{paddingRight: '20px'}}
        onClick={handleClick}>
        Software Engineer.
      </button>
      <button 
        className="w-full text-right text-xl border-b-2 border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 hover:bg-yellow-500 hover:text-slate-950 product"
        style={{paddingRight: '20px'}}
        onClick={handleClick}>
        Product Manager.
      </button>
      <button 
        className="w-full border-b-2 text-xl text-right border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 hover:bg-yellow-500 hover:text-slate-950 customer"
        style={{paddingRight: '20px'}}
        onClick={handleClick}>
        Customer Success.
      </button>
    </div>
  );
};

export default MenuButtons;