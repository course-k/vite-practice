import React, { useState, useCallback, memo } from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodosProps {
  todos: Todo[];
  addTodo: () => void;
}

const MyComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, { id: Date.now(), text: "新しいTodo" }]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const Todos: React.FC<TodosProps> = memo(({ todos, addTodo }) => {
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.text}</p>;
      })}
      <button onClick={addTodo}>Todo追加</button>
    </>
  );
});

export default MyComponent;
