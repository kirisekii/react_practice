import { useState } from "react";
import "./MoodChecker.css";

const Moodchecker = () => {
  const [message, setMessage] = useState("Kaip jauciates?");

  const handleMessage1 = () => {
    setMessage("-Nieko tokio");
  };

  const handleMessage2 = () => {
    setMessage("-Gerai");
  };

  const handleMessage3 = () => {
    setMessage("-Puiku");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button className="button" onClick={handleMessage1}>
        Jauciuosi prastai
      </button>
      <button className="button" onClick={handleMessage2}>
        Jauciuosi normaliai
      </button>
      <button className="button" onClick={handleMessage3}>
        Jauciuosi puikiai
      </button>
    </div>
  );
};

export default Moodchecker;
