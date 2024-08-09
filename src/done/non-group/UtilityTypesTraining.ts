// interface UserProfile {
//   name: string;
//   email: string;
//   age: number;
//   address: string;
// }

// const updateUserProfile = (userId: string, updates: Partial<UserProfile>) => {
//   // データベースの更新処理（擬似コード）
//   console.log(`userId:${userId} updates:${JSON.stringify(updates)}`);
// };

// // すべて指定
// updateUserProfile("001", {
//   name: "John",
//   email: "test@mail",
//   age: 28,
//   address: "Japan",
// });

// // 一部のみ指定
// updateUserProfile("002", {
//   name: "Kevin",
//   age: 21,
// });

interface DatabaseConfig {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
}

// デフォルト設定
const defaultConfig: DatabaseConfig = {
  host: "localhost",
  port: 5432,
};

function createConnection(dynamicConfig: DatabaseConfig): void {
  const fullConfig: Required<DatabaseConfig> = {
    host: dynamicConfig.host ?? defaultConfig.host!,
    port: dynamicConfig.port ?? defaultConfig.port!,
    username: dynamicConfig.username ?? promptUsername(),
    password: dynamicConfig.password ?? promptPassword(),
  };
  // 接続処理の模擬
  console.log(fullConfig);
}

// プロンプトを模擬するヘルパー関数
const promptUsername = () => "username"; // 実際はユーザーからの入力を受け付ける
const promptPassword = () => "password"; // 実際はユーザーからの入力を受け付ける

// 使用例
// すべて指定
createConnection({
  host: "192.168.1.1",
  port: 8081,
  username: "db_user",
  password: "db_pass",
});
// hostとportはデフォルト値、usernameとpasswardは入力値で設定
createConnection({});
