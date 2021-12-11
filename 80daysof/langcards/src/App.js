import React from "react";
import Card from "./components/card/Card";
import Data from "./components/card/Data";
import "./components/card/Card.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://i.pinimg.com/564x/e3/f9/c4/e3f9c42f3b449e72123466082ae3eb18.jpg"
        alt="logo"
        id="logo"
      ></img>
      <h1>Languages</h1>
      <div className="container">
        {Data.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
