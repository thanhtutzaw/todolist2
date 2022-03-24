import React from "react";
import Todo from "./Todo";

function Todolist({ todos, settodos, popup, setpopup }) {
  return (
    <div className="todoParent">
      <ul>
        
        {todos.map((todo) => (
          
          
          <Todo 
          todos={todos}
          settodos={settodos}
          popup={popup}
          setpopup={setpopup}
          text={todo.text}
          todo={todo}
          />
          
          
        )
        )}
      </ul>
    </div>
  );
}

export default Todolist;
