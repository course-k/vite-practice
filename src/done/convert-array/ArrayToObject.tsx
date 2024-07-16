// ユーザー型の定義
interface FunctionControl {
  id: number;
  functionName: string;
  enable_create: number;
  enable_read: number;
  enable_update: number;
  enable_delete: number;
}
// ユーザーデータ
const functionControls: FunctionControl[] = [
  {
    id: 1,
    functionName: "user",
    enable_create: 1,
    enable_read: 1,
    enable_update: 0,
    enable_delete: 0,
  },
  {
    id: 1,
    functionName: "item",
    enable_create: 0,
    enable_read: 1,
    enable_update: 1,
    enable_delete: 0,
  },
  {
    id: 1,
    functionName: "customer",
    enable_create: 0,
    enable_read: 1,
    enable_update: 1,
    enable_delete: 0,
  },
];

const ArrayToObject = () => {
  const functionControlObj = functionControls.reduce((acc, curr) => {
    acc[curr["functionName"]] = {
      create: curr["enable_create"],
      read: curr["enable_read"],
      update: curr["enable_update"],
      delete: curr["enable_delete"],
    };
    return acc;
  }, {} as Record<string, Record<string, number>>);
  const hoge = {
    customer: { create: 0, read: 1, update: 1, delete: 0 },
    item: { create: 0, read: 1, update: 1, delete: 0 },
    user: { create: 1, read: 1, update: 0, delete: 0 },
  };
  console.log(functionControlObj);
  return (
    <div>
      <h2>ユーザー名一覧</h2>
      <ul></ul>
    </div>
  );
};

export default ArrayToObject;
