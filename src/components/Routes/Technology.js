import { useState, useEffect } from "react";

import RoutesHeader from "../UI/RoutesHeader";

import classes from "./Technology.module.css";
import launchvehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import spacecapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import launchvehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spacecapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

const launchvehicleText = `A launch vehicle or carrier rocket is a rocket-propelled vehicle
used to carry a payload from Earth's surface to space, usually to
Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
in operation. Standing 150 meters tall, it's quite an awe-inspiring
sight on the launch pad!`;

const spaceportText = `A spaceport or cosmodrome is a site for launching (or 
  receiving) spacecraft, by analogy to the seaport for ships 
  or airport for aircraft. Based in the famous Cape 
  Canaveral, our spaceport is ideally situated to take 
  advantage of the Earth’s rotation for launch.`;

const spacecapsuleText = `A space capsule is an often-crewed spacecraft that uses 
  a blunt-body reentry capsule to reenter the Earth's 
  atmosphere without wings. Our capsule is where you'll 
  spend your time during the flight. It includes a space 
  gym, cinema, and plenty of other activities to keep you 
  entertained.`;

const Technolgy = (props) => {
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("technology") > -1) {
      props.onTechnology();
    }
    window.addEventListener("resize", () => {
      setLandscape(window.innerWidth);
    });
  }, []);

  let [landscape, setLandscape] = useState(window.innerWidth);

  const [activateTechnology, setActivateTechnology] = useState({
    launchvehicle: true,
    spaceport: false,
    spacecapsule: false,
  });

  const activateLaunchVehicleHandler = () => {
    setActivateTechnology({
      launchvehicle: true,
      spaceport: false,
      spacecapsule: false,
    });
  };

  const activateSpacePortHandler = () => {
    setActivateTechnology({
      launchvehicle: false,
      spaceport: true,
      spacecapsule: false,
    });
  };

  const activateSpaceCapsuleHandler = () => {
    setActivateTechnology({
      launchvehicle: false,
      spaceport: false,
      spacecapsule: true,
    });
  };

  return (
    <section className={classes.technology}>
      <RoutesHeader number="03" label="SPACE LAUNCH 101" />
      <div className={classes["technology-content"]}>
        <ul className={classes["technology-nav"]}>
          <div
            className={`${classes["technology-links"]} ${
              activateTechnology.launchvehicle
                ? classes["techonolgy-links-active"]
                : ""
            }`}
            onClick={activateLaunchVehicleHandler}
          >
            1
          </div>
          <div
            className={`${classes["technology-links"]} ${
              activateTechnology.spaceport
                ? classes["techonolgy-links-active"]
                : ""
            }`}
            onClick={activateSpacePortHandler}
          >
            2
          </div>
          <div
            className={`${classes["technology-links"]} ${
              activateTechnology.spacecapsule
                ? classes["techonolgy-links-active"]
                : ""
            }`}
            onClick={activateSpaceCapsuleHandler}
          >
            3
          </div>
        </ul>
        <div className={classes["technology-text-box"]}>
          <h4 className={classes["technology-medium-text"]}>
            THE TERMINOLOGY ...
          </h4>
          <h2 className={classes["technology-large-text"]}>
            {activateTechnology.launchvehicle
              ? "LAUNCH VEHICLE"
              : activateTechnology.spaceport
              ? "SPACEPORT"
              : activateTechnology.spacecapsule
              ? "SPACE CAPSULE"
              : ""}
          </h2>
          <p className={classes["technology-small-text"]}>
            {activateTechnology.launchvehicle
              ? launchvehicleText
              : activateTechnology.spaceport
              ? spaceportText
              : activateTechnology.spacecapsule
              ? spacecapsuleText
              : ""}
          </p>
        </div>
        <img
          src={
            activateTechnology.launchvehicle && landscape > 1280
              ? launchvehicle
              : activateTechnology.spaceport && landscape > 1280
              ? spaceport
              : activateTechnology.spacecapsule && landscape > 1280
              ? spacecapsule
              : activateTechnology.launchvehicle && landscape < 1280
              ? launchvehicleLandscape
              : activateTechnology.spaceport && landscape < 1280
              ? spaceportLandscape
              : activateTechnology.spacecapsule && landscape < 1280
              ? spacecapsuleLandscape
              : ""
          }
          alt="Used technology"
          className={classes.image}
        />
      </div>
    </section>
  );
};

export default Technolgy;
