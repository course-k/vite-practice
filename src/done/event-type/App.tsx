import React, { ChangeEvent, useState } from "react";

const COLORS = ["red", "blue", "yellow"];

const App = () => {
  const [radioVal, setRadioVal] = useState(COLORS[0]);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
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
              onChange={changeHandler}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
