import { Header } from "../header/Header";
import { Timer } from "../timer/Timer";
import { ModeBtn } from "../mode-btn/ModeBtn";
import { ControlBtn } from "../control-btn/ControlBtn";
import { useInterval } from "../../logic/use-interval.js";

import { useState } from "react";

export const TimerContainer = () => {
  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };

  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(0);
  };
  
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  return (
    <>
      <Header />
      <div>
      <h2>Choose a mode and run your timer!</h2>
        <ModeBtn name="Focus" onClick={ () => setSecondsRemaining(1500) }/>
        <ModeBtn name="Short Break" onClick={ () => setSecondsRemaining(300) }/>
        <ModeBtn name="Long Break" onClick={ () => setSecondsRemaining(1200) }/>
      </div>
      <div>
        <Timer
          hours={ hoursToDisplay }
          minutes={ minutesToDisplay }
          seconds={ secondsToDisplay }
          status={ status }
        />
      </div>
      <div>
        <ControlBtn name="Start" onClick={ handleStart } />
        <ControlBtn name="Stop" onClick={ handleStop } />
        <ControlBtn name="Reset" onClick={ handleReset } />
      </div>
    </>
  );
};
// Implementation based on:
// https://codesandbox.io/s/react-countdown-demo-gtr4u?file=/src/App.js
