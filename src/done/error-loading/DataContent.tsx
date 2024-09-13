import { useData } from "./functions";

const DataContent = ({ id }: { id: string }) => {
  const { data } = useData(id);

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default DataContent;
