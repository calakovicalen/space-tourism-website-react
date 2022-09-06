import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Routes/Home";
import Destination from "./components/Routes/Destination";
import Crew from "./components/Routes/Crew";
import Technolgy from "./components/Routes/Technology";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [activeState, setActiveState] = useState({
    home: false,
    destination: false,
    crew: false,
    technology: false,
  });

  const activateHomeHandler = () => {
    setActiveState({
      home: true,
      destination: false,
      crew: false,
      technology: false,
    });
  };

  const activateDestinationHandler = () => {
    setActiveState({
      home: false,
      destination: true,
      crew: false,
      technology: false,
    });
  };

  const activateCrewHandler = () => {
    setActiveState({
      home: false,
      destination: false,
      crew: true,
      technology: false,
    });
  };

  const activateTechnologyHandler = () => {
    setActiveState({
      home: false,
      destination: false,
      crew: false,
      technology: true,
    });
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onHome={activateHomeHandler}
              onDestination={activateDestinationHandler}
              activeState={activeState}
            />
          }
        />
        <Route
          path="/destination"
          element={<Destination onDestination={activateDestinationHandler} />}
        />
        <Route path="/crew" element={<Crew onCrew={activateCrewHandler} />} />
        <Route
          path="/technology"
          element={<Technolgy onTechnology={activateTechnologyHandler} />}
        />
      </Routes>
      <Navigation
        activeState={activeState}
        onHome={activateHomeHandler}
        onDestination={activateDestinationHandler}
        onCrew={activateCrewHandler}
        onTechnology={activateTechnologyHandler}
      />
    </div>
  );
}

export default App;
