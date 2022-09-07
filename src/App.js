import React from "react";
import "./App.css";
import Card from "./Components/Cards/Card";
import Chart from "./Components/Chart/Chart";
import Counter from "./Components/Counter/Counter";
import image from "./img/image.png";
function App() {
  return (
    <div>
      <div className="img">
        <img src={image} alt="logo" />
      </div>
      <Card />
      <Counter />
      <Chart />
    </div>
  );
}

export default App;
