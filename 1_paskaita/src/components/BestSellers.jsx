import PropTypes from "prop-types";

const hStyle = {
  color: "darkGrey",
  textAlign: "center",
  margin: "0",
  padding: "10px",
};

const BestSellers = (props) => {
  const name = props.name.toUpperCase();
  return <h1 style={hStyle}>{name}</h1>;
};

BestSellers.propTypes = {
  name: PropTypes.string,
};
export default BestSellers;
