import { flattenDeep } from "lodash";

// メニュー項目の型定義
type MenuItem = string | MenuItem[];

// ネストされたメニュー構造
const nestedMenu: MenuItem[] = [
  "ホーム",
  [
    "製品",
    ["電化製品", "パソコン", "スマートフォン"],
    ["家具", "椅子", "テーブル"],
  ],
  "サービス",
  ["会社概要", "社長挨拶", ["沿革", "創業story", "年表"], "アクセス"],
  "お問い合わせ",
];

// flattenDeepを使用してメニューを平坦化
const flatMenu = flattenDeep(nestedMenu);

const Navigation = () => (
  <nav>
    <h2>サイトマップ</h2>
    <ul>
      {flatMenu.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </nav>
);

const FlattenDeep = () => <Navigation />;

export default FlattenDeep;
