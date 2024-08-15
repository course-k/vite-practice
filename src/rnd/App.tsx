import { Rnd } from "react-rnd";

const App = () => {
  return (
    <Rnd
      style={{ border: "2px solid blue" }}
      lockAspectRatio={true}
      lockAspectRatioExtraHeight={50}
    >
      {/* 任意のコンポーネント */}
    </Rnd>
  );
};

export default App;
