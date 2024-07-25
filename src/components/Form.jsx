import { useState } from "react";
import styles from "./form.module.css";

export const Form = ({ todos, setTodos, setPendingCount }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    setPendingCount(prevCount => prevCount + 1);
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.inputbox}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter to do item"
        />
        <button className={styles.mordernbutton} type="submit">submit</button>
      </div>
    </form>
  );
};

