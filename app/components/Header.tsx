import React from 'react';


interface HeaderProps {
  title: string;
  subtitle: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle = '', logoSrc = '/header.png' }) => {
    return (
      <header className="shadow-md h-[100px] flex items-center justify-between px-6" style={{
        alignSelf:'flex-start', width:'100%', marginTop: '20px',
        }}>
        <div className="flex items-center" style={{width: '100%', justifyContent: 'space-between'}}>
          <img src={logoSrc} alt="my head :)" className="h-8 mr-4" style={{
            width:'100px', height:'auto', rotate:'10deg',     borderBottom: "1px solid rgb(234 179 8)"
        }} />
          <div>
            <h1 className="font-bold text-right" style={{fontSize:'1.3rem'}} >{title}</h1>
            {subtitle && <p  className='text-base text-right text-yellow-500'>{subtitle}</p>}
          </div>
        </div>
      </header>
    );
  };

export default Header;