import { useState } from "react";
import DotIndicator from "../components/DotIndicators";

export default function CrewMembersPage({ crew }) {
  const crewInfo = crew;
  const [currentCrewMember, setCurrentCrewMember] = useState(crewInfo[0]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setCurrentCrewMember(crewInfo[index]);
    setActiveTab(index);
  };

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      {/* Crew Image */}
      <picture className="crew-image-container">
        <source srcSet={currentCrewMember.images.webp} type="image/webp" />
        <img
          src={currentCrewMember.images.png}
          alt={`${currentCrewMember.name}`}
        />
      </picture>

      {/* Dot Indicators for Navigation */}
      <div className="dot-indicators flex" role="tablist">
        {crewInfo.map((member, index) => (
          <DotIndicator
            key={index}
            crewrole={member.role}
            isActive={activeTab === index}
            onChangeCrew={handleTabChange}
            index={index}
          />
        ))}
      </div>

      {/* Crew Info */}
      <article className="crew-info flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">
            {currentCrewMember.role}
          </h2>
          <p className="fs-700 uppercase ff-serif">{currentCrewMember.name}</p>
        </header>
        <p>{currentCrewMember.bio}</p>
      </article>
    </main>
  );
}
