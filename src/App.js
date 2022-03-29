import logo from "./logo.svg";
import song from "../src/1.mp3";

import "./App.css";
import { useState } from "react";
// import Todolist from "./components/Todolist";
import Form2 from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [input, setInput] = useState("");
  const [todos, settodos] = useState([]);

  const [color, setcolor] = useState(false);
  // const [popup, setpopup] = useState(false);

  return (
      <div className="App App-header">
      {/* <header className="App-header"> */}
        <Form2
          input={input}
          setInput={setInput}
          color={color}
          setcolor={setcolor}
          todos={todos}
          settodos={settodos}
        />

        <Todolist
          todos={todos}
          settodos={settodos}
          // popup={popup}
          // setpopup={setpopup}
        />
      {/* </header> */}
    </div>
  );
}

export default App;
