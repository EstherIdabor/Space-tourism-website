import { useEffect, useState } from "react";
import data from "./data.json";

const { destinations, crew, technology } = data;

function App() {
  const [currentpage, setCurrrentPage] = useState("home");

  function handleChangePage(value) {
    setCurrrentPage(value.toLowerCase());
  }
  return (
    <div className={`body ${currentpage}`}>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <Header onChangePage={handleChangePage} />
      {currentpage === "home" && <HomePage />}
      {currentpage === "destination" && <DestinationPage />}
      {currentpage === "crew" && <CrewMembersPage />}
      {currentpage === "technology" && <TechnologyPage />}
    </div>
  );
}

function Header({ onChangePage }) {
  const navTab = ["Home", "Destination", "crew", "Technology"];
  const [menuButton, setMenuButton] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <header className="primary-header flex">
      <div>
        <img
          src="./assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
        />
      </div>
      <button
        className={menuButton ? `mobile-nav-toggle open` : "mobile-nav-toggle"}
        aria-controls="primary-navigation"
        aria-expanded={menuButton}
        onClick={() => setMenuButton((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation underline-indicators  ${
            menuButton ? "open" : ""
          } flex`}
        >
          {navTab.map((navItem, i) => (
            <NavTab
              num={i}
              navItem={navItem}
              key={i}
              onChangePage={() => {
                onChangePage(navItem);
                setActiveTab(i);
              }}
              isActive={activeTab === i}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavTab({ num, navItem, onChangePage, isActive }) {
  return (
    <li className="">
      <button
        className="ff-sans-cond uppercase text-white letter-spacing-2"
        aria-selected={isActive}
        onClick={onChangePage}
      >
        <span aria-hidden="true">0{num}</span>
        {navItem}
      </button>
    </li>
  );
}

function HomePage() {
  return (
    <main id="main" className="grid-container grid-container--home">
      <div>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!{" "}
        </p>
      </div>

      <div>
        <a
          href="#"
          className="large-button uppercase ff-serif  text-dark bg-white"
        >
          Explore
        </a>
      </div>
    </main>
  );
}

function DestinationPage() {
  const [destination, setDestination] = useState(destinations[0]);
  const { name, images, description, distance, travel } = destination;

  const [activeTab, setActiveTab] = useState(0);
  const navNames = destinations.map((destinationItem) => destinationItem.name);

  function handleChangeDestination(index) {
    setDestination(destinations[index]);
    setActiveTab(index);
  }

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={`image of ${name}`} />
      </picture>

      <div className="tab-list underline-indicators flex" role="tablist">
        {navNames.map((nav, index) => (
          <DestinationNav
            nav={nav}
            key={nav + index}
            index={index}
            onChangeDestination={handleChangeDestination}
            isActive={activeTab === index}
          />
        ))}
      </div>
      <article className="destination-info flow">
        <h2 className="uppercase fs-800 ff-serif">{name}</h2>
        <p>{description}</p>

        <div className="flex destination--meta">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="fs-500 ff-serif uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="fs-500 ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

function DestinationNav({ nav, index, onChangeDestination, isActive }) {
  return (
    <button
      aria-selected={isActive}
      className="uppercase ff-sans-cond text-accent letter-spacing-2"
      onClick={() => onChangeDestination(index)}
    >
      {nav}
    </button>
  );
}

function CrewMembersPage() {
  const [crewMember, setCrewMember] = useState(crew[0]);
  const [activeEl, setActiveEl] = useState(0);
  const { name, images, role, bio } = crewMember;
  const crewRole = crew.map((crew) => crew.role);

  function handleChangeCrew(index) {
    setCrewMember(crew[index]);
    setActiveEl(index);
  }

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex" aria-label="crew member list">
        {crewRole.map((crewrole, index) => (
          <DotIndicator
            crewrole={crewrole}
            key={crewrole + index}
            onChangeCrew={handleChangeCrew}
            index={index}
            isActive={activeEl === index}
          />
        ))}
      </div>

      <article className="crew-info flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{role}</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </header>
        <p>{bio}</p>
      </article>

      <picture className="crew-image-container">
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={`image of ${name}`} />
      </picture>
    </main>
  );
}

function DotIndicator({ crewrole, onChangeCrew, index, isActive }) {
  return (
    <button
      aria-selected={isActive}
      onClick={() => {
        onChangeCrew(index);
      }}
    >
      <span className="sr-only">{crewrole}</span>
    </button>
  );
}

function TechnologyPage() {
  const [technologyPage, setTechnologyPage] = useState(technology[0]);
  const { name, images, description } = technologyPage;
  const [imageSrc, setImageSrc] = useState("landscape.jpg");
  const technologyNames = technology.map((technology) => technology.name);
  const [activeTab, setActiveTab] = useState(0);

  function handleChangeTechnology(index) {
    setTechnologyPage(technology[index]);
    setActiveTab(index);
  }

  useEffect(function () {
    const updateImage = () => {
      if (window.innerWidth <= 720 && window.innerWidth >= 560) {
        setImageSrc("landscape.jpg");
      } else {
        setImageSrc("portrait.jpg");
      }
    };

    window.addEventListener("resize", updateImage);
    updateImage();

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>
      <div className="technolgy-details flex">
        <div className="number-indicators flex">
          {technologyNames.map((tech, index) => (
            <NumberIndicator
              techName={tech}
              index={index}
              key={tech + index}
              onChangeTechnology={handleChangeTechnology}
              isActive={index === activeTab}
            />
          ))}
        </div>

        <article className="technology-info flow ">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">the Terminology</h2>
            <p className="fs-700 uppercase ff-serif">{name}</p>
          </header>
          <p>{description}</p>
        </article>
      </div>
      {imageSrc == "landscape.jpg" ? (
        <img src={images.landscape} alt={`image of a ${name}`} />
      ) : (
        <img src={images.portrait} alt={`image of a ${name}`} />
      )}
    </main>
  );
}

function NumberIndicator({ techName, index, onChangeTechnology, isActive }) {
  return (
    <button
      className="bg-dark"
      aria-selected={isActive}
      onClick={() => onChangeTechnology(index)}
    >
      {" "}
      <span className="sr-only">{techName}</span>
      {index + 1}
    </button>
  );
}

export default App;
