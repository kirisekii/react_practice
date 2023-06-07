import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <button onClick={increment}>+1</button>
      <h2>{count}</h2>
      <button onClick={decement}>-1</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
};

export default Counter;
