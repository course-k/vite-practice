// propsの型
interface DisplayProps {
  count: number;
  direction: string;
}
const Display = ({ count, direction }: DisplayProps) => {
  return (
    <>
      <div>Count:{count}</div>
      <div>Direction:{direction}</div>
    </>
  );
};

export default Display;
