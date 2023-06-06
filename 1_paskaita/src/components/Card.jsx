import PropTypes from "prop-types";

const divStyle = {
  width: "300px",
  margin: "1rem",
  borderRadius: "10px",
  border: "1px black solid",
};

const hStyle = {
  padding: "10px",
  fontFamily: "Arial",
  margin: "10px",
};

const imgStyle = {
  objectFit: "cover",
  width: "100%",
  borderRadius: "10px 10px 0 0",
};

const pStyle = {
  color: "grey",
  textAlign: "justify",
  margin: "0",
  padding: "10px",
};

function Card(props) {
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.imageUrl} alt={props.title} />
      <h2 style={hStyle}>{props.title}</h2>
      <p style={pStyle}>{props.subtitle}</p>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
