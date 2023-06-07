import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div>
      <h2>Class</h2>
      <Car />
      <h2>Function</h2>

      <FuncCar />

      <FuncBestCar />

      <Counter />
    </div>
  );
};

export default App;
