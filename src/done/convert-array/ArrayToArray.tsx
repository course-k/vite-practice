// ユーザー型の定義
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
// ユーザーデータ
const users: User[] = [
  { id: 1, name: "田中太郎", email: "tanaka@example.com", age: 28 },
  { id: 2, name: "佐藤花子", email: "sato@example.com", age: 35 },
  { id: 3, name: "鈴木一郎", email: "suzuki@example.com", age: 42 },
];

const App = () => {
  const userNames = users.map((user) => user.name);

  return (
    <div>
      <h2>ユーザー名一覧</h2>
      <ul>
        {userNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
