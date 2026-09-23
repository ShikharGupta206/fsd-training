
import React, { useState } from "react";
import cat from "./images/cat.png";

function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

 
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const increaseHeight = () => {
    setHeight(height + 20);
  };

  const increaseWidth = () => {
    setWidth(width + 20);
  };

  function changeBGcolor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: "300px",
          width: "300px",
          border: "4px solid red",
          overflow: "hidden",
        }}
      >
        <img
          src={cat}
          height={height}
          width={width}
          alt="Cat"
        />
      </div>

      <div>
        <button onClick={increaseHeight}>
          Increase Height
        </button>

        <button onClick={increaseWidth}>
          Increase Width
        </button>

        <button onClick={changeBGcolor}>
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;

