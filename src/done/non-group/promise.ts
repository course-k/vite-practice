function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // APIリクエストをシミュレート
    setTimeout(() => {
      if (userId > 0) {
        // 成功: ユーザーデータを返す
        resolve({
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        });
      } else {
        // 失敗: エラーを返す
        reject(new Error("Invalid user ID"));
      }
    }, 1000); // 1秒後に結果を返す
  });
}
const userData = fetchUserData(1);
userData
  .then((user) => {
    console.log("ユーザーデータを取得しました:", user);
  })
  .catch((error) => {
    console.error("エラーが発生しました:", error.message);
  });
