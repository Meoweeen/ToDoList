import React from 'react';

function ToDo(elem){
  
  return (
    <div className="toDo">
    <div className="toDoText">
      <p className="toDoTitle">{elem.title}</p>
      <p className="toDoInfo">{elem.info}</p>
    </div>
    <div className="toDoButton">
      <button className="buttonToDo" ></button>
    </div>
  </div>
  )
};

export default ToDo;