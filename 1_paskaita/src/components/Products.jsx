import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; //  kodai ikonoms - react-icons.github.io

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
  const [rate, setRate] = useState(0);

  return (
    <div style={divTevinis}>
      <div style={divStyle}>
        <p style={productStyle}>{props.product}</p>
        <p style={productNameStyle}>{props.name.toUpperCase()}</p>
        <div>
          {rate >= 1 ? (
            <FaStar
              onClick={() =>
                setRate((previousRate) => (previousRate === 1 ? 0 : 1))
              }
            />
          ) : (
            <FaRegStar onClick={() => setRate(1)} />
          )}

          {rate >= 2 ? (
            <FaStar
              onClick={() =>
                setRate((previousRate) => (previousRate === 2 ? 0 : 2))
              }
            />
          ) : (
            <FaRegStar onClick={() => setRate(2)} />
          )}

          {rate >= 3 ? (
            <FaStar
              onClick={() =>
                setRate((previousRate) => (previousRate === 3 ? 0 : 3))
              }
            />
          ) : (
            <FaRegStar onClick={() => setRate(3)} />
          )}

          {rate >= 4 ? (
            <FaStar
              onClick={() =>
                setRate((previousRate) => (previousRate === 4 ? 0 : 4))
              }
            />
          ) : (
            <FaRegStar onClick={() => setRate(4)} />
          )}

          {rate >= 5 ? (
            <FaStar
              onClick={() =>
                setRate((previousRate) => (previousRate === 5 ? 0 : 5))
              }
            />
          ) : (
            <FaRegStar onClick={() => setRate(5)} />
          )}
        </div>
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
