import { useState, useEffect } from "react";
import NumberIndicator from "../components/NumberIndicator";

export default function TechnologyPage({ technology }) {
  const technologyInfo = technology;
  const [currentTech, setCurrentTech] = useState(technologyInfo[0]);
  const [activeTab, setActiveTab] = useState(0);
  const [isTabletView, setIsTabletView] = useState(false);

  // Handle window resize to switch images based on viewport size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTabletView(width >= 560 && width <= 720); // Check if it's in tablet range
    };

    // Initial check on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (index) => {
    setCurrentTech(technology[index]);
    setActiveTab(index);
  };

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space Launch 101
      </h1>

      {/* Technology Image */}

      <div className="technolgy-details flex">
        {/* Number Indicator Buttons */}
        <div className="number-indicators flex" role="tablist">
          {technology.map((tech, index) => (
            <NumberIndicator
              key={index}
              techName={tech.name}
              isActive={activeTab === index}
              onChangeTechnology={handleTabChange}
              index={index}
            />
          ))}
        </div>

        {/* Technology Information */}
        <article className="technology-info flow">
          <header className="flow flow--space-small">
            <p className="text-accent fs-400 uppercase">The Terminology...</p>
            <h2 className="fs-700 uppercase ff-serif">{currentTech.name}</h2>
          </header>
          <p>{currentTech.description}</p>
        </article>
      </div>

      {isTabletView ? (
        <img src={currentTech.images.landscape} alt={`${currentTech.name}`} />
      ) : (
        <img src={currentTech.images.portrait} alt={`${currentTech.name}`} />
      )}
    </main>
  );
}
