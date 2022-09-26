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
    //5. if edit id is non empty then find the item to edit
    //6 map over the todo list and edit the object only if it matches the id stored in state
    // and return the function
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

  //Steps to edit the todo items
  //1. grab the ID of the clicked item,
  const handleEdit = (id: string) => {
    //2. search the full object out of the todo list
    const findTodo = todoList.find((item) => item.id === id);
    //3. set the found items in the value of input text
    setInputvalue(findTodo?.task);
    //4 set the id in another state.
    setEditId(id);
  };

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const dateNow = dateFormatter.format(Date.parse(new Date().toDateString()));
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
      <div> Show Time {dateNow}</div>
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
