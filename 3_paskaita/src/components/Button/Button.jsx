import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ title, variant = "text" }) => {
  return <button className={`btn ${variant}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

export default Button;
