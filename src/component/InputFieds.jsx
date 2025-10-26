import { useState } from "react";
import style from "./inputfields.module.css"

export const InputFields = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleTask = () => {
    onAddTask(task);
    setTask("");
  };

  return (
    <div className={style.InputFields}>
      <input className={style.input}
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleTask} className={style.button}>Add Task</button>
    </div>
  );
};
