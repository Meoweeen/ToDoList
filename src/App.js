import React from 'react'
import { useState } from "react";
import ToDo from "./ToDo";

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
  <>
    
    <input type="checkbox" id="nav-toggle" hidden></input>
    <div className="nav">
      <label for="nav-toggle" className="nav-toggle" onclick></label>
      <h2 class="logo"><a href="google.com">qwe</a></h2>
      <ul>
        <li><a href="1">Один</a></li>
        <li><a href="2">Два</a></li>
        <li><a href="3">Три</a></li>
        <li><a href="4">Четыре</a></li>
        <li><a href="5">Пять</a></li>
        <li><a href="6">Шесть</a></li>
        <li><a href="7">Семь</a> </li>
      </ul>
    </div>

    <div className="shadow">
      <div className="core">
        <form className="createToDo" onSubmit={createToDo}>

          <input
            onChange={handleChange}
            value={toDoTitle}
            type="text"
            className="titleCreate"
            placeholder="Title"
            maxLength="20"
            required
          />

          <textarea
            onChange={handleChangeForInfo}
            value={toDoInfo} 
            type="text"
            className="infoCreate"
            placeholder="Description"
            maxLength="1000"
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
            toDoArray.map(todo =>  <ToDo elem={todo} />)
          }
        </div>
      </div>
    </div>
  </>
  );
};

export default App;
