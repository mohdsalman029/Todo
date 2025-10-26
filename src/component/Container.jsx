import { useState } from "react";
import { Display } from "./Display";
import { InputFields } from "./InputFieds";
import style from "./container.module.css";

export const Container = () => {
  const [tasks, setTasks] = useState([]);

  const handlremove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={style.Container}>
      <div className={style.displayContainer}>
        <Display tasks={tasks} remove={handlremove} />
      </div>
      <div className={style.InputFieldsContainer}>
        <InputFields onAddTask={addTask} />
      </div>
    </div>
  );
};
