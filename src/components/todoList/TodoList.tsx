import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./todoList.css";

// interface IProps {
//   task: string;
//   id: string;
//   handleEdit: () => void;
//   handleDelete: () => void;
// }

const TodoList = ({ item, handleDelete, handleEdit }: any) => {
  return (
    <div className="task-wrapper">
      <p className="task"> {item.task}</p>
      <div className="action-btns">
        <FaTrash
          onClick={() => handleDelete(item.id)}
          style={{ fontSize: "1.5em" }}
        />
        <FaEdit
          onClick={() => handleEdit(item.id)}
          style={{ fontSize: "1.7em" }}
        />
      </div>
    </div>
  );
};

export default TodoList;
