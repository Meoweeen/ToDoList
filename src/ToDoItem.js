import { useState , useEffect} from "react";

export default  function ToDo({elem}){
  const [toDoBoolean, setToDoBoolean] = useState(false);
  const [toDWT,setToDWT] = useState();    // array of toDoesWithoutThis
  
  useEffect(() => {
    const savedTodos = localStorage.getItem("array");
    if (savedTodos) {setToDWT(JSON.parse(savedTodos));}
  }, []);

  function changeToDoBoolean(){
    setToDoBoolean(!toDoBoolean); 
  };

  function deleteToDo(){
    let idThis = toDWT.findIndex(item => item.id == elem.id);
    toDWT.splice(idThis,1);
    localStorage.setItem("array", JSON.stringify(toDWT));
  }

  return (
    <div className="toDo">
      
      <div className="toDoText">
      
        <p className="toDoTitle">
          <button 
            className={`buttonToDo ${toDoBoolean && "buttonToDoOpen" } `} 
            onClick={changeToDoBoolean} 
          >
          </button>
          <p className="titleText">
          {elem.title}
          </p>
          <button 
            className="deleteToDo" 
            onClick={elem.action}
          >
          </button>
        </p>
        <p className={`toDoInfo ${toDoBoolean && "toDoInfoOpen" } `}>{elem.info}</p>
      </div>
      
        
    </div>
  )
};