import React from "react";
import { TodoItem } from "./TodoItem";
import styles from "./todolist.module.css";

export const TodoList = ({ todos, deleteItem, doneItem }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item.name} item={item} deleteItem={deleteItem} doneItem={doneItem}/>
      ))}
    </div>
  );
};
