import React, { useState } from "react";

const FuncCar = () => {
  const [state, setState] = useState({
    brand: "ford",
    model: "Mustang",
    color: "red",
    year: 1867,
  });

  const changeColor = () => {
    setState({ ...state, color: "blue" });
  };

  return (
    <div>
      <h1>{state.brand}</h1>
      <p>
        It is a {state.color} {state.model} from {state.year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default FuncCar;
