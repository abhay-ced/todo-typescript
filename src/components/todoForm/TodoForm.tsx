import React, { FC, useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../todoList/TodoList";
import "./todoForm.css";

interface ITask {
  task: string;
  id: string;
}

const TodoForm: FC = () => {
  const [inputValue, setInputvalue] = useState<any>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [editId, setEditId] = useState<any>("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputvalue(e.target.value);
  };

  const handleAddTodo = () => {
    const newTask = { task: inputValue, id: uuidv4() };

    if (editId) {
      const editTodo = todoList.find((item) => item.id === editId);
      const updatedTodoList = todoList.map((it) =>
        it.id === editTodo?.id
          ? (it = { id: it.id, task: inputValue })
          : { id: it.id, task: it.task }
      );
      setTodoList(updatedTodoList);
      setEditId("");
      setInputvalue("");
      return;
    }

    if (inputValue !== "") {
      setTodoList([...todoList, newTask]);
      setInputvalue("");
      setEditId("");
    }
  };

  const handleDelete = (id: string) => {
    const filteredData = todoList.filter((item) => item.id !== id);
    setTodoList(filteredData);
  };

  const handleEdit = (id: string) => {
    const findTodo = todoList.find((item) => item.id === id);
    setInputvalue(findTodo?.task);
    setEditId(id);
  };

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <div>
      <div className="todo-form-wrapper">
        <input
          className="todo-input"
          type={"text"}
          placeholder="Enter the Task"
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
        />
        <button className="todo-btn" onClick={() => handleAddTodo()}>
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </div>
      {/* <div> Show Time {dateFormatter.format(Date.parse(new Date()))} </div>  */}
      <div className="todo-list">
        {todoList &&
          todoList?.map((item: ITask) => {
            return (
              <div key={item.id}>
                <TodoList
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoForm;
