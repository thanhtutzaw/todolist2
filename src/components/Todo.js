import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import { IconContext } from "react-icons";

function Todo({ text, todo, todos, settodos, popup, setpopup }) {

  const deleteHandle = () => {
    setpopup(!popup);

    setTimeout(() => {
      setpopup(false);
    }, 130);
  };

  const checkHandle = () => {
    
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
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
      <li className={todo.uncheck ? "li-opacity" : ""}>
        <div
          className={`todo-parent ${
            todo.uncheck ? "todo-parent-underline" : ""
          }`}
        >
          <IconContext.Provider value={{ color: "blue" }}>
            <GrCheckbox
              onClick={checkHandle}
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

export default Todo;
