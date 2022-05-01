import { Header } from '../header/Header';
import { Timer } from "../timer/Timer";
import { ModeBtn } from "../mode-btn/ModeBtn";
import { ControlBtn } from "../control-btn/ControlBtn";

import { useState, useEffect } from 'react'; 

export const TimerContainer = () => {
  const [time, setTime] = useState('0:00:00');
  const [countDown, setCountDown] = useState();

  const onClick = (value) => {
    setTime(value)
  }

  
  
  return (
    <>
      <Header />
      <div>
        <ModeBtn name='Focus' onClick={ () => onClick('0:05:00') }/>
        <ModeBtn name='Short Break' onClick={ () => onClick('0:20:00') }/>
        <ModeBtn name='Long Break' onClick={ () => onClick('0:30:00') }/>
      </div>
      <div>
        <Timer time={time}/>
      </div>
      <div>
        <ControlBtn name='Start'/>
        <ControlBtn name='Stop'/>
        <ControlBtn name='Reset'/>
      </div>
    </>
  );
};
