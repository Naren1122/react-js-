//bg changer.js
// button should be in button middle of the screen and should change the background color of the div
import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("olive");
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-end items-center pb-8"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap  justify-center  items-center gap-4 mb-8">
        <button
          onClick={() => changeColor("red")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => changeColor("blue")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => changeColor("green")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => changeColor("yellow")}
          className="px-6 py-3 text-gray-800 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => changeColor("olive")}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
      </div>
    </div>
  );
};

export default BgChanger;
