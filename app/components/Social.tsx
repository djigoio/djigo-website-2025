"use client";

import React, { useState, useEffect } from "react";

interface SocialProps {
  icon: React.ReactElement;
  url: string;
  title: string;
}

const Social: React.FC<SocialProps> = ({ icon, url, title }) => {
  const [isSmallPhone, setIsSmallPhone] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Detect tablets specifically based on screen dimensions (iPads or tablets)
      const isTablet = window.innerHeight >= 820 && window.innerHeight <= 1200 && window.innerWidth <= 1280;

      setIsSmallPhone(!isTablet && window.innerHeight <= 800); // Exclude tablets from being "small phones"
      setIsLandscape(
        isMobile &&
        !isTablet && // Exclude tablets from landscape restrictions
        window.innerWidth > window.innerHeight &&
        window.innerWidth <= 1024 // Typical max width for phones in landscape
      );
    };

    // Check initial screen size and orientation
    checkScreenSize();

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Determine if the link should be hidden
  const shouldHide =
    isSmallPhone &&
    (title === "Twitter" || title === "My articles") &&
    !isLandscape;

  return (
    <a
      href={url}
      target="_blank"
      title={title}
      rel="noopener noreferrer"
      className={`
        bg-yellow-500 p-2 rounded-full inline-block 
        hover:bg-neutral-100 focus:bg-yellow-600
        ${shouldHide ? "hidden" : ""}
      `}
    >
      {React.cloneElement(icon, { className: "h-6 w-6 text-slate-950" })}
    </a>
  );
};

export default Social;
