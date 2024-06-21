import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomizeLink = styled(Link)`
  text-decoration: none;
  border: 2px solid gray;
  padding: 5px;
  border-radius: 10px;
  color: black;
  font-size: 20px;
`;

const App = () => {
  return (
    <>
      <h1>App</h1>
      <CustomizeLink to="/other">otherへ</CustomizeLink>
    </>
  );
};

export default App;
