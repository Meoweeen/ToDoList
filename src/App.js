import React from 'react'
import { useState } from "react";

function App() {
    
    const [count, setCount] = useState(0);

    function handleChange(event){
        console.log(event.target.value);
        setCount(event.target.value);
    };
    

    return (
      <div>
        
        
        <input onChange={handleChange} type="text"  />
        <textarea value = {count} />
        <p> {count} </p>
      </div>


    );
 
  }




export default App;