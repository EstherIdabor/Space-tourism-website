import { useState } from "react";

export default function Header({ currentPage, onChangePage }) {
  const [menuButton, setMenuButton] = useState(false);
  const navTabs = ["Home", "Destination", "Crew", "Technology"];

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
        className={`mobile-nav-toggle ${menuButton ? "open" : ""}`}
        aria-controls="primary-navigation"
        aria-expanded={menuButton}
        onClick={() => setMenuButton((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          role="tablist"
          className={`primary-navigation underline-indicators flex ${
            menuButton ? "open" : ""
          }`}
        >
          {navTabs.map((tab, index) => (
            <NavTab
              key={tab}
              label={tab}
              isActive={currentPage.toLowerCase() === tab.toLowerCase()}
              onClick={() => {
                onChangePage(tab.toLowerCase());
                setMenuButton(false); // Close menu on selection
              }}
              index={index} // Passing index for aria-hidden
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavTab({ label, isActive, onClick, index }) {
  return (
    <li>
      <button
        className={`ff-sans-cond uppercase text-white letter-spacing-2 ${
          isActive ? "active" : ""
        }`}
        role="tab"
        aria-selected={isActive}
        onClick={onClick}
      >
        <span aria-hidden="true">{`0${index}`}</span>
        {label}
        {/* Hidden from screen readers */}
      </button>
    </li>
  );
}
