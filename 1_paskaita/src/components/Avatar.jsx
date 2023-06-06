import PropTypes from "prop-types";

const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
  Math.random() * 256
)}, ${Math.floor(Math.random() * 256)}`;

const divStyle = {
  fontSize: "1.5rem",
  borderRadius: "50%",
  background: randomColor,
  padding: "10px",
  margin: "10px",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Avatar = (props) => {
  const name = props.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return <div style={divStyle}>{name}</div>;
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
