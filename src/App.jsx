import React from "react";
import { Todo } from "./components/Todo";
import { Header } from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <div className="waves-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default App;
