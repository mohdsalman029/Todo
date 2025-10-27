import { RemoveIcon } from "../assets/icons";
import style from "./Display.module.css";
export const Display = ({ tasks, remove }) => {
  return (
    <div>
      <ul className={style.gap}>
        {tasks
          .filter((task) => task.trim() !== "") // ✅ skip empty tasks 
          .map((task, index) => (
            <li key={index} className={style.screen}>
              <span className={style.display}>{task}</span>
              <button onClick={() => remove(index)} className={style.button}>
                {RemoveIcon}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
