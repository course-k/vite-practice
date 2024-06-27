import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/child">パラメータなし</Link>
        </li>
        <li>
          <Link to="/child?param=admin">アドミン</Link>
        </li>
        <li>
          <Link to="/child?param=member">メンバー</Link>
        </li>
      </ul>
    </>
  );
};

export default App;
