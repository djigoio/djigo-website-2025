import React, { useState, useEffect } from "react";
import Social from "./Social";
import { FaEnvelope, FaFileSignature, FaGithub, FaLaptopCode, FaLinkedin, FaTwitter } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const socialLinks = [
    { icon: <FaEnvelope />, url: "mailto:antonio.djinav@gmail.com", title: "Email me" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/antonio-djigo/", title: " Linkedin" },
    { icon: <FaTwitter />, url: "https://x.com/brownio_", title: "Twitter" },
    { icon: <FaGithub />, url: "https://github.com/djigoio", title: "Github" },
    { icon: <FaFileSignature />, url: "https://dev.to/brownio", title: "My articles" },
    { icon: <FaLaptopCode />, url: "https://bento.me/djigo", title: "See my projects" },
  ];

  useEffect(() => {
    const checkIfTablet = () => {
      const isTabletSize =
        window.innerHeight >= 820 &&
        window.innerHeight <= 1200 &&
        window.innerWidth <= 1280;

      setIsTablet(isTabletSize);
    };

    // Run on mount
    checkIfTablet();

    // Add event listener for resize
    window.addEventListener("resize", checkIfTablet);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkIfTablet);
    };
  }, []);

  return (
    <div
      className={`fixed text-yellow-500 h-full ml-10 top-[-30px] 
        ${isTablet ? "" : "landscape:bottom-0 landscape:h-auto landscape:top-[unset]"}
      `}
    >
      <div
        className={`flex flex-col items-center justify-center h-full w-full mt-auto text-right text-4xl 
          ${isTablet ? "" : "landscape:flex-row landscape:gap-[30px] landscape:h-auto"}
          sm:flex-col
        `}
      >
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