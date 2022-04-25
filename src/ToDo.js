import React from 'react';
import { useState , useEffect} from "react";

function ToDo({elem}){
  const [toDoBoolean, setToDoBoolean] = useState(false);

  function changeToDoBoolean(){
    if(toDoBoolean == false){
      setToDoBoolean(true);
    }else{
      setToDoBoolean(false);
    }
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

function ToDoForm(){

 

  const [toDoTitle, setToDoTitle] = useState();
  const [toDoInfo, setToDoInfo] = useState();
  const [toDoArray, setToDoArray] = useState([]); // нихуя не одуплил нахуя тут скобки квадратные,ну типо при рендеринге первом нельзя что бы этот массив был пустой,ок,а с хуя ли нельзя?

  useEffect(
    () => {for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
    }
});


  

  function handleChange(event){
    setToDoTitle(event.target.value);
  };

  function handleChangeForInfo(event){
    setToDoInfo(event.target.value);
  };


  function createToDo(event) {
    event.preventDefault();
    const newToDoArray = []
    newToDoArray.push({
      title: toDoTitle,
      info: toDoInfo
    });

    

    localStorage.setItem(toDoTitle, JSON.stringify(newToDoArray));
    
    setToDoTitle("");
    setToDoInfo("");
    setToDoArray(newToDoArray);
  };



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
         toDoArray.map(todo =>  <ToDo elem={todo} />)
        }
      </div>
    </>
  )
};

export default ToDoForm;