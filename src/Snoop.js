import React from 'react';
import Snoopgif from './img/snoop.gif';

export default function Snoop() {
    return (
       <>
         <input type="checkbox" id="SnoopToggle" hidden ></input>
         <div className="snoop">
           <label for="SnoopToggle" className="SnoopToggle" onclick></label>
           <img src={Snoopgif} height="200" width="75"></img>
         </div>
       </>
     );  
   }