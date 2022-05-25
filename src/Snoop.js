import React from 'react';
import useSound from 'use-sound';
import { useState } from "react";
import Snoopgif from './img/snoop.gif';
import Snoopmp3 from './img/snoop.mp3';

function Snoop() {
  
  const [play, { stop }] = useSound(Snoopmp3);
  const [isHovering, setIsHovering] = useState(false);

  function playing() {
   if(!isHovering){
      setIsHovering(true);
      play();
    }else{
      setIsHovering(false);
      stop();
    }
  };
  
  return (
    <>
      <input type="checkbox" id="SnoopToggle" hidden ></input>
      <div className="snoop">
        <label for="SnoopToggle" className="SnoopToggle" onClick={playing}></label>
        <img src={Snoopgif} height="200" width="75"></img>
      </div>
    </>
  );  
}

export default Snoop;