import React from "react";
import Social from "./Social";
import { FaEnvelope, FaFileSignature, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Sidebar: React.FC = () => {
 // Define social icons with their respective URLs
 const socialLinks = [
   { icon: <FaEnvelope />, url: "mailto:antonio.djinav@gmail.com" },
   { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/antonio-djigo/" },
   { icon: <FaTwitter />, url: "https://x.com/brownio_" },
   { icon: <FaGithub />, url: "https://github.com/djigoio" },
   { icon: <FaFileSignature />, url: "https://dev.to/brownio" },
 ];

 return (
   <div className="fixed text-yellow-500 h-full" style={{left :'0', marginLeft: '20px'}}>
     {/* Render buttons for each section */}
     <div className="flex flex-col items-center justify-center h-full w-full mt-auto text-right text-4xl">
       {socialLinks.map((link, idx) => (
         <button
           key={idx}
           className="bg-transparent border-none cursor-pointer my-4 text-2xl"
         >
           <Social icon={link.icon} url={link.url} />
         </button>
       ))}
     </div>
   </div>
 );
};

export default Sidebar;