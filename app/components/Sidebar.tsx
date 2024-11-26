import React from "react";
import Social from "./Social";
import { FaEnvelope, FaFileSignature, FaGithub, FaLaptopCode, FaLinkedin, FaTwitter } from "react-icons/fa";

const Sidebar: React.FC = () => {
 const socialLinks = [
   { icon: <FaEnvelope />, url: "mailto:antonio.djinav@gmail.com", title: "Email me" },
   { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/antonio-djigo/",title:" Linkedin" },
   { icon: <FaTwitter />, url: "https://x.com/brownio_",title:"Twitter" },
   { icon: <FaGithub />, url: "https://github.com/djigoio",title:"Github" },
   { icon: <FaFileSignature />, url: "https://dev.to/brownio",title:"My articles" },
   { icon: <FaLaptopCode />, url: "https://bento.me/djigo",title:"See my projects" },
 ];

 return (
<div className="fixed text-yellow-500 h-full ml-10 min-[380px]:top-[-30px]">
<div className="flex flex-col items-center justify-center h-full w-full mt-auto text-right text-4xl">
       {socialLinks.map((link, idx) => (
         <button
           key={idx}
           className="bg-transparent border-none cursor-pointer my-3 sm:my-4 text-2xl"
         >
           <Social icon={link.icon} url={link.url} title={link.title} />
         </button>
       ))}
     </div>
   </div>
 );
};

export default Sidebar;