import { useEffect, useState } from "react";
import Display from "./Display";
import Register from "../../Register";

const App = () => {
  // カウント用
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  // ラジオボタン用
  const [direction, setDirection] = useState("");

  console.log("component loaded");

  // 依存配列を省略
  useEffect(() => {
    console.log("execute useEffect");
  });

  return (
    <>
      <Display count={count} direction={direction} />
      <Register
        increment={incrementCount}
        decrement={decrementCount}
        direction={direction}
        setDirection={setDirection}
      />
    </>
  );
};

export default App;
