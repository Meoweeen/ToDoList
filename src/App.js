import React from 'react'
import ToDoForm from "./ToDo";
import NavBar from "./NavBar"
import Snoop from "./Snoop"

function App() {
  return (
  <>
    <NavBar/>
    <Snoop/>
    <div className="shadow">
      <div className="core">
        <ToDoForm/>
      </div>
    </div>
  </>
  );
};

export default App;
