import React from 'react';
import { useState , useEffect} from "react";
import ToDoItem from "./ToDoItem" ;

function ToDoForm(){
  
  const [toDoTitle, setToDoTitle] = useState();
  const [toDoInfo, setToDoInfo] = useState();
  const [toDoArray, setToDoArray] = useState([]); 

  function handleChange(event){
    setToDoTitle(event.target.value);
  };

  function handleChangeForInfo(event){
    setToDoInfo(event.target.value);
  };

  function createToDo(event) {
    event.preventDefault();
    const ToDoArrayCopy = [...toDoArray]
    ToDoArrayCopy.push({
      title: toDoTitle,
      info: toDoInfo
    });
    localStorage.setItem("array", JSON.stringify(ToDoArrayCopy));
    setToDoTitle("");
    setToDoInfo("");
    setToDoArray(ToDoArrayCopy);
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("array");
    if (savedTodos) {setToDoArray(JSON.parse(savedTodos));}
  }, []);
  
  return(
    <>
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
         toDoArray.map(todo =>  <ToDoItem elem={todo} />)
        }
      </div>
    </>
  )
};

export default ToDoForm;