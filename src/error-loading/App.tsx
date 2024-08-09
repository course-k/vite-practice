import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataDisplay from "./DataDisplay";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App = () => {
  const [id, setId] = useState("1");
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>デモアプリ</h1>
        <select value={id} onChange={(e) => setId(e.target.value)}>
          <option value="1">アイテム1</option>
          <option value="2">アイテム2</option>
          <option value="3">アイテム3</option>
          <option value="4">無効なアイテム</option>
        </select>
        <DataDisplay id={id} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
