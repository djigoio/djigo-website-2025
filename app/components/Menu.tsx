import React, { useState, useEffect } from "react";
import Software from "./Software";
import Product from "./Product";
import CS from "./CS";

interface MenuProps {
  onMenuSelect: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Track the currently active section
  const [coverVisible, setCoverVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCoverVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (section: string) => {
    onMenuSelect(section); // Notify parent of the selected section
    setCoverVisible(true);

    setTimeout(() => {
      setActiveSection(section); // Update active section after the transition
      setCoverVisible(false); // Hide the cover after the transition
    }, 500);
  };

  // Render the active component based on the selected section
  const renderActiveComponent = () => {
    switch (activeSection) {
      case "software":
        return <Software />;
      case "product":
        return <Product />;
      case "customer":
        return <CS />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Render the selected section's component */}
      {renderActiveComponent()}

      {/* Yellow cover */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-yellow-500 transform transition-transform duration-500 ${
          coverVisible ? "translate-y-0" : "translate-y-full"
        }`}
      />

      {/* Menu buttons */}
      <div className="flex flex-col items-end justify-end" style={{marginTop: 'auto'}}>
        {/* Show button only if it's not the active section */}
        {activeSection !== "software" && (
          <button
            className="w-full border-t-2 text-right border-white py-4 hover:bg-yellow-500 hover:text-black software"
            style={{ fontSize: "20px", paddingRight: "20px" }}
            onClick={() => handleClick("software")}
          >
            Software Engineer.
          </button>
        )}
        {activeSection !== "product" && (
          <button
            className="w-full border-t-2 text-right border-white py-4 hover:bg-yellow-500 hover:text-black product"
            style={{ fontSize: "20px", paddingRight: "20px" }}
            onClick={() => handleClick("product")}
          >
            Product Manager.
          </button>
        )}
        {activeSection !== "customer" && (
          <button
            className="w-full border-t-2 text-right border-white py-4 hover:bg-yellow-500 hover:text-black customer"
            style={{ fontSize: "20px", paddingRight: "20px" }}
            onClick={() => handleClick("customer")}
          >
            Customer Success.
          </button>
        )}
      </div>
    </>
  );
};

export default Menu;