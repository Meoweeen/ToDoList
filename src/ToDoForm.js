import React from 'react';
import { useState , useEffect} from "react";
import ToDoItem from "./ToDoItem" ;

function ToDoForm(){
  
  const [toDoTitle, setToDoTitle] = useState();
  const [toDoInfo, setToDoInfo] = useState();
  const [toDoArray, setToDoArray] = useState([]); 
  const [idToDo, setIdToDo] = useState(1);

  function handleChange(event){
    setToDoTitle(event.target.value);
  };

  function handleChangeForInfo(event){
    setToDoInfo(event.target.value);
  };

  function createToDo(event) {
    event.preventDefault();
    const ToDoArrayCopy = [...toDoArray];
    ToDoArrayCopy.push({
      id: idToDo,
      title: toDoTitle,
      info: toDoInfo,
    });
    localStorage.setItem("array", JSON.stringify(ToDoArrayCopy));
    setIdToDo(idToDo+1);
    localStorage.setItem("idToDo", JSON.stringify(idToDo));
    setToDoTitle("");
    setToDoInfo("");
    setToDoArray(ToDoArrayCopy);
  };

  function deleteToDo(elem){
     
    let idThis = toDoArray.findIndex(item => item.id == idToDo);
    toDoArray.splice(idThis,1);
    localStorage.setItem("array", JSON.stringify(toDoArray));
    alert(idThis);
    console.log("12312easdasdsad")
  }


  

  useEffect(() => {
    const savedTodos = localStorage.getItem("array");
    if (savedTodos) {setToDoArray(JSON.parse(savedTodos));}
  }, []);

  useEffect(() => {
    const idsv = localStorage.getItem("idToDo");
    if (idsv) {setIdToDo((JSON.parse(idsv))+1);}
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
         toDoArray.map(todo =>  <ToDoItem elem={todo} action={deleteToDo} />)
        }
      </div>
    </>
  )
};

export default ToDoForm;