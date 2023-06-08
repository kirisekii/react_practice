import "./App.css";
import Hero from "./hero/Hero";
import Button from "./components/Button/Button";
import MoodChecker from "./components/MoodChecker/MoodChecker";

function App() {
  return (
    <div>
      <div>
        <Hero title="info here" subtitle="info here" />
      </div>
      <div className="mg-t-30 flex-box">
        <Button title="text" />
        <Button title="contained" variant="contained" />
        <Button title="outlined" variant="outlined" />
      </div>
      <div>
        <MoodChecker />
      </div>
    </div>
  );
}

export default App;
