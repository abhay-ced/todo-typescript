import React, { FC, useState } from "react";
import TodoApp from "./pages/todoApp/TodoApp";
import Taxonomy from "./components/taxonomy/Taxonomy";
import Txc from "./components/taxonomy-clone/Txc";
import "./App.css";

const App: FC = () => {
  const [showScreen, setShowScreen] = useState<string>("todo");

  const handleScreens = () => {
    if (showScreen === "todo") {
      setShowScreen("taxonomy");
    } else {
      setShowScreen("todo");
    }
  };

  return (
    <div className="App">
      <button className="switch-btn" onClick={() => handleScreens()}>
        {" "}
        {showScreen === "todo" ? "Show Taxonomy" : "Show To Do"}
      </button>
      {showScreen === "todo" && <TodoApp />}
      {showScreen === "taxonomy" && <Taxonomy />}
      {/* {showScreen === "taxonomy" && <Txc />} */}
    </div>
  );
};

export default App;
