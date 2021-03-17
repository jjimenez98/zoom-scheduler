import Task from "./Task";
import { useState, useEffect } from "react";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (props.tasks.length === 0) {
      setTasks("");
    }
  });
  return (
    <div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onUpdate={props.onUpdate}
        />
      ))}
    </div>
  );
};

export default Tasks;
