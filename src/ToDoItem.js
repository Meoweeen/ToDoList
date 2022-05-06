import { useState } from "react";

export default  function ToDo({elem}){
  const [toDoBoolean, setToDoBoolean] = useState(false);
  
  function changeToDoBoolean(){
    setToDoBoolean(!toDoBoolean); 
  };

  return (
    <div className="toDo">
      <div className="toDoText">
        <p className="toDoTitle">{elem.title}</p>
        <p className={`toDoInfo ${toDoBoolean && "toDoInfoOpen" } `}>{elem.info}</p>
      </div>
      <div className="toDoButton">
        <button 
          className={`buttonToDo ${toDoBoolean && "buttonToDoOpen" } `} 
          onClick={changeToDoBoolean} 
        >
        </button>
      </div>
    </div>
  )
};