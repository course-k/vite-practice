import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
// スタイルの定義
const SettingsLayout = styled.div`
  display: flex;
  flex-flow: column;
`;
const TopNav = styled.nav`
  width: 70vw;
  border-bottom: 1px double gray;
`;
const TopNavUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0px;
`;
const TopNavLi = styled.li`
  margin-right: 10px;
`;

// 設定ページのコンポーネント
const Settings = () => {
  return (
    <SettingsLayout>
      <h1>設定情報</h1>
      <TopNav>
        <TopNavUl>
          <TopNavLi>
            <Link to="notification">通知</Link>
          </TopNavLi>
          <TopNavLi>
            <Link to="mail">メールアドレス</Link>
          </TopNavLi>
        </TopNavUl>
      </TopNav>
      {/* 子コンポーネントを描画する */}
      <Outlet />
    </SettingsLayout>
  );
};

export default Settings;
