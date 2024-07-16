import { useState } from "react";
import { merge } from "lodash";

// デフォルトのユーザー設定
const defaultSettings = {
  theme: {
    mode: "light",
    fontSize: "medium",
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
    },
  },
  notifications: {
    email: true,
    push: false,
  },
  language: "ja",
};

// ユーザーが変更した設定
const userSettings = {
  theme: {
    mode: "dark",
    colors: {
      primary: "#0056b3",
    },
  },
  notifications: {
    push: true,
  },
};

const MergePractice = () => {
  // デフォルト設定とユーザー設定をマージ
  const [settings, setSettings] = useState(() =>
    merge({}, defaultSettings, userSettings)
  );

  const updateLanguage = () => {
    // 既存の設定を変更せずに言語だけを更新
    setSettings((prevSettings) => merge({}, prevSettings, { language: "en" }));
  };

  return (
    <div>
      <h2>ユーザー設定</h2>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
      <button onClick={updateLanguage}>言語を英語に変更</button>
    </div>
  );
};

export default MergePractice;
