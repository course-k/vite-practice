import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// スタイルの定義
const HomeLayout = styled.div`
  display: flex;
`;
const SideNav = styled.nav`
  width: 150px;
  height: 100vh;
  border-right: 1px solid gray;
  margin-right: 20px;
`;
const SideNavUl = styled.ul`
  list-style-type: none;
  padding: 0px;
`;
const SideNavLi = styled.li`
  margin-bottom: 10px;
`;

// ホームのページのコンポーネント
const Home = () => {
  return (
    <HomeLayout>
      <SideNav>
        <h1>メニュー</h1>
        <SideNavUl>
          <SideNavLi>
            <Link to="customer">顧客</Link>
          </SideNavLi>
          <SideNavLi>
            <Link to="settings">設定</Link>
          </SideNavLi>
          <SideNavLi>
            <Link to="/">ホームへ戻る</Link>
          </SideNavLi>
        </SideNavUl>
      </SideNav>
      {/* 子コンポーネントを描画する */}
      <Outlet />
    </HomeLayout>
  );
};

export default Home;
