import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import { IconContext } from "react-icons";

function Todo1({ todo, popup, setpopup, text, todos, settodos }) {
  const deleteHandle = (e) => {
    setpopup(!popup);

    setTimeout(() => {
      setpopup(false);
    }, 130);
  };

  const checkHandle = (a) => {
    // console.log(a);
    // console.log("hey");
    settodos(
      todos.map((item) => {
        if (item.id === a.id) {
          return {
            ...item,
            uncheck: !item.uncheck,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      
      {/* <li  className={todo.uncheck ? "li-opacity" : ""}> */}
      <li>
      <div
        className={`todo-parent ${todo.uncheck ? "todo-parent-underline" : ""}`}
      >
        <IconContext.Provider value={{ color: "blue" }}>
          <GrCheckbox
            onClick={checkHandle("from onclick checkbox")}
            className={todo.uncheck ? "uncheck" : ""}
          />
          <GrCheckboxSelected className={todo.uncheck ? "" : "check"} />
          <span onClick={checkHandle} className="todo-list-text">
            {todo.text}
          </span>
          <FaTrash
            className={popup ? "popup" : ""}
            onClick={deleteHandle}
            color="orange"
          />
        </IconContext.Provider>
      </div>
    </li>
    </div>
  );
}

export default Todo1;
