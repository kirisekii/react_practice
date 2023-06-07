import React, { useState } from "react";

// i state dedame tik reiksmees, kurias norime atnaujinti
const FuncCar = () => {
  const [color, setColor] = useState("red");

  const brand = "Ford";
  const model = "Mustang";
  const year = 1974;

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>{brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default FuncCar;
