import { useState } from "react";
import TabList from "../components/TabList";

export default function DestinationPage({ destinations }) {
  const destinationsInfo = destinations;
  const [currentDestination, setCurrentDestination] = useState(
    destinationsInfo[0]
  );
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentDestination(destinationsInfo[index]);
    setActiveTab(index);
  };

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={currentDestination.images.webp} type="image/webp" />
        <img
          src={currentDestination.images.png}
          alt={`${currentDestination.name}`}
        />
      </picture>
      <TabList
        tabs={destinationsInfo.map((destination) => destination.name)}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
      <article className="destination-info flow">
        <h2 className="uppercase fs-800 ff-serif">{currentDestination.name}</h2>
        <p>{currentDestination.description}</p>
        <div className="flex destination--meta">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">
              {currentDestination.distance}
            </p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">
              {currentDestination.travel}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
