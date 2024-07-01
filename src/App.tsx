import React, { MouseEvent, useState } from "react";
import { ChangeEvent } from "react";

const COLORS = ["red", "blue", "yellow"];

const App = () => {
  const [radioVal, setRadioVal] = useState(COLORS[0]);
  const clickHandler = (event: MouseEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    console.log(event.currentTarget.value);
  };
  return (
    <>
      {COLORS.map((color) => {
        return (
          <React.Fragment key={color}>
            <label htmlFor={color}>{color}</label>
            <input
              type="radio"
              id={color}
              checked={color === radioVal}
              value={color}
              name="colors"
              onChange={clickHandler}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
