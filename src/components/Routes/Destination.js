import { useState, useEffect } from "react";

import RoutesHeader from "../UI/RoutesHeader";

import classes from "./Destination.module.css";

import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

const moonText = `See our planet as you've never seen it before. A perfect relaxing
trip away to help regain perspective and come back refreshed. While
you're there, take in some history by visiting the Luna 2 and Apollo
11 landing sites.`;

const marsText = `Don't forget to pack your hiking boots. You'll need them to 
tackle Olympus Mons, the tallest planetary mountain in 
our solar system. It's two and a half times the size of 
Everest!`;

const europaText = `The smallest of the four Galilean moons orbiting Jupiter,
Europa is a winter lover's dream. With and icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple
relaxation in your snug wintery cabin.`;

const titanText = `The only moon known to have a dense atmosphere other 
then Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking
views of the Rings of Saturn.`;

const Destination = (props) => {
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("destination") > -1) {
      props.onDestination();
    }
  }, []);

  const [planetActive, setPlanetActive] = useState({
    moon: true,
    mars: false,
    europa: false,
    titan: false,
  });

  const setMoonHandler = () => {
    setPlanetActive({
      moon: true,
      mars: false,
      europa: false,
      titan: false,
    });
  };

  const setMarsHandler = () => {
    setPlanetActive({
      moon: false,
      mars: true,
      europa: false,
      titan: false,
    });
  };

  const setEuropaHandler = () => {
    setPlanetActive({
      moon: false,
      mars: false,
      europa: true,
      titan: false,
    });
  };

  const setTitanHandler = () => {
    setPlanetActive({
      moon: false,
      mars: false,
      europa: false,
      titan: true,
    });
  };

  return (
    <section className={classes.destination}>
      <RoutesHeader number="01" label="PICK YOUR DESTINATION" />
      <div className={classes["destination-content"]}>
        <img
          src={
            planetActive.moon
              ? moon
              : planetActive.mars
              ? mars
              : planetActive.europa
              ? europa
              : planetActive.titan
              ? titan
              : ""
          }
          alt="Moon"
        />
        <div className={classes["description-container"]}>
          <ul className={classes["description-nav"]}>
            <li
              className={`${classes["description-link"]} ${
                planetActive.moon ? classes["description-link-active"] : ""
              }`}
              onClick={setMoonHandler}
            >
              MOON
            </li>
            <li
              className={`${classes["description-link"]} ${
                planetActive.mars ? classes["description-link-active"] : ""
              }`}
              onClick={setMarsHandler}
            >
              MARS
            </li>
            <li
              className={`${classes["description-link"]} ${
                planetActive.europa ? classes["description-link-active"] : ""
              }`}
              onClick={setEuropaHandler}
            >
              EUROPA
            </li>
            <li
              className={`${classes["description-link"]} ${
                planetActive.titan ? classes["description-link-active"] : ""
              }`}
              onClick={setTitanHandler}
            >
              TITAN
            </li>
          </ul>
          <h2 className={classes["description-header"]}>
            {planetActive.moon
              ? "MOON"
              : planetActive.mars
              ? "MARS"
              : planetActive.europa
              ? "EUROPA"
              : planetActive.titan
              ? "TITAN"
              : ""}
          </h2>
          <p className={classes["description-text"]}>
            {planetActive.moon
              ? moonText
              : planetActive.mars
              ? marsText
              : planetActive.europa
              ? europaText
              : planetActive.titan
              ? titanText
              : ""}
          </p>

          <div className={classes["description-footer"]}>
            <p>
              <span>AVG. DISTANCE</span>
              {planetActive.moon
                ? "384,400 KM"
                : planetActive.mars
                ? "255 MIL. KM"
                : planetActive.europa
                ? "628 MIL. KM"
                : planetActive.titan
                ? "1.6 BIL. KM"
                : ""}
            </p>
            <p>
              <span>EST. TRAVEL TIME</span>
              {planetActive.moon
                ? "3 DAYS"
                : planetActive.mars
                ? "9 MONTHS"
                : planetActive.europa
                ? "3 YEARS"
                : planetActive.titan
                ? "7 YEARS"
                : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
