import React, { useState, useEffect } from "react";
import Software from "./Software";
import Product from "./Product";
import CS from "./CS";
import Projects from "./Projects";

interface MenuProps {
  onMenuSelect: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // Track the currently active section
  const [coverVisible, setCoverVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCoverVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (section: string) => {
    // Reset all scrollable elements to their top position
    const resetScroll = (element: HTMLElement) => {
      if (element.scrollTop !== 0) {
        element.scrollTop = 0;
      }
    };

    onMenuSelect(section); // Notify parent of the selected section
    setCoverVisible(true);

    setTimeout(() => {
      // Reset window scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Find and reset all scrollable elements
      const scrollableElements = document.querySelectorAll('*');
      scrollableElements.forEach((el) => {
        const computedStyle = window.getComputedStyle(el);
        const overflowY = computedStyle.overflowY;
        const overflowX = computedStyle.overflowX;

        // Check if the element is scrollable
        if (
          (overflowY === 'scroll' || overflowY === 'auto') || 
          (overflowX === 'scroll' || overflowX === 'auto')
        ) {
          resetScroll(el as HTMLElement);
        }
      });

      setActiveSection(section); // Update active section after the transition
      setCoverVisible(false); // Hide the cover after the transition
    }, 700);
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
        return <Projects />;
    }
  };

  return (
    <>
      {/* Render the selected section's component */}
      {renderActiveComponent()}

      {/* Yellow cover */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-yellow-500 transform transition-transform duration-700 ${
          coverVisible ? "translate-y-0" : "translate-y-full"
        }`}
      />

      {/* Menu buttons */}
      <div className="flex flex-col items-end justify-end" style={{marginTop: 'auto'}}>
        {/* Show button only if it's not the active section */}
        {activeSection !== "software" && (
          <button
            className="w-full border-t-2 text-xl text-right border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 software"
            style={{ paddingRight: "20px" }}
            onClick={() => handleClick("software")}
          >
            Software Engineer.
          </button>
        )}
        {activeSection !== "product" && (
          <button
            className="w-full border-t-2 text-right text-xl border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 product"
            style={{ paddingRight: "20px" }}
            onClick={() => handleClick("product")}
          >
            Product Manager.
          </button>
        )}
        {activeSection !== "customer" && (
          <button
            className="w-full border-t-2 text-xl text-right border-neutral-100 py-4 hover:bg-yellow-500 hover:text-slate-950 customer"
            style={{ paddingRight: "20px" }}
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