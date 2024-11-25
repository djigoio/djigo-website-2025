"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Header  from "./components/Header";
import { Krona_One } from 'next/font/google'

const krona = Krona_One({
  weight: '400',
  subsets: ['latin'],
})

const Index: React.FC = () => {
  const [subtitle, setSubtitle] = useState('');

  const handleMenuSelection = (section: string) => {
    setTimeout(() => {switch(section) {
      case 'software':
        setSubtitle('Software Engineer.');
        break;
      case 'product':
        setSubtitle('Product Manager.');
        break;
      case 'customer':
        setSubtitle('Customer Success.');
        break;
      default:
        setSubtitle('');
    }}, 500)
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Main Content */}
      <div
        style={{
          backgroundColor: "rgb(2 6 23)",
          color: 'rgb(245 245 245)',
          width: "100%",
          fontSize: "30px",
          display:'flex',
          flexFlow: 'column',
          justifyContent: 'space-between',
        }}   className={`bg-djigo ${krona.className}` }

      >
           <Header
        title="Hey ✨, I'm Antonio Djigo,"
        subtitle={subtitle}
        logoSrc="/header.webp"
      />
        <Sidebar />
      <div className="" style={{width: '100%', marginTop: 'auto',     height: '100%', display:'flex', flexFlow:'column' }}>
        <Menu onMenuSelect={handleMenuSelection} />
      </div>

      </div>
    </div>
  );
};

export default Index;