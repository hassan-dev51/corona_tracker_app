import React from "react";
import "./App.css";
import Card from "./Components/Cards/Card";
import image from "./img/image.png";
function App() {
  return (
    <div>
      <div className="img">
        <img src={image} alt="logo" />
      </div>
      <Card />
    </div>
  );
}

export default App;
