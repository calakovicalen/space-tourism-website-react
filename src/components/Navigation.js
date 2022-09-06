import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

import Rectangle from "./Rectangle";
import SpaceIcon from "./SpaceIcon";

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <SpaceIcon />
      <Rectangle className={classes.rectangle} />

      <ul className={classes.menu}>
        <Link
          className={`${classes.link} ${
            props.activeState.home ? classes["active-link"] : ""
          }`}
          onClick={props.onHome}
          to="/"
        >
          <span>00</span> HOME
        </Link>
        <Link
          className={`${classes.link} ${
            props.activeState.destination ? classes["active-link"] : ""
          }`}
          onClick={props.onDestination}
          to="/destination"
        >
          <span>01</span> DESTINATION
        </Link>
        <Link
          className={`${classes.link} ${
            props.activeState.crew ? classes["active-link"] : ""
          }`}
          onClick={props.onCrew}
          to="/crew"
        >
          <span>02</span> CREW
        </Link>
        <Link
          className={`${classes.link} ${
            props.activeState.technology ? classes["active-link"] : ""
          }`}
          onClick={props.onTechnology}
          to="/technology"
        >
          <span>03</span> TECHNOLOGY
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
