import { useEffect } from "react";
import classes from "./Home.module.css";

const Home = (props) => {
  useEffect(() => {
    props.onHome();
  }, []);

  return (
    <section className={classes.home}>
      <div className={classes["text-box"]}>
        <p className={classes["medium-text"]}>SO, YOU WANT TO TRAVEL TO</p>
        <p className={classes["big-text"]}>SPACE</p>
        <p className={classes["small-text"]}>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <a href="/destination" onClick={props.onDestination}>
        <div className={classes["big-circle"]}>
          <span>EXPLORE</span>
          <div className={classes["big-circle-outline"]}></div>
        </div>
      </a>
    </section>
  );
};

export default Home;
