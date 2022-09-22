import React, { FC } from "react";
import TodoApp from "./pages/todoApp/TodoApp";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
};

export default App;
