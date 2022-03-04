import React from 'react'
import { useState } from "react";

function App() {
    const [toDoTitle, setToDoTitle] = useState(0);
    const [toDoArray, setToDoArray] = useState([]);

    function handleChange(event){
      setToDoTitle(event.target.value);
    };

    function createToDo() {
      const newToDoArray = [...toDoArray]
      newToDoArray.push({
        title: toDoTitle
      });
      setToDoArray(newToDoArray);
      setToDoTitle("");
    }
    
    return (
      <>
        <div>
          <input onChange={handleChange} value={toDoTitle} type="text"  />
          <textarea />
        </div>
        <button
          onClick={createToDo}
        >
          {"создать задачу"}
        </button>
        <div>
          {
            toDoArray.map(todo => <p>{todo.title}</p>)
          }
        </div>
      </>
    );
 
  }




export default App;