import React from "react";

interface SocialProps {
  icon: React.ReactElement; // The icon component to render
  url: string;             // The URL for the social media link
}

const Social: React.FC<SocialProps> = ({ icon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-500 p-2 rounded-full inline-block hover:bg-yellow-600 focus:bg-yellow-600"
    >
      {/* Clone the icon and apply additional class styles */}
      {React.cloneElement(icon, { className: "h-6 w-6 text-black" })}
    </a>
  );
};

export default Social;