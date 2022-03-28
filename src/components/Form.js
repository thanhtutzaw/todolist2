import React from "react";
import {CgChevronRightR} from "react-icons/cg"

function Form({input, setInput, color, setcolor, todos, settodos}) {
  // const [uncheck, setuncheck] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (input) {
      setcolor(!color);
      setTimeout(() => setcolor(false), 1000);
      
      settodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          text: input,
          uncheck: false,
        },
      ]);
    } else {
      return null;
    }
    setInput("");
  };

  return (
    
        <form
          onSubmit={submitHandle}
          className={`inputParent ${color ? "color" : ""} `}
        >
          
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
          <a className="btnParent" href="https://todolistzee3.netlify.app"><button className="btn" type="button"><CgChevronRightR /></button></a>
          
        </form>
      
  );
}

export default Form;
