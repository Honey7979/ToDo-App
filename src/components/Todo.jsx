import { useState } from "react";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [doneCount, setDoneCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  const deleteItem = (itemToDelete) => {
    const isDone = itemToDelete.done;
    
    setTodos(todos.filter(item => item !== itemToDelete));
  
    if (isDone) {
      setDoneCount(prevCount => prevCount - 1); 
    } else {
      setPendingCount(prevCount => prevCount - 1); 
    }
  };
  
  const doneItem = (itemToDone) => {
    setTodos(todos.map(item => {
      if (item === itemToDone) {
        return { ...item, done: true };
      }
      return item;
    }));
    setDoneCount(prevCount => prevCount + 1); // Correctly update done count
    setPendingCount(prevCount => prevCount - 1); // Decrement pending count
  };

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} setPendingCount={setPendingCount} />
      <TodoList todos={todos} deleteItem={deleteItem} doneItem={doneItem} />
      <Footer Completedtasks={doneCount} Pendingtasks={pendingCount} />
    </div>
  );
};
