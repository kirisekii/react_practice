import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import "./App.css";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import BestSellers from "./components/BestSellers";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const name = "Kristina";

  function getName() {
    return "Darius";
  }

  const getNameV2 = () => {
    return "Dariukas";
  };

  const surname = getNameV2();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn((previousValue) => !previousValue);
  };
  return (
    <div>
      <Welcome isLoggedIn={loggedIn} />
      <button onClick={handleLogIn}>{loggedIn ? "LogOut" : "logIn"}</button>
      <Welcome isLoggedIn={true} />

      <h1>Kristina</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getNameV2()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="click me" />
      <FuncButton title="spausk mane" />
      <FuncButton title="cia nespausk" />
      <FuncDiv />
      <ClassButton name="Mygtuko tekstas" />
      <ClassButton name="mygtukas" />
      <ClassDiv />

      <Greeting name="Kristina" />
      <Greeting />

      <Avatar name="Krisina Kybartaite" />
      <Avatar name="Darius Damulis" />
      <Avatar name="Krisina Kybartaite Damule" />

      <Card
        imageUrl="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-732x549-thumbnail.jpg"
        title="Lizard"
        subtitle="lizard lizard lizard lizar"
      />

      <BestSellers name="best sellers" />
      <Products product="Canvases" name="Off-white air jordan" price="32-120" />
      <Products
        product="Posters"
        name="yeezy booost 350 v2 frozen"
        price="16.00E - 32.00E"
      />
      <Products product="Stickers" name="Yeezy 350 zebra sticker" price="5 E" />
      <Products
        product="Adidas"
        name="Adidas Yeezy 350 zebra poster"
        price="16.00E - 32.00E"
      />
    </div>
  );
}

export default App;
