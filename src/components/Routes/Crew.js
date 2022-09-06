import { useState, useEffect } from "react";

import RoutesHeader from "../UI/RoutesHeader";

import classes from "./Crew.module.css";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

const douglasText = `Douglas Gerald Hurley is an American engineer, former Marine Corps
pilot and former NASA astronaut. He launched into space for the
third time as commander of Crew Dragon Demo-2`;

const markText = `Mark Richard Shuttleworth is the founder and CEO of
Canonical, the company behind the Linux-based Ubuntu
operating system. Shuttleworth became the first South
African to travel to space as space tourist.`;

const victorText = `Pilot on the first operational flight of the SpaceX Crew
Dragon to the International Space Station. Glover is a 
commander in the U.S. Navy where he pilots an F/A-18. He
was a crew member of Expedition64, and served as station systems flight engineer.`;

const anoushehText = `Anousheh Ansari is an Iranian American engineer and
co-foudner of Prodea Systems. Ansari was the fourth
self-funded space tourist, the first self-funded woman to
fly to the ISS, and the first Iranian in space.`;

const Crew = (props) => {
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("crew") > -1) {
      props.onCrew();
    }
  }, []);

  const [crewActive, setCrewActive] = useState({
    douglas: true,
    mark: false,
    victor: false,
    anousheh: false,
  });

  const setDouglasHandler = () => {
    setCrewActive({
      douglas: true,
      mark: false,
      victor: false,
      anousheh: false,
    });
  };

  const setMarkHandler = () => {
    setCrewActive({
      douglas: false,
      mark: true,
      victor: false,
      anousheh: false,
    });
  };

  const setVictorHandler = () => {
    setCrewActive({
      douglas: false,
      mark: false,
      victor: true,
      anousheh: false,
    });
  };

  const setAnoushehHandler = () => {
    setCrewActive({
      douglas: false,
      mark: false,
      victor: false,
      anousheh: true,
    });
  };

  return (
    <section className={classes.crew}>
      <RoutesHeader number="02" label="MEET YOUR CREW" />
      <div className={classes["crew-content"]}>
        <div className={classes["description-container"]}>
          <h3 className={classes["description-medium-text"]}>
            {crewActive.douglas
              ? "COMMANDER"
              : crewActive.mark
              ? "MISSION SPECIALIST"
              : crewActive.victor
              ? "PILOT"
              : crewActive.anousheh
              ? "FLIGHT ENGINEER"
              : ""}
          </h3>
          <h2 className={classes["description-large-text"]}>
            {crewActive.douglas
              ? "DOUGLAS HURLEY"
              : crewActive.mark
              ? "MARK SHUTTLEWORTH"
              : crewActive.victor
              ? "VICTOR GLOVER"
              : crewActive.anousheh
              ? "ANOUSHEH ANSARI"
              : ""}
          </h2>
          <p className={classes["description-small-text"]}>
            {crewActive.douglas
              ? douglasText
              : crewActive.mark
              ? markText
              : crewActive.victor
              ? victorText
              : crewActive.anousheh
              ? anoushehText
              : ""}
          </p>
        </div>
        <ul className={classes["crew-nav"]}>
          <div
            className={`${classes["crew-link"]} ${
              crewActive.douglas ? classes["crew-link-active"] : ""
            }`}
            onClick={setDouglasHandler}
          ></div>
          <div
            className={`${classes["crew-link"]} ${
              crewActive.mark ? classes["crew-link-active"] : ""
            }`}
            onClick={setMarkHandler}
          ></div>
          <div
            className={`${classes["crew-link"]} ${
              crewActive.victor ? classes["crew-link-active"] : ""
            }`}
            onClick={setVictorHandler}
          ></div>
          <div
            className={`${classes["crew-link"]} ${
              crewActive.anousheh ? classes["crew-link-active"] : ""
            }`}
            onClick={setAnoushehHandler}
          ></div>
        </ul>
      </div>
      <img
        src={
          crewActive.douglas
            ? douglas
            : crewActive.mark
            ? mark
            : crewActive.victor
            ? victor
            : crewActive.anousheh
            ? anousheh
            : ""
        }
        alt="Crew member"
        className={classes["crew-image"]}
      />
    </section>
  );
};

export default Crew;
