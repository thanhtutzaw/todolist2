import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [todos, settodos] = useState([]);
const [color, setcolor] = useState(false)
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (input) {
        setcolor(!color)
        setTimeout(() => setcolor(false), 1000);

      // console.log("submit");
      // let interval =setInterval( () => {
      //   setcolor(!color)
        
      // }, 1000);
      // clearInterval(interval);  
      settodos([
        ...todos,
        { id: Math.floor(Math.random() * 10000), text: input },
      ]);
      
      
      
    } else {
      return null;
    }
    setInput("");
  };
  return (
    

<div  className={`App `}>
      <header className="App-header">
        {/* <div onClick={submitHandle} className="clickDiv">
          <h3 style={{ color: "white" }}>click div</h3>
        </div> */}
        <form onSubmit={submitHandle}>
          <div className={`inputParent ${color? 'color' : ''} `}>
          <input
          onBlur={submitHandle}
            onChange={handleChange}
            value={input}
            type="text"
            autoFocus
            autoComplete="off"
            spellCheck="false"
            placeholder="HELLO"
          />
          </div>
          {/* <button type='submit'>Submit</button> */}
          {/* <h2>{input}</h2> */}
        </form>
        <div className="todoParent">
        <ul>
          {todos.map((todo) => {
            return <li>{todo.text}</li>;
          })}
        </ul>
        </div>
      </header>
    </div>

  );
}

export default App;
