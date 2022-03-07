import React from 'react'
import { useState } from "react";

function App() {
  const [toDoTitle, setToDoTitle] = useState();
  const [toDoArray, setToDoArray] = useState([]);
  const [toDoInfo, setToDoInfo] = useState();
  
  
  function handleChange(event){
    setToDoTitle(event.target.value);
  };

  function handleChangeForInfo(event){
    setToDoInfo(event.target.value);
  };
       
  function createToDo(event) {
    event.preventDefault();
    const newToDoArray = [...toDoArray]
    newToDoArray.push({
      title: toDoTitle,
      info: toDoInfo
    });
    setToDoArray(newToDoArray);
    setToDoTitle("");
    setToDoInfo("");
  };

  return (
    <div className="shadow">
      <div className="core">
        <form className="createToDo" onSubmit={createToDo}>

          <input
            onChange={handleChange}
            value={toDoTitle}
            type="text"
            className="titleCreate"
            placeholder="Title"
            maxlength="20"
            required
          />

          <textarea
            onChange={handleChangeForInfo}
            value={toDoInfo} type="text"
            className="infoCreate"
            placeholder="Description"
            maxlength="1000"
            required
          />

          <button
            className="buttonCreate"
            type="Submit"
          > 
            {"create daily quest"} 
          </button>

        </form>
        
        <div className="toDoList" >
          {
            toDoArray.map(todo => {
              return (
                <div className="toDo">
                  <div className="toDoText">
                    <p className="toDoTitle">{todo.title}</p>
                    <p className="toDoInfo">{todo.info}</p>
                  </div>
                  <div className="toDoButton">
                    <button className="buttonToDo" ></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;