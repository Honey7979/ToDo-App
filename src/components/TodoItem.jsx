import React from "react";
import styles from "./todoItem.module.css";
export const TodoItem = ({ item, deleteItem, doneItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={item.done ? styles.done : ""}>{item.name}</span>
        <div className={styles.btn}>
          <button
            onClick={() => doneItem(item)}
            className={styles.completeButton}
          >
            y
          </button>

          <button
            onClick={() => deleteItem(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </div>
      </div>

      <hr className={styles.line} />
    </div>
  );
};
