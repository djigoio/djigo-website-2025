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
  const [setActiveSection] = useState<number>(0);
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
        <Sidebar />

      {/* Main Content */}
   

      <div
        style={{
          flex: 1,
          background: "black",
          color: 'white',
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "right",
          fontSize: "30px",
        }} className={krona.className}
      >
           <Header
        title="Hey ✨, I'm Antonio Djigo,"
        subtitle={subtitle}
        logoSrc="/my-logo.svg"
      />

      <div className="" style={{width: '100%', marginTop:'auto'}}>
      <Menu onMenuSelect={handleMenuSelection} />
      </div>

      </div>
    </div>
  );
};

export default Index;