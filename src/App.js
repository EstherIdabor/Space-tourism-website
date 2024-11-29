import { useState } from "react";
import data from "./data.json";

import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import TechnologyPage from "./pages/TechnologyPage";
import CrewMembersPage from "./pages/CrewMembersPage";
import Header from "./components/Header";

const { destinations, crew, technology } = data;

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className={`body ${currentPage}`}>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <Header currentPage={currentPage} onChangePage={setCurrentPage} />

      {currentPage === "home" && <HomePage />}
      {currentPage === "destination" && (
        <DestinationPage destinations={destinations} />
      )}
      {currentPage === "crew" && <CrewMembersPage crew={crew} />}
      {currentPage === "technology" && (
        <TechnologyPage technology={technology} />
      )}
    </div>
  );
}
