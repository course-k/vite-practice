import { useSuspenseQuery } from "@tanstack/react-query";

interface DataItem {
  id: string;
  title: string;
  description: string;
}

const mockData: Record<string, DataItem> = {
  "1": {
    id: "1",
    title: "最初のアイテム",
    description: "これは最初のアイテムです",
  },
  "2": {
    id: "2",
    title: "2番目のアイテム",
    description: "これは2番目のアイテムです",
  },
  "3": {
    id: "3",
    title: "3番目のアイテム",
    description: "これは3番目のアイテムです",
  },
};

export const fetchData = async (id: string): Promise<DataItem> => {
  // 擬似的な遅延を追加
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (id in mockData) {
    return mockData[id];
  }
  throw new Error("データが見つかりません");
};

export const useData = (id: string) => {
  return useSuspenseQuery({
    queryKey: ["data", id],
    queryFn: () => fetchData(id),
  });
};
