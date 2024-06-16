import { Link } from "react-router-dom";

const TopComponent = () => {
  return (
    <>
      <h1>Top画面</h1>
      <Link to="another">別の画面へ</Link>
    </>
  );
};

export default TopComponent;
