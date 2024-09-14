import { useState } from "react";

import ExpensiveCalculation from "./ExpensiveCalculation";
const ParentComponent = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [toggle, setToggle] = useState(false);

  const addToList = () => {
    setList([...list, Math.floor(Math.random() * 100)]);
  };

  return (
    <div>
      <ExpensiveCalculation list={list} />
      <button onClick={addToList}>Add random number to list</button>
      <button onClick={() => setToggle(!toggle)}>
        Toggle: {toggle ? "ON" : "OFF"}
      </button>
      <p>List: {list.join(", ")}</p>
    </div>
  );
};

export default ParentComponent;
