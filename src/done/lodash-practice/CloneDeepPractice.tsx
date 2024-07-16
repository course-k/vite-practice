import { useState } from "react";
import _ from "lodash";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const CloneDeepPractice = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "タスク1", completed: false },
    { id: 2, title: "タスク2", completed: false },
    { id: 3, title: "タスク3", completed: false },
  ]);

  const toggleTask = (id: number) => {
    const newTasks = _.cloneDeep(tasks);
    const task = newTasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      setTasks(newTasks);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} onClick={() => toggleTask(task.id)}>
          {task.title} - {task.completed ? "完了" : "未完了"}
        </li>
      ))}
    </ul>
  );
};

export default CloneDeepPractice;
