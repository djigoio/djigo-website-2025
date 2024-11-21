import React from 'react';


interface HeaderProps {
  title: string;
  subtitle: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle = '', logoSrc = '/logo.svg' }) => {
    return (
      <header className="bg-black shadow-md h-[100px] flex items-center justify-between px-6" style={{marginTop: '20px', marginBottom: 'auto'}}>
        <div className="flex items-center">
          <img src={logoSrc} alt="Logo" className="h-8 mr-4" />
          <div>
            <h1 className="font-bold" style={{fontSize: '20px' }}>{title}</h1>
            {subtitle && <p style={{fontSize: '16px'}} className='text-yellow-500'>{subtitle}</p>}
          </div>
        </div>
      </header>
    );
  };

export default Header;