import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ list }) => {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return list.reduce((acc, item) => acc + item, 0);
  }, [list]);

  return (
    <div>
      <p>Sum: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default ExpensiveCalculation;
