import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import Button from "./Button";
import "../App.css";

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="product">
      <div className="image">
        <FaSearch className="search" />
        <img src={image} alt={title} />
      </div>
      <div className="productCard">
        <div className="title">
          <p>{title}</p>
          <div className="icons">
            <div className="icon">
              <FaChevronLeft />
            </div>
            <div className="icon">
              <FaChevronRight />
            </div>
          </div>
        </div>
        <p className="price">${price.toFixed(2)}</p>
        <div className="description">{description}</div>
        <p className="availability">
          <b>Availability:</b> <span>{availability} in stock</span>
        </p>
        <div className="counter">
          <button className="result" onClick={decrease}>
            -
          </button>
          <div className="result">{count}</div>
          <button className="result" onClick={increase}>
            +
          </button>
          <Button onClick={() => alert("Added to cart")}>ADD TO CART</Button>
        </div>
        <p className="category">Category: {category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.element.isRequired,
  availability: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
