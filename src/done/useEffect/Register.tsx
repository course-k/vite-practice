import React from "react";
import { ChangeEvent } from "react";

// ラジオボタン定数
const VALUES = ["left", "right"];

// propsの型
interface RegisterProps {
  increment: () => void;
  decrement: () => void;
  direction: string;
  setDirection: (direction: string) => void;
}

const Register = ({
  increment,
  decrement,
  direction,
  setDirection,
}: RegisterProps) => {
  // ラジオボタン変更処理
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDirection(event.currentTarget.value);
  };

  return (
    <>
      <div>
        <button onClick={increment}>count up</button>
        <button onClick={decrement}>count down</button>
      </div>
      <div>
        {VALUES.map((value) => {
          return (
            <React.Fragment key={value}>
              <label htmlFor={value}>{value}</label>
              <input
                type="radio"
                name="direction"
                id={value}
                value={value}
                checked={value === direction}
                onChange={handleChange}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Register;
