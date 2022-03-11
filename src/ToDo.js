import React from 'react';
import { useState } from "react";

function ToDo({elem}){

  const [toDoBoolean, setToDoBoolean] = useState(false);

  function changeToDoBoolean(){

    
    function changeBgImg(){
      const bg = document.getElementsByClassName("buttonToDo");
      bg.classList.add("open")
    };

    if(toDoBoolean == false){
      setToDoBoolean(true);
      alert(toDoBoolean);
      changeBgImg();
    }else{
      setToDoBoolean(false);
      alert(toDoBoolean);
      changeBgImg();
    }
  };
  
  return (
    <div className="toDo">
    <div className="toDoText">
      <p className="toDoTitle">{elem.title}</p>
      <p className="toDoInfo">{elem.info}</p>
    </div>
    <div className="toDoButton">
      <button className="buttonToDo" onClick={changeToDoBoolean} ></button>
    </div>
  </div>
  )
};

export default ToDo;