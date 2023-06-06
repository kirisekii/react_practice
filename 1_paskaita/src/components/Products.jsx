import PropTypes from "prop-types";

const divTevinis = {
  display: "flex",
  float: "left",
};

const divStyle = {
  width: "22vw",
  margin: "1rem",
};

const productStyle = {
  fontFamily: "Arial",
  color: "grey",
  margin: "0.5px",
};

const productNameStyle = {
  fontFamily: "Arial",
  color: "black",
  fontSize: "larger",
  margin: "0.5px",
};

const productPriceStyle = {
  color: "black",
  fontWeight: "bold",
  margin: "0.5px",
};

const Products = (props) => {
  return (
    <div style={divTevinis}>
      <div style={divStyle}>
        <p style={productStyle}>{props.product}</p>
        <p style={productNameStyle}>{props.name.toUpperCase()}</p>
        <p style={productPriceStyle}>{props.price}</p>
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Products;
