import React from 'react'
import { useState } from "react";

 function App() {
  const [toDoTitle, setToDoTitle] = useState(0);
  const [toDoArray, setToDoArray] = useState([]);
  const [toDoInfo, setToDoInfo] = useState(0);
  
  
  function handleChange(event){
    setToDoTitle(event.target.value);
    };

  function handleChangeForInfo(event){
    setToDoInfo(event.target.value);
    };
       
  function createToDo() {
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
        <div className="shadow">
        <div className="core">
        <div className="createToDo">
          <input onChange={handleChange} value={toDoTitle} type="text" className="headerCreate" placeholder="Title"/> <br></br>
          <textarea  onChange={handleChangeForInfo} value={toDoInfo} type="text" className="infoCreate" placeholder="Description"/> <br></br>
          <button className="buttonCreate" onClick={createToDo}>  {"create daily quest"} </button>
        </div>
        
        <div className="toDoList" >
          {
            toDoArray.map(todo => {
              return (
                <>
                  <table cellSpacing="0" cellPadding="5" >
                   <tbody>
                    <tr>
                     <td  width="200" className="toDo" ><p align="center" >{todo.title}</p><br></br><p className="toDoInfo">{todo.info}</p></td >
                     <td  className="sec"><button className="btn" ></button></td >
                    </tr>
                   </tbody>
                  </table>
                </> )})
          }
          </div>
        </div>
        </div>
        
      </>
    );
 
    /*
    function hide(){
      let a=document.getElementById("ex").style;
      if (a.display == "none") {
        a.display="block"}else{
          a.display="none"}
          let exad = document.getElementsByClassName("info");
    console.log(exad);
    alert(exad.length);
    };
    */
  }


export default App;