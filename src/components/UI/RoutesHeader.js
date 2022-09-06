import classes from "./RoutesHeader.module.css";

const RoutesHeader = (props) => {
  return (
    <h2 className={classes.header}>
      <span>{props.number}</span> {props.label}
    </h2>
  );
};

export default RoutesHeader;
