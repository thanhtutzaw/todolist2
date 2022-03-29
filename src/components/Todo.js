import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { GrCheckbox } from "react-icons/gr";
import { IconContext } from "react-icons";

function Todo({ text, todo, todos, settodos, popup, setpopup }) {
  const deleteHandle = () => {
      settodos(
        todos.map((item2) => {
          // setTimeout(() => {
            setInterval(() => {
          if (item2.id === todo.id) {
            return {
              ...item2,
                            
                popup:!item2.popup,
                
              };
            }
          }, 200);
            // popup:!item2.popup
          return item2;
        })
      ); 
    };
    // setpopup(!popup);
            
  //     todos.map((item) => {
  //   if (item.id === todo.id) {
      

  //   }

  // })


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
              className={`checkbox ${todo.uncheck ? "uncheck" : ""}`}
              onClick={checkHandle}
            />
            <GrCheckboxSelected
              onClick={checkHandle}
              className={todo.uncheck ? "" : "check"}
            />
            <span className="todo-list-text">{todo.text}</span>

            <FaTrash
              className={`trash ${todo.popup ? "popup" : ""}`}
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
